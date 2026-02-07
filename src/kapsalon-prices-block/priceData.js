/**
 * Price data for Kapsalon Deniz.
 *
 * Structure:
 *   Each key is a category slug (used internally).
 *   Each value contains:
 *     - label : display name shown in the sidebar and as the section heading
 *     - services : array of { name, price } objects
 *
 * To add / edit prices, simply update the objects below.
 */
export const priceData = [
	{
		label: 'Vrouwen',
		services: [
			{ name: 'Knippen, droog föhnen', price: '€30,-' },
			{ name: 'Knippen, model föhnen', price: '€40,-' },
			{ name: 'Contouren of pony', price: '€8,-' },
			{ name: 'Wassen', price: '€4,-' },
			{ name: 'Wassen en drogen', price: '€12,-' },
			{ name: 'Wassen, model föhnen vanaf', price: '€25,50' },
			{ name: 'Opsteken vanaf', price: '€50,-' },
		],
	},
	{
		label: 'Heren',
		services: [
			{ name: 'Knippen', price: '€20,-' },
			{ name: 'Knippen en wassen', price: '€24,-' },
			{ name: 'Baard trimmen', price: '€10,-' },
			{ name: 'Knippen, baard trimmen', price: '€28,-' },
			{ name: 'Scheren', price: '€15,-' },
		],
	},
	{
		label: 'Kinderen',
		services: [
			{ name: 'Knippen (t/m 11 jaar)', price: '€15,-' },
			{ name: 'Knippen en wassen', price: '€18,-' },
		],
	},
	{
		label: 'Verfen',
		services: [
			{ name: 'Verven uitgroei', price: '€35,-' },
			{ name: 'Verven geheel kort haar', price: '€40,-' },
			{ name: 'Verven geheel lang haar', price: '€50,-' },
			{ name: 'Highlights / lowlights vanaf', price: '€45,-' },
			{ name: 'Balayage vanaf', price: '€75,-' },
		],
	},
	{
		label: 'Epileren',
		services: [
			{ name: 'Wenkbrauwen', price: '€10,-' },
			{ name: 'Bovenlip', price: '€7,-' },
			{ name: 'Kin', price: '€7,-' },
			{ name: 'Wenkbrauwen + bovenlip', price: '€15,-' },
			{ name: 'Geheel gezicht', price: '€25,-' },
		],
	},
	{
		label: 'Bruid',
		services: [
			{ name: 'Bruidskapsel (proef + dag)', price: '€150,-' },
			{ name: 'Bruidskapsel (alleen dag)', price: '€85,-' },
			{ name: 'Gala / feestkapsel', price: '€55,-' },
			{ name: 'Make-up', price: '€45,-' },
		],
	},
];
