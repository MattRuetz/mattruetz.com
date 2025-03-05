<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css';
	import { browser } from '$app/environment';
	import Button from '$lib/components/Button.svelte';
	const { techLogo1, techLogo2, techLogo3 } = $props();
	console.log('EcommerceSection props:', { techLogo1, techLogo2, techLogo3 });

	let activeTab = $state<string>('shopify');
	let isMobile = $state(false);
	let contentVisible = $state(true);
	let previousTab = $state<string>('shopify');
	let splideInstance: any = $state(null);

	const ecommerceServices = [
		{
			id: 'shopify',
			title: 'Custom Shopify Store Development',
			logo: techLogo1,
			description:
				'Transform your online presence with our expert Shopify development services. We specialize in creating distinctive, high-performing e-commerce stores that combine stunning design with powerful functionality.',
			features: [
				'Custom theme development and optimization',
				'3D product visualization integration',
				'Advanced user interface animations',
				'Custom checkout optimization',
				'Mobile-first responsive design'
			]
		},
		{
			id: 'woo',
			title: 'WooCommerce Solutions',
			logo: techLogo2,
			description:
				"Leverage the power of WordPress with our custom WooCommerce development services. We create seamlessly integrated e-commerce solutions that maximize your online store's potential.",
			features: [
				'Custom product page templates',
				'Advanced filtering and search functionality',
				'WordPress integration and optimization',
				'Performance optimization',
				'Custom payment gateway integration'
			]
		},
		{
			id: 'seo',
			title: 'E-Commerce SEO & Conversion',
			logo: techLogo3,
			description:
				"Drive organic traffic and increase sales with our comprehensive e-commerce SEO and conversion rate optimization services. We implement data-driven strategies to improve your store's visibility and performance.",
			features: [
				'Technical SEO optimization',
				'Content strategy and optimization',
				'Conversion funnel optimization',
				'User experience enhancement',
				'Performance analytics and reporting'
			]
		}
	];

	// Manage tab changes with proper animation timing
	function setActiveTab(tabId: string) {
		if (activeTab === tabId) return;

		// Hide current content first
		contentVisible = false;
		previousTab = activeTab;

		// Update carousel position if on mobile
		if (isMobile && splideInstance) {
			const newIndex = ecommerceServices.findIndex((service) => service.id === tabId);
			if (newIndex !== -1) {
				splideInstance.go(newIndex);
			}
		}

		// After content has faded out, change the tab and show new content
		activeTab = tabId;
		contentVisible = true;
	}

	function checkMobile() {
		if (browser) {
			isMobile = window.innerWidth < 768;
		}
	}

	// Using a generic type interface with the properties we need
	function handleSplideMove(e: any) {
		if (!isMobile || !e || !e.detail) return;

		const newIndex = e.detail.index;
		if (typeof newIndex !== 'number') return;

		const newTabId = ecommerceServices[newIndex]?.id;

		if (newTabId && newTabId !== activeTab) {
			setActiveTab(newTabId);
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
	<div class="container-wide">
		<div
			class="bg-background2 relative flex flex-col items-center justify-center overflow-hidden rounded-3xl px-4 py-10 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-tr after:from-transparent after:to-transparent sm:px-6 sm:py-12 md:px-16 lg:px-24 lg:py-16"
		>
			<!-- Enhanced heading with more visual pop -->
			<div class="relative mb-8 text-center sm:mb-12 md:mb-16">
				<h2 class="text-text relative inline-block text-4xl leading-tight font-bold md:text-6xl">
					<span class="relative z-10">Powerful + Custom</span>
					<span class="gradient-text enhanced-gradient mt-1 block font-black md:mt-2"
						>E-Commerce</span
					>
				</h2>
			</div>

			<!-- Tech Logo Showcase - Desktop -->
			<div class="relative mb-12 hidden w-full md:block">
				<div class="flex justify-center gap-8">
					{#each ecommerceServices as service}
						{#if service.logo}
							<button
								class="group relative flex flex-col items-center transition-all duration-300"
								onclick={() => setActiveTab(service.id)}
							>
								<div
									class="flex h-[120px] w-[200px] cursor-pointer items-center justify-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
									class:ring-4={activeTab === service.id}
									class:ring-primary={activeTab === service.id}
								>
									<img
										src={service.logo.sourceUrl}
										alt={service.logo.altText || 'E-commerce platform logo'}
										width={service.logo.mediaDetails?.width}
										height={service.logo.mediaDetails?.height}
										class="max-h-16 max-w-[160px] object-contain"
										loading="lazy"
									/>
								</div>
								<div
									class="mt-3 h-1 w-12 rounded-full transition-all duration-300"
									class:bg-primary={activeTab === service.id}
									class:bg-gray-300={activeTab !== service.id}
								></div>
							</button>
						{/if}
					{/each}
				</div>
			</div>

			<!-- Tech Logo Carousel - Mobile -->
			<div class="relative mb-12 w-full md:hidden">
				<Splide
					options={{
						type: 'loop',
						perPage: 1,
						arrows: true,
						pagination: true,
						autoplay: false,
						gap: '1rem',
						classes: {
							pagination: 'splide__pagination tech-carousel-pagination',
							arrow: 'splide__arrow tech-carousel-arrow'
						}
					}}
					aria-label="E-Commerce Technology Partners"
					on:moved={handleSplideMove}
					bind:splide={splideInstance}
				>
					{#each ecommerceServices as service, index}
						{#if service.logo}
							<SplideSlide>
								<button
									class="flex w-full flex-col items-center px-8 py-4"
									onclick={() => setActiveTab(service.id)}
								>
									<div
										class="mx-auto flex h-[100px] w-full max-w-[240px] items-center justify-center overflow-visible"
										class:ring-4={activeTab === service.id}
										class:ring-primary={activeTab === service.id}
									>
										<img
											src={service.logo.sourceUrl}
											alt={service.logo.altText || 'E-commerce platform logo'}
											width={service.logo.mediaDetails?.width}
											height={service.logo.mediaDetails?.height}
											class="max-h-14 max-w-[180px] object-contain"
											loading="lazy"
										/>
									</div>
								</button>
							</SplideSlide>
						{/if}
					{/each}
				</Splide>
			</div>

			<!-- Content Display with improved animation handling -->
			<div class="relative h-[450px] w-full max-w-4xl md:h-[350px]">
				{#if contentVisible}
					{#each ecommerceServices as service}
						{#if activeTab === service.id}
							<div
								class="bg-background absolute inset-0 rounded-2xl p-5 shadow-lg sm:p-8"
								in:fade={{ duration: 300, delay: 50 }}
								out:fade={{ duration: 300 }}
							>
								<div class="flex flex-col md:flex-row md:gap-8">
									<!-- Service Info -->
									<div class="md:w-1/2">
										<h3 class="text-primary mb-3 text-xl font-bold sm:mb-4 sm:text-2xl md:text-3xl">
											{service.title}
										</h3>
										<p class="mb-5 text-sm text-gray-600 sm:text-base">
											{service.description}
										</p>
									</div>

									<!-- Features List with fixed alignment -->
									<div class="mt-4 md:mt-0 md:w-1/2">
										<h4 class="text-text mb-2 text-lg font-semibold">Key Features</h4>
										<ul class="space-y-2">
											{#each service.features as feature, i}
												<li
													class="flex items-start gap-2"
													in:fly={{ y: 20, delay: 150 + i * 50, duration: 300, easing: quintOut }}
												>
													<span class="text-primary mt-0.5 flex-shrink-0 text-lg">✓</span>
													<span class="text-sm text-gray-600 sm:text-base">{feature}</span>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{/if}
			</div>

			<div class="mt-10 text-center sm:mt-12">
				<!-- <a href="/contact" class="btn-primary">
					Start Your E-Commerce Project
					<span class="ml-1">→</span>
				</a> -->
				<Button href="/contact">Start Your E-Commerce Project</Button>
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

	.enhanced-gradient {
		background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-shadow: 0 5px 15px rgba(var(--color-primary-rgb), 0.15);
		position: relative;
	}

	.enhanced-gradient::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
		border-radius: 3px;
		z-index: -1;
	}

	:global(.tech-carousel-pagination) {
		bottom: -1.5rem !important;
	}

	:global(.tech-carousel-pagination .splide__pagination__page) {
		background: #e2e8f0;
		opacity: 1;
		width: 8px;
		height: 8px;
	}

	:global(.tech-carousel-pagination .splide__pagination__page.is-active) {
		background: var(--color-primary);
		transform: scale(1.2);
	}

	:global(.tech-carousel-arrow) {
		background: rgba(255, 255, 255, 0.8);
		width: 2rem;
		height: 2rem;
	}

	/* Ensure mobile text doesn't overflow */
	@media (max-width: 640px) {
		ul.space-y-2 {
			padding-right: 0.5rem;
		}

		.bg-background {
			overflow-y: auto;
			max-height: 100%;
		}
	}
</style>
