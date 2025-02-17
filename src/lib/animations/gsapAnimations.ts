import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate the hero section
 */
export function animateHero() {
	gsap
		.timeline()
		.from('h1', {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		})
		.from(
			'.hero-text',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.5'
		)
		.from(
			'.hero-buttons > *',
			{
				y: 20,
				opacity: 0,
				duration: 0.5,
				stagger: 0.2,
				ease: 'power3.out'
			},
			'-=0.3'
		);
}

/**
 * Animate the brand section.
 */
export function animateBrand() {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.brand-section',
				start: 'top center+=100',
				toggleActions: 'play none none reverse'
			}
		})
		.from('.brand-section h2', {
			x: -50,
			opacity: 0,
			duration: 0.8
		})
		.from(
			'.brand-section ul li',
			{
				x: -30,
				opacity: 0,
				duration: 0.5,
				stagger: 0.2
			},
			'-=0.4'
		)
		.from(
			'.devices-showcase',
			{
				y: 50,
				opacity: 0,
				duration: 0.8
			},
			'-=0.6'
		);
}

/**
 * Animate the e-commerce section.
 */
export function animateEcommerce() {
	gsap.from('.ecommerce-card', {
		scale: 0.95,
		opacity: 0,
		duration: 0.8,
		scrollTrigger: {
			trigger: '.ecommerce-card',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});
}

/**
 * Animate the introduction section content.
 */
export function animateIntroduction() {
	// Main timeline for introduction section
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.introduction-content',
				start: 'top bottom-=400',
				end: 'bottom center',
				toggleActions: 'play none none reverse'
			}
		})
		// Profile image container and image animations
		.from('.profile-image-container', {
			scale: 0.9,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		})
		.from(
			'.profile-image-wrapper',
			{
				scale: 0.95,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.8'
		)
		// Main heading animation with split for "full-package"
		.from(
			'.intro-heading',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.5'
		)
		.from(
			'.intro-heading .text-primary',
			{
				color: '#000',
				duration: 0.4,
				ease: 'power2.inOut'
			},
			'-=0.4'
		)
		// Horizontal rule animation
		.from(
			'.intro-divider',
			{
				scaleX: 0,
				opacity: 0,
				duration: 0.6,
				ease: 'power3.inOut',
				transformOrigin: 'left center'
			},
			'-=0.3'
		)
		// Paragraphs animation
		.from(
			'.intro-paragraph',
			{
				y: 20,
				opacity: 0,
				duration: 0.6,
				stagger: 0.2,
				ease: 'power3.out'
			},
			'-=0.3'
		)
		// Service cards grid animation
		.from(
			'.service-cards > *',
			{
				y: 30,
				opacity: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: 'back.out(1.2)'
			},
			'-=0.2'
		);

	// Separate timeline for the handwriting animation
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.profile-image-container',
				start: 'top bottom-=100',
				end: 'bottom center',
				toggleActions: 'play none none reverse'
			}
		})
		.from('.handwriting-animation', {
			scale: 0.9,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});
}

/**
 * Animate the featured projects section.
 */
export function animateFeaturedProjects() {
	// Main timeline for featured projects section
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.featured-projects',
				start: 'top bottom-=400',
				end: 'bottom center',
				toggleActions: 'play none none reverse'
			}
		})
		// Instructions text animation
		.from(
			'.featured-projects p',
			{
				y: 20,
				opacity: 0,
				duration: 0.6,
				ease: 'power3.out'
			},
			'-=0.4'
		)
		// Project carousel animation
		.from(
			'.project-carousel',
			{
				y: 50,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.3'
		);
}

/**
 * Animate the testimonials section.
 */
export function animateTestimonials() {
	// Main timeline for testimonials section
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.testimonials-section',
				start: 'top bottom-=400',
				end: 'bottom center',
				toggleActions: 'play none none reverse'
			}
		})
		.from(
			'.testimonials-section .text-text\\/80',
			{
				y: 20,
				opacity: 0,
				duration: 0.6,
				ease: 'power3.out'
			},
			'-=0.4'
		)
		// Desktop grid cards animation
		.from(
			'.testimonials-section .grid > *',
			{
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.4,
				ease: 'back.out(1.2)'
			},
			'-=0.2'
		)
		// Mobile carousel animation
		.from(
			'.testimonials-carousel',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.8'
		);
}

/**
 * Apply all animations in sequence.
 */
export function animatePage() {
	animateHero();
	animateIntroduction();
	animateFeaturedProjects();
	animateTestimonials();
	animateBrand();
	animateEcommerce();
}
