import { createRoot } from '@wordpress/element';
import { Navigation, ContactCards, HeroSection, Footer, ReservationThankYou } from '../shared/components';
import { SharedText } from '../shared/text/SharedText';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-reservation-approved-page="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<Navigation />
				<HeroSection {...SharedText.hero.reservation} useDesignLayout />
				<ReservationThankYou />
				<ContactCards />
				<Footer />
			</>
		);
	});
});
