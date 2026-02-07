import { createRoot } from '@wordpress/element';
import { Navigation, ContactCards, HeroSection, Footer } from '../shared/components';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-kapsalon-review="true"]');

	containers.forEach(container => {
		// Get the reviews wrapper (sibling element)
		const reviewsWrapper = container.nextElementSibling;

		const root = createRoot(container);
		root.render(
			<>
				<Navigation />
				<HeroSection />
				{/* React will render here, reviews are below as sibling */}
			</>
		);

		// Move the reviews between HeroSection and ContactCards
		const heroSection = container.querySelector('.hero-section'); // adjust selector
		if (heroSection && reviewsWrapper) {
			heroSection.after(reviewsWrapper);
		}

		// Continue rendering after the reviews
		const reviewRoot = createRoot(document.createElement('div'));
		reviewsWrapper.after(reviewRoot._internalRoot.containerInfo);
		reviewRoot.render(
			<>
				<ContactCards />
				<Footer />
			</>
		);
	});
});
