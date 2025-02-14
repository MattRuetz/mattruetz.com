// Create an image configuration file
export const imageConfig = {
	// WordPress image domain for next/image
	domains: ['your-wp-domain.com'],

	// Base URL for your WordPress media
	wpUploadUrl: 'https://your-wp-domain.com/wp-content/uploads',

	// Default image dimensions
	defaults: {
		projectThumb: {
			width: 800,
			height: 600
		}
	}
};
