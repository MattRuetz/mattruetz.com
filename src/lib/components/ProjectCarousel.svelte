<script lang="ts">
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import ProjectCardFeatured from './ProjectCardFeatured.svelte';
	import ActiveCardInfo from './ActiveCardInfo.svelte';

	let { projects } = $props();
	let splide: Splide;
	let activeProject = $state(projects?.[0]);
	let moving = $state(false);
	const options: Options = {
		type: 'loop',
		perPage: 3,
		wheel: true,
		direction: 'ltr',
		focus: 'center',
		gap: '2rem',
		arrows: false,
		pagination: false,
		speed: 800,
		easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
		autoplay: true,
		interval: 4000,
		pauseOnHover: true,
		pauseOnFocus: true,
		classes: {
			slider: 'overflow-y-visible',
			track: 'overflow-visible',
			list: 'overflow-visible',
			slide: 'overflow-visible'
		}
	};

	function handleMoved(e: CustomEvent<{ index: number }> | undefined) {
		if (!e) return;
		const index = e.detail.index || 0;
		activeProject = projects?.[index];
		moving = false;
	}

	function handleMove(e: CustomEvent<{ index: number }> | undefined) {
		moving = true;
	}
</script>

<div class="relative w-full overflow-x-hidden overflow-y-visible py-16">
	<div class="container mx-auto">
		<div class="relative z-10 flex w-full items-center justify-center">
			<Splide
				{options}
				aria-label="Featured Projects"
				class="w-full overflow-visible"
				bind:this={splide}
				on:moved={handleMoved}
				on:move={handleMove}
			>
				{#each projects as project, i (project.id)}
					<SplideSlide class="overflow-visible">
						<div class="card-container z-10 rounded-lg transition-all duration-500">
							<ProjectCardFeatured {project} index={i} />
						</div>
					</SplideSlide>
				{/each}
			</Splide>
		</div>

		<div
			class="z-0 mx-auto mt-16 max-w-5xl p-6 backdrop-blur-sm transition-opacity duration-300"
			style="opacity: {moving ? 0 : 1}"
		>
			{#if activeProject}
				<ActiveCardInfo {activeProject} />
			{/if}
		</div>
	</div>
</div>

<style>
	:global(.splide__slide, .splide__slide .card-container) {
		transition: all 0.3s ease-out;
	}

	:global(.splide__slide.is-active) {
		z-index: 10;
	}

	:global(.splide__slide.is-active .card-info) {
		opacity: 1;
	}

	:global(.splide__slide.is-active .card-container) {
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
		transform: scale(1.2);
	}

	:global(.splide__slide.is-active .card-container:hover) {
		transform: scale(1.2) translateY(-5px);
	}

	:global(.splide__slide:not(.is-active) .card-container) {
		filter: opacity(0.5);
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
	}

	:global(.splide__track) {
		overflow: visible;
	}

	:global(.splide__list) {
		overflow: visible;
	}
</style>
