import { useEffect } from 'react';
import { getImageUrl } from '../utils/pluginConfig';

const MOBILE_BREAKPOINT = 768;
const DESKTOP_ANIMATION = 'moveBackground 60s linear infinite';
const MOBILE_ANIMATION = 'moveBackground 480s linear infinite';

const TEXTURE_STYLES = {
	background: `url("${getImageUrl('texture.jpg')}") center center`,
	backgroundSize: '500px',
	backgroundAttachment: 'fixed',
	animation: DESKTOP_ANIMATION,
};

/**
 * Applies the repeating texture background to document.body when mounted.
 * Clears it on unmount so non-Aloni pages are unaffected.
 * Use once per page as the first child of the root fragment in each view.
 */
export const BodyTexture = () => {
	useEffect(() => {
		const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
		const prev = {
			background: document.body.style.background,
			backgroundSize: document.body.style.backgroundSize,
			backgroundAttachment: document.body.style.backgroundAttachment,
			animation: document.body.style.animation,
		};
		Object.assign(document.body.style, {
			...TEXTURE_STYLES,
			animation: isMobile ? MOBILE_ANIMATION : DESKTOP_ANIMATION,
		});
		return () => {
			document.body.style.background = prev.background;
			document.body.style.backgroundSize = prev.backgroundSize;
			document.body.style.backgroundAttachment = prev.backgroundAttachment;
			document.body.style.animation = prev.animation;
		};
	}, []);
	return null;
};
