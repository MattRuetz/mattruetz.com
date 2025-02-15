<script>
	import { fade } from 'svelte/transition';
	import Fa from 'svelte-fa';
	import {
		faLightbulb,
		faBoltLightning,
		faBars,
		faLineChart
	} from '@fortawesome/free-solid-svg-icons';

	const currentYear = new Date().getFullYear();

	const links = [
		{ text: 'Home', href: '#home' },
		{ text: 'About', href: '/about' },
		{ text: 'Portfolio', href: '/portfolio' },
		{ text: 'Services', href: '/services' },
		{ text: 'Contact', href: '/contact' }
	];
</script>

<footer class="bg-text py-16 pb-8 text-white">
	<div class="transform transition-all duration-600">
		<div class="container mx-auto px-4">
			<div
				class="mb-16 grid grid-cols-4 gap-16 md:grid-cols-[2fr_1fr_1fr]"
				in:fade={{ duration: 600 }}
			>
				<div
					class="col-span-4 flex flex-col items-center gap-6 text-center md:col-span-1 md:items-start md:text-left"
				>
					<img
						src="images/branding/Logo Final - White.png"
						alt="Matt Ruetz Web Solutions"
						class="h-auto w-[150px] brightness-110 transition-all duration-300 hover:brightness-120 md:w-[200px]"
					/>
					<p class="text-background-alt leading-relaxed opacity-90">
						Professional web design and development solutions for your business.
					</p>
					<div class="flex flex-col gap-4 md:flex-row">
						<span
							><Fa icon={faLightbulb} class="text-primary mr-1 inline-block" /> Custom Solutions</span
						>
						<span
							><Fa icon={faBoltLightning} class="text-primary mr-1 inline-block" /> Performance First</span
						>
						<span
							><Fa icon={faLineChart} class="text-primary mr-1 inline-block" /> Results Driven</span
						>
					</div>
				</div>

				<hr class="mx-auto my-4 w-3/4 border-white opacity-10 md:hidden" />

				<nav class="text-center md:text-left">
					<h4 class="text-background-alt mb-6 text-lg">Quick Links</h4>
					<ul class="m-0 list-none p-0">
						{#each links as link}
							<li class="mb-3">
								<a
									href={link.href}
									target={link.href.startsWith('http') ? '_blank' : null}
									rel={link.href.startsWith('http') ? 'noopener noreferrer' : null}
									class="text-background-alt hover:text-primary no-underline opacity-90 transition-all duration-300 hover:opacity-100"
								>
									{link.text}
								</a>
							</li>
						{/each}
					</ul>
				</nav>

				<div class="text-center md:text-left">
					<h4 class="text-background-alt mb-6 text-lg">Connect</h4>
					<div class="flex flex-col items-center gap-3 md:items-start">
						<a
							href="https://www.linkedin.com/in/matt-ruetz/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-background-alt hover:text-primary no-underline opacity-90 transition-all duration-300 hover:opacity-100"
							>LinkedIn</a
						>
						<a
							href="https://github.com/MattRuetz"
							target="_blank"
							rel="noopener noreferrer"
							class="text-background-alt hover:text-primary no-underline opacity-90 transition-all duration-300 hover:opacity-100"
							>GitHub</a
						>
					</div>
				</div>
			</div>

			<div
				class="border-t border-white/10 pt-8 text-center"
				in:fade={{ duration: 600, delay: 200 }}
			>
				<p class="text-background-alt text-sm opacity-90">
					&copy; {currentYear} Matt Ruetz Web Solutions. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
