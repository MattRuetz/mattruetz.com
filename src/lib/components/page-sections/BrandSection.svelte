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

<section class="brand-section flex min-h-[80dvh] items-center bg-white px-4 pt-16 pb-32">
	<div class="container mx-auto">
		<div class="flex flex-col gap-8 lg:flex-row-reverse lg:items-center">
			<div class="lg:w-1/2">
				<h2 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Elevate Your Brand</h2>
				<ul class="mb-8 space-y-4 text-lg">
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
			<div class="devices-showcase lg:w-3/5">
				<div class="relative flex items-end justify-center gap-4">
					<div class="w-full">
						<DeviceFrame type="monitor" image={desktopScrollthru} />
					</div>
					<div class="w-1/4">
						<DeviceFrame type="phone" image={mobileScrollthru} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
