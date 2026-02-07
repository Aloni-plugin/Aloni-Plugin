import { createRoot } from '@wordpress/element';
import { Navigation, ContactCards, Footer } from '../shared/components';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-reservation-approved-page="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<Navigation/>
				<div className="reservation-confirmation">
					<h2><strong>Bedankt voor je reservering</strong></h2>
					<p>We zien je graag binnenkort!</p>
					<p>Kapsalon Deniz</p>
				</div>
				<ContactCards/>
				<Footer/>
			</>
		);
	});
});
