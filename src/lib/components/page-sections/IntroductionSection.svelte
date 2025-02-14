<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCode, faPaintBrush, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

	import { faWordpress } from '@fortawesome/free-brands-svg-icons';

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
</script>

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
