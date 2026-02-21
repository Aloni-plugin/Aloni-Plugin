import { createRoot } from '@wordpress/element';
import {Navigation, ContactCards, HeroSection, Footer, BodyTexture} from '../shared/components';
import { SharedText } from '../shared/text/SharedText';
import { ProductGallery } from './ProductGallery';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-products-gallery="true"]');

	containers.forEach((container) => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.producten} useDesignLayout />
				<ProductGallery />
				<ContactCards />
				<Footer />
			</>
		);
	});
});
