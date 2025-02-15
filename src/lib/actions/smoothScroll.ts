export function smoothScroll(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		const href = node.getAttribute('href');

		// Only handle anchor links
		if (!href?.startsWith('#')) return;

		event.preventDefault();
		const targetId = href.slice(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			// Optionally update the URL
			history.pushState(null, '', href);
		}
	};

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}
