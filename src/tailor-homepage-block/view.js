import { createRoot } from '@wordpress/element';
import { BodyTexture, Navigation, ContactCards, InformationWithPhotos, HeroSection, Footer } from '../shared/components';
import {SharedText} from "../shared/text/SharedText";
import {ShortPriceList} from "../shared/components/ShortPriceList";

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-tailor-homepage="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.tailor} useDesignLayout />
				<InformationWithPhotos {...SharedText.informationWithPhotos.tailor}/>
				<ShortPriceList {...SharedText.shortPriceList}/>
				<ContactCards />
				<Footer	/>
			</>
		);
	});
});
