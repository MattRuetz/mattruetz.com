<script lang="ts">
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { faHeart, faBriefcase, faCogs } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="bg-gray-50 px-4 py-16">
	<div class="container mx-auto">
		<h2 class="mb-12 text-center text-3xl font-bold">What Sets Me Apart</h2>
		<div class="service-cards grid gap-8 md:grid-cols-3">
			<div>
				<ServiceCard
					icon={faHeart}
					title="Attention + Care"
					description="My clients trust me because I am honest and committed to meaningful service."
					bulletPoints={[
						'Satisfaction guarantee',
						'Free revisions + minor updates',
						'Long-term support options',
						"I'll be there every step of the way!"
					]}
					ctaText="More About Me"
					ctaLink="/about"
				/>
			</div>
			<div>
				<ServiceCard
					icon={faBriefcase}
					title="Hosting + Maintenance"
					description="I offer affordable and flexible hosting and maintenance plans!"
					bulletPoints={[
						'Fast hosting',
						'Daily backups',
						'Weekly security audits',
						'Updates and changes'
					]}
					ctaText="See Maintenance Packages"
					ctaLink="/hire-me-2"
				/>
			</div>
			<div>
				<ServiceCard
					icon={faCogs}
					title="Bells + Whistles"
					description="With all the features you can imagine!"
					bulletPoints={[
						'CRM Integration',
						'Analytics & security',
						'User / member accounts',
						'Client admin controls',
						'Training sessions'
					]}
					ctaText="Choose Your Features"
					ctaLink="/hire-me"
				/>
			</div>
		</div>
	</div>
</section>
