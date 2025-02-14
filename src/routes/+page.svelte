<script lang="ts">
	import { goto } from '$app/navigation';
	import { onNavigate } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Fa from 'svelte-fa';
	import {
		faHeart,
		faBriefcase,
		faLightbulb,
		faCode,
		faPaintBrush,
		faMobileScreen
	} from '@fortawesome/free-solid-svg-icons';
	import { faWordpress } from '@fortawesome/free-brands-svg-icons';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Properly access the proxy-wrapped props
	let { data } = $props();
	let isLoading = $state(false);

	// Reactive derived values using proxy-safe access
	const projects = $derived(data?.projects || []);
	const pagination = $derived({
		currentPage: data?.pagination?.currentPage || 1,
		totalPages: data?.pagination?.totalPages || 1,
		totalPosts: data?.pagination?.totalPosts || 0,
		perPage: data?.pagination?.perPage || 9,
		hasNextPage: data?.pagination?.hasNextPage || false,
		hasPreviousPage: data?.pagination?.hasPreviousPage || false
	});

	// Derived pagination values
	const hasNextPage = $derived(pagination.currentPage < pagination.totalPages);
	const hasPreviousPage = $derived(pagination.currentPage > 1);
	const startIndex = $derived((pagination.currentPage - 1) * pagination.perPage + 1);
	const endIndex = $derived(
		Math.min(pagination.currentPage * pagination.perPage, pagination.totalPosts)
	);

	async function handlePageChange(newPage: number) {
		if (newPage === pagination.currentPage) return;
		isLoading = true;
		await goto(`?page=${newPage}`, { keepFocus: true });
	}

	// Reset loading state after navigation
	onNavigate(() => {
		isLoading = false;
	});

	// Hero section background animation
	let mouseX = $state(0);
	let mouseY = $state(0);

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX / window.innerWidth;
		mouseY = event.clientY / window.innerHeight;
	}

	onMount(async () => {
		if (!browser) return;

		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');

		gsap.registerPlugin(ScrollTrigger);

		// Hero section animations
		const heroTl = gsap.timeline();
		heroTl
			.from('h1', {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: 'power3.out'
			})
			.from(
				'.hero-text',
				{
					y: 30,
					opacity: 0,
					duration: 0.8,
					ease: 'power3.out'
				},
				'-=0.5'
			)
			.from(
				'.hero-buttons a',
				{
					y: 20,
					opacity: 0,
					duration: 0.5,
					stagger: 0.2,
					ease: 'power3.out'
				},
				'-=0.3'
			);

		// Introduction section animations
		gsap.from('.profile-image', {
			scale: 0.8,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '.profile-image',
				start: 'top bottom-=100',
				end: 'top center',
				scrub: 1
			}
		});

		gsap.from('.skill-item', {
			x: -30,
			opacity: 0,
			duration: 0.5,
			stagger: 0.1,
			scrollTrigger: {
				trigger: '.skill-item',
				start: 'top bottom-=100',
				toggleActions: 'play none none reverse'
			}
		});

		// Services section animations
		gsap.from('.service-card', {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			scrollTrigger: {
				trigger: '.service-card',
				start: 'top bottom-=100',
				toggleActions: 'play none none reverse'
			}
		});

		// Brand section animations
		const brandTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.brand-section',
				start: 'top center+=100',
				toggleActions: 'play none none reverse'
			}
		});

		brandTl
			.from('.brand-content', {
				x: -50,
				opacity: 0,
				duration: 0.8
			})
			.from(
				'.brand-image',
				{
					x: 50,
					opacity: 0,
					duration: 0.8
				},
				'-=0.6'
			);

		// E-commerce section animations
		gsap.from('.ecommerce-card', {
			scale: 0.95,
			opacity: 0,
			duration: 0.8,
			scrollTrigger: {
				trigger: '.ecommerce-card',
				start: 'top bottom-=100',
				toggleActions: 'play none none reverse'
			}
		});

		// CTA section animations
		gsap.from('.cta-section', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			scrollTrigger: {
				trigger: '.cta-section',
				start: 'top bottom-=100',
				toggleActions: 'play none none reverse'
			}
		});

		// Parallax background effects
		gsap.to('.hero-bg', {
			y: '20%',
			ease: 'none',
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'top top',
				end: 'bottom top',
				scrub: 1
			}
		});
	});

	const profileImage = $derived(
		data?.page?.homeFields?.profileImage || {
			sourceUrl: '/images/default-profile.jpg',
			altText: 'Profile Image',
			mediaDetails: { width: 800, height: 800 }
		}
	);
	const defaultImage = '/images/default-profile.jpg';

	let imageError = $state(false);
	let imageLoading = $state(true);

	function handleImageError() {
		imageError = true;
	}

	function handleImageLoad() {
		imageLoading = false;
	}
</script>

<!-- Hero Section -->
<section
	class="hero-section from-primary/10 to-secondary/10 relative min-h-[90vh] bg-gradient-to-br px-4 py-16"
	onmousemove={handleMouseMove}
	aria-label="Hero Section"
