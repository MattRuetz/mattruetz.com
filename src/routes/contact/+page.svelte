<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Fa from 'svelte-fa';
	import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let formStatus = $state({
		submitted: false,
		error: false,
		message: ''
	});

	async function handleSubmit() {
		// Reset status
		formStatus.submitted = false;
		formStatus.error = false;
		formStatus.message = '';

		// Form validation
		if (!formData.name || !formData.email || !formData.message) {
			formStatus.error = true;
			formStatus.message = 'Please fill out all required fields.';
			return;
		}

		// In a real app, you would send the form data to an API endpoint
		// For the demo, we'll simulate a successful submission
		try {
			// Simulate network request
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Reset form after successful submission
			formData = {
				name: '',
				email: '',
				subject: '',
				message: ''
			};

			formStatus.submitted = true;
			formStatus.message = 'Your message has been sent successfully!';
		} catch (error) {
			formStatus.error = true;
			formStatus.message = 'There was an error sending your message. Please try again.';
		}
	}
</script>

<Header />

<main class="pt-[80px]">
	<!-- Hero Section -->
	<section class="bg-background2 px-4 py-16 md:py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
				Get in <span class="gradient-text font-black">Touch</span>
			</h1>
			<p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
				Have a project in mind? I'd love to hear about it. Send me a message and let's create
				something amazing together.
			</p>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<div class="flex flex-col gap-12 lg:flex-row">
				<!-- Contact Info Column -->
				<div class="lg:w-1/3">
					<div class="sticky top-24">
						<h2 class="mb-6 text-2xl font-bold md:text-3xl">Contact Information</h2>
						<p class="mb-8 text-gray-700">
							Feel free to reach out to me through any of the following methods. I'm always eager to
							discuss new projects, creative ideas, or opportunities to be part of your vision.
						</p>

						<div class="space-y-6">
							<!-- Phone -->
							<div class="flex items-start">
								<div
									class="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
								>
									<Fa icon={faPhone} class="text-primary" />
								</div>
								<div>
									<h3 class="mb-1 font-medium">Phone</h3>
									<a
										href="tel:+15555555555"
										class="text-primary block transition-colors hover:underline"
									>
										(555) 555-5555
									</a>
								</div>
							</div>

							<!-- Email -->
							<div class="flex items-start">
								<div
									class="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
								>
									<Fa icon={faEnvelope} class="text-primary" />
								</div>
								<div>
									<h3 class="mb-1 font-medium">Email</h3>
									<a
										href="mailto:hello@mattruetz.com"
										class="text-primary block transition-colors hover:underline"
									>
										hello@mattruetz.com
									</a>
								</div>
							</div>

							<!-- Location -->
							<div class="flex items-start">
								<div
									class="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-lg"
								>
									<Fa icon={faLocationDot} class="text-primary" />
								</div>
								<div>
									<h3 class="mb-1 font-medium">Location</h3>
									<p class="text-gray-700">Windsor, Ontario, Canada</p>
								</div>
							</div>
						</div>

						<div class="mt-10">
							<h3 class="mb-4 font-medium">Connect With Me</h3>
							<div class="flex gap-3">
								<a
									href="https://github.com/mattruetz"
									target="_blank"
									rel="noreferrer"
									class="text-primary hover:bg-primary border-primary flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 hover:text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
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
									class="text-primary hover:bg-primary border-primary flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 hover:text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
										/>
									</svg>
								</a>
								<a
									href="https://twitter.com/mattruetz"
									target="_blank"
									rel="noreferrer"
									class="text-primary hover:bg-primary border-primary flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 hover:text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path
											d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form Column -->
				<div class="lg:w-2/3">
					<div class="rounded-2xl bg-white p-6 shadow-md sm:p-8 md:p-10">
						<h2 class="mb-6 text-2xl font-bold md:text-3xl">Send Me a Message</h2>

						{#if formStatus.submitted}
							<div class="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
								<p>{formStatus.message}</p>
							</div>
						{/if}

						{#if formStatus.error}
							<div class="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
								<p>{formStatus.message}</p>
							</div>
						{/if}

						<form on:submit|preventDefault={handleSubmit} class="space-y-6">
							<div class="grid gap-6 sm:grid-cols-2">
								<!-- Name Field -->
								<div>
									<label for="name" class="mb-2 block font-medium">Your Name *</label>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
										required
									/>
								</div>

								<!-- Email Field -->
								<div>
									<label for="email" class="mb-2 block font-medium">Your Email *</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
										required
									/>
								</div>
							</div>

							<!-- Subject Field -->
							<div>
								<label for="subject" class="mb-2 block font-medium">Subject</label>
								<input
									type="text"
									id="subject"
									bind:value={formData.subject}
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
								/>
							</div>

							<!-- Message Field -->
							<div>
								<label for="message" class="mb-2 block font-medium">Your Message *</label>
								<textarea
									id="message"
									bind:value={formData.message}
									rows="6"
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									required
								></textarea>
							</div>

							<!-- Submit Button -->
							<div>
								<button
									type="submit"
									class="bg-primary hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/30 inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Map Section (Optional) -->
	<section class="mt-6 px-4 py-10">
		<div class="mx-auto max-w-6xl overflow-hidden rounded-xl shadow-md">
			<iframe
				title="Location Map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94747.5855431088!2d-83.09321765409918!3d42.31378851777199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d13a508d741%3A0x80ebbc8b5839deeb!2sWindsor%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1689209221404!5m2!1sen!2sus"
				width="100%"
				height="450"
				style="border:0;"
				allowfullscreen={true}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</section>
</main>

<Footer />

<style>
	.gradient-text {
		background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
</style>
