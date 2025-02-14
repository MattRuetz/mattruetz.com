<script lang="ts">
	export let techLogo1: {
		sourceUrl: string;
		altText?: string;
		mediaDetails?: { width: number; height: number };
	} | null;

	export let techLogo2: {
		sourceUrl: string;
		altText?: string;
		mediaDetails?: { width: number; height: number };
	} | null;
</script>

<section class="bg-gray-50 px-4 py-16">
	<div class="container mx-auto">
		<div class="ecommerce-card rounded-2xl border border-gray-200 bg-white p-8">
			<h2 class="mb-6 text-center text-3xl font-bold">Experienced E-Commerce Developer</h2>
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
			</div>
			<p class="mb-6 text-center text-gray-600">
				Looking to build and deploy a custom e-commerce store? You're in good hands! Our expertise
				in custom Shopify theme development ensures your store not only looks great but also drives
				sales.
			</p>
			<div class="text-center">
				<a href="/contact" class="text-primary hover:underline">Learn More →</a>
			</div>
		</div>
	</div>
</section>
