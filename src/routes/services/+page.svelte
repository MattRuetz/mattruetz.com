<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Fa from 'svelte-fa';
	import {
		faCode,
		faShoppingCart,
		faMobileScreen,
		faServer,
		faGaugeHigh,
		faChartLine,
		faWrench,
		faPaintBrush
	} from '@fortawesome/free-solid-svg-icons';
</script>

<Header />

<main class="pt-[80px]">
	<!-- Hero Section -->
	<section class="bg-background2 px-4 py-16 md:py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
				My <span class="gradient-text font-black">Services</span>
			</h1>
			<p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
				I offer comprehensive web development services to help your business establish a strong
				online presence. From custom websites to e-commerce solutions, I've got you covered.
			</p>
		</div>
	</section>

	<!-- Main Services Section -->
	<section class="px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 md:grid-cols-2 lg:gap-16">
				<!-- Service 1: Custom Web Development -->
				<div class="service-card">
					<div class="mb-6 flex items-center">
						<div
							class="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
						>
							<Fa icon={faCode} />
						</div>
						<h2 class="text-2xl font-bold">Custom Web Development</h2>
					</div>
					<p class="mb-4 text-gray-700">
						I build custom websites tailored to your specific needs and business goals. Using modern
						frameworks and technologies, I create responsive, fast-loading, and user-friendly
						websites that make a strong impression.
					</p>
					<ul class="mb-6 space-y-2">
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Responsive design that works on all devices</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Modern frameworks (Svelte, React, Next.js)</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Custom animations and interactive elements</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>SEO-friendly structure and best practices</span>
						</li>
					</ul>
					<div class="flex items-center">
						<a
							href="/contact"
							class="text-primary hover:bg-primary border-primary flex items-center rounded-lg border-2 px-4 py-2 font-medium transition-all duration-300 hover:text-white"
						>
							Get Started
							<span class="ml-2">→</span>
						</a>
					</div>
				</div>

				<!-- Service 2: E-Commerce Development -->
				<div class="service-card">
					<div class="mb-6 flex items-center">
						<div
							class="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
						>
							<Fa icon={faShoppingCart} />
						</div>
						<h2 class="text-2xl font-bold">E-Commerce Development</h2>
					</div>
					<p class="mb-4 text-gray-700">
						Launch or upgrade your online store with a professionally built e-commerce website. I
						create seamless shopping experiences that convert visitors into customers and help your
						business grow.
					</p>
					<ul class="mb-6 space-y-2">
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Shopify and WooCommerce development</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Custom product pages and checkout flows</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Payment gateway integration</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Product management systems</span>
						</li>
					</ul>
					<div class="flex items-center">
						<a
							href="/contact"
							class="text-primary hover:bg-primary border-primary flex items-center rounded-lg border-2 px-4 py-2 font-medium transition-all duration-300 hover:text-white"
						>
							Build Your Store
							<span class="ml-2">→</span>
						</a>
					</div>
				</div>

				<!-- Service 3: Mobile-First Development -->
				<div class="service-card">
					<div class="mb-6 flex items-center">
						<div
							class="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
						>
							<Fa icon={faMobileScreen} />
						</div>
						<h2 class="text-2xl font-bold">Mobile-First Development</h2>
					</div>
					<p class="mb-4 text-gray-700">
						With most web traffic coming from mobile devices, I prioritize mobile-first development
						to ensure your website looks and performs flawlessly on smartphones and tablets.
					</p>
					<ul class="mb-6 space-y-2">
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Responsive layouts that adapt to all screen sizes</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Touch-friendly interfaces</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Mobile performance optimization</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Progressive Web App (PWA) capabilities</span>
						</li>
					</ul>
					<div class="flex items-center">
						<a
							href="/contact"
							class="text-primary hover:bg-primary border-primary flex items-center rounded-lg border-2 px-4 py-2 font-medium transition-all duration-300 hover:text-white"
						>
							Learn More
							<span class="ml-2">→</span>
						</a>
					</div>
				</div>

				<!-- Service 4: Backend Development -->
				<div class="service-card">
					<div class="mb-6 flex items-center">
						<div
							class="bg-primary/10 text-primary mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
						>
							<Fa icon={faServer} />
						</div>
						<h2 class="text-2xl font-bold">Backend Development</h2>
					</div>
					<p class="mb-4 text-gray-700">
						Power your website with robust backend systems that handle user authentication, content
						management, data processing, and more. I build secure and scalable server-side
						solutions.
					</p>
					<ul class="mb-6 space-y-2">
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>API development and integration</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Database design and optimization</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Authentication and user management</span>
						</li>
						<li class="flex items-start">
							<span class="text-primary mt-1 mr-2 text-sm">✓</span>
							<span>Content management systems</span>
						</li>
					</ul>
					<div class="flex items-center">
						<a
							href="/contact"
							class="text-primary hover:bg-primary border-primary flex items-center rounded-lg border-2 px-4 py-2 font-medium transition-all duration-300 hover:text-white"
						>
							Get Started
							<span class="ml-2">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Additional Services Section -->
	<section class="bg-background2 px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold">
				Additional <span class="gradient-text font-black">Services</span>
			</h2>

			<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
				<!-- Additional Service 1 -->
				<div
					class="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="text-primary bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
					>
						<Fa icon={faGaugeHigh} size="lg" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Performance Optimization</h3>
					<p class="text-gray-600">
						Improve your website's speed and performance to enhance user experience and SEO
						rankings.
					</p>
				</div>

				<!-- Additional Service 2 -->
				<div
					class="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="text-primary bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
					>
						<Fa icon={faChartLine} size="lg" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">SEO & Analytics</h3>
					<p class="text-gray-600">
						Implement SEO best practices and analytics tracking to increase visibility and measure
						success.
					</p>
				</div>

				<!-- Additional Service 3 -->
				<div
					class="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="text-primary bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
					>
						<Fa icon={faWrench} size="lg" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Maintenance & Support</h3>
					<p class="text-gray-600">
						Keep your website running smoothly with regular updates, security patches, and technical
						support.
					</p>
				</div>

				<!-- Additional Service 4 -->
				<div
					class="rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<div
						class="text-primary bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
					>
						<Fa icon={faPaintBrush} size="lg" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">UI/UX Design</h3>
					<p class="text-gray-600">
						Create intuitive and visually appealing user interfaces that enhance the overall user
						experience.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-4 py-20">
		<div
			class="from-primary/10 to-primary/5 mx-auto max-w-3xl rounded-2xl bg-gradient-to-r p-8 text-center sm:p-12"
		>
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
			<p class="mx-auto mb-8 max-w-xl text-lg text-gray-700">
				Let's discuss your project requirements and create a website that perfectly represents your
				brand and helps you achieve your business goals.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="bg-primary shadow-primary/20 hover:shadow-primary/30 inline-flex min-w-[150px] items-center justify-center rounded-lg px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
				>
					Contact Me
				</a>
				<a
					href="/hire-me"
					class="border-primary text-primary inline-flex min-w-[150px] items-center justify-center rounded-lg border-2 px-6 py-[10px] font-semibold transition-all duration-300 hover:scale-105"
				>
					Start a Project
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	.service-card {
		padding: 1.5rem;
		border-radius: 1rem;
		background-color: white;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.service-card:hover {
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
		transform: translateY(-5px);
	}
</style>
