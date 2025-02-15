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
 * Animate the profile image on scroll.
 */
export function animateProfileImage() {
	gsap.from('.profile-image', {
		scale: 0.8,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: '.profile-image',
			start: 'top bottom-=100',
			end: 'top center',
			scrub: 1
		}
	});
}

export function animateSkills() {
	gsap.from('.skill-item', {
		y: 50,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.skill-item',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});
}

/**
 * Animate the service cards section.
 */

export function animateWSMAheading() {
	gsap.from('.what-sets-me-apart h2', {
		x: -50,
		opacity: 0,
		duration: 0.8,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: '.what-sets-me-apart h2',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});
}
export function animateServices() {
	gsap.from('.service-cards > *', {
		y: 50,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.service-card',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});
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
 * Animate the call-to-action section.
 */
export function animateCTA() {
	gsap.from('.cta-section', {
		y: 30,
		opacity: 0,
		duration: 0.8,
		scrollTrigger: {
			trigger: '.cta-section',
			start: 'top bottom-=100',
			toggleActions: 'play none none reverse'
		}
	});
}

/**
 * Animate the parallax background in the hero section.
 */
export function animateParallax() {
	gsap.to('.hero-bg', {
		y: '20%',
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'top top',
			end: 'bottom top',
			scrub: 1
		}
	});
}

/**
 * Animate the introduction section content.
 */
export function animateIntroduction() {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.introduction-content',
				start: 'top center',
				toggleActions: 'play none none reverse'
			}
		})
		.from('.introduction-heading', { scale: 0.9, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
		.from('.introduction-text', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
		.from(
			'.skill-items > *',
			{ scale: 0.95, opacity: 0, duration: 0.5, stagger: 0.2, delay: 0.2, ease: 'power3.out' },
			'-=0.1'
		);
}

/**
 * Apply all animations in sequence.
 */
export function animatePage() {
	animateHero();
	animateIntroduction();
	animateProfileImage();
	animateSkills();
	animateWSMAheading();
	animateServices();
	animateBrand();
	animateEcommerce();
	animateCTA();
	animateParallax();
}
