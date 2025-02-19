<script lang="ts">
	const { techLogo1, techLogo2, techLogo3 } = $props();
	let expandedSection = $state<string | null>(null);

	function toggleSection(section: string) {
		expandedSection = expandedSection === section ? null : section;
	}
</script>

<section class="relative overflow-hidden rounded-2xl px-4 py-16">
	<div class="container mx-auto">
		<div
			class="ecommerce-card bg-background2 flex flex-col items-center justify-center rounded-2xl px-6 py-16 md:px-24"
		>
			<h2 class="highlight mb-12 text-center text-3xl font-bold md:text-4xl">
				Expert E-Commerce Development Solutions
			</h2>

			<div class="mb-8 flex justify-center gap-8">
				{#if techLogo1}
					<img
						src={techLogo1.sourceUrl}
						alt={techLogo1.altText || 'Tech Logo 1'}
						width={techLogo1.mediaDetails?.width}
						height={techLogo1.mediaDetails?.height}
						class="max-h-16 object-contain"
						loading="lazy"
					/>
				{/if}
				{#if techLogo2}
					<img
						src={techLogo2.sourceUrl}
						alt={techLogo2.altText || 'Tech Logo 2'}
						width={techLogo2.mediaDetails?.width}
						height={techLogo2.mediaDetails?.height}
						class="max-h-14 object-contain"
						loading="lazy"
					/>
				{/if}
				{#if techLogo3}
					<img
						src={techLogo3.sourceUrl}
						alt={techLogo3.altText || 'Tech Logo 3'}
						width={techLogo3.mediaDetails?.width}
						height={techLogo3.mediaDetails?.height}
						class="max-h-14 object-contain"
						loading="lazy"
					/>
				{/if}
			</div>

			<div class="w-full max-w-4xl space-y-6">
				<!-- Shopify Section -->
				<div class="content-section bg-background rounded-xl p-6 transition-all duration-300">
					<button
						class="flex w-full items-center justify-between"
						onclick={() => toggleSection('shopify')}
					>
						<h3 class="text-xl font-semibold">Custom Shopify Store Development</h3>
						<span
							class="text-2xl transition-transform duration-300"
							class:rotate-180={expandedSection === 'shopify'}
						>
							↓
						</span>
					</button>

					{#if expandedSection === 'shopify'}
						<div class="mt-4 space-y-4 transition-all">
							<p class="text-gray-600">
								Transform your online presence with our expert Shopify development services. We
								specialize in creating distinctive, high-performing e-commerce stores that combine
								stunning design with powerful functionality.
							</p>
							<ul class="ml-6 list-disc space-y-2 text-gray-600">
								<li>Custom theme development and optimization</li>
								<li>3D product visualization integration</li>
								<li>Advanced user interface animations</li>
								<li>Custom checkout optimization</li>
								<li>Mobile-first responsive design</li>
							</ul>
						</div>
					{/if}
				</div>

				<!-- WooCommerce Section -->
				<div class="content-section bg-background rounded-xl p-6 transition-all duration-300">
					<button
						class="flex w-full items-center justify-between"
						onclick={() => toggleSection('woo')}
					>
						<h3 class="text-xl font-semibold">WooCommerce Solutions</h3>
						<span
							class="text-2xl transition-transform duration-300"
							class:rotate-180={expandedSection === 'woo'}
						>
							↓
						</span>
					</button>

					{#if expandedSection === 'woo'}
						<div class="mt-4 space-y-4 transition-all">
							<p class="text-gray-600">
								Leverage the power of WordPress with our custom WooCommerce development services. We
								create seamlessly integrated e-commerce solutions that maximize your online store's
								potential.
							</p>
							<ul class="ml-6 list-disc space-y-2 text-gray-600">
								<li>Custom product page templates</li>
								<li>Advanced filtering and search functionality</li>
								<li>WordPress integration and optimization</li>
								<li>Performance optimization</li>
								<li>Custom payment gateway integration</li>
							</ul>
						</div>
					{/if}
				</div>

				<!-- SEO Section -->
				<div class="content-section bg-background rounded-xl p-6 transition-all duration-300">
					<button
						class="flex w-full items-center justify-between"
						onclick={() => toggleSection('seo')}
					>
						<h3 class="text-xl font-semibold">E-Commerce SEO & Conversion Optimization</h3>
						<span
							class="text-2xl transition-transform duration-300"
							class:rotate-180={expandedSection === 'seo'}
						>
							↓
						</span>
					</button>

					{#if expandedSection === 'seo'}
						<div class="mt-4 space-y-4 transition-all">
							<p class="text-gray-600">
								Drive organic traffic and increase sales with our comprehensive e-commerce SEO and
								conversion rate optimization services. We implement data-driven strategies to
								improve your store's visibility and performance.
							</p>
							<ul class="ml-6 list-disc space-y-2 text-gray-600">
								<li>Technical SEO optimization</li>
								<li>Content strategy and optimization</li>
								<li>Conversion funnel optimization</li>
								<li>User experience enhancement</li>
								<li>Performance analytics and reporting</li>
							</ul>
						</div>
					{/if}
				</div>
			</div>

			<div class="mt-8 text-center">
				<a href="/contact" class="text-primary inline-flex items-center gap-2 hover:underline">
					Start Your E-Commerce Project
					<span class="text-xl">→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.content-section {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.content-section:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}
</style>
