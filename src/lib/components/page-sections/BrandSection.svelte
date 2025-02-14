<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section class="brand-section bg-white px-4 py-16">
	<div class="container mx-auto">
		<div class="flex flex-col gap-12 lg:flex-row lg:items-center">
			<div class="lg:w-1/2">
				<h2 class="mb-6 text-3xl font-bold">Elevate Your Brand</h2>
				<ul class="mb-8 space-y-4">
					<li class="flex items-center gap-3">
						<span class="text-primary">✓</span>
						<span>Fully Responsive - Optimized to look perfect on all devices</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-primary">✓</span>
						<span>Custom Development - Every site is unique and tailored to your needs</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-primary">✓</span>
						<span
							>Seamless Integration - Your site will work perfectly with your existing tools</span
						>
					</li>
				</ul>
				<Button href="/contact">Get Started</Button>
			</div>
			<div class="lg:w-1/2">
				<div class="relative">
					<!-- Add your device mockup images here -->
					MOCKUP IMAGES!
				</div>
			</div>
		</div>
	</div>
</section>
