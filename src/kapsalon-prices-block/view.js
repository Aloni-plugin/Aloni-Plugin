import { createRoot } from '@wordpress/element';
import { BodyTexture, Navigation, ContactCards, HeroSection, Footer } from '../shared/components';
import { SharedText } from '../shared/text/SharedText';
import { PriceList } from './PriceList';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-kapsalon-prices="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.barber} useDesignLayout />
				<PriceList />
				<ContactCards />
				<Footer />
			</>
		);
	});
});
