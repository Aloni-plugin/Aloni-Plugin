const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        'sticky-cards-block/view': './src/sticky-cards-block/view.js',
		'kapsalon-block/view': './src/kapsalon-block/view.js',
		'kapsalon-prices-block/view': './src/kapsalon-prices-block/view.js'
    },
	externals: {
		...defaultConfig.externals,
		// DO NOT externalize GSAP - we want it bundled
		// gsap and ScrollTrigger should be bundled in view.js
	},
};
