<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Button from './Button.svelte';

	export let icon: IconDefinition;
	export let buttonIcon: IconDefinition;
	export let title: string;
	export let description: string;
	export let bulletPoints: string[];
	export let ctaText: string;
	export let ctaLink: string;
</script>

<div
	class="service-card flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
>
	<div>
		<div class="mb-6 flex flex-col items-center gap-8">
			<span class="icon-container text-secondary bg-background2 rounded-full p-4">
				<Fa {icon} class="text-4xl" />
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
</style>
