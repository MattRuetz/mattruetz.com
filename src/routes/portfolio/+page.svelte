<script lang="ts">
	import { goto } from '$app/navigation';
	import { onNavigate } from '$app/navigation';
	import ProjectsSection from '$lib/components/page-sections/home/ProjectsSection.svelte';
	import MinimalCTA from '$lib/components/page-sections/MinimalCTA.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// Get the data from the server load function
	let { data } = $props();
	let isLoading = $state(false);

	// Reactive derived values using Svelte 5 runes
	let projects = $derived(data.projects || []);
	let pagination = $derived(
		data.pagination || {
			currentPage: 1,
			totalPages: 1,
			totalPosts: 0,
			perPage: 9,
			hasNextPage: false,
			hasPreviousPage: false
		}
	);

	onMount(async () => {
		if (!browser) return;
		const { animatePortfolioPage } = await import('$lib/animations/gsapAnimations');
		animatePortfolioPage();
	});

	// Handle page changes
	async function handlePageChange(newPage: number): Promise<void> {
		if (newPage === pagination.currentPage) return;
		isLoading = true;
		await goto(`?page=${newPage}`, { keepFocus: true });
	}

	// Reset loading state after navigation
	onNavigate(() => {
		isLoading = false;
	});
</script>

<main class="pt-[80px]">
	<!-- Hero Section -->
	<section class="bg-background2 px-4 py-16 md:py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
				My <span class="gradient-text font-black">Portfolio</span>
			</h1>
			<p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
				Explore my recent projects and see how I've helped clients achieve their goals through
				custom web solutions.
			</p>
		</div>
	</section>

	<!-- Projects Section -->
	<ProjectsSection {projects} {pagination} {isLoading} {handlePageChange} />

	<!-- CTA Section -->
	<MinimalCTA />
</main>

<style>
	.gradient-text {
		background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
</style>
