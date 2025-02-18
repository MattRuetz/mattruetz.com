<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import AnimatedDrawing from '$lib/components/AnimatedDrawing.svelte';
	import AnimatedHandwriting from '$lib/components/AnimatedHandwriting.svelte';
	import Button from '$lib/components/Button.svelte';
	// import { trackPortfolioView, trackConsultationClick } from './Analytics.svelte';

	let isMobile = false;

	const services = [
		{
			title: 'Custom Web Development',
			description:
				'Bespoke websites built with modern technologies for optimal performance and user experience.',
			icon: '🛠️',
			imageOptionIndex: 0,
			examples: [
				'Full-Stack Web Applications',
				'Progressive Web Apps (PWAs)',
				'API Development & Integration',
				'Complex User Journeys'
			]
		},
		{
			title: 'Bespoke Design',
			description:
				"I build websites that speak the language of your brand, with original designs that you can't get anywhere else.",
			icon: '📱',
			imageOptionIndex: 1,
			examples: [
				'Custom UI/UX Design Systems',
				'Interactive Animations',
				'Brand-Aligned Interfaces',
				'Responsive Layouts'
			]
		},
		{
			title: 'CRO and SEO',
			description:
				'Built-in search engine optimization to help your website get more traffic, and increase conversions.',
			icon: '📈',
			imageOptionIndex: 2,
			examples: [
				'Conversion Funnel Optimization',
				'Search Engine Performance',
				'Analytics Integration',
				'A/B Testing'
			]
		},
		{
			title: 'Focus on Growth',
			description:
				'Web design and development focused on ROI and measurable results, not just looks.',
			icon: '🚀',
			imageOptionIndex: 4,
			examples: [
				'Business Scaling Solutions',
				'Automated Workflows',
				'Lead Generation Systems',
				'Customer Journey Mapping'
			]
		}
	];

	let activeIndex = 0;
	let titleVisible = false;

	function toggleFeature(index: number) {
		activeIndex = index;
	}

	onMount(() => {
		// Check if mobile on mount and update on resize
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<section id="services" class="relative overflow-hidden px-4 py-26">
	<div class="container mx-auto">
		<div class="flex flex-col items-center">
			<h2 class="sr-only">Services - What We Offer</h2>
			<div class="relative mb-16 w-full max-w-[500px]">
				<AnimatedHandwriting optionIndex={3} />
			</div>

			<div class="grid w-full gap-8 md:grid-cols-2 lg:gap-16">
				<div class="flex flex-col gap-4">
					{#each services as service, i}
						<button
							class="service-item hover:bg-background2/50 w-full cursor-pointer overflow-hidden rounded-xl border-2 border-transparent text-left transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm {activeIndex ===
							i
								? '!border-primary/50 !bg-background2/80 hover:!translate-y-0 hover:!shadow-none'
								: ''}"
							class:active={activeIndex === i}
							onclick={() => toggleFeature(i)}
						>
							<div class="flex items-center gap-4 p-6">
								<div>
									<span class="text-4xl">{service.icon}</span>
								</div>
								<h3
									class="flex-1 font-bold transition-all duration-300 {activeIndex === i
										? 'text-4xl'
										: 'text-3xl'}"
								>
									{service.title}
								</h3>
								<span class="text-primary text-2xl font-light">{activeIndex === i ? '−' : '+'}</span
								>
							</div>
							{#if activeIndex === i}
								<div class="px-6 pb-6" in:fade={{ duration: 300 }}>
									<p class="text-text/80 mb-4 text-xl leading-relaxed">{service.description}</p>
									<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
										{#each service.examples as example}
											<div class="text-text/70 flex items-center gap-2">
												<div class="bg-primary/60 h-1.5 w-1.5 rounded-full"></div>
												<span class="text-lg">{example}</span>
											</div>
										{/each}
									</div>
								</div>
							{/if}
						</button>
					{/each}

					<div
						class="mt-8 text-center"
						class:opacity-100={titleVisible}
						in:fade={{ duration: 600, delay: 400 }}
					>
						<div class="flex flex-col justify-center gap-4 md:flex-row">
							<Button href="#contact" class="w-full">
								<span>Get Started</span>
								<Fa class="icon" icon={faArrowRight} />
							</Button>
						</div>
					</div>
				</div>

				{#if !isMobile}
					<div
						class="relative flex min-h-[600px] items-center justify-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,245,238,0.5)_0%,rgba(255,245,238,0)_70%)] md:min-h-[400px]"
					>
						<div class="bg-background2 absolute z-0 h-[90%] w-[90%] rounded-full"></div>
						<div class="relative z-10">
							{#each services as service, i}
								{#if activeIndex === i}
									<AnimatedDrawing optionIndex={service.imageOptionIndex} />
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes floating {
		0% {
			transform: translateY(-5px);
		}
		50% {
			transform: translateY(5px);
		}
		100% {
			transform: translateY(-5px);
		}
	}
</style>
