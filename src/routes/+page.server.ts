import type { Testimonial } from '$lib/types';

function decodeHTMLEntities(text: string): string {
	const entities: Record<string, string> = {
		'&#8217;': "'",
		'&#8216;': "'",
		'&#8220;': '"',
		'&#8221;': '"',
		'&quot;': '"',
		'&amp;': '&',
		'&#038;': '&'
	};
	return text ? text.replace(/&#?\w+;/g, (match) => entities[match] || match) : '';
}

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
	acf: Record<string, unknown>;
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
}

export const load = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const per_page = 9;

	// Fetch home page data with GraphQL
	const homeResponse = await fetch('https://mattruetz.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			query: `
				query HomePageData {
					page(id: "home", idType: URI) {
						title
						content
						homeFields {
							profileImage {
								node {
									sourceUrl(size: LARGE)
									altText
									mediaDetails {
										height
										width
									}
								}
							}
							techLogo1 {
								node {
									sourceUrl(size: MEDIUM)
									altText
									mediaDetails {
										height
										width
									}
								}
							}
							techLogo2 {
								node {
									sourceUrl(size: MEDIUM)
									altText
									mediaDetails {
										height
										width
									}
								}
							}
							techLogo3 {
								node {
									sourceUrl(size: MEDIUM)
									altText
									mediaDetails {
										height
										width
									}
								}
							}
							desktopScrollthru {
								node {
									sourceUrl
								}
							}
							mobileScrollthru {
								node {
									sourceUrl
								}
							}
						}
					}
				}
			`
		})
	});

	const homeData = await homeResponse.json();
	// console.log('GraphQL Response:', JSON.stringify(homeData, null, 2));

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
					const imageUrl = await getImageUrl(processedAcf[field] as string | number);
					processedAcf[field] = imageUrl;
				}
			}

			return {
				id: project.id,
				title: decodeHTMLEntities(project.title.rendered),
				excerpt: decodeHTMLEntities(project.excerpt.rendered),
				content: decodeHTMLEntities(project.content.rendered),
				image: project._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
				slug: project.slug,
				date: new Date(project.date).toLocaleDateString(),
				acf: processedAcf
			};
		})
	);

	const testimonials = await getTestimonials(fetch);

	return {
		page: {
			...homeData.data?.page,
			homeFields: {
				profileImage: homeData.data?.page?.homeFields?.profileImage?.node || {
					sourceUrl: '/images/default-profile.jpg',
					altText: 'Profile Image',
					mediaDetails: { width: 800, height: 800 }
				},
				techLogo1: homeData.data?.page?.homeFields?.techLogo1?.node || null,
				techLogo2: homeData.data?.page?.homeFields?.techLogo2?.node || null,
				techLogo3: homeData.data?.page?.homeFields?.techLogo3?.node || null,
				desktopScrollthru: homeData.data?.page?.homeFields?.desktopScrollthru?.node || null,
				mobileScrollthru: homeData.data?.page?.homeFields?.mobileScrollthru?.node || null
			}
		},
		projects: processedProjects,
		testimonials,
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

async function getTestimonials(fetch: typeof globalThis.fetch): Promise<Testimonial[]> {
	try {
		const response = await fetch('https://mattruetz.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				query: `
					query GetTestimonials {
						testimonials {
							nodes {
								testimonialFields {
									authorName
									authorTitle
									message
									focusPart
									isFeatured
									featuredIndex
									rating
									authorPhoto {
										node {
											sourceUrl(size: MEDIUM)
											altText
											mediaDetails {
												height
												width
											}
										}
									}
									relatedProject {
										node {
										__typename
										... on Project {
												id
												slug
												title
											}
										}
									}
								}
							}
						}
					}
				`
			})
		});

		const data = await response.json();

		// console.log('GraphQL Response:', JSON.stringify(data, null, 2));

		if (data.errors) {
			console.error('GraphQL Errors:', data.errors);
			return [];
		}

		if (!data.data?.testimonials?.nodes) {
			console.error('Unexpected response structure:', data);
			return [];
		}

		return data.data.testimonials.nodes.map((node: { testimonialFields: Testimonial }) => ({
			...node.testimonialFields,
			authorName: decodeHTMLEntities(node.testimonialFields.authorName),
			authorTitle: decodeHTMLEntities(node.testimonialFields.authorTitle),
			message: decodeHTMLEntities(node.testimonialFields.message),
			isFeatured: node.testimonialFields.isFeatured,
			featuredIndex: node.testimonialFields.featuredIndex,
			focusPart: decodeHTMLEntities(node.testimonialFields.focusPart),
			rating: node.testimonialFields.rating,
			authorPhoto: {
				...node.testimonialFields.authorPhoto,
				node: node.testimonialFields.authorPhoto?.node
					? {
							sourceUrl: node.testimonialFields.authorPhoto.node.sourceUrl,
							altText: decodeHTMLEntities(node.testimonialFields.authorPhoto.node.altText)
						}
					: undefined
			},
			relatedProject: node.testimonialFields.relatedProject
				? {
						node: {
							databaseId: node.testimonialFields.relatedProject.node?.databaseId,
							slug: node.testimonialFields.relatedProject.node?.slug,
							title: decodeHTMLEntities(node.testimonialFields.relatedProject.node?.title || '')
						}
					}
				: undefined
		}));
	} catch (error) {
		console.error('Error fetching testimonials:', error);
		return [];
	}
}
