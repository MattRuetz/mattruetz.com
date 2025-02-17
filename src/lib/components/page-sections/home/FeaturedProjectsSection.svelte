<script lang="ts">
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';
	import type { Project } from '$lib/types';
	import { faMousePointer, faHandPointer } from '@fortawesome/free-solid-svg-icons';
	import { Fa } from 'svelte-fa';
	import AnimatedHandwriting from '$lib/components/AnimatedHandwriting.svelte';
	export let projects: Project[];
</script>

<section class="featured-projects overflow-visible py-20">
	<!-- <h2 class="text-text mb-4 text-center text-6xl font-bold">My Work</h2> -->
	<div class="mx-auto max-w-[300px]">
		<div class="relative text-center">
			<h2 class="sr-only">Portfolio - My Web Projects</h2>
			<div class="handwriting-animation">
				<AnimatedHandwriting optionIndex={1} />
			</div>
		</div>
		<p
			class="text-text/50 mb-10 hidden w-full items-center justify-center gap-2 text-center text-xl md:inline-flex"
		>
			<Fa icon={faMousePointer} /> Click on a project to learn more.
		</p>
	</div>
	<p
		class="text-text/50 mb-10 inline-flex w-full items-center justify-center gap-2 text-center text-xl md:hidden"
	>
		<Fa icon={faHandPointer} /> Tap a project to learn more.
	</p>
	<div class="project-carousel">
		<ProjectCarousel {projects} />
	</div>
</section>
