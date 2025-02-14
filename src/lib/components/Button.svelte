<script lang="ts">
	let { href, isPrimary = true, class: className = '', children } = $props();
</script>

<a
	{href}
	class="inline-block rounded-lg border-2 px-6 py-3 text-base font-semibold shadow-sm transition-all md:px-9 md:py-3 md:text-xl {isPrimary
		? 'bg-primary hover:bg-primary/90 border-transparent text-white'
		: 'border-text text-text hover:bg-primary/5'} {className}"
>
	{@render children()}
</a>

<style>
	a:hover {
		transform: translateY(-2px);
		box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.1);
	}
</style>
