<script>
	import Fa from 'svelte-fa';

	let { title, description, icon } = $props();
</script>

<div class="bg-background2 flex items-center justify-center gap-8 rounded-lg px-8 py-4">
	<div>
		<Fa {icon} />
	</div>
	<div>
		<h3 class="text-lg font-bold">{title}</h3>
		<p class="text-sm text-gray-600">
			{description}
		</p>
	</div>
</div>
