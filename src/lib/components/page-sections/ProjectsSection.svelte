<script lang="ts">
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';

	export let projects: any;
	export let pagination: any;
	export let isLoading: boolean;
	export let handlePageChange: (newPage: number) => Promise<void>;
</script>

<section class="bg-white px-4 py-16">
	<ProjectsGrid {projects} {pagination} {isLoading} onPageChange={handlePageChange} />
</section>
