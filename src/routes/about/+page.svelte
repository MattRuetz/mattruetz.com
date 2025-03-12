<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Fa from 'svelte-fa';
	import { faCode, faLaptopCode, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
	import { faReact, faJs, faPython, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons';
	import MinimalCTA from '$lib/components/page-sections/MinimalCTA.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (!browser) return;
		const { animateAboutPage } = await import('$lib/animations/gsapAnimations');
		animateAboutPage();
	});
</script>

<Header />

<main class="pt-[80px]">
	<!-- Hero Section -->
	<section class="bg-background2 px-4 py-16 md:py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
				About <span class="gradient-text font-black">Me</span>
			</h1>
			<p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
				Web developer passionate about creating innovative and user-friendly digital experiences.
			</p>
		</div>
	</section>

	<!-- Bio Section -->
	<section class="px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<div class="flex flex-col gap-12 lg:flex-row">
				<!-- Image Column -->
				<div class="lg:w-2/5">
					<div class="sticky top-24">
						<div class="overflow-hidden rounded-full">
							<picture>
								<source srcset="/images/about.webp" type="image/webp" />
								<source srcset="/images/about.png" type="image/png" />
								<img
									src="/images/about.png"
									alt="Matthew Ruetz"
									class="h-full w-full object-cover object-center"
									width="500"
									height="600"
								/>
							</picture>
						</div>
						<div class="mt-8 flex flex-wrap justify-center gap-3">
							<a
								href="https://github.com/mattruetz"
								target="_blank"
								rel="noreferrer"
								class="text-primary hover:bg-primary border-primary flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 hover:text-white"
								aria-label="GitHub"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</a>
							<a
								href="https://linkedin.com/in/matthewruetz"
								target="_blank"
								rel="noreferrer"
								class="text-primary hover:bg-primary border-primary flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 hover:text-white"
								aria-label="LinkedIn"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- Content Column -->
				<div class="bio-content lg:w-3/5">
					<h2 class="bio-title mb-6 text-3xl font-bold">Hello, I'm Matthew Ruetz</h2>
					<div class="bio-text space-y-6 text-lg">
						<p>
							I'm a web developer with a passion for creating innovative, responsive, and
							user-friendly websites and applications. With expertise in both frontend and backend
							technologies, I specialize in developing complex web solutions that solve real-world
							problems.
						</p>
						<p>
							Throughout my career, I've worked with a variety of clients across different
							industries, helping them establish a strong online presence and achieve their business
							goals through tailored web solutions. My approach combines technical expertise with a
							deep understanding of user experience principles to deliver web products that not only
							function flawlessly but also delight users.
						</p>
						<p>
							When I'm not coding, you can find me exploring new technologies, contributing to open
							source projects, or learning new development techniques to stay at the forefront of
							web innovation.
						</p>

						<h3 class="bio-subtitle pt-4 text-2xl font-bold">My Approach</h3>
						<p>
							I believe in a collaborative approach to web development. Every project begins with a
							thorough understanding of your needs, goals, and target audience. This foundation
							allows me to create solutions that are not only technically sound but also aligned
							with your business objectives.
						</p>
						<p>
							Communication is key throughout the development process. I keep you informed and
							involved at every stage, ensuring that the final product meets and exceeds your
							expectations. My focus is on delivering high-quality, maintainable code that provides
							long-term value.
						</p>

						<h3 class="bio-subtitle pt-4 text-2xl font-bold">Why Work With Me</h3>
						<ul class="bio-list space-y-3">
							<li class="bio-list-item flex items-start">
								<span class="text-primary mt-1 mr-2 text-lg">✓</span>
								<span
									>I prioritize your business goals and user experience in every project I
									undertake.</span
								>
							</li>
							<li class="bio-list-item flex items-start">
								<span class="text-primary mt-1 mr-2 text-lg">✓</span>
								<span
									>With expertise in a wide range of technologies, I can choose the best tools for
									your specific needs.</span
								>
							</li>
							<li class="bio-list-item flex items-start">
								<span class="text-primary mt-1 mr-2 text-lg">✓</span>
								<span
									>I believe in clean, well-documented code that is easy to maintain and extend.</span
								>
							</li>
							<li class="bio-list-item flex items-start">
								<span class="text-primary mt-1 mr-2 text-lg">✓</span>
								<span
									>I'm committed to meeting deadlines and delivering projects on time and within
									budget.</span
								>
							</li>
							<li class="bio-list-item flex items-start">
								<span class="text-primary mt-1 mr-2 text-lg">✓</span>
								<span
									>I provide ongoing support and maintenance to ensure your website continues to
									perform optimally.</span
								>
							</li>
						</ul>
					</div>

					<div class="bio-cta mt-12">
						<Button href="/contact" isPrimary={true}>Let's Work Together</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section class="bg-background2 px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<h2 class="skills-heading mb-12 text-center text-3xl font-bold">
				My <span class="gradient-text font-black">Skills</span>
			</h2>

			<div class="skills-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Frontend Development -->
				<div class="skill-card rounded-xl bg-white p-6 shadow-md">
					<div
						class="skill-icon text-primary bg-primary/10 mb-5 flex h-14 w-14 items-center justify-center rounded-lg"
					>
						<Fa icon={faLaptopCode} size="lg" />
					</div>
					<h3 class="skill-title mb-4 text-xl font-bold">Frontend Development</h3>
					<ul class="skill-list space-y-3">
						<li class="skill-item flex items-center">
							<Fa icon={faJs} class="mr-3 text-yellow-500" />
							<span>JavaScript (ES6+)</span>
						</li>
						<li class="skill-item flex items-center">
							<Fa icon={faReact} class="mr-3 text-blue-400" />
							<span>React & Next.js</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-orange-500">Sv</span>
							<span>Svelte & SvelteKit</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-purple-500">TS</span>
							<span>TypeScript</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-blue-600">TW</span>
							<span>TailwindCSS</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-indigo-500">CSS</span>
							<span>CSS3 & SCSS</span>
						</li>
					</ul>
				</div>

				<!-- Backend Development -->
				<div class="skill-card rounded-xl bg-white p-6 shadow-md">
					<div
						class="skill-icon text-primary bg-primary/10 mb-5 flex h-14 w-14 items-center justify-center rounded-lg"
					>
						<Fa icon={faServer} size="lg" />
					</div>
					<h3 class="skill-title mb-4 text-xl font-bold">Backend Development</h3>
					<ul class="skill-list space-y-3">
						<li class="skill-item flex items-center">
							<Fa icon={faNodeJs} class="mr-3 text-green-600" />
							<span>Node.js & Express</span>
						</li>
						<li class="skill-item flex items-center">
							<Fa icon={faPython} class="mr-3 text-blue-500" />
							<span>Python & Django</span>
						</li>
						<li class="skill-item flex items-center">
							<Fa icon={faPhp} class="mr-3 text-purple-600" />
							<span>PHP & Laravel</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-red-500">RB</span>
							<span>Ruby on Rails</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-blue-700">GO</span>
							<span>GoLang</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-orange-600">RS</span>
							<span>Rust</span>
						</li>
					</ul>
				</div>

				<!-- Database & Cloud -->
				<div class="skill-card rounded-xl bg-white p-6 shadow-md">
					<div
						class="skill-icon text-primary bg-primary/10 mb-5 flex h-14 w-14 items-center justify-center rounded-lg"
					>
						<Fa icon={faDatabase} size="lg" />
					</div>
					<h3 class="skill-title mb-4 text-xl font-bold">Database & Cloud</h3>
					<ul class="skill-list space-y-3">
						<li class="skill-item flex items-center">
							<span class="mr-3 text-blue-500">SQL</span>
							<span>PostgreSQL & MySQL</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-green-600">MG</span>
							<span>MongoDB</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-red-600">RD</span>
							<span>Redis</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-orange-500">AW</span>
							<span>AWS (S3, EC2, Lambda)</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-blue-600">GC</span>
							<span>Google Cloud Platform</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-blue-500">AZ</span>
							<span>Microsoft Azure</span>
						</li>
					</ul>
				</div>

				<!-- Other Skills -->
				<div class="skill-card rounded-xl bg-white p-6 shadow-md">
					<div
						class="skill-icon text-primary bg-primary/10 mb-5 flex h-14 w-14 items-center justify-center rounded-lg"
					>
						<Fa icon={faCode} size="lg" />
					</div>
					<h3 class="skill-title mb-4 text-xl font-bold">Other Skills</h3>
					<ul class="skill-list space-y-3">
						<li class="skill-item flex items-center">
							<span class="mr-3 text-gray-700">GIT</span>
							<span>Git & GitHub</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-blue-500">DK</span>
							<span>Docker & Kubernetes</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-red-600">JK</span>
							<span>Jenkins & CI/CD</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-purple-600">GQL</span>
							<span>GraphQL</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-green-500">REST</span>
							<span>RESTful APIs</span>
						</li>
						<li class="skill-item flex items-center">
							<span class="mr-3 text-orange-500">WP</span>
							<span>WordPress Development</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<MinimalCTA />
</main>

<Footer />

<style>
	/* Add any page-specific styles here */
	.gradient-text {
		background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
</style>
