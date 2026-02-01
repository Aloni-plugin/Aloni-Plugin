import { createRoot } from '@wordpress/element';
import {StickyCardsSection, Navigation, DiagonalCutSection, ContactCards} from './components';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-sticky-cards="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<Navigation />
				<DiagonalCutSection />
				<StickyCardsSection />
				<ContactCards />
			</>
		);
	});
});
