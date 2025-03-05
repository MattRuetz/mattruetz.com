<script lang="ts">
	import { goto } from '$app/navigation';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import ProjectsSection from '$lib/components/page-sections/home/ProjectsSection.svelte';
	import type { ProjectData, PaginationData } from '$lib/api/wordpress';

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
	<section class="px-4 py-20">
		<div
			class="from-primary/10 to-primary/5 mx-auto max-w-3xl rounded-2xl bg-gradient-to-r p-8 text-center sm:p-12"
		>
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
			<p class="mx-auto mb-8 max-w-xl text-lg text-gray-700">
				Let's discuss your project requirements and create a website that perfectly represents your
				brand and helps you achieve your business goals.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="bg-primary shadow-primary/20 hover:shadow-primary/30 inline-flex min-w-[150px] items-center justify-center rounded-lg px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
				>
					Contact Me
				</a>
				<a
					href="/hire-me"
					class="border-primary text-primary inline-flex min-w-[150px] items-center justify-center rounded-lg border-2 px-6 py-[10px] font-semibold transition-all duration-300 hover:scale-105"
				>
					Start a Project
				</a>
			</div>
		</div>
	</section>
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
