/**
 * Get the plugin URL from the global config set by WordPress
 * Falls back to empty string if not available
 */
export const getPluginUrl = () => {
	return window.aloniPluginConfig?.pluginUrl || '';
};

/**
 * Get the full path to an image in the plugin's images directory
 * @param {string} imagePath - Path relative to the images folder (e.g., 'book.png' or 'men perfume/kred.jpeg')
 * @returns {string} Full URL to the image
 */
export const getImageUrl = (imagePath) => {
	const pluginUrl = getPluginUrl();
	return `${pluginUrl}images/${imagePath}`;
};
