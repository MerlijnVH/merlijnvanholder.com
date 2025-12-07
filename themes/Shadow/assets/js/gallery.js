document.addEventListener('DOMContentLoaded', function () {
	const galleries = document.querySelectorAll('#readme .gallery');

	// Randomize images in each gallery

	galleries.forEach(gallery => {
		let images = Array.from(gallery.querySelectorAll('img'));
		let span = gallery.querySelector('span');

		images.sort(() => Math.random() - 0.5);

		// Clear existing content

		gallery.innerHTML = '';

		// If we have a span, re-add it first

		if (span) {
			gallery.appendChild(span);
		}

		// Re-add shuffled images

		images.forEach(img => {
			gallery.appendChild(img);
		});
	});

	// Show more functionality

	galleries.forEach(gallery => {
		const elements = gallery.querySelectorAll('img, span');
		const total = elements.length;

		const isDesktop = window.innerWidth > 600;

		let shown = isDesktop ? 10 : 6; // Start with 10 columns on desktop, 6 on mobile
		const increment = isDesktop ? 5 : 3; // Increment 5 columns on desktop, 3 on mobile

		// Get the data-name attribute for Umami tracking

		const galleryCategory = gallery.getAttribute('data-category') || 'unknown';

		const updateVisibility = () => {
			elements.forEach((element, index) => {
				if (index < shown) {
					element.classList.add('shown');
				}
			});
		};

		updateVisibility();

		if (total > shown) {
			const link = document.createElement('a');
			link.textContent = "Show more »";
			link.href = '#';
			link.style.display = 'block';
			link.style.textAlign = 'right';
			link.style.textDecoration = 'underline';
			link.style.cursor = 'pointer';
			link.style.color = 'inherit';
			link.style.gridColumn = '1 / -1';

			// Add Umami tracking attribute

			if (window.umami) {
				link.onclick = () => window.umami.track(
					'Show More Favorites',
					{ category: galleryCategory }
				);
			}

			gallery.appendChild(link);

			link.addEventListener('click', function (e) {
				e.preventDefault();
				shown += increment;
				updateVisibility();

				if (shown >= total) {
					link.style.display = 'none';
				}
			});
		}
	});
});