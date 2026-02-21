import { createRoot } from '@wordpress/element';
import { BodyTexture, Navigation, ContactCards, HeroSection, Footer } from '../shared/components';
import { SharedText } from '../shared/text/SharedText';
import { TailorPriceList } from './TailorPriceList';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-tailor-prices="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.tailor} useDesignLayout />
				<TailorPriceList />
				<ContactCards />
				<Footer />
			</>
		);
	});
});
