export interface Project {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	image: string | null;
	slug: string;
	date: string;
	acf: Record<string, unknown>;
}

export interface Pagination {
	currentPage: number;
	totalPages: number;
	totalPosts: number;
	perPage: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

export interface Testimonial {
	authorName: string;
	authorTitle: string;
	message: string;
	rating: number;
	isFeatured: boolean;
	focusPart: string;
	featuredIndex: number;
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
			databaseId: number;
			slug: string;
			title: string;
		};
	};
}
