/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			maxWidth: {
				'8xl': '88rem'
			}
		},
		extend: {
			maxWidth: {
				'8xl': '88rem'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
						fontSize: '1.125rem',
						h1: {
							fontSize: '2.25rem'
						},
						h2: {
							fontSize: '1.875rem'
						},
						h3: {
							fontSize: '1.5rem'
						},
						h4: {
							fontSize: '1.25rem'
						}
					}
				},
				lg: {
					css: {
						fontSize: '1.25rem',
						h1: {
							fontSize: '2.5rem'
						},
						h2: {
							fontSize: '2rem'
						},
						h3: {
							fontSize: '1.75rem'
						},
						h4: {
							fontSize: '1.5rem'
						}
					}
				}
			},
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				background: 'var(--background-color)',
				background2: 'var(--background-color-alt)',
				text: 'var(--text-color)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Montserrat', 'system-ui', 'sans-serif']
			},
			fontSize: {
				xs: '0.875rem', // 14px
				sm: '1rem', // 16px
				base: '1.125rem', // 18px
				lg: '1.25rem', // 20px
				xl: '1.5rem', // 24px
				'2xl': '1.875rem', // 30px
				'3xl': '2.25rem', // 36px
				'4xl': '3rem', // 48px
				'5xl': '3.75rem', // 60px
				'6xl': '4.5rem', // 72px
				'7xl': '6rem', // 96px
				'8xl': '8rem', // 128px
				'9xl': '9rem' // 144px
			}
		}
	},
	plugins: [await import('@tailwindcss/typography')]
};
