<script>
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<!-- CTA Section -->
<section class="px-4 py-20">
	<div
		class="from-primary/10 to-primary/5 mx-auto max-w-4xl rounded-2xl bg-gradient-to-r p-8 text-center shadow-lg sm:p-12"
	>
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
		<p class="mx-auto mb-8 max-w-xl text-lg text-gray-700">
			Let's work together to create a website that perfectly represents your brand and helps you
			achieve your business goals.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/contact" isPrimary={true}>Contact Me</Button>
			<Button href="/portfolio" isPrimary={false}>View My Work</Button>
		</div>
	</div>
</section>
