import { createRoot } from '@wordpress/element';
import { BodyTexture, Navigation, ContactCards, HeroSection, Footer } from '../shared/components';
import { SharedText } from '../shared/text/SharedText';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('[data-contact-page="true"]');

	containers.forEach(container => {
		const root = createRoot(container);
		root.render(
			<>
				<BodyTexture />
				<Navigation />
				<HeroSection {...SharedText.hero.contact} useDesignLayout />
				<ContactCards />
				<Footer	/>
			</>
		);
	});
});
