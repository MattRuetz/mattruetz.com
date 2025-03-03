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
	<div class="wide-container">
		<div
			class="ecommerce-card from-primary/10 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-b to-transparent px-4 py-10 sm:px-6 sm:py-12 md:px-16 lg:px-24 lg:py-16"
		>
			<h2
				class="text-text mb-8 text-center text-4xl leading-tight font-bold sm:mb-12 sm:text-5xl md:mb-16 md:text-7xl"
			>
				Powerful + Custom <span class="gradient-text block font-black">E-Commerce</span>
			</h2>

			<!-- Desktop layout for tech logos (hidden on mobile) -->
			<div class="hidden justify-center gap-8 md:flex">
				{#if techLogo1}
					<div class="tech-logo-container flex items-center justify-center">
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
					<div class="tech-logo-container flex items-center justify-center">
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
					<div class="tech-logo-container flex items-center justify-center">
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
			<div class="tech-logo-carousel mb-8 sm:hidden">
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
							<div class="tech-logo-container flex h-24 w-full items-center justify-center">
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
							<div class="tech-logo-container flex h-24 w-full items-center justify-center">
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
							<div class="tech-logo-container flex h-24 w-full items-center justify-center">
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
					class="content-section bg-background rounded-xl p-4 transition-all duration-300 sm:p-6"
					class:active={expandedSection === 'shopify'}
				>
					<button
						class="accordion-button flex w-full cursor-pointer items-center justify-between py-2"
						onclick={() => toggleSection('shopify')}
					>
						<h3 class="pr-2 text-left text-lg font-semibold sm:text-xl">
							Custom Shopify Store Development
						</h3>
						<span
							class="arrow-icon flex-shrink-0 transition-transform duration-300"
							class:rotated={expandedSection === 'shopify'}
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
						<div class="content-wrapper" transition:slide={{ duration: 400, easing: quintOut }}>
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
					class="content-section bg-background rounded-xl p-4 transition-all duration-300 sm:p-6"
					class:active={expandedSection === 'woo'}
				>
					<button
						class="accordion-button flex w-full cursor-pointer items-center justify-between py-2"
						onclick={() => toggleSection('woo')}
					>
						<h3 class="pr-2 text-lg font-semibold sm:text-xl">WooCommerce Solutions</h3>
						<span
							class="arrow-icon flex-shrink-0 transition-transform duration-300"
							class:rotated={expandedSection === 'woo'}
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
						<div class="content-wrapper" transition:slide={{ duration: 400, easing: quintOut }}>
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
					class="content-section bg-background rounded-xl p-4 transition-all duration-300 sm:p-6"
					class:active={expandedSection === 'seo'}
				>
					<button
						class="accordion-button flex w-full cursor-pointer items-center justify-between py-2"
						onclick={() => toggleSection('seo')}
					>
						<h3 class="pr-2 text-lg font-semibold sm:text-xl">E-Commerce SEO & Conversion</h3>
						<span
							class="arrow-icon flex-shrink-0 transition-transform duration-300"
							class:rotated={expandedSection === 'seo'}
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
						<div class="content-wrapper" transition:slide={{ duration: 400, easing: quintOut }}>
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
					class="cta-button bg-primary inline-flex items-center gap-2 rounded px-5 py-2.5 text-base text-white transition-all hover:scale-105 hover:shadow-lg sm:px-6 sm:py-3 sm:text-lg"
				>
					Start Your E-Commerce Project
					<span class="ml-1">→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.ecommerce-card {
		position: relative;
		overflow: hidden;
	}

	.ecommerce-card::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.15) 0%, transparent 50%);
		pointer-events: none;
		z-index: 1;
	}

	.content-section {
		border: 2px solid rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
		word-break: break-word;
		/* border-left: 4px solid transparent; */
	}

	.content-wrapper {
		overflow: hidden;
	}

	.active {
		border-color: var(--color-primary);
	}

	.tech-logo-container {
		padding: 0.75rem;
		border-radius: 0.75rem;
		background: white;
		transition: all 0.3s ease;
		min-width: 80px;
		min-height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 640px) {
		.tech-logo-container {
			padding: 1rem;
			border-radius: 1rem;
			min-width: 100px;
			min-height: 100px;
		}
	}

	.tech-logo-container:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	.arrow-icon {
		display: inline-flex;
		color: var(--color-primary);
	}

	.rotated {
		transform: rotate(180deg);
	}

	.accordion-button:hover .arrow-icon:not(.rotated) {
		transform: translateY(2px);
	}

	.cta-button {
		box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.2);
		font-weight: 600;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.cta-button:hover {
		box-shadow: 0 8px 16px rgba(var(--color-primary-rgb), 0.3);
	}

	.tech-logo-carousel {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	:global(.logo-carousel-pagination) {
		bottom: -1rem !important;
	}

	:global(.logo-carousel-pagination .splide__pagination__page) {
		background: rgba(var(--color-primary-rgb), 0.3);
	}

	:global(.logo-carousel-pagination .splide__pagination__page.is-active) {
		background: var(--color-primary);
		transform: scale(1.2);
	}

	@media (max-width: 480px) {
		h2 {
			font-size: 2.25rem;
			line-height: 1.2;
		}

		.cta-button {
			width: 100%;
			justify-content: center;
		}
	}
</style>
