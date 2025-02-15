<script lang="ts">
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';
	import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<section class="overflow-visible py-0">
	<h2 class="text-text mb-10 text-center text-6xl font-bold">My Work</h2>
	<ProjectCarousel {projects} />
</section>
