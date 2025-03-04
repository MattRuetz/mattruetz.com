<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css';
	import { browser } from '$app/environment';

	const { techLogo1, techLogo2, techLogo3 } = $props();
	let expandedSection = $state<string | null>('shopify');
	let isMobile = $state(false);

	function toggleSection(section: string) {
		expandedSection = expandedSection === section ? null : section;
	}

	function checkMobile() {
		if (browser) {
			isMobile = window.innerWidth < 640;
		}
	}

	onMount(() => {
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<section class="relative overflow-hidden px-4 py-12 sm:py-16 md:py-20">
	<div class="mx-auto max-w-6xl">
		<div
			class="bg-background2 relative flex flex-col items-center justify-center overflow-hidden rounded-3xl px-4 py-10 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-tr after:to-transparent sm:px-6 sm:py-12 md:px-16 lg:px-24 lg:py-16"
		>
			<h2
				class="text-text mb-8 text-center text-4xl leading-tight font-bold sm:mb-12 sm:text-5xl md:mb-16 md:text-7xl"
			>
				Powerful + Custom <span class="gradient-text block font-black">E-Commerce</span>
			</h2>

			<!-- Desktop layout for tech logos (hidden on mobile) -->
			<div class="hidden justify-center gap-8 md:flex">
				{#if techLogo1}
					<div
						class="flex min-h-[80px] min-w-[80px] items-center justify-center rounded-xl bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[100px] sm:min-w-[100px] sm:rounded-2xl sm:p-4"
					>
						<img
							src={techLogo1.sourceUrl}
							alt={techLogo1.altText || 'Tech Logo 1'}
							width={techLogo1.mediaDetails?.width}
							height={techLogo1.mediaDetails?.height}
							class="object-contain sm:max-h-16"
							loading="lazy"
						/>
					</div>
				{/if}
				{#if techLogo2}
					<div
						class="flex min-h-[80px] min-w-[80px] items-center justify-center rounded-xl bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[100px] sm:min-w-[100px] sm:rounded-2xl sm:p-4"
					>
						<img
							src={techLogo2.sourceUrl}
							alt={techLogo2.altText || 'Tech Logo 2'}
							width={techLogo2.mediaDetails?.width}
							height={techLogo2.mediaDetails?.height}
							class="object-contain sm:max-h-14"
							loading="lazy"
						/>
					</div>
				{/if}
				{#if techLogo3}
					<div
						class="flex min-h-[80px] min-w-[80px] items-center justify-center rounded-xl bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[100px] sm:min-w-[100px] sm:rounded-2xl sm:p-4"
					>
						<img
							src={techLogo3.sourceUrl}
							alt={techLogo3.altText || 'Tech Logo 3'}
							width={techLogo3.mediaDetails?.width}
							height={techLogo3.mediaDetails?.height}
							class="object-contain sm:max-h-14"
							loading="lazy"
						/>
					</div>
				{/if}
			</div>

			<!-- Mobile carousel for tech logos -->
			<div class="mx-auto mb-8 w-full max-w-[300px] md:hidden">
				<Splide
					options={{
						type: 'loop',
						perPage: 1,
						arrows: false,
						pagination: false,
						autoplay: true,
						interval: 3000,
						pauseOnHover: true,
						gap: '1rem',
						classes: {
							pagination: 'splide__pagination logo-carousel-pagination'
						}
					}}
					aria-label="E-Commerce Technology Partners"
				>
					{#if techLogo1}
						<SplideSlide>
							<div class="flex h-24 w-full items-center justify-center rounded-xl bg-white p-3">
								<img
									src={techLogo1.sourceUrl}
									alt={techLogo1.altText || 'Tech Logo 1'}
									width={techLogo1.mediaDetails?.width}
									height={techLogo1.mediaDetails?.height}
									class="max-h-12 object-contain"
									loading="lazy"
								/>
							</div>
						</SplideSlide>
					{/if}
					{#if techLogo2}
						<SplideSlide>
							<div class="flex h-24 w-full items-center justify-center rounded-xl bg-white p-3">
								<img
									src={techLogo2.sourceUrl}
									alt={techLogo2.altText || 'Tech Logo 2'}
									width={techLogo2.mediaDetails?.width}
									height={techLogo2.mediaDetails?.height}
									class="max-h-12 object-contain"
									loading="lazy"
								/>
							</div>
						</SplideSlide>
					{/if}
					{#if techLogo3}
						<SplideSlide>
							<div class="flex h-24 w-full items-center justify-center rounded-xl bg-white p-3">
								<img
									src={techLogo3.sourceUrl}
									alt={techLogo3.altText || 'Tech Logo 3'}
									width={techLogo3.mediaDetails?.width}
									height={techLogo3.mediaDetails?.height}
									class="max-h-12 object-contain"
									loading="lazy"
								/>
							</div>
						</SplideSlide>
					{/if}
				</Splide>
			</div>

			<div class="mt-8 w-full max-w-4xl space-y-4 sm:space-y-6">
				<!-- Shopify Section -->
				<div
					class="bg-background overflow-hidden rounded-xl border-2 border-black/5 p-4 break-words transition-all duration-300 sm:p-6"
					class:border-primary={expandedSection === 'shopify'}
				>
					<button
						class="flex w-full cursor-pointer items-center justify-between py-2"
						onclick={() => toggleSection('shopify')}
					>
						<h3 class="pr-2 text-left text-lg font-semibold sm:text-xl">
							Custom Shopify Store Development
						</h3>
						<span
							class="text-primary inline-flex flex-shrink-0 transition-transform duration-300"
							class:rotate-180={expandedSection === 'shopify'}
							class:hover:translate-y-0.5={expandedSection !== 'shopify'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</span>
					</button>

					{#if expandedSection === 'shopify'}
						<div class="overflow-hidden" transition:slide={{ duration: 400, easing: quintOut }}>
							<div class="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
								<p class=" text-gray-600 sm:text-base">
									Transform your online presence with our expert Shopify development services. We
									specialize in creating distinctive, high-performing e-commerce stores that combine
									stunning design with powerful functionality.
								</p>
								<ul
									class="ml-4 list-disc space-y-1 text-gray-600 sm:ml-6 sm:space-y-2 sm:text-base"
								>
									<li>Custom theme development and optimization</li>
									<li>3D product visualization integration</li>
									<li>Advanced user interface animations</li>
									<li>Custom checkout optimization</li>
									<li>Mobile-first responsive design</li>
								</ul>
							</div>
						</div>
					{/if}
				</div>

				<!-- WooCommerce Section -->
				<div
					class="bg-background overflow-hidden rounded-xl border-2 border-black/5 p-4 break-words transition-all duration-300 sm:p-6"
					class:border-primary={expandedSection === 'woo'}
				>
					<button
						class="flex w-full cursor-pointer items-center justify-between py-2"
						onclick={() => toggleSection('woo')}
					>
						<h3 class="pr-2 text-lg font-semibold sm:text-xl">WooCommerce Solutions</h3>
						<span
							class="text-primary inline-flex flex-shrink-0 transition-transform duration-300"
							class:rotate-180={expandedSection === 'woo'}
							class:hover:translate-y-0.5={expandedSection !== 'woo'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</span>
					</button>

					{#if expandedSection === 'woo'}
						<div class="overflow-hidden" transition:slide={{ duration: 400, easing: quintOut }}>
							<div class="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
								<p class=" text-gray-600 sm:text-base">
									Leverage the power of WordPress with our custom WooCommerce development services.
									We create seamlessly integrated e-commerce solutions that maximize your online
									store's potential.
								</p>
								<ul
									class="ml-4 list-disc space-y-1 text-gray-600 sm:ml-6 sm:space-y-2 sm:text-base"
								>
									<li>Custom product page templates</li>
									<li>Advanced filtering and search functionality</li>
									<li>WordPress integration and optimization</li>
									<li>Performance optimization</li>
									<li>Custom payment gateway integration</li>
								</ul>
							</div>
						</div>
					{/if}
				</div>

				<!-- SEO Section -->
				<div
					class="bg-background overflow-hidden rounded-xl border-2 border-black/5 p-4 break-words transition-all duration-300 sm:p-6"
					class:border-primary={expandedSection === 'seo'}
				>
					<button
						class="flex w-full cursor-pointer items-center justify-between py-2"
						onclick={() => toggleSection('seo')}
					>
						<h3 class="pr-2 text-lg font-semibold sm:text-xl">E-Commerce SEO & Conversion</h3>
						<span
							class="text-primary inline-flex flex-shrink-0 transition-transform duration-300"
							class:rotate-180={expandedSection === 'seo'}
							class:hover:translate-y-0.5={expandedSection !== 'seo'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</span>
					</button>

					{#if expandedSection === 'seo'}
						<div class="overflow-hidden" transition:slide={{ duration: 400, easing: quintOut }}>
							<div class="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
								<p class=" text-gray-600 sm:text-base">
									Drive organic traffic and increase sales with our comprehensive e-commerce SEO and
									conversion rate optimization services. We implement data-driven strategies to
									improve your store's visibility and performance.
								</p>
								<ul
									class="ml-4 list-disc space-y-1 text-gray-600 sm:ml-6 sm:space-y-2 sm:text-base"
								>
									<li>Technical SEO optimization</li>
									<li>Content strategy and optimization</li>
									<li>Conversion funnel optimization</li>
									<li>User experience enhancement</li>
									<li>Performance analytics and reporting</li>
								</ul>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<div class="mt-8 text-center sm:mt-10 md:mt-12">
				<a
					href="/contact"
					class="bg-primary shadow-primary/20 hover:shadow-primary/30 inline-flex max-w-full items-center gap-2 rounded px-5 py-2.5 text-base font-semibold whitespace-nowrap text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-6 sm:py-3 sm:text-lg md:max-w-none"
				>
					Start Your E-Commerce Project
					<span class="ml-1">→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	@media (max-width: 480px) {
		h2 {
			font-size: 2.25rem;
			line-height: 1.2;
		}
	}
</style>