>
	<div class="hero-bg absolute inset-0 overflow-hidden">
		<div
			class="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br"
			style="transform: translate({mouseX * 20}px, {mouseY * 20}px)"
		></div>
	</div>
	<div class="relative container mx-auto">
		<div class="max-w-3xl">
			<h1 class="mb-6 text-5xl font-bold md:text-6xl">
				Inspired<br />
				Web Design +<br />
				Development
			</h1>
			<p class="hero-text mb-8 text-xl text-gray-700">
				Build your web presence with a Full-Stack developer who understands your business needs
			</p>
			<div class="hero-buttons flex gap-4">
				<a
					href="/portfolio"
					class="bg-primary hover:bg-primary/90 rounded-lg px-6 py-3 text-white transition-colors"
				>
					Portfolio
				</a>
				<a
					href="/contact"
					class="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-50"
				>
					Contact
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="bg-gray-50 py-16">
	<div class="container mx-auto px-4">
		<div class="grid items-center gap-8 md:grid-cols-2">
			<div class="profile-image relative">
				{#if imageLoading}
					<div class="absolute inset-0 animate-pulse rounded-lg bg-gray-100"></div>
				{/if}

				<img
					src={imageError ? defaultImage : profileImage.sourceUrl}
					alt={profileImage.altText || 'Profile Image'}
					width={profileImage.mediaDetails?.width}
					height={profileImage.mediaDetails?.height}
					class="mx-auto w-full max-w-md rounded-lg shadow-lg transition-opacity duration-300"
					class:opacity-0={imageLoading}
					loading="lazy"
					decoding="async"
					onerror={handleImageError}
					onload={handleImageLoad}
				/>
			</div>
			<div class="lg:w-2/3">
				<h2 class="mb-6 text-3xl font-bold">Hi, I'm Matt</h2>
				<p class="mb-6 text-xl text-gray-700">I am a Full-package web designer and developer</p>
				<div class="grid gap-6 sm:grid-cols-2">
					<div class="skill-item flex items-center gap-3">
						<span class="bg-primary/10 text-primary rounded-full p-2">
							<Fa icon={faCode} size="lg" />
						</span>
						<span>5+ years experience</span>
					</div>
					<div class="skill-item flex items-center gap-3">
						<span class="bg-primary/10 text-primary rounded-full p-2">
							<Fa icon={faWordpress} size="lg" />
						</span>
						<span>WordPress Websites</span>
					</div>
					<div class="skill-item flex items-center gap-3">
						<span class="bg-primary/10 text-primary rounded-full p-2">
							<Fa icon={faPaintBrush} size="lg" />
						</span>
						<span>Brand Identity Design</span>
					</div>
					<div class="skill-item flex items-center gap-3">
						<span class="bg-primary/10 text-primary rounded-full p-2">
							<Fa icon={faMobileScreen} size="lg" />
						</span>
						<span>Web & PWA Apps</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="bg-gray-50 px-4 py-16">
	<div class="container mx-auto">
		<h2 class="mb-12 text-center text-3xl font-bold">What sets me apart?</h2>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div
				class="service-card rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
			>
				<div class="text-primary mb-4">
					<Fa icon={faHeart} size="2x" />
				</div>
				<h3 class="mb-3 text-xl font-semibold">Attention to Detail</h3>
				<p class="text-gray-600">Every pixel matters in creating a seamless user experience.</p>
			</div>
			<div
				class="service-card rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
			>
				<div class="text-primary mb-4">
					<Fa icon={faBriefcase} size="2x" />
				</div>
				<h3 class="mb-3 text-xl font-semibold">Professionalism</h3>
				<p class="text-gray-600">Clear communication and reliable delivery on every project.</p>
			</div>
			<div
				class="service-card rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
			>
				<div class="text-primary mb-4">
					<Fa icon={faLightbulb} size="2x" />
				</div>
				<h3 class="mb-3 text-xl font-semibold">Skills & Mindset</h3>
				<p class="text-gray-600">Technical expertise combined with a problem-solving approach.</p>
			</div>
		</div>
	</div>
</section>

<!-- Brand Section -->
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
				<a
					href="/contact"
					class="bg-primary hover:bg-primary/90 inline-block rounded-lg px-6 py-3 text-white transition-colors"
				>
					Get Started
				</a>
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

<!-- E-commerce Section -->
<section class="bg-gray-50 px-4 py-16">
	<div class="container mx-auto">
		<div class="ecommerce-card rounded-2xl border border-gray-200 bg-white p-8">
			<h2 class="mb-6 text-center text-3xl font-bold">Experienced E-Commerce Developer</h2>
			<div class="mb-8 flex flex-wrap justify-center gap-8">
				<img src="/images/logos/woocommerce-logo.svg" alt="WooCommerce" class="h-8" />
				<img src="/images/squarespace-logo.png" alt="Squarespace" class="h-8" />
				<img src="/images/shopify-logo.png" alt="Shopify" class="h-8" />
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

<!-- Projects Section -->
<section class="bg-white px-4 py-16">
	<ProjectsGrid {projects} {pagination} {isLoading} onPageChange={handlePageChange} />
</section>

<!-- Call to Action -->
<section class="bg-gray-50 px-4 py-16">
	<div class="container mx-auto">
		<div
			class="cta-section from-primary to-secondary rounded-2xl bg-gradient-to-br p-8 text-center text-white"
		>
			<h2 class="mb-6 text-3xl font-bold">Let's build something great together</h2>
			<p class="mb-8">
				Bring your website idea to life! Let's discuss how I can help you achieve your goals.
			</p>
			<a
				href="/contact"
				class="text-primary inline-block rounded-lg bg-white px-6 py-3 transition-colors hover:bg-gray-100"
			>
				Get Started
			</a>
		</div>
	</div>
</section>

<style>
	/* Add smooth scrolling to the page */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Hero section background effect */
	.hero-bg {
		pointer-events: none;
		transform-style: preserve-3d;
	}

	/* Service card hover effect */
	.service-card {
		transition: transform 0.3s ease;
	}

	.service-card:hover {
		transform: translateY(-5px);
	}

	/* Profile image container effect */
	.profile-image {
		position: relative;
	}

	.profile-image::after {
		content: '';
		position: absolute;
		inset: -1rem;
		background: radial-gradient(circle at center, rgba(var(--color-primary-rgb), 0.1), transparent);
		z-index: -1;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.profile-image:hover::after {
		opacity: 1;
	}
</style>
