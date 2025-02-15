<script>
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="py-20">
	<div class="relative container mx-auto px-4">
		<div
			in:fade={{ duration: 400 }}
			class="bg-primary relative min-h-[400px] overflow-hidden rounded-3xl p-16 text-white md:p-40"
			style="background-position: 100% 50%; background-repeat: no-repeat;"
		>
			<div class="logo-icon absolute -top-[90%] left-[-10%] z-0 w-[120%]">
				<img src="/images/branding/Logo Icon Final-cropped.svg" alt="Logo" class="h-auto w-full" />
			</div>
			<div class="z-10 mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
				<h2 class="font-heading mb-6 text-4xl leading-tight font-bold drop-shadow-sm md:text-5xl">
					Ready to Build Something Amazing?
				</h2>
				<p class="mb-12 text-lg leading-relaxed opacity-90 drop-shadow md:text-xl">
					Jump on a <strong>free 30-minute call</strong> with me to explore how we can bring your vision
					to life!
				</p>
				<Button
					href="https://tidycal.com/mattruetz/30-minute-meeting"
					class="!text-primary bg-white hover:bg-white/90"
				>
					<span>✨ Let's Chat</span>
					<span class="transform transition-transform group-hover:translate-x-1">→</span>
				</Button>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes myPulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}
</style>
