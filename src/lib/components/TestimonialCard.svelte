<script lang="ts">
	import type { Testimonial } from '$lib/types';
	import { faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons';
	import { fly, fade, slide } from 'svelte/transition';
	import { Fa } from 'svelte-fa';

	let {
		authorName,
		authorTitle,
		message,
		rating,
		authorPhoto,
		relatedProject,
		focusPart
	}: Testimonial = $props();

	let showingFullMessage = $state(false);
</script>

<div
	class="testimonial-card bg-background h-fit w-full overflow-visible rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
>
	<div class="mb-6 flex items-center justify-between gap-4">
		<div class="flex gap-0.5">
			{#each Array(5) as _, i}
				<svg
					class={`h-6 w-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/>
				</svg>
			{/each}
			<span class="text-sm">{rating} / 5</span>
		</div>
		{#if relatedProject}
			<a
				href={`/project/${relatedProject.node?.slug}`}
				class="text-text/50 hover:text-primary/80 inline-flex items-center gap-2 text-lg transition-all duration-300"
			>
				<span class="text-sm">View Project</span>
				<Fa icon={faEye} class="text-sm" />
			</a>
		{/if}
	</div>

	{#if focusPart && !showingFullMessage}
		<p class="focus-part text-text/80 mb-2 inline-block text-3xl leading-12 tracking-tight">
			{@html `${focusPart}`}
		</p>
		<button
			onclick={() => (showingFullMessage = true)}
			class="text-primary inline-flex cursor-pointer items-center gap-2 rounded-full text-sm transition-all duration-300"
		>
			Show Full <Fa icon={faChevronDown} class="text-sm" />
		</button>
	{/if}

	{#if showingFullMessage}
		<p
			class="text-text/80 mb-2 text-lg italic"
			in:fly={{ y: 10, duration: 0.3 }}
			out:fly={{ y: -10, duration: 0.3 }}
		>
			{@html `${message}`}
		</p>
	{/if}

	<div class="mt-8 flex items-center gap-4">
		<img
			src={authorPhoto?.node?.sourceUrl || '/images/default-profile.jpg'}
			alt={authorPhoto?.node?.altText || authorName}
			class="h-12 w-12 rounded-full object-cover"
		/>
		<div>
			<h4 class="text-text font-semibold">{authorName}</h4>
			<p class="text-text/60 text-sm">{authorTitle}</p>
		</div>
	</div>
</div>

<style>
	.testimonial-card {
		box-shadow: var(--tight-shadow);
	}
</style>
