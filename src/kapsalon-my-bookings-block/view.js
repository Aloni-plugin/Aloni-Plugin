import { createRoot } from '@wordpress/element';
import { BodyTexture, Navigation, ContactCards, HeroSection, Footer } from '../shared/components';
import {SharedText} from "../shared/text/SharedText";

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-kapsalon-my-bookings="true"]');

	containers.forEach(container => {
		// Get the booking form wrapper (sibling element)
		const myBookingsFormWrapper = container.nextElementSibling;

		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.barber} useDesignLayout />
				{/* React will render here, booking form is below as sibling */}
			</>
		);

		// Move the booking form between HeroSection and ContactCards
		const heroSection = container.querySelector('.hero-container');
		if (heroSection && myBookingsFormWrapper) {
			heroSection.after(myBookingsFormWrapper);
		}

		// Continue rendering after the booking form
		const bookingRoot = createRoot(document.createElement('div'));
		myBookingsFormWrapper.after(bookingRoot._internalRoot.containerInfo);
		bookingRoot.render(
			<>
				<ContactCards />
				<Footer />
			</>
		);
	});
});
