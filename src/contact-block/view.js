import { createRoot } from '@wordpress/element';
import { Navigation, ContactCards, InformationWithPhotos, HeroSection, Footer } from '../shared/components';
import {SharedText} from "../shared/text/SharedText";

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-contact-page="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<Navigation />
				<ContactCards />
				<Footer	/>
			</>
		);
	});
});
