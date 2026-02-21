import { createRoot } from '@wordpress/element';
import {StickyCardsSection, DiagonalCutSection} from './components';
import { BodyTexture, ContactCards, Footer, Navigation } from "../shared/components";

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-sticky-cards="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<DiagonalCutSection />
				<StickyCardsSection />
				<ContactCards />
				<Footer />
			</>
		);
	});
});
