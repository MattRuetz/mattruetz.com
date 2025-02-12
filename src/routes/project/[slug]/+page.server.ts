export async function load({ params, fetch }) {
	const response = await fetch(
		`https://mattruetz.com/wp-json/wp/v2/project?slug=${params.slug}&_embed&acf_format=standard`
	);
	const projects = await response.json();

	if (!projects.length) {
		throw new Error('Project not found');
	}

	const project = projects[0];

	// Process ACF image fields
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

	return {
		project: {
			id: project.id,
			title: project.title.rendered,
			content: project.content.rendered,
			excerpt: project.excerpt.rendered,
			image: project._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
			date: new Date(project.date).toLocaleDateString(),
			acf: processedAcf
		}
	};
}
