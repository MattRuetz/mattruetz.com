<script lang="ts">
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Button from './ui/Button.svelte';

	let { buttonIcon, title, description, bulletPoints, ctaText, ctaLink, icon, index } = $props();

	// Generate random delay between 1-3s
	let delay = index * 0.5;
</script>

<div
	class="service-card bg-background flex h-full flex-col justify-between overflow-hidden rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
>
	<div>
		<div class="mb-6 flex flex-col items-center gap-8">
			<span class="icon-container text-secondary rounded-full p-8">
				<img
					src={icon}
					alt={title}
					class="floating"
					width="125"
					style="animation-delay: {delay}s"
				/>
			</span>
			<h3 class="text-2xl font-bold">{title}</h3>
		</div>
		<div class="text-text">
			<p class="mb-6 text-lg">{description}</p>
			<hr class="my-4 border-t border-gray-200" />
			<ul class="mb-8 flex-grow space-y-3">
				{#each bulletPoints as point}
					<li class="flex items-start gap-3">
						<Fa icon={faCheck} class="text-primary mt-2 text-sm" />
						<span class="text-text text-lg">{point}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<Button href={ctaLink} icon={buttonIcon}>
			{ctaText}
		</Button>
	</div>
</div>

<style>
	.service-card {
		box-shadow: var(--tight-shadow);
	}

	/* .icon-container {
		box-shadow: 0 0 10px 15px var(--color-background2);
	} */

	.floating {
		animation: floating 4s cubic-bezier(0.37, 0, 0.63, 1.4) infinite;
	}

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
