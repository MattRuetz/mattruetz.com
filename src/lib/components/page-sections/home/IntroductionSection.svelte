<script lang="ts">
	import { faCode, faPaintBrush, faSearch, faInfo } from '@fortawesome/free-solid-svg-icons';
	import AnimatedHandwriting from '$lib/components/AnimatedHandwriting.svelte';
	import LittleServiceCard from '$lib/components/LittleServiceCard.svelte';

	const { profileImage } = $props();

	let imageError = $state(false);
	let imageLoading = $state(true);
	const defaultImage = '/images/default-profile.jpg';

	function handleImageError() {
		imageError = true;
	}

	function handleImageLoad() {
		imageLoading = false;
	}

	const services = [
		{
			icon: faCode,
			title: 'Web Design',
			description: 'I design websites that are visually appealing and easy to navigate.'
		}
	];
</script>

<section class="introduction-content py-20 md:pt-24">
	<div class="container mx-auto px-4">
		<!-- Top Section with Image and Introduction -->
		<div class="mb-4 grid gap-12 md:grid-cols-2 md:gap-16">
			<!-- Left Column - Image and Name -->
			<div class="relative">
				<div
					class="profile-image-container relative mx-auto max-w-[500px] overflow-visible rounded-3xl"
				>
					<div class="handwriting-animation">
						<AnimatedHandwriting optionIndex={0} />
					</div>
					<h2 class="hidden">My Work</h2>
					{#if imageLoading}
						<div class="absolute inset-0 animate-pulse rounded-lg bg-gray-100"></div>
					{/if}
					<div class="profile-image-wrapper">
						<img
							src={imageError ? defaultImage : profileImage.sourceUrl}
							alt={profileImage.altText || 'Profile Image'}
							width={profileImage.mediaDetails?.width}
							height={profileImage.mediaDetails?.height}
							class="w-full rounded-lg shadow-lg transition-opacity duration-300"
							class:opacity-0={imageLoading}
							loading="lazy"
							decoding="async"
							onerror={handleImageError}
							onload={handleImageLoad}
						/>
					</div>
				</div>
			</div>

			<!-- Right Column - Large Text -->
			<div class="intro-text mt-8 flex h-full flex-col items-center justify-center gap-4">
				<h2 class="intro-heading font-heading mb-2 text-5xl leading-tight font-bold md:text-7xl">
					I am a <span class="text-primary">full-package</span> web designer and developer
				</h2>
				<hr class="intro-divider w-full border-t border-gray-300" />
				<p class="intro-paragraph text-text/80 text-xl leading-relaxed md:text-2xl">
					I build websites from the ground up for businesses and organizations of all shapes and
					sizes
				</p>
				<p class="intro-paragraph text-text/80 text-xl leading-relaxed font-bold md:text-2xl">
					Get a <span class="text-primary">professionally designed website</span> built to satisfy your
					unique needs and goals!
				</p>
			</div>
		</div>

		<!-- Services Grid -->
		<div class="service-cards mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<LittleServiceCard
				title="Optimized E-Commerce"
				description="I build e-commerce websites that are optimized for sales and conversions."
				icon={faCode}
			/>
			<LittleServiceCard
				title="Informational Websites"
				description="I design informational websites that are visually appealing and easy to navigate."
				icon={faInfo}
			/>
			<LittleServiceCard
				title="SEO Optimized"
				description="I optimize websites for search engines to improve visibility and traffic."
				icon={faSearch}
			/>
			<LittleServiceCard
				title="Brand Identity Design"
				description="I design brand identities to create a consistent and recognizable image for your business."
				icon={faPaintBrush}
			/>
		</div>
	</div>
</section>
