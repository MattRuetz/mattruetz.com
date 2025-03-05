<script lang="ts">
	let { activeProject } = $props();
</script>

<div
	class="flex h-[150px] grid-cols-2 flex-col items-start justify-start gap-8 border-gray-200 p-2 md:grid md:h-[300px]"
>
	<div class="col-span-1 flex w-full flex-col items-center justify-start gap-2 md:items-start">
		<h2 class="text-text text-5xl font-bold">{activeProject.title}</h2>
		{#if activeProject.acf.catchy_heading}
			<p class="text-text/50 text-xl italic">{activeProject.acf.catchy_heading}</p>
		{/if}
	</div>

	<div
		class="col-span-1 flex w-full flex-col items-center justify-end gap-2 text-sm text-gray-500 md:items-end"
	>
		{#if activeProject.date}
			<p class="text-sm">Completed: {activeProject.date}</p>
		{/if}
		{#if activeProject.acf.services?.length}
			<div class="flex flex-wrap justify-center gap-2 md:justify-end">
				{#each activeProject.acf.services as service}
					<span class="bg-background2 text-primary rounded-full px-3 py-1 text-xs">{service}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
