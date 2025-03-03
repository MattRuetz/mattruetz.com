<script>
	import { fade } from 'svelte/transition';
	import Fa from 'svelte-fa';
	import { faLightbulb, faBoltLightning, faLineChart } from '@fortawesome/free-solid-svg-icons';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

	const currentYear = new Date().getFullYear();

	const links = [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/about' },
		{ text: 'Portfolio', href: '/portfolio' },
		{ text: 'Services', href: '/services' },
		{ text: 'Contact', href: '/contact' }
	];
</script>

<footer class="bg-text py-12 text-white sm:py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<!-- Main Footer Content -->
		<div class="mb-10 sm:mb-12 md:mb-16">
			<div class="grid grid-cols-4 gap-8">
				<!-- Logo & Info Column -->
				<div
					class="col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left md:col-span-2"
				>
					<img
						src="images/branding/Logo Final - White.png"
						alt="Matt Ruetz Web Solutions"
						class="mb-4 h-auto w-[150px] brightness-110 transition-all duration-300 hover:brightness-120 sm:mb-6 md:w-[180px]"
					/>
					<p class="text-background-alt mb-4 max-w-md leading-relaxed opacity-90 sm:mb-6">
						Professional web design and development solutions for your business.
					</p>
					<div class="flex flex-col justify-center gap-4 sm:justify-start md:flex-row">
						<span class="flex items-center whitespace-nowrap">
							<Fa icon={faLightbulb} class="text-primary mr-2 inline-block" />
							<span>Custom Solutions</span>
						</span>
						<span class="flex items-center whitespace-nowrap">
							<Fa icon={faBoltLightning} class="text-primary mr-2 inline-block" />
							<span>Performance First</span>
						</span>
						<span class="flex items-center whitespace-nowrap">
							<Fa icon={faLineChart} class="text-primary mr-2 inline-block" />
							<span>Results Driven</span>
						</span>
					</div>
				</div>

				<!-- Quick Links Column -->
				<div class="col-span-4 mt-2 rounded-2xl bg-gray-500/10 p-4 sm:mt-0 md:col-span-1">
					<h4 class="text-background-alt mb-4 text-center text-lg font-medium sm:mb-6 md:text-left">
						Quick Links
					</h4>
					<ul
						class="grid grid-cols-2 gap-x-4 gap-y-2 text-center sm:block sm:space-y-3 md:text-left"
					>
						{#each links as link}
							<li>
								<a
									href={link.href}
									target={link.href.startsWith('http') ? '_blank' : null}
									rel={link.href.startsWith('http') ? 'noopener noreferrer' : null}
									class="text-background-alt hover:text-primary inline-block opacity-90 transition-all duration-300 hover:opacity-100"
								>
									{link.text}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Connect Column -->
				<div class="col-span-4 mt-2 rounded-2xl p-4 sm:mt-0 md:col-span-1">
					<h4 class="text-background-alt mb-4 text-center text-lg font-medium sm:mb-6 md:text-left">
						Connect
					</h4>
					<div class="flex flex-col items-center justify-center gap-4 sm:justify-start">
						<a
							href="https://www.linkedin.com/in/matt-ruetz/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-background-alt hover:text-primary flex items-center opacity-90 transition-all duration-300 hover:opacity-100"
						>
							<Fa icon={faLinkedin} class="mr-2" />
							<span>LinkedIn</span>
						</a>
						<a
							href="https://github.com/MattRuetz"
							target="_blank"
							rel="noopener noreferrer"
							class="text-background-alt hover:text-primary flex items-center opacity-90 transition-all duration-300 hover:opacity-100"
						>
							<Fa icon={faGithub} class="mr-2" />
							<span>GitHub</span>
						</a>
						<a
							href="mailto:hi@mattruetz.com"
							class="text-background-alt hover:text-primary flex items-center opacity-90 transition-all duration-300 hover:opacity-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
								></path>
								<polyline points="22,6 12,13 2,6"></polyline>
							</svg>
							<span>Email</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright Bar -->
		<div class="border-t border-white/10 pt-6 text-center">
			<p class="text-background-alt text-sm opacity-80">
				&copy; {currentYear} Matt Ruetz Web Solutions. All rights reserved.
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		z-index: 10;
	}

	footer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		z-index: -1;
	}

	@media (max-width: 640px) {
		:global(footer .text-background-alt) {
			font-size: 0.95rem;
		}
	}
</style>
