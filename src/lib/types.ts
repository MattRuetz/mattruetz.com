export interface Project {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	image: string | null;
	slug: string;
	date: string;
	acf: Record<string, any>;
}

export interface Pagination {
	currentPage: number;
	totalPages: number;
	totalPosts: number;
	perPage: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}
