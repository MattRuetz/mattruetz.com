import { fetchProjectBySlug } from '$lib/api/wordpress';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const project = await fetchProjectBySlug(fetch, params.slug);

	if (!project) {
		throw new Error('Project not found');
	}

	// Process ACF image fields (this is specific to individual projects and needs additional processing)
	const processedAcf = { ...project.acf };
	const imageFields = [
		'feature_image_1',
		'feature_image_2',
		'feature_image_3',
		'page_scroll_image'
	];

	for (const field of imageFields) {
		if (
			processedAcf[field] &&
			typeof processedAcf[field] === 'string' &&
			processedAcf[field].startsWith('http')
		) {
			// URL is already present, keep it
			continue;
		}
		if (processedAcf[field]) {
			try {
				const mediaResponse = await fetch(
					`https://mattruetz.com/wp-json/wp/v2/media/${processedAcf[field]}`
				);
				if (mediaResponse.ok) {
					const data = await mediaResponse.json();
					processedAcf[field] = data.source_url;
				}
			} catch (error) {
				console.error(`Error fetching image for ${field}:`, error);
				processedAcf[field] = null;
			}
		}
	}

	// Return the project with processed ACF fields
	return {
		project: {
			...project,
			acf: processedAcf
		}
	};
};
