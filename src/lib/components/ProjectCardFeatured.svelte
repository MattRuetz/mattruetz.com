<script lang="ts">
	// This file is a modified version of ProjectCard.svelte
	// It is horizontally condensed and shows its content as an overlay on hover (desktop only)
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';

	let { project, index } = $props();

	// Determine if we're on a mobile device
	let isMobile = $state(browser ? window.innerWidth < 768 : false);

	// Update mobile state on resize
	if (browser) {
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth < 768;
		});
	}
</script>

<a
	href="/project/{project.slug}"
	class="relative block overflow-hidden rounded-lg border border-gray-200 text-inherit no-underline transition-all duration-200 hover:!translate-y-0"
	in:fly={{ y: 50, duration: 400, delay: index * 100, easing: quintOut }}
>
	<div class="relative h-[300px] max-h-[45dvh] w-full md:h-[300px]">
		{#if project.acf.page_scroll_image}
			<img
				src={project.acf.page_scroll_image}
				alt="Project preview"
				class="absolute inset-0 h-full w-full object-cover object-top"
			/>
		{:else if project.image}
			<img
				src={project.image}
				alt={project.title}
				class="absolute inset-0 h-full w-full object-cover"
			/>
		{/if}

		<!-- Mobile title overlay -->
		{#if isMobile}
			<div
				class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white"
			>
				<h3 class="text-lg font-semibold">{project.title}</h3>
			</div>
		{/if}
	</div>
</a>
