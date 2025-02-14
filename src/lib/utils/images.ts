// Utility functions for image handling
export const imageUtils = {
	// Get optimized WordPress image URL
	getOptimizedUrl(url: string, width?: number): string {
		if (!url) return '/images/placeholder.jpg';
		if (!url.includes('wp-content')) return url;

		// Add sizing parameters for WordPress images
		return `${url}${width ? `?w=${width}` : ''}`;
	},

	// Get appropriate image source based on type
	getImageSource(path: string): string {
		// If it's a relative path, use static folder
		if (path.startsWith('/')) {
			return path;
		}
		// Otherwise, use WordPress URL
		return this.getOptimizedUrl(path);
	}
};
