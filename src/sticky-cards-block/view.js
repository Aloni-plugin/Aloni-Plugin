import { createRoot } from '@wordpress/element';
import {StickyCardsSection, DiagonalCutSection} from './components';
import {ContactCards, Navigation} from "../shared/components";

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
