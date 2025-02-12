<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let project: {
		id: number;
		title: string;
		excerpt: string;
		image: string | null;
		slug: string;
		date: string;
		acf: {
			client_name?: string;
			services?: string[];
			page_scroll_image?: string;
		};
	};
	export let index: number;
</script>

<a
	href="/project/{project.slug}"
	class="block overflow-hidden rounded-lg border border-gray-200 text-inherit no-underline shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
	in:fly={{ y: 50, duration: 400, delay: index * 100, easing: quintOut }}
>
	<div class="relative h-64 w-full">
		{#if project.acf.page_scroll_image}
			<img
				src={project.acf.page_scroll_image}
				alt="Project preview"
				class="absolute inset-0 h-full w-full object-cover object-top"
			/>
		{:else if project.image}
			<img
				src={project.image}
				alt={project.title}
				class="absolute inset-0 h-full w-full object-cover"
			/>
		{/if}
	</div>

	<div class="p-6">
		<h2 class="mb-2 text-2xl font-semibold">{project.title}</h2>
		<time class="text-sm text-gray-600">{project.date}</time>
		<div class="my-4 line-clamp-3">{@html project.excerpt}</div>

		<div class="mt-4 border-t border-gray-100 pt-4">
			{#if project.acf.client_name}
				<div class="mb-2">
					<strong class="text-gray-700">Client:</strong>
					<span class="ml-1">{project.acf.client_name}</span>
				</div>
			{/if}
			{#if project.acf.services?.length}
				<div class="text-sm text-gray-600">
					{project.acf.services.join(' • ')}
				</div>
			{/if}
		</div>
	</div>
</a>
