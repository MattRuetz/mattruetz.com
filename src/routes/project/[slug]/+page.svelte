<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let data;
	const { project } = data as { project: any };

	// Add state for scroll progress
	let scrollProgress = 0;
	let ticking = false;

	onMount(async () => {
		if (!browser) return;

		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');

		gsap.registerPlugin(ScrollTrigger);

		// Create a timeline for initial animations
		const tl = gsap.timeline();

		// Header animations
		tl.from('.project-header img', {
			y: -30,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out'
		})
			.from(
				'.project-header h1',
				{
					y: 30,
					opacity: 0,
					duration: 0.8,
					ease: 'power2.out'
				},
				'-=0.6'
			)
			.from(
				'.project-header p',
				{
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: 'power2.out'
				},
				'-=0.6'
			);

		// Monitor frame animation
		tl.from(
			'.monitor-frame',
			{
				y: 100,
				opacity: 0,
				duration: 1,
				ease: 'power3.out'
			},
			'-=0.4'
		);

		// Animate meta items
		gsap.from('.meta-item', {
			y: 30,
			opacity: 0,
			duration: 0.6,
			stagger: 0.15,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.meta-item',
				start: 'top bottom-=200',
				toggleActions: 'play none none reverse'
			}
		});

		// Animate feature sections
		document.querySelectorAll('.project-feature').forEach((feature) => {
			gsap.from(feature, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: feature,
					start: 'top bottom-=400',
					toggleActions: 'play none none reverse'
				}
			});
		});

		// Animate testimonial with a subtle scale
		gsap.from('blockquote', {
			scale: 0.95,
			opacity: 0,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: 'blockquote',
				start: 'top bottom-=250',
				toggleActions: 'play none none reverse',
				markers: false
			}
		});

		// Set up the scroll animation for the screenshot
		if (project.acf.page_scroll_image) {
			const image = document.querySelector('.scroll-image') as HTMLElement;
			const imageWrapper = document.querySelector('.image-wrapper') as HTMLElement;

			if (image && imageWrapper) {
				// Set initial image height larger than container for scrolling effect
				image.style.height = '180%';

				gsap.to(image, {
					y: () => -(image.offsetHeight - imageWrapper.offsetHeight),
					ease: 'none',
					scrollTrigger: {
						trigger: imageWrapper,
						start: 'top center+=100',
						end: 'bottom center-=100',
						scrub: 3
					}
				});
			}
		}

		// Back button hover effect
		const backButton = document.querySelector('a[href="/"]');
		if (backButton) {
			backButton.addEventListener('mouseenter', () => {
				gsap.to(backButton.querySelector('svg'), {
					x: -3,
					duration: 0.3,
					ease: 'power2.out'
				});
			});
			backButton.addEventListener('mouseleave', () => {
				gsap.to(backButton.querySelector('svg'), {
					x: 0,
					duration: 0.3,
					ease: 'power2.out'
				});
			});
		}

		// Parallax circle animations
		gsap.to('.circle-1', {
			y: '-100%',
			ease: 'none',
			scrollTrigger: {
				trigger: '.project-detail',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1
			}
		});

		gsap.to('.circle-2', {
			y: '-150%',
			ease: 'none',
			scrollTrigger: {
				trigger: '.project-detail',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1.5
			}
		});

		gsap.to('.circle-3', {
			y: '-200%',
			ease: 'none',
			scrollTrigger: {
				trigger: '.project-detail',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 2
			}
		});

		// Replace the scroll progress calculation with this optimized version
		function updateScrollProgress() {
			const winScroll = window.scrollY;
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			scrollProgress = Math.min(100, Math.max(0, (winScroll / height) * 100));
			ticking = false;
		}

		window.addEventListener('scroll', () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateScrollProgress();
				});
				ticking = true;
			}
		});

		// Initial progress calculation
		updateScrollProgress();
	});
</script>

<!-- Replace the progress bar div -->
<div class="fixed top-0 left-0 z-50 h-1 w-full overflow-hidden">
	<div
		class="bg-primary h-full w-full transform-gpu transition-transform duration-150 ease-out"
		style="transform: translateX({scrollProgress - 100}%)"
	></div>
</div>

<!-- Sticky navigation -->
<div class="bg-background/80 sticky top-0 z-40 backdrop-blur">
	<div class="max-w-8xl mx-auto px-8 py-4">
		<a
			href="/"
			class="group btn bg-primary br-primary md:hover:bg-primary md:text-primary inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:text-white md:border md:bg-transparent"
		>
			<svg
				class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			Back to Projects
		</a>
	</div>
</div>

