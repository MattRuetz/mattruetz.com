<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';

	// List of words to rotate
	export let words: string[] = [];
	// How long each word is shown (including time for fading), in ms.
	// You might adjust this if needed.
	export let interval: number = 4000;

	let currentIndex = 0;
	// The displayedWord is initially the first word.
	let currentWord = words[0] || '';
	let wordElement: HTMLSpanElement;
	let timer: ReturnType<typeof setInterval>;
	let isAnimating = false;

	function animateWord() {
		const letters = wordElement.querySelectorAll('.letter');

		gsap.fromTo(
			letters,
			{
				opacity: 0,
				y: 20,
				rotateX: -90
			},
			{
				opacity: 1,
				y: 0,
				rotateX: 0,
				duration: 0.8,
				stagger: 0.04,
				ease: 'back.out(2)',
				onComplete: () => {
					isAnimating = false;
				}
			}
		);
	}

	onMount(() => {
		animateWord(); // Animate first word

		timer = setInterval(() => {
			if (isAnimating) return;
			isAnimating = true;

			const letters = wordElement.querySelectorAll('.letter');

			gsap
				.timeline()
				.to(letters, {
					opacity: 0,
					y: -20,
					rotateX: 90,
					duration: 0.3,
					stagger: 0.03,
					ease: 'power2.in'
				})
				.add(() => {
					currentIndex = (currentIndex + 1) % words.length;
					currentWord = words[currentIndex];
				})
				.add(() => animateWord(), 0.5);
		}, interval);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<span
	bind:this={wordElement}
	class="rotating-word perspective-500 opacity-wrapper relative inline-block"
>
	{#each currentWord.split('') as letter}
		<span class="letter inline-block opacity-0">{letter}</span>
	{/each}
</span>

<style>
	.rotating-word {
		background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary));
		/* text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.opacity-wrapper {
		min-width: 8ch;
	}

	.perspective-500 {
		perspective: 500px;
	}

	.letter {
		transform-style: preserve-3d;
	}
</style>
