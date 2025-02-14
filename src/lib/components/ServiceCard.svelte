<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Button from './Button.svelte';

	let { icon, title, description, bulletPoints, ctaText, ctaLink } = $props();
</script>

<div
	class="service-card rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl"
>
	<div class="mb-4 flex items-center">
		<div class="text-primary mr-3">
			<Fa {icon} size="2x" />
		</div>
		<h3 class="text-xl font-semibold">{title}</h3>
	</div>
	<div class="text-gray-700">
		<p class="mb-4">{description}</p>
		<ul class="mb-4 list-disc space-y-1 pl-5">
			{#each bulletPoints as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
	<div>
		<Button href={ctaLink}>{ctaText}</Button>
	</div>
</div>
