<script lang="ts">
	import { fly } from 'svelte/transition';
	import ProjectCard from './ProjectCard.svelte';
	import type { Project, Pagination } from '$lib/types';

	interface Props {
		projects: Project[];
		pagination: Pagination;
		isLoading: boolean;
		onPageChange: (page: number) => void;
	}

	let { projects, pagination, isLoading, onPageChange } = $props();

	// Derived pagination values
	const hasNextPage = $derived(pagination.currentPage < pagination.totalPages);
	const hasPreviousPage = $derived(pagination.currentPage > 1);
	const startIndex = $derived((pagination.currentPage - 1) * pagination.perPage + 1);
	const endIndex = $derived(
		Math.min(pagination.currentPage * pagination.perPage, pagination.totalPosts)
	);
</script>

<div class="container mx-auto">
	{#if projects}
		<div class="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if isLoading}
				<div
					class="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm"
					transition:fly={{ y: 20, duration: 200 }}
				>
					<div
						class="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800"
					></div>
				</div>
			{/if}
			{#each projects as project, i (project.id)}
				<ProjectCard {project} index={i} />
			{/each}
		</div>
	{/if}

	{#if pagination.totalPages > 1}
		<nav class="my-16 text-center" aria-label="Pagination">
			<div class="mb-4 text-gray-600">
				Showing {startIndex} to {endIndex} of {pagination.totalPosts} projects
			</div>
			<div class="flex flex-wrap justify-center gap-2">
				<button
					class="rounded-md border border-gray-200 px-4 py-2 transition-colors enabled:cursor-pointer enabled:hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
					disabled={!hasPreviousPage}
					onclick={() => onPageChange(pagination.currentPage - 1)}
				>
					Previous
				</button>

				{#each Array(pagination.totalPages) as _, i}
					{#if i + 1 === 1 || i + 1 === pagination.totalPages || (i + 1 >= pagination.currentPage - 1 && i + 1 <= pagination.currentPage + 1)}
						<button
							class="rounded-md border border-gray-200 px-4 py-2 transition-colors enabled:cursor-pointer enabled:hover:bg-gray-50 {pagination.currentPage ===
							i + 1
								? '!cursor-default border-gray-900 bg-gray-900 text-white hover:!bg-gray-900'
								: ''}"
							onclick={() => onPageChange(i + 1)}
						>
							{i + 1}
						</button>
					{:else if i + 1 === pagination.currentPage - 2 || i + 1 === pagination.currentPage + 2}
						<span class="px-2 py-2 text-gray-600">...</span>
					{/if}
				{/each}

				<button
					class="rounded-md border border-gray-200 px-4 py-2 transition-colors enabled:cursor-pointer enabled:hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
					disabled={!hasNextPage}
					onclick={() => onPageChange(pagination.currentPage + 1)}
				>
					Next
				</button>
			</div>
		</nav>
	{/if}
</div>
