import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		sourcemap: false // This will prevent source map generation
	},
	optimizeDeps: {
		include: ['gsap', 'gsap/ScrollTrigger']
	},
	ssr: {
		noExternal: ['gsap']
	}
});
