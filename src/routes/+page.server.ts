interface WordPressPost {
	id: number;
	title: { rendered: string };
	excerpt: { rendered: string };
	content: { rendered: string };
	_embedded?: {
		'wp:featuredmedia'?: Array<{ source_url: string }>;
	};
	slug: string;
	date: string;
	acf: Record<string, any>;
}

export interface PageData {
	projects: Array<{
		id: number;
		title: string;
		excerpt: string;
		content: string;
		image: string | null;
		slug: string;
		date: string;
		acf: Record<string, any>;
	}>;
	pagination: {
		currentPage: number;
		totalPages: number;
		totalPosts: number;
		perPage: number;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
	};
}

export const load = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const per_page = 9;

	// Fetch home page data with GraphQL
	const homeResponse = await fetch('https://mattruetz.com/wp-json/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
				query HomePageData {
					page(id: "home", idType: URI) {
						title
						content
						acf {
							profileImage {
								sourceUrl
								altText
								mediaDetails {
									height
									width
								}
							}
						}
					}
				}
			`
		})
	});

	const homeData = await homeResponse.json();
	console.log('GraphQL Response:', JSON.stringify(homeData, null, 2));

	// Fetch posts with total count in headers
	const projectsResponse = await fetch(
		`https://mattruetz.com/wp-json/wp/v2/project?_embed&acf_format=standard&page=${page}&per_page=${per_page}`
	);

	const projects = await projectsResponse.json();
	const totalPages = Number(projectsResponse.headers.get('X-WP-TotalPages')) || 1;
	const totalPosts = Number(projectsResponse.headers.get('X-WP-Total')) || 0;

	// Function to fetch image URL by ID
	async function getImageUrl(imageId: number | string) {
		// If it's already a URL, return it
		if (typeof imageId === 'string' && imageId.startsWith('http')) {
			return imageId;
		}

		// If it's an ID, fetch the URL
		if (typeof imageId === 'number') {
			try {
				const response = await fetch(`https://mattruetz.com/wp-json/wp/v2/media/${imageId}`);
				if (!response.ok) return null;
				const data = await response.json();
				return data.source_url || null;
			} catch (error) {
				console.error(`Error fetching image ${imageId}:`, error);
				return null;
			}
		}

		return null;
	}

	// Process each project
	const processedProjects = await Promise.all(
		projects.map(async (project: WordPressPost) => {
			const processedAcf = { ...project.acf };

			// Process each image field with error handling
			const imageFields = [
				'feature_image_1',
				'feature_image_2',
				'feature_image_3',
				'page_scroll_image'
			];

			for (const field of imageFields) {
				if (processedAcf[field]) {
					const imageUrl = await getImageUrl(processedAcf[field]);
					processedAcf[field] = imageUrl;
				}
			}

			return {
				id: project.id,
				title: project.title.rendered,
				excerpt: project.excerpt.rendered,
				content: project.content.rendered,
				image: project._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
				slug: project.slug,
				date: new Date(project.date).toLocaleDateString(),
				acf: processedAcf
			};
		})
	);

	return {
		page: {
			...homeData.data?.page,
			homeFields: {
				profileImage: homeData.data?.page?.acf?.profileImage || {
					sourceUrl: '/images/default-profile.jpg',
					altText: 'Profile Image',
					mediaDetails: { width: 800, height: 800 }
				}
			}
		},
		projects: processedProjects,
		pagination: {
			currentPage: page,
			totalPages,
			totalPosts,
			perPage: per_page,
			hasNextPage: page < totalPages,
			hasPreviousPage: page > 1
		}
	};
};
