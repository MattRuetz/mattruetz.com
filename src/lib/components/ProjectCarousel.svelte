<script lang="ts">
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import ProjectCardFeatured from './ProjectCardFeatured.svelte';
	import ActiveCardInfo from './ActiveCardInfo.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { projects } = $props();
	let splide: Splide;
	let activeProject = $state(projects?.[0]);
	let moving = $state(false);

	// Initialize isMobile with the correct value immediately
	let isMobile = $state(browser ? window.innerWidth < 768 : false);

	// Check if we're on a mobile device
	function checkMobile() {
		if (browser) {
			isMobile = window.innerWidth < 768;
		}
	}

	// Create a reactive getter for options that will update when isMobile changes
	function getOptions(): Options {
		const baseOptions: Options = {
			type: 'loop',
			direction: 'ltr',
			focus: 'center',
			arrows: false,
			pagination: isMobile,
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

		// Mobile-specific options
		if (isMobile) {
			return {
				...baseOptions,
				perPage: 1,
				gap: '0.5rem',
				wheel: false,
				pagination: true,
				padding: { left: '1%', right: '1%' }, // Even less padding to show nearly full-width
				focus: 'center',
				classes: {
					pagination: 'splide__pagination mobile-pagination'
				}
			};
		}

		// Desktop options
		return {
			...baseOptions,
			perPage: 2,
			gap: '2rem',
			wheel: false
		};
	}

	// Set up options using the reactive state
	let options = $state(getOptions());

	// Make options reactive to isMobile changes
	$effect(() => {
		options = getOptions();

		// Only refresh if Splide is already initialized
		if (splide?.splide) {
			setTimeout(() => {
				try {
					splide.refresh();
					console.log('Splide refreshed with mobile:', isMobile);
				} catch (e) {
					console.error('Error refreshing Splide:', e);
				}
			}, 10);
		}
	});

	function handleMoved(e: CustomEvent<{ index: number }> | undefined) {
		if (!e) return;
		const index = e.detail.index || 0;
		activeProject = projects?.[index];
		moving = false;
	}

	function handleMove(e: CustomEvent<{ index: number }> | undefined) {
		moving = true;
	}

	onMount(() => {
		// Double-check mobile state on mount and refresh carousel
		checkMobile();
		options = getOptions();

		// Force refresh after a brief delay to ensure proper initialization
		setTimeout(() => {
			if (splide?.splide) {
				splide.refresh();
				console.log('Initial Splide refresh with mobile:', isMobile);
			}
		}, 100);

		window.addEventListener('resize', () => {
			checkMobile();
			// Splide refresh is now handled by the $effect
		});

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<div class="project-carousel relative w-full overflow-x-hidden overflow-y-hidden py-8 md:py-16">
	<div class="container-wide mx-auto px-0 sm:px-4">
		<div class="relative z-10 flex w-full items-center justify-center">
			<Splide
				{options}
				aria-label="Featured Projects"
				class="mobile-fullwidth-carousel w-full overflow-visible"
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

		<!-- Project info section - different layout for mobile vs desktop -->
		<div
			class="z-0 mx-auto mt-10 max-w-4xl p-4 backdrop-blur-sm transition-opacity duration-300 md:mt-14 md:h-[130px] md:p-6"
			style="opacity: {moving ? 0 : 1}"
		>
			{#if activeProject}
				<div class:mobile-layout={isMobile}>
					<ActiveCardInfo {activeProject} />
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(.project-carousel .splide__slide, .project-carousel .splide__slide .card-container) {
		transition: all 0.3s ease-out;
	}

	:global(.project-carousel .splide__slide.is-active) {
		z-index: 10;
	}

	:global(.project-carousel .splide__slide.is-active .card-info) {
		opacity: 1;
	}

	/* Desktop scaling */
	@media (min-width: 768px) {
		:global(.project-carousel .splide__slide.is-active .card-container) {
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
			transform: scale(1.2);
		}

		:global(.project-carousel .splide__slide.is-active .card-container:hover) {
			transform: scale(1.2) translateY(-5px);
		}
	}

	/* Mobile styling */
	@media (max-width: 767px) {
		:global(.project-carousel .splide__slide.is-active .card-container) {
			box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
			transform: scale(1.05);
			opacity: 1;
			width: 94%; /* Control width of active slide */
			margin: 0 auto;
		}

		:global(.project-carousel .splide__slide:not(.is-active) .card-container) {
			opacity: 0.3;
			filter: blur(1px);
			transform: scale(0.85);
		}

		:global(.project-carousel .splide__slide) {
			transition: all 0.4s ease;
		}

		:global(.mobile-fullwidth-carousel) {
			width: 100vw !important;
			max-width: 100vw !important;
			position: relative;
		}

		:global(.mobile-fullwidth-carousel .splide__track) {
			overflow: visible !important;
			padding: 10px 0;
		}

		:global(.card-container) {
			width: 100%;
		}
	}

	:global(.project-carousel .splide__track) {
		overflow: visible;
	}

	:global(.project-carousel .splide__list) {
		overflow: visible;
	}

	/* Mobile layout styling */
	:global(.mobile-layout :global(.grid)) {
		grid-template-columns: 1fr !important;
		gap: 1rem !important;
	}

	:global(.mobile-layout h2) {
		font-size: 1.5rem !important;
		line-height: 1.2;
	}

	:global(.mobile-layout p.text-xl) {
		font-size: 1rem !important;
	}

	:global(.mobile-layout .flex.justify-end) {
		justify-content: flex-start !important;
	}

	:global(.mobile-layout .items-end) {
		align-items: flex-start !important;
	}

	/* Mobile pagination styling */
	:global(.mobile-pagination) {
		bottom: -2rem !important;
		display: flex;
		justify-content: center;
		margin-top: 1rem;
	}

	:global(.mobile-pagination .splide__pagination__page) {
		background: var(--color-primary);
		opacity: 0.5;
		margin: 0 4px;
		width: 8px;
		height: 8px;
	}

	:global(.mobile-pagination .splide__pagination__page.is-active) {
		background: var(--color-primary);
		transform: scale(1.2);
		opacity: 1;
	}
</style>
