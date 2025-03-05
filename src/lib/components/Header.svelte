<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

	// Check if the page is scrolled down
	function handleScroll() {
		if (browser) {
			scrolled = window.scrollY > 20;
		}
	}

	// Toggle mobile menu
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close mobile menu when clicking outside or on a link
	function closeMenu() {
		mobileMenuOpen = false;
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Check initial scroll position

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<header
	class="fixed top-0 left-0 z-50 w-full transition-all duration-300"
	class:bg-white={scrolled}
	class:shadow-md={scrolled}
	class:py-2={scrolled}
	class:py-4={!scrolled}
>
	<div class="container mx-auto max-w-6xl px-4 sm:px-6">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<img
					src="/images/branding/Logo Final.png"
					alt="Matt Ruetz Web Solutions"
					class="h-auto w-[120px] transition-all duration-300 md:w-[150px]"
					class:w-[100px]={scrolled}
					class:md:w-[120px]={scrolled}
				/>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:block">
				<ul class="flex space-x-8">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class="text-text hover:text-primary relative text-base font-medium transition-colors duration-300"
								class:active={$page.url.pathname === link.href}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Hire Me Button (desktop) -->
			<a
				href="/hire-me"
				class="bg-primary shadow-primary/20 hover:shadow-primary/30 hidden rounded-lg px-5 py-2 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md md:block"
			>
				Hire Me
			</a>

			<!-- Mobile Menu Button -->
			<button
				class="text-text md:hidden"
				onclick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-6 w-6"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div
			class="bg-background fixed inset-0 z-40 mt-[60px] flex flex-col overflow-y-auto pt-5 pb-12"
		>
			<div class="border-b border-gray-200 px-4 py-6">
				<ul class="flex flex-col space-y-6">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class="text-text text-lg font-medium"
								class:text-primary={$page.url.pathname === link.href}
								onclick={closeMenu}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="px-4 py-6">
				<a
					href="/hire-me"
					class="bg-primary block w-full rounded-lg px-5 py-3 text-center text-base font-semibold text-white"
					onclick={closeMenu}
				>
					Hire Me
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	.active::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 100%;
		height: 2px;
		background-color: var(--color-primary);
	}
</style>
