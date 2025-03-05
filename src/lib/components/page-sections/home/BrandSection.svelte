<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import DeviceFrame from '$lib/components/DeviceFrame.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const { desktopScrollthru, mobileScrollthru } = $props();

	onMount(async () => {
		if (!browser) return;
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		// Set up scroll animations for both devices
		const devices = document.querySelectorAll('.scroll-image');
		devices.forEach((image) => {
			const wrapper = image.closest('.image-wrapper');
			if (image instanceof HTMLElement && wrapper) {
				// Set initial image height larger than container
				image.style.height = '300%';

				gsap.to(image, {
					y: () => -(image.offsetHeight - wrapper.clientHeight),
					ease: 'none',
					scrollTrigger: {
						trigger: wrapper,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 3
					}
				});
			}
		});
	});
</script>

<section class="brand-section relative overflow-visible px-4 py-[80px] sm:py-16 md:py-20">
	<div class="max-w-8xl mx-auto">
		<div class="brand-card rounded-2xl p-6 sm:p-8 md:p-12">
			<div class="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-16">
				<!-- Content Side -->
				<div class="w-full lg:w-1/2">
					<h2
						class="text-text mb-6 text-center text-4xl leading-tight font-bold md:text-left md:text-6xl lg:text-7xl"
					>
						Elevate Your <span class="gradient-text font-black">Brand</span>
					</h2>

					<ul class="mb-8 space-y-4 text-base sm:text-lg">
						<li class="flex items-start gap-3 md:items-center">
							<span class="text-primary mt-0.5 flex-shrink-0 text-lg md:mt-0">✓</span>
							<span>Fully Responsive - Optimized to look perfect on all devices</span>
						</li>
						<li class="flex items-start gap-3 md:items-center">
							<span class="text-primary mt-0.5 flex-shrink-0 text-lg md:mt-0">✓</span>
							<span>Custom Development - Every site is unique and tailored to your needs</span>
						</li>
						<li class="flex items-start gap-3 md:items-center">
							<span class="text-primary mt-0.5 flex-shrink-0 text-lg md:mt-0">✓</span>
							<span
								>Seamless Integration - Your site will work perfectly with your existing tools</span
							>
						</li>
					</ul>

					<div class="flex justify-center md:justify-start">
						<Button href="/contact" class="w-full max-w-xs sm:w-auto">Get Started</Button>
					</div>
				</div>

				<!-- Devices Side -->
				<div class="-mx-4 mt-8 w-full md:mx-0 md:w-auto lg:mt-0 lg:w-1/2">
					<div
						class="relative flex flex-col items-center md:flex-row md:items-end md:justify-center"
					>
						<!-- Desktop Device (hidden on mobile) -->
						<div class="hidden w-full max-w-xl md:block md:w-4/5">
							<DeviceFrame type="monitor" image={desktopScrollthru} />
						</div>

						<!-- Mobile Device -->
						<div class="w-2/3 md:-ml-4 md:w-1/4 md:max-w-[120px] lg:-ml-8">
							<DeviceFrame type="phone" image={mobileScrollthru} />
						</div>
					</div>
				</div>
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
