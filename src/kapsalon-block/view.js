import { createRoot } from '@wordpress/element';
import { BodyTexture, Navigation, ContactCards, InformationWithPhotos, HeroSection, Footer } from '../shared/components';
import {SharedText} from "../shared/text/SharedText";

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-kapsalon-homepage="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.barber} useDesignLayout />
				<InformationWithPhotos {...SharedText.informationWithPhotos.barber.women} />
				<InformationWithPhotos {...SharedText.informationWithPhotos.barber.men} />
				<ContactCards />
				<Footer	/>
			</>
		);
	});
});
