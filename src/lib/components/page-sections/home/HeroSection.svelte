<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import RotatingWord from '$lib/components/RotatingWord.svelte';

	// New reactive variable and functions for interactive animation
	let transformStyle = 'none';

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		const deltaX = (clientX - centerX) / centerX;
		const deltaY = (clientY - centerY) / centerY;
		// Rotate up to 10 degrees on X and Y axes and adjust scale slightly
		const rotateY = deltaX * 10;
		const rotateX = -deltaY * 10;
		const scale = 1 + Math.abs(deltaX) * 0.05;
		transformStyle = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
	};

	const handleMouseLeave = () => {
		transformStyle = 'none';
	};
</script>

<section
	class="hero-section bg-background2 relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-16"
	aria-label="Hero Section"
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
>
	<div
		class="logo-icon absolute -top-[20%]
		-right-[20%] hidden w-[140%]
		opacity-30
		 md:-top-[10%] md:-right-[40%] md:block
		md:w-[80%] lg:-top-[10%] lg:-right-[25%] lg:block lg:w-[70%]"
		style:transform={transformStyle}
		style:transition="transform 0.2s ease-out"
	>
		<img src="/images/branding/Logo Icon Final-cropped.svg" alt="Logo" class="h-auto w-full" />
	</div>
	<div class="relative z-10 w-full text-center md:ml-[5%] md:text-left">
		<h1
			class="mb-6 text-5xl leading-14 font-extrabold tracking-tight text-gray-900 md:text-7xl md:leading-20 lg:text-[7rem] lg:leading-28"
		>
			<RotatingWord words={['Inspired', 'Custom', 'Impactful', 'Unique']} /><br />Web Design
			<span class="text-primary">+</span>
			<br />
			Development
		</h1>
		<p class="hero-text mb-8 text-base text-gray-600 md:text-2xl">
			Build your digital presence with a bold, clean, and minimal vision.
		</p>
		<div class="hero-buttons flex justify-center gap-4 md:justify-start">
			<div>
				<Button href="/contact" isPrimary={true}>Get Started</Button>
			</div>
			<div>
				<Button href="/projects" isPrimary={false}>View My Work</Button>
			</div>
		</div>
	</div>
</section>
