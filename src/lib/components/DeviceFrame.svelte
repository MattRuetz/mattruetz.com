<script lang="ts">
	// export let type: 'monitor' | 'phone' = 'monitor';
	// export let imageUrl: string;

	const { type = 'monitor', image } = $props();

	console.log(`DeviceFrame ${type} image:`, image);

	const aspectRatios: Record<string, string> = {
		monitor: 'aspect-[16/9]',
		phone: 'aspect-[9/19.5]'
	};

	const frameClasses: Record<string, string> = {
		monitor: 'w-full max-w-4xl',
		phone: 'w-full md:max-w-[280px]'
	};
</script>

<div class="device-frame relative {frameClasses[type]}">
	{#if type === 'monitor'}
		<div
			class="monitor-frame relative rounded-2xl border-[12px] border-gray-900 bg-gray-800 shadow-2xl"
		>
			<div class="image-wrapper {aspectRatios[type]} relative overflow-hidden rounded-lg">
				{#if image?.sourceUrl}
					<img
						src={image.sourceUrl}
						alt={image?.altText || 'Desktop Scrollthru'}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						class="scroll-image absolute top-0 left-0 w-full object-cover object-top"
						loading="lazy"
					/>
				{:else}
					<div class="flex h-full w-full items-center justify-center bg-gray-700 text-white">
						No image available
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<div
			class="phone-frame relative top-0 left-0 w-full rounded-[1rem] border-[0.4rem] border-gray-900 bg-gray-800 shadow-2xl md:absolute md:-top-45 md:-left-20"
		>
			<div class="image-wrapper {aspectRatios[type]} relative overflow-hidden rounded-lg">
				{#if image?.sourceUrl}
					<img
						src={image.sourceUrl}
						alt={image?.altText || 'Mobile Scrollthru'}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						class="scroll-image top-0 left-0 w-full object-cover object-top"
						loading="lazy"
					/>
				{:else}
					<div class="flex h-full w-full items-center justify-center bg-gray-700 text-white">
						No image available
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.monitor-frame::before {
		content: '';
		position: absolute;
		inset: 2rem -2rem -2rem;
		background: radial-gradient(circle at center, rgba(var(--color-primary), 0.1), transparent);
		z-index: -1;
		filter: blur(2rem);
	}

	.phone-frame::before {
		content: '';
		position: absolute;
		inset: 1rem -1rem -1rem;
		background: radial-gradient(circle at center, rgba(var(--color-primary), 0.1), transparent);
		z-index: -1;
		filter: blur(1rem);
	}
</style>
