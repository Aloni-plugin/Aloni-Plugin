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
		label: 'Dames',
		services: [
			{ name: 'Knippen, droog föhnen', price: '€ 30,00' },
			{ name: 'Knippen, model föhnen', price: '€ 40,00' },
			{ name: 'Contouren of pony', price: '€ 8,00' },
			{ name: 'Wassen', price: '€ 4,00' },
			{ name: 'Wassen en drogen', price: '€ 12,00' },
			{ name: 'Wassen, model föhnen vanaf', price: '€25,50' },
			{ name: 'Opsteken vanaf', price: '€ 50,00' },
		],
	},
	{
		label: 'Heren',
		services: [
			{ name: 'Knippen', price: '€ 25,00' },
			{ name: 'Tondeuse één stand', price: '€ 20,00' },
			{ name: 'Wassen', price: '€ 4,00' },
			{ name: 'Verven', price: '€ 50,00' },
			{ name: 'Contouren', price: '€ 10,00' },
			{ name: 'Gezicht scheren', price: '€ 20,00' },
			{ name: 'Baard tondeuse', price: '€ 13,00' },
			{ name: 'Masker', price: '€ 20,00' },
		],
	},
	{
		label: 'Kinderen t/m 1 1 jaar',
		services: [
			{ name: 'Knippen', price: '€ 15,00' },
			{ name: 'Wassen', price: '€ 2,50' },
		],
	},
	{
		label: 'Verfen',
		services: [
			{ name: 'Verven uitgroei (max na 4 weken)', price: '€ 40,00' },
			{ name: 'Verven kort haar', price: '€ 50,00' },
			{ name: 'Verven halflang haar', price: '€ 60,00' },
			{ name: 'Verven lang haar', price: '€ 75,00' },
			{ name: 'Toner', price: '€ 21,50' },
			{ name: 'Highlights 15 stuks', price: 'In overleg' },
			{ name: 'Losse folie kort', price: '€ 2,50' },
			{ name: 'Losse folie lang', price: '€ 3,00' },
		],
	},
	{
		label: 'Epileren',
		services: [
			{ name: 'Bovenlip', price: '€ 10,00' },
			{ name: 'Wangen', price: '€ 10,00' },
			{ name: 'Wenkbrauwen', price: '€ 20,00' },
			{ name: 'Gehele gezicht', price: '€ 35,00' },
			{ name: 'Wenkbrauwen verven', price: '€ 12,00' },
			{ name: 'Make-up', price: 'In overleg' },
		],
	},
	{
		label: 'Bruid',
		services: [
			{ name: 'Bruidsmake-up', price: '€ 150,00' },
			{ name: 'Bruidskapsel', price: '€ 150,00' },
		],
	},
];
