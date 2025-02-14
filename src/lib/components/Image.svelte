<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		className?: string;
		width?: number;
		height?: number;
		priority?: boolean;
	}

	let { src, alt, className = '', width, height, priority = false } = $props<Props>();

	// Determine if image is from WordPress
	const isWPImage = src.includes('wp-content/uploads');

	// For WordPress images, ensure proper URL formatting
	if (isWPImage) {
		// Add size parameters if needed
		src = `${src}${width ? `?w=${width}` : ''}`;
	}
</script>

<img
	{src}
	{alt}
	class={className}
	loading={priority ? 'eager' : 'lazy'}
	decoding={priority ? 'sync' : 'async'}
	{width}
	{height}
/>
