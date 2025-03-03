<script lang="ts">
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import type { Testimonial } from '$lib/types';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import AnimatedHandwriting from '$lib/components/AnimatedHandwriting.svelte';
	let { testimonials }: { testimonials: Testimonial[] } = $props();

	// Sort testimonials: featured with index first (sorted by index), then featured without index
	const sortedTestimonials = $derived(
		testimonials
			.filter((t) => t.isFeatured)
			.sort((a, b) => {
				// If both have featuredIndex, sort by index
				if (a.featuredIndex !== null && b.featuredIndex !== null) {
					return a.featuredIndex - b.featuredIndex;
				}
				// If only a has featuredIndex, it comes first
				if (a.featuredIndex !== null) return -1;
				// If only b has featuredIndex, it comes first
				if (b.featuredIndex !== null) return 1;
				// If neither has featuredIndex, maintain original order
				return 0;
			})
	);

	const options: Options = {
		type: 'loop',
		perPage: 1,
		wheel: false,
		direction: 'ltr',
		gap: '1rem',
		arrows: false,
		pagination: true,
		speed: 800,
		easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
		autoplay: true,
		interval: 4000,
		classes: {
			slider: 'overflow-y-visible',
			track: 'overflow-visible',
			list: 'overflow-visible',
			slide: 'overflow-visible'
		}
	};
</script>

<section class="testimonials-section bg-background2/50 py-20">
	<div class="wide-container flex flex-col items-center justify-center">
		<div class="relative mb-8 max-w-[400px] text-center">
			<h2 class="sr-only">Testimonials - What People Say</h2>
			<div class="handwriting-animation">
				<AnimatedHandwriting optionIndex={2} />
			</div>
			<div class="text-text/80 mt-4 text-xl">Hear from some of my amazing clients.</div>
		</div>

		<!-- Desktop Grid -->
		<div class="hidden lg:block">
			<div class="grid grid-cols-2 gap-8 lg:grid-cols-3">
				{#each sortedTestimonials as testimonial}
					<div>
						<TestimonialCard {...testimonial} />
					</div>
				{/each}
			</div>
		</div>

		<!-- Mobile Carousel -->
		<div class="testimonials-carousel w-full lg:hidden">
			<div class="relative w-full overflow-x-hidden overflow-y-visible">
				<Splide {options} aria-label="Testimonials" class="w-full overflow-visible">
					{#each sortedTestimonials as testimonial}
						<SplideSlide class="overflow-visible px-4 py-8">
							<div
								class="card-container z-10 overflow-visible rounded-lg transition-all duration-500"
							>
								<TestimonialCard {...testimonial} />
							</div>
						</SplideSlide>
					{/each}
				</Splide>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.testimonials-carousel .splide__pagination__page) {
		background: var(--color-text);
		opacity: 0.2;
		transition: all 0.3s ease;
	}

	:global(
		.testimonials-carousel .splide__slide,
		.testimonials-carousel .splide__slide .card-container
	) {
		transition: all 0.3s ease-out;
	}

	:global(.testimonials-carousel .splide__track) {
		overflow: visible;
	}

	:global(.testimonials-carousel .splide__list) {
		overflow: visible;
	}
</style>
