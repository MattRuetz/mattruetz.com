<script lang="ts">
	// This file is a modified version of ProjectCard.svelte
	// It is horizontally condensed and shows its content as an overlay on hover (desktop only)
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { project, index } = $props();
</script>

<a
	href="/project/{project.slug}"
	class="relative block overflow-hidden rounded-lg border border-gray-200 text-inherit no-underline transition-all duration-200 hover:!translate-y-0"
	in:fly={{ y: 50, duration: 400, delay: index * 100, easing: quintOut }}
>
	<div class="relative h-[350px] max-h-[45dvh] w-full">
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
	</div>
</a>
