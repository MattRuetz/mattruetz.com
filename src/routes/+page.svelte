<script lang="ts">
	import { goto } from '$app/navigation';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import HeroSection from '$lib/components/page-sections/home/HeroSection.svelte';
	import IntroductionSection from '$lib/components/page-sections/home/IntroductionSection.svelte';
	import WhatSetsMeApartSection from '$lib/components/page-sections/home/WhatSetsMeApartSection.svelte';
	import BrandSection from '$lib/components/page-sections/home/BrandSection.svelte';
	import EcommerceSection from '$lib/components/page-sections/home/EcommerceSection.svelte';
	import ServicesSection from '$lib/components/page-sections/home/Services.svelte';
	import ProjectsSection from '$lib/components/page-sections/home/ProjectsSection.svelte';
	import CallToActionSection from '$lib/components/page-sections/home/CallToActionSection.svelte';
	import FeaturedProjectsSection from '$lib/components/page-sections/home/FeaturedProjectsSection.svelte';
	import TestimonialsSection from '$lib/components/page-sections/home/TestimonialsSection.svelte';

	// Properly access the proxy-wrapped props
	let { data } = $props();
	let isLoading = $state(false);

	// Reactive derived values using proxy-safe access
	const projects = $derived(data?.projects || []);
	const testimonials = $derived(data?.testimonials || []);
	const pagination = $derived({
		currentPage: data?.pagination?.currentPage || 1,
		totalPages: data?.pagination?.totalPages || 1,
		totalPosts: data?.pagination?.totalPosts || 0,
		perPage: data?.pagination?.perPage || 9,
		hasNextPage: data?.pagination?.hasNextPage || false,
		hasPreviousPage: data?.pagination?.hasPreviousPage || false
	});

	async function handlePageChange(newPage: number) {
		if (newPage === pagination.currentPage) return;
		isLoading = true;
		await goto(`?page=${newPage}`, { keepFocus: true });
	}

	// Reset loading state after navigation
	onNavigate(() => {
		isLoading = false;
	});

	onMount(async () => {
		if (!browser) return;
		const { animatePage } = await import('$lib/animations/gsapAnimations');
		animatePage();
	});

	const profileImage = $derived(
		data?.page?.homeFields?.profileImage || {
			sourceUrl: '/images/default-profile.jpg',
			altText: 'Profile Image',
			mediaDetails: { width: 800, height: 800 }
		}
	);
	const techLogo1 = $derived(data?.page?.homeFields?.techLogo1 || null);
	const techLogo2 = $derived(data?.page?.homeFields?.techLogo2 || null);
	const techLogo3 = $derived(data?.page?.homeFields?.techLogo3 || null);
	const desktopScrollthru = $derived(data?.page?.homeFields?.desktopScrollthru || null);
	const mobileScrollthru = $derived(data?.page?.homeFields?.mobileScrollthru || null);
</script>

<HeroSection />
<IntroductionSection {profileImage} />
<FeaturedProjectsSection {projects} />
<TestimonialsSection {testimonials} />

<ServicesSection />

<!-- <WhatSetsMeApartSection /> -->

<EcommerceSection {techLogo1} {techLogo2} {techLogo3} />

<BrandSection {desktopScrollthru} {mobileScrollthru} />

<!-- <ProjectsSection {projects} {pagination} {isLoading} {handlePageChange} /> -->

<CallToActionSection />
