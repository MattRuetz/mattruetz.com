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

/**
 * Animate the About page sections.
 */
export function animateAboutPage() {
	// Hero section animation
	gsap
		.timeline()
		.from('h1', {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		})
		.from(
			'h1 + p',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.5'
		);

	// Enhanced bio content sections with more detailed animations
	// Heading animation
	gsap.from('.bio-title', {
		y: 30,
		opacity: 0,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.bio-title',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Paragraphs animation with stagger
	gsap.from('.bio-text > p', {
		y: 30,
		opacity: 0,
		duration: 0.6,
		stagger: 0.15,
		scrollTrigger: {
			trigger: '.bio-text',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Section headings animation
	gsap.from('.bio-subtitle', {
		y: 30,
		opacity: 0,
		duration: 0.7,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.bio-text',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// List items animation
	gsap.from('.bio-list-item', {
		x: -20,
		opacity: 0,
		duration: 0.5,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.bio-list',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// Let's Work Together button animation
	gsap.from('.bio-cta', {
		y: 20,
		opacity: 0,
		duration: 0.6,
		scrollTrigger: {
			trigger: '.bio-cta',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// Skills section heading animation
	gsap.from('.skills-heading', {
		y: 30,
		opacity: 0,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.skills-heading',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Enhanced technical skills cards animation with stagger
	gsap.from('.skill-card', {
		y: 50,
		opacity: 0,
		duration: 0.7,
		stagger: 0.15,
		scrollTrigger: {
			trigger: '.skills-grid',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// Skills card content animation - icon container
	gsap.from('.skill-icon', {
		scale: 0.8,
		opacity: 0,
		duration: 0.5,
		stagger: 0.1,
		delay: 0.1,
		scrollTrigger: {
			trigger: '.skills-grid',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// Card headings animation
	gsap.from('.skill-title', {
		y: 15,
		opacity: 0,
		duration: 0.5,
		stagger: 0.1,
		delay: 0.2,
		scrollTrigger: {
			trigger: '.skills-grid',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// List items in cards animation
	gsap.from('.skill-item', {
		y: 10,
		opacity: 0,
		duration: 0.4,
		stagger: 0.05,
		delay: 0.3,
		scrollTrigger: {
			trigger: '.skills-grid',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// MinimalCTA animation
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.minimal-cta',
				start: 'top bottom-=100',
				toggleActions: 'play none none reverse'
			}
		})
		.from('.minimal-cta-container', {
			y: 30,
			opacity: 0,
			duration: 0.7
		})
		.from(
			'.minimal-cta h2',
			{
				y: 20,
				opacity: 0,
				duration: 0.6
			},
			'-=0.4'
		)
		.from(
			'.minimal-cta p',
			{
				y: 15,
				opacity: 0,
				duration: 0.5
			},
			'-=0.3'
		);
}

/**
 * Animate the Contact page sections.
 */
export function animateContactPage() {
	// Hero section animation
	gsap
		.timeline()
		.from('h1', {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		})
		.from(
			'h1 + p',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.5'
		);

	// Contact info cards animation
	gsap.from('.grid-cols-1 > div', {
		y: 30,
		opacity: 0,
		duration: 0.7,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.grid-cols-1',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Contact form animation
	gsap
		.timeline({
			scrollTrigger: {
				trigger: 'form',
				start: 'top bottom-=100',
				toggleActions: 'play none none reverse'
			}
		})
		.from('form > h3', {
			y: 20,
			opacity: 0,
			duration: 0.7
		})
		.from(
			'form .grid > div, form .mt-4',
			{
				y: 30,
				opacity: 0,
				stagger: 0.15,
				duration: 0.6
			},
			'-=0.3'
		)
		.from(
			'form button',
			{
				y: 20,
				opacity: 0,
				duration: 0.5
			},
			'-=0.2'
		);

	// FAQ section animation
	gsap.from('.faq-section h2, .faq-section > p', {
		y: 30,
		opacity: 0,
		duration: 0.7,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.faq-section',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// FAQ items animation
	gsap.from('.faq-section details', {
		y: 20,
		opacity: 0,
		duration: 0.5,
		stagger: 0.15,
		scrollTrigger: {
			trigger: '.faq-section details',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});
}

/**
 * Animate the Portfolio page sections.
 */
export function animatePortfolioPage() {
	// Hero section animation
	gsap
		.timeline()
		.from('h1', {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		})
		.from(
			'h1 + p',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.5'
		);

	// Portfolio filter buttons animation
	gsap.from('.filter-buttons button', {
		y: 20,
		opacity: 0,
		stagger: 0.1,
		duration: 0.5,
		scrollTrigger: {
			trigger: '.filter-buttons',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Portfolio items animation
	gsap.from('.portfolio-grid > div', {
		y: 50,
		opacity: 0,
		scale: 0.95,
		stagger: 0.1,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.portfolio-grid',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// Pagination animation
	gsap.from('.pagination', {
		y: 20,
		opacity: 0,
		duration: 0.5,
		scrollTrigger: {
			trigger: '.pagination',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});
}

/**
 * Animate the Services page sections.
 */
export function animateServicesPage() {
	// Hero section animation
	gsap
		.timeline()
		.from('h1', {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		})
		.from(
			'h1 + p',
			{
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out'
			},
			'-=0.5'
		);

	// Services cards animation
	gsap.from('.services-grid > div', {
		y: 50,
		opacity: 0,
		stagger: 0.15,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.services-grid',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Process cards animation
	gsap.from('.process-section h2', {
		y: 30,
		opacity: 0,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.process-section',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	gsap.from('.process-steps > div', {
		y: 40,
		opacity: 0,
		stagger: 0.2,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.process-steps',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});

	// Testimonials animation
	gsap.from('.testimonials-section > *', {
		y: 30,
		opacity: 0,
		stagger: 0.2,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.testimonials-section',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	// Pricing tables animation
	gsap.from('.pricing-section h2, .pricing-section > p', {
		y: 30,
		opacity: 0,
		stagger: 0.2,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.pricing-section',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});

	gsap.from('.pricing-grid > div', {
		y: 50,
		opacity: 0,
		scale: 0.95,
		stagger: 0.2,
		duration: 0.8,
		scrollTrigger: {
			trigger: '.pricing-grid',
			start: 'top bottom-=50',
			toggleActions: 'play none none reverse'
		}
	});
}