<div class="w-full" in:fly={{ y: 20, duration: 300 }}>
	<!-- Header section -->
	<div class="bg-background">
		<div class="max-w-8xl mx-auto px-8 py-8">
			<header class="project-header relative text-center">
				{#if project.acf.client_logo}
					<img
						src={project.acf.client_logo}
						alt={project.acf.client_name}
						class="mx-auto mb-8 max-h-24 w-auto"
					/>
				{/if}
				<h1 class="font-heading text-text mb-4 text-5xl leading-tight font-bold">
					{project.title}
				</h1>
				{#if project.acf.catchy_heading}
					<p class="text-text/80 text-2xl font-light">{project.acf.catchy_heading}</p>
				{/if}
			</header>
		</div>
	</div>

	<!-- Monitor section -->
	<div class="bg-background">
		{#if project.acf.page_scroll_image}
			<div class="max-w-8xl mx-auto px-0 pt-8">
				<div class="my-8 w-full px-4 md:px-12">
					<div class="monitor-frame relative mx-auto max-w-6xl">
						<div class="bg-text relative rounded-[2rem] p-3 shadow-2xl">
							<div class="bg-background2 relative overflow-hidden rounded-[1.5rem]">
								<div class="image-wrapper relative h-[70vh] min-h-[500px] overflow-hidden">
									<img
										src={project.acf.page_scroll_image}
										alt={project.title}
										class="scroll-image absolute top-0 w-full object-cover object-top"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Meta section -->
	<div class="bg-background prose">
		<div class="max-w-8xl mx-auto px-0">
			<div class="relative z-10 mx-auto max-w-6xl">
				<div class="my-16 grid grid-cols-1 gap-12 rounded-lg md:grid-cols-2 lg:grid-cols-4">
					{#if project.acf.project_description_a}
						<div class="meta-item col-span-2 text-lg leading-relaxed">
							{@html project.acf.project_description_a}
						</div>
					{/if}
					<div class="flex h-full flex-col gap-12">
						{#if project.acf.year}
							<div class="meta-item">
								<h3 class="!text-primary mb-2 text-xl font-semibold tracking-wider uppercase">
									Year
								</h3>
								<p class="text-text">{project.acf.year}</p>
							</div>
						{/if}
						{#if project.acf.technology?.length}
							<div class="meta-item">
								<h3 class="!text-primary mb-2 text-xl font-semibold tracking-wider uppercase">
									Technology
								</h3>
								<ul class="space-y-1">
									{#each project.acf.technology as tech}
										<li class="text-text">{tech}</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
					<div class="flex h-full flex-col gap-12">
						{#if project.acf.services?.length}
							<div class="meta-item">
								<h3 class="!text-primary mb-2 text-xl font-semibold tracking-wider uppercase">
									Services
								</h3>
								<ul class="space-y-1">
									{#each project.acf.services as service}
										<li class="text-text">{service}</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Content section -->
	<div class="bg-background">
		<div class="container mx-auto px-4 py-16">
			{#each [1, 2, 3] as i}
				{#if project.acf[`feature_heading_${i}`] || project.acf[`feature_image_${i}`]}
					<section
						class="project-feature mb-32 rounded-2xl px-16 py-12 {i % 2 === 0
							? 'even bg-background2/50'
							: 'odd'}"
					>
						<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
							<div class="feature-content {i % 2 === 0 ? 'lg:order-2' : ''}">
								{#if project.acf[`feature_heading_${i}`]}
									<div class="text-text mb-6 text-2xl font-bold">
										{@html project.acf[`feature_heading_${i}`]}
									</div>
								{/if}
								{#if project.acf[`feature_description_${i}`]}
									<div class="text-text/80 text-lg leading-relaxed">
										{@html project.acf[`feature_description_${i}`]}
									</div>
								{/if}
							</div>
							{#if project.acf[`feature_image_${i}`]}
								<div class="feature-image {i % 2 === 0 ? 'lg:order-1' : ''}">
									<img
										src={project.acf[`feature_image_${i}`]}
										alt=""
										class="w-full rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
									/>
								</div>
							{/if}
						</div>
					</section>
				{/if}
			{/each}

			{#if project.acf.testimonial}
				<blockquote
					class="bg-background2 my-24 rounded-2xl p-12 text-xl leading-relaxed italic shadow-xl"
				>
					<div class="relative">
						<svg
							class="text-primary/20 absolute -top-4 -left-4 h-8 w-8"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
							/>
						</svg>
						{@html project.acf.testimonial}
					</div>
				</blockquote>
			{/if}

			<section
				class="mt-16 grid grid-cols-1 gap-12 border-t border-[#282828]/10 pt-8 lg:grid-cols-2"
			>
				{#if project.acf.summary_heading || project.acf.summary_text}
					<div>
						{#if project.acf.summary_heading}
							<h2 class="text-text mb-4 text-2xl font-bold">
								{project.acf.summary_heading}
							</h2>
						{/if}
						{#if project.acf.summary_text}
							<div class="text-text/80 text-lg">
								{@html project.acf.summary_text}
							</div>
						{/if}
					</div>
				{/if}
				{#if project.acf.client_logo}
					<div class="flex flex-col items-center justify-center gap-4">
						<img
							src={project.acf.client_logo}
							alt={project.acf.client_name}
							class="mx-auto mb-8 max-h-36 w-auto"
						/>
					</div>
				{/if}
			</section>
		</div>
	</div>
</div>

<style>
	.meta-item ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.meta-item li {
		margin-bottom: 0.25rem;
	}

	.project-feature {
		margin: 4rem 0;
	}

	.project-feature img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		margin: 2rem 0;
	}

	/* Add smooth scrolling to the page */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Ensure content stays above circles */
	.project-header,
	.monitor-frame,
	.prose {
		position: relative;
		z-index: 1;
	}

	.monitor-frame::before {
		content: '';
		position: absolute;
		inset: 2rem -2rem -2rem;
		background: radial-gradient(circle at center, rgba(var(--color-primary-rgb), 0.1), transparent);
		z-index: -1;
		filter: blur(2rem);
	}

	.feature-content {
		position: relative;
	}

	.feature-content::before {
		content: '';
		position: absolute;
		inset: -2rem;
		background: radial-gradient(
			circle at center,
			rgba(var(--color-primary-rgb), 0.05),
			transparent
		);
		z-index: -1;
		filter: blur(2rem);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-feature:hover .feature-content::before {
		opacity: 1;
	}

	.feature-image img {
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	blockquote {
		position: relative;
		overflow: hidden;
	}

	blockquote::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(45deg, rgba(var(--color-primary-rgb), 0.05), transparent);
		z-index: 0;
	}

	blockquote > div {
		position: relative;
		z-index: 1;
	}
</style>
