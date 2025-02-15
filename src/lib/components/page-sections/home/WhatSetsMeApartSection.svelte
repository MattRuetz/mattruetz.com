<script lang="ts">
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { faHeart, faBriefcase, faCogs, faArrowRight } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="what-sets-me-apart px-4 py-16">
	<div
		class="container mx-auto rounded-2xl bg-[linear-gradient(to_bottom,var(--color-background2)30%,var(--color-background))] px-28 py-16"
	>
		<!-- <h2 class="text-text highlight mb-16 text-left text-4xl font-bold md:text-6xl">
			What Sets Me Apart?
		</h2> -->
		<div class="service-cards grid gap-8 md:grid-cols-3 lg:gap-12">
			<div>
				<ServiceCard
					icon="/images/3dicons/3dicons-heart-front-color.png"
					buttonIcon={faArrowRight}
					title="Attention + Care"
					description="My clients trust me because I am honest, transparent, and committed to meaningful service that delivers results."
					bulletPoints={[
						'Satisfaction guarantee',
						'Free revisions + minor updates',
						'Long-term support options',
						"I'll be there every step of the way!"
					]}
					ctaText="More About Me"
					ctaLink="/about"
					index={0}
				/>
			</div>
			<div>
				<ServiceCard
					icon="/images/3dicons/3dicons-tools-dynamic-color.png"
					buttonIcon={faArrowRight}
					title="Hosting + Maintenance"
					description="Secure, reliable hosting with comprehensive maintenance plans to keep your site running smoothly."
					bulletPoints={[
						'Fast hosting',
						'Daily backups',
						'Weekly security audits',
						'Updates and changes'
					]}
					ctaText="Maintenance Packages"
					ctaLink="/hire-me-2"
					index={1}
				/>
			</div>
			<div>
				<ServiceCard
					icon="/images/3dicons/3dicons-bell-dynamic-color.png"
					buttonIcon={faArrowRight}
					title="Bells + Whistles"
					description="Advanced features and integrations to take your website to the next level."
					bulletPoints={[
						'CRM Integration',
						'Analytics & security',
						'User / member accounts',
						'Client admin controls',
						'Training sessions'
					]}
					ctaText="Choose Your Features"
					ctaLink="/hire-me"
					index={2}
				/>
			</div>
		</div>
	</div>
</section>
