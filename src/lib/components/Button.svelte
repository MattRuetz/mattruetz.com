<script lang="ts">
	import Fa from 'svelte-fa';

	let { href, isPrimary = true, class: className = '', icon = null, children } = $props();
</script>

<a
	{href}
	class="z-10 flex w-fit items-center gap-4 rounded-sm border-2 px-6 py-3 text-center text-sm font-semibold shadow-sm transition-all md:px-6 md:py-3 md:text-lg {isPrimary
		? 'bg-button hover:bg-button/90 border-transparent text-white'
		: 'border-button text-button hover:bg-button/5'} {className}"
>
	{@render children()}
	{#if icon}
		<Fa {icon} class="ml-2" />
	{/if}
</a>

<style>
	a {
		box-shadow: var(--tight-shadow);
	}

	a:hover {
		transform: translateY(-2px);
		box-shadow: var(--looser-shadow);
	}
</style>
