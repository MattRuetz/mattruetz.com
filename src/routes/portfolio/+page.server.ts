import { fetchProjects } from '$lib/api/wordpress';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const { projects, pagination } = await fetchProjects(fetch, page);

	return {
		projects,
		pagination
	};
};
