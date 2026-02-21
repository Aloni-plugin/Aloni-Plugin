import { useEffect } from 'react';

const TEXTURE_STYLES = {
	background: 'url("/wp-content/plugins/Aloni-Plugin/images/texture.jpg") center center',
	backgroundSize: '500px',
	backgroundAttachment: 'fixed',
	animation: 'moveBackground 60s linear infinite',
};

/**
 * Applies the repeating texture background to document.body when mounted.
 * Clears it on unmount so non-Aloni pages are unaffected.
 * Use once per page as the first child of the root fragment in each view.
 */
export const BodyTexture = () => {
	useEffect(() => {
		const prev = {
			background: document.body.style.background,
			backgroundSize: document.body.style.backgroundSize,
			backgroundAttachment: document.body.style.backgroundAttachment,
			animation: document.body.style.animation,
		};
		Object.assign(document.body.style, TEXTURE_STYLES);
		return () => {
			document.body.style.background = prev.background;
			document.body.style.backgroundSize = prev.backgroundSize;
			document.body.style.backgroundAttachment = prev.backgroundAttachment;
			document.body.style.animation = prev.animation;
		};
	}, []);
	return null;
};
