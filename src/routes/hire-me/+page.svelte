<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Fa from 'svelte-fa';
	import {
		faArrowRight,
		faArrowLeft,
		faCheck,
		faDesktop,
		faShoppingCart,
		faStore,
		faGlobe,
		faPalette,
		faServer
	} from '@fortawesome/free-solid-svg-icons';

	interface FormData {
		// Step 1: Project Type
		projectType: string;

		// Step 2: Project Details
		projectName: string;
		projectDescription: string;
		projectGoals: string[];

		// Step 3: Design Preferences
		designStyle: string;
		colorPreferences: string;
		referenceSites: string;

		// Step 4: Budget & Timeline
		budget: string;
		timeline: string;

		// Step 5: Contact Information
		name: string;
		email: string;
		phone: string;
		company: string;
		preferredContact: string;
	}

	// Available project types
	const projectTypes = [
		{
			id: 'personal',
			label: 'Personal Website',
			icon: faDesktop,
			description: 'Portfolio, blog, or personal branding site'
		},
		{
			id: 'business',
			label: 'Business Website',
			icon: faGlobe,
			description: 'Corporate website with service/product information'
		},
		{
			id: 'ecommerce',
			label: 'E-Commerce',
			icon: faShoppingCart,
			description: 'Online store with product listings and checkout'
		},
		{
			id: 'webapp',
			label: 'Web Application',
			icon: faServer,
			description: 'Interactive web app with user accounts and features'
		},
		{
			id: 'redesign',
			label: 'Website Redesign',
			icon: faPalette,
			description: 'Refresh and modernize an existing website'
		},
		{
			id: 'other',
			label: 'Other Project',
			icon: faStore,
			description: 'Another type of project not listed above'
		}
	];

	// Design style options
	const designStyles = [
		'Minimalist',
		'Modern',
		'Corporate',
		'Creative/Artistic',
		'Bold/Vibrant',
		'Elegant/Luxury',
		'Playful/Fun',
		'Technology-focused',
		'Other (please specify in notes)'
	];

	// Budget ranges
	const budgetRanges = [
		'$1,000 - $3,000',
		'$3,000 - $5,000',
		'$5,000 - $10,000',
		'$10,000+',
		'Not sure yet'
	];

	// Timeline options
	const timelineOptions = ['Within 1 month', '1-2 months', '3-6 months', '6+ months', 'Flexible'];

	// Common goals for different project types
	const projectGoalsOptions = [
		'Increase online sales',
		'Generate leads/inquiries',
		'Improve brand awareness',
		'Showcase portfolio/work',
		'Provide information to customers',
		'Establish credibility/authority',
		'Create a community',
		'Collect user data/feedback',
		'Streamline business operations'
	];

	// Form state
	let formData = $state<FormData>({
		// Step 1
		projectType: '',

		// Step 2
		projectName: '',
		projectDescription: '',
		projectGoals: [],

		// Step 3
		designStyle: '',
		colorPreferences: '',
		referenceSites: '',

		// Step 4
		budget: '',
		timeline: '',

		// Step 5
		name: '',
		email: '',
		phone: '',
		company: '',
		preferredContact: 'email'
	});

	// Current step (1-indexed for better UX)
	let currentStep = $state(1);
	const totalSteps = 5;

	// Form status
	let formStatus = $state({
		submitted: false,
		error: false,
		message: ''
	});

	// Progress percentage
	let progressPercentage = $derived(Math.round((currentStep / totalSteps) * 100));

	// Validation functions
	function validateStep(step: number): boolean {
		switch (step) {
			case 1:
				return !!formData.projectType;
			case 2:
				return !!formData.projectName && !!formData.projectDescription;
			case 3:
				return !!formData.designStyle;
			case 4:
				return !!formData.budget && !!formData.timeline;
			case 5:
				return !!formData.name && !!formData.email;
			default:
				return true;
		}
	}

	// Navigation functions
	function nextStep() {
		if (validateStep(currentStep) && currentStep < totalSteps) {
			currentStep++;
			window.scrollTo(0, 0);
		}
	}

	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
			window.scrollTo(0, 0);
		}
	}

	// Toggle a goal in the projectGoals array
	function toggleGoal(goal: string) {
		if (formData.projectGoals.includes(goal)) {
			formData.projectGoals = formData.projectGoals.filter((g) => g !== goal);
		} else {
			formData.projectGoals = [...formData.projectGoals, goal];
		}
	}

	// Form submission
	async function handleSubmit() {
		if (!validateStep(currentStep)) {
			formStatus.error = true;
			formStatus.message = 'Please fill out all required fields.';
			return;
		}

		formStatus.submitted = false;
		formStatus.error = false;

		try {
			// Simulate form submission with a delay
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// In a real app, you would POST the form data to your backend/API
			console.log('Form data submitted:', formData);

			formStatus.submitted = true;
			formStatus.message =
				"Thanks for your interest! I'll be in touch with you shortly to discuss your project.";

			// Reset form to first step for new submissions
			// In a real app, you might redirect to a thank you page instead
		} catch (error) {
			formStatus.error = true;
			formStatus.message = 'There was an error submitting your request. Please try again.';
		}
	}
