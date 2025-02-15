<script lang="ts">
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';
	import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<section class="overflow-visible py-0">
	<h2 class="text-text mb-10 text-center text-6xl font-bold">My Work</h2>
	<p class="text-text/80 mb-10 text-center text-2xl">
		Here are some of the projects I've worked on. Click on a project to learn more.
	</p>
	<ProjectCarousel {projects} />
</section>
