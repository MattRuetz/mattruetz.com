import type { Testimonial } from '$lib/types';

// Helper function to decode HTML entities in text
export function decodeHTMLEntities(text: string): string {
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

// Interfaces for WordPress data
export interface WordPressPost {
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

// Interface for WordPress testimonials
export interface WordPressTestimonial {
	id: number;
	title: { rendered: string };
	content: { rendered: string };
	_embedded?: {
		'wp:featuredmedia'?: Array<{ source_url: string }>;
	};
	acf: {
		position?: string;
		company?: string;
		rating?: number;
		[key: string]: unknown;
	};
}

export interface ProjectData {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	image: string | null;
	slug: string;
	date: string;
	acf: Record<string, unknown>;
}

export interface PaginationData {
	currentPage: number;
	totalPages: number;
	totalPosts: number;
	perPage: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

// Interface for home page data
export interface HomePageData {
	profileImage: {
		sourceUrl: string;
		altText: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	} | null;
	techLogo1: {
		sourceUrl: string | null;
		altText: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	} | null;
	techLogo2: {
		sourceUrl: string | null;
		altText: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	} | null;
	techLogo3: {
		sourceUrl: string | null;
		altText: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	} | null;
	desktopScrollthru: {
		sourceUrl: string | null;
		altText: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	} | null;
	mobileScrollthru: {
		sourceUrl: string | null;
		altText: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	} | null;
}

// Fetch projects with pagination
export async function fetchProjects(
	fetch: typeof globalThis.fetch,
	page: number = 1,
	perPage: number = 9
): Promise<{
	projects: ProjectData[];
	pagination: PaginationData;
}> {
	try {
		// Fetch posts with total count in headers
		const response = await fetch(
			`https://mattruetz.com/wp-json/wp/v2/project?_embed&acf_format=standard&page=${page}&per_page=${perPage}`
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch projects: ${response.status}`);
		}

		const posts = await response.json();
		const totalPages = Number(response.headers.get('X-WP-TotalPages')) || 1;
		const totalPosts = Number(response.headers.get('X-WP-Total')) || 0;

		// Format data
		const projects = posts.map((post: WordPressPost) => ({
			id: post.id,
			title: decodeHTMLEntities(post.title.rendered),
			excerpt: decodeHTMLEntities(post.excerpt.rendered),
			content: decodeHTMLEntities(post.content.rendered),
			image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
			slug: post.slug,
			date: new Date(post.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}),
			acf: post.acf
		}));

		return {
			projects,
			pagination: {
				currentPage: page,
				totalPages,
				totalPosts,
				perPage,
				hasNextPage: page < totalPages,
				hasPreviousPage: page > 1
			}
		};
	} catch (error) {
		console.error('Error fetching projects:', error);
		return {
			projects: [],
			pagination: {
				currentPage: 1,
				totalPages: 1,
				totalPosts: 0,
				perPage,
				hasNextPage: false,
				hasPreviousPage: false
			}
		};
	}
}

// Fetch testimonials
export async function fetchTestimonials(fetch: typeof globalThis.fetch): Promise<Testimonial[]> {
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

		if (data.errors) {
			console.error('GraphQL Errors:', data.errors);
			return [];
		}

		if (!data.data?.testimonials?.nodes) {
			console.error('Unexpected response structure:', data);
			return [];
		}

		// Define the structure of the GraphQL response
		interface TestimonialFieldsResponse {
			authorName: string;
			authorTitle: string;
			message: string;
			focusPart: string;
			isFeatured: boolean;
			featuredIndex: number;
			rating: number;
			authorPhoto: {
				node?: {
					sourceUrl: string;
					altText: string;
					mediaDetails?: {
						height: number;
						width: number;
					};
				};
			};
			relatedProject?: {
				node?: {
					id: number;
					slug: string;
					title: string;
				};
			};
		}

		return data.data.testimonials.nodes.map(
			(node: { testimonialFields: TestimonialFieldsResponse }) => ({
				authorName: decodeHTMLEntities(node.testimonialFields.authorName),
				authorTitle: decodeHTMLEntities(node.testimonialFields.authorTitle),
				message: decodeHTMLEntities(node.testimonialFields.message),
				isFeatured: node.testimonialFields.isFeatured,
				featuredIndex: node.testimonialFields.featuredIndex,
				focusPart: decodeHTMLEntities(node.testimonialFields.focusPart),
				rating: node.testimonialFields.rating,
				authorPhoto: {
					node: node.testimonialFields.authorPhoto?.node
						? {
								sourceUrl: node.testimonialFields.authorPhoto.node.sourceUrl,
								altText: decodeHTMLEntities(node.testimonialFields.authorPhoto.node.altText),
								mediaDetails: node.testimonialFields.authorPhoto.node.mediaDetails
							}
						: undefined
				},
				relatedProject: node.testimonialFields.relatedProject
					? {
							node: {
								databaseId: node.testimonialFields.relatedProject.node?.id,
								slug: node.testimonialFields.relatedProject.node?.slug,
								title: decodeHTMLEntities(node.testimonialFields.relatedProject.node?.title || '')
							}
						}
					: undefined
			})
		);
	} catch (error) {
		console.error('Error fetching testimonials:', error);
		return [];
	}
}

// Fetch a single project by slug
export async function fetchProjectBySlug(
	fetch: typeof globalThis.fetch,
	slug: string
): Promise<ProjectData | null> {
	try {
		const response = await fetch(
			`https://mattruetz.com/wp-json/wp/v2/project?slug=${slug}&_embed&acf_format=standard`
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch project: ${response.status}`);
		}

		const posts = await response.json();

		if (!posts.length) {
			return null;
		}

		const post = posts[0];

		return {
			id: post.id,
			title: decodeHTMLEntities(post.title.rendered),
			excerpt: decodeHTMLEntities(post.excerpt.rendered),
			content: decodeHTMLEntities(post.content.rendered),
			image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
			slug: post.slug,
			date: new Date(post.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}),
			acf: post.acf
		};
	} catch (error) {
		console.error(`Error fetching project with slug "${slug}":`, error);
		return null;
	}
}

// Fetch home page data using GraphQL
export async function fetchHomePageData(
	fetch: typeof globalThis.fetch
): Promise<HomePageData | null> {
	try {
		const response = await fetch('https://mattruetz.com/graphql', {
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
										altText
										mediaDetails {
											height
											width
										}
									}
								}
								mobileScrollthru {
									node {
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
					}
				`
			})
		});

		const data = await response.json();

		// Extract the home fields from the response
		const homeFields = data?.data?.page?.homeFields;
		if (!homeFields) {
			console.error('No homeFields found in response:', data);
			return null;
		}

		// Process the fields to a cleaner structure
		const result = {
			profileImage: homeFields.profileImage?.node
				? {
						sourceUrl: homeFields.profileImage.node.sourceUrl || '/images/default-profile.jpg',
						altText: homeFields.profileImage.node.altText || 'Profile Image',
						mediaDetails: homeFields.profileImage.node.mediaDetails || { width: 800, height: 800 }
					}
				: null,
			techLogo1: homeFields.techLogo1?.node
				? {
						sourceUrl: homeFields.techLogo1.node.sourceUrl || null,
						altText: homeFields.techLogo1.node.altText || 'Tech Logo 1',
						mediaDetails: homeFields.techLogo1.node.mediaDetails || { width: 800, height: 800 }
					}
				: null,
			techLogo2: homeFields.techLogo2?.node
				? {
						sourceUrl: homeFields.techLogo2.node.sourceUrl || null,
						altText: homeFields.techLogo2.node.altText || 'Tech Logo 2',
						mediaDetails: homeFields.techLogo2.node.mediaDetails || { width: 800, height: 800 }
					}
				: null,
			techLogo3: homeFields.techLogo3?.node
				? {
						sourceUrl: homeFields.techLogo3.node.sourceUrl || null,
						altText: homeFields.techLogo3.node.altText || 'Tech Logo 3',
						mediaDetails: homeFields.techLogo3.node.mediaDetails || { width: 800, height: 800 }
					}
				: null,
			desktopScrollthru: homeFields.desktopScrollthru?.node
				? {
						sourceUrl: homeFields.desktopScrollthru.node.sourceUrl || null,
						altText: homeFields.desktopScrollthru.node.altText || 'Desktop Scrollthru',
						mediaDetails: homeFields.desktopScrollthru.node.mediaDetails || {
							width: 1200,
							height: 800
						}
					}
				: null,
			mobileScrollthru: homeFields.mobileScrollthru?.node
				? {
						sourceUrl: homeFields.mobileScrollthru.node.sourceUrl || null,
						altText: homeFields.mobileScrollthru.node.altText || 'Mobile Scrollthru',
						mediaDetails: homeFields.mobileScrollthru.node.mediaDetails || {
							width: 375,
							height: 812
						}
					}
				: null
		};

		return result;
	} catch (error) {
		console.error('Error fetching home page data:', error);
		return null;
	}
}
