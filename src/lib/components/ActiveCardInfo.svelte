<script lang="ts">
	let { activeProject } = $props();
</script>

<div class="grid grid-cols-2 items-start justify-between gap-8 border-gray-200 p-2">
	<div class="col-span-1 flex flex-col items-start justify-start gap-2">
		<h2 class="text-text text-5xl font-bold">{activeProject.title}</h2>
		{#if activeProject.acf.catchy_heading}
			<p class="text-text/50 text-xl italic">{activeProject.acf.catchy_heading}</p>
		{/if}
	</div>

	<div class="col-span-1 flex flex-col items-end justify-start gap-2 text-sm text-gray-500">
		{#if activeProject.date}
			<p class="text-sm">Completed: {activeProject.date}</p>
		{/if}
		{#if activeProject.acf.services?.length}
			<div class="flex flex-wrap justify-end gap-2">
				{#each activeProject.acf.services as service}
					<span class="bg-background2 text-primary rounded-full px-3 py-1 text-xs">{service}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