</script>

<Header />

<main class="pt-[80px]">
	<!-- Hero Section -->
	<section class="bg-background2 px-4 py-16 md:py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
				<span class="gradient-text font-black">Hire Me</span>
			</h1>
			<p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
				Let's work together to bring your vision to life. Tell me a bit about your project and I'll
				help you create a website that exceeds your expectations.
			</p>
		</div>
	</section>

	<!-- Form Section -->
	<section class="px-4 py-10 md:py-16">
		<div class="mx-auto max-w-3xl">
			<!-- Progress Bar -->
			<div class="mb-8">
				<div class="flex justify-between">
					<span class="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
					<span class="text-sm font-medium">{progressPercentage}% Complete</span>
				</div>
				<div class="mt-2 h-2 w-full rounded-full bg-gray-200">
					<div
						class="from-primary to-secondary h-2 rounded-full bg-gradient-to-r"
						style="width: {progressPercentage}%"
					></div>
				</div>
			</div>

			<!-- Success Message -->
			{#if formStatus.submitted}
				<div class="rounded-lg bg-green-100 p-6 text-center">
					<div class="mb-4 flex justify-center">
						<div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-200">
							<Fa icon={faCheck} class="text-green-600" />
						</div>
					</div>
					<h3 class="mb-2 text-xl font-semibold text-green-800">Request Submitted!</h3>
					<p class="text-green-700">{formStatus.message}</p>
					<div class="mt-6">
						<a
							href="/"
							class="bg-primary inline-block rounded-lg px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105"
						>
							Return to Home
						</a>
					</div>
				</div>
			{:else}
				<!-- Error Message -->
				{#if formStatus.error}
					<div class="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
						<p>{formStatus.message}</p>
					</div>
				{/if}

				<!-- Form Container -->
				<div class="rounded-2xl bg-white p-6 shadow-lg sm:p-8 md:p-10">
					<form on:submit|preventDefault={currentStep === totalSteps ? handleSubmit : nextStep}>
						<!-- Step 1: Project Type -->
						{#if currentStep === 1}
							<h2 class="mb-6 text-2xl font-bold">What type of project are you looking for?</h2>
							<p class="mb-8 text-gray-600">
								Select the option that best describes your project. This helps me understand your
								needs better.
							</p>

							<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
								{#each projectTypes as type}
									<div
										class="relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 {formData.projectType ===
										type.id
											? 'border-primary bg-primary/5'
											: 'border-gray-200 hover:border-gray-300'}"
										on:click={() => (formData.projectType = type.id)}
										on:keydown={(e) => e.key === 'Enter' && (formData.projectType = type.id)}
										tabindex="0"
										role="button"
									>
										<div
											class="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-full"
										>
											<Fa icon={type.icon} class="text-primary" />
										</div>
										<h3 class="mb-1 font-semibold">{type.label}</h3>
										<p class="text-sm text-gray-600">{type.description}</p>
										{#if formData.projectType === type.id}
											<div class="text-primary absolute top-2 right-2">
												<Fa icon={faCheck} />
											</div>
										{/if}
									</div>
								{/each}
							</div>

							{#if !formData.projectType}
								<p class="mt-4 text-sm text-red-600">Please select a project type to continue.</p>
							{/if}
						{/if}

						<!-- Step 2: Project Details -->
						{#if currentStep === 2}
							<h2 class="mb-6 text-2xl font-bold">Tell me about your project</h2>
							<p class="mb-8 text-gray-600">
								Provide some details about what you envision for your project.
							</p>

							<div class="mb-6">
								<label for="projectName" class="mb-2 block font-medium">Project Name *</label>
								<input
									type="text"
									id="projectName"
									bind:value={formData.projectName}
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									placeholder="What would you like to call your project?"
									required
								/>
							</div>

							<div class="mb-6">
								<label for="projectDescription" class="mb-2 block font-medium"
									>Project Description *</label
								>
								<textarea
									id="projectDescription"
									bind:value={formData.projectDescription}
									rows="4"
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									placeholder="Please describe what you're looking to create..."
									required
								></textarea>
							</div>

							<div class="mb-6">
								<label class="mb-2 block font-medium">Project Goals (select all that apply)</label>
								<div class="mt-2 grid gap-2 sm:grid-cols-2">
									{#each projectGoalsOptions as goal}
										<div
											class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-3 hover:border-gray-300"
											on:click={() => toggleGoal(goal)}
											on:keydown={(e) => e.key === 'Enter' && toggleGoal(goal)}
											tabindex="0"
											role="checkbox"
											aria-checked={formData.projectGoals.includes(goal)}
										>
											<div
												class="mr-3 flex h-5 w-5 items-center justify-center rounded border {formData.projectGoals.includes(
													goal
												)
													? 'border-primary bg-primary text-white'
													: 'border-gray-400'}"
											>
												{#if formData.projectGoals.includes(goal)}
													<Fa icon={faCheck} size="xs" />
												{/if}
											</div>
											<span>{goal}</span>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<!-- Step 3: Design Preferences -->
						{#if currentStep === 3}
							<h2 class="mb-6 text-2xl font-bold">Your Design Preferences</h2>
							<p class="mb-8 text-gray-600">
								Help me understand your aesthetic preferences for the project.
							</p>

							<div class="mb-6">
								<label for="designStyle" class="mb-2 block font-medium">Design Style *</label>
								<select
									id="designStyle"
									bind:value={formData.designStyle}
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									required
								>
									<option value="" disabled selected>Select a design style...</option>
									{#each designStyles as style}
										<option value={style}>{style}</option>
									{/each}
								</select>
							</div>

							<div class="mb-6">
								<label for="colorPreferences" class="mb-2 block font-medium"
									>Color Preferences</label
								>
								<input
									type="text"
									id="colorPreferences"
									bind:value={formData.colorPreferences}
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									placeholder="Any specific colors or palette you prefer?"
								/>
							</div>

							<div class="mb-6">
								<label for="referenceSites" class="mb-2 block font-medium">Reference Websites</label
								>
								<textarea
									id="referenceSites"
									bind:value={formData.referenceSites}
									rows="3"
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									placeholder="List any websites you like the design of..."
								></textarea>
							</div>
						{/if}

						<!-- Step 4: Budget & Timeline -->
						{#if currentStep === 4}
							<h2 class="mb-6 text-2xl font-bold">Budget & Timeline</h2>
							<p class="mb-8 text-gray-600">
								Let me know your investment range and when you'd like to have your project
								completed.
							</p>

							<div class="mb-6">
								<label for="budget" class="mb-2 block font-medium">Budget Range *</label>
								<select
									id="budget"
									bind:value={formData.budget}
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									required
								>
									<option value="" disabled selected>Select a budget range...</option>
									{#each budgetRanges as range}
										<option value={range}>{range}</option>
									{/each}
								</select>
							</div>

							<div class="mb-6">
								<label for="timeline" class="mb-2 block font-medium">Desired Timeline *</label>
								<select
									id="timeline"
									bind:value={formData.timeline}
									class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									required
								>
									<option value="" disabled selected>Select a timeline...</option>
									{#each timelineOptions as option}
										<option value={option}>{option}</option>
									{/each}
								</select>
							</div>
						{/if}

						<!-- Step 5: Contact Information -->
						{#if currentStep === 5}
							<h2 class="mb-6 text-2xl font-bold">Your Contact Information</h2>
							<p class="mb-8 text-gray-600">
								Please provide your contact details so I can reach out to discuss your project
								further.
							</p>

							<div class="grid gap-6 sm:grid-cols-2">
								<div class="mb-2">
									<label for="name" class="mb-2 block font-medium">Full Name *</label>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
										required
									/>
								</div>

								<div class="mb-2">
									<label for="email" class="mb-2 block font-medium">Email Address *</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
										required
									/>
								</div>
							</div>

							<div class="grid gap-6 sm:grid-cols-2">
								<div class="mb-6">
									<label for="phone" class="mb-2 block font-medium">Phone Number</label>
									<input
										type="tel"
										id="phone"
										bind:value={formData.phone}
										class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									/>
								</div>

								<div class="mb-6">
									<label for="company" class="mb-2 block font-medium">Company Name</label>
									<input
										type="text"
										id="company"
										bind:value={formData.company}
										class="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:outline-none"
									/>
								</div>
							</div>

							<div class="mb-6">
								<label class="mb-2 block font-medium">Preferred Contact Method</label>
								<div class="flex flex-wrap gap-4">
									<div class="flex items-center">
										<input
											type="radio"
											id="contact-email"
											bind:group={formData.preferredContact}
											value="email"
											class="text-primary focus:ring-primary h-4 w-4"
										/>
										<label for="contact-email" class="ml-2">Email</label>
									</div>
									<div class="flex items-center">
										<input
											type="radio"
											id="contact-phone"
											bind:group={formData.preferredContact}
											value="phone"
											class="text-primary focus:ring-primary h-4 w-4"
										/>
										<label for="contact-phone" class="ml-2">Phone</label>
									</div>
								</div>
							</div>
						{/if}

						<!-- Form Navigation -->
						<div class="mt-8 flex justify-between">
							{#if currentStep > 1}
								<button
									type="button"
									on:click={prevStep}
									class="flex items-center rounded-lg border-2 border-gray-300 px-6 py-2 font-medium text-gray-700 transition-all duration-300 hover:border-gray-400"
								>
									<Fa icon={faArrowLeft} class="mr-2" />
									Previous
								</button>
							{:else}
								<div></div>
							{/if}

							{#if currentStep < totalSteps}
								<button
									type="submit"
									class="bg-primary shadow-primary/20 hover:shadow-primary/30 flex items-center rounded-lg px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg"
									disabled={!validateStep(currentStep)}
								>
									Next
									<Fa icon={faArrowRight} class="ml-2" />
								</button>
							{:else}
								<button
									type="submit"
									class="bg-primary shadow-primary/20 hover:shadow-primary/30 flex items-center rounded-lg px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg"
									disabled={!validateStep(currentStep)}
								>
									Submit Request
									<Fa icon={faCheck} class="ml-2" />
								</button>
							{/if}
						</div>
					</form>
				</div>
			{/if}
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
