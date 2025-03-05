import { fetchProjects, fetchTestimonials, fetchHomePageData } from '$lib/api/wordpress';
import type { PageServerLoad } from './$types';
import type { Testimonial } from '$lib/types';

export interface PageData {
	projects: Array<{
		id: number;
		title: string;
		excerpt: string;
		content: string;
		image: string | null;
		slug: string;
		date: string;
		acf: Record<string, unknown>;
	}>;
	pagination: {
		currentPage: number;
		totalPages: number;
		totalPosts: number;
		perPage: number;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
	};
	testimonials: Testimonial[];
}

export const load: PageServerLoad = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;

	// Fetch all the data in parallel for better performance
	const [projectsData, testimonials, homeData] = await Promise.all([
		fetchProjects(fetch, page),
		fetchTestimonials(fetch),
		fetchHomePageData(fetch)
	]);

	return {
		projects: projectsData.projects,
		pagination: projectsData.pagination,
		testimonials,
		page: {
			homeFields: homeData || {
				profileImage: {
					sourceUrl: '/images/default-profile.jpg',
					altText: 'Profile Image',
					mediaDetails: { width: 800, height: 800 }
				},
				techLogo1: null,
				techLogo2: null,
				techLogo3: null,
				desktopScrollthru: null,
				mobileScrollthru: null
			}
		}
	};
};
