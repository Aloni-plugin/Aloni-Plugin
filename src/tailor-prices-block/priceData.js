/**
 * Price data for Atelier Deniz.
 *
 * Structure:
 *   Each top-level object is a category (e.g. Naaiatelier, Stomerij).
 *   Each category contains an array of subcategories.
 *   Each subcategory has a label and an array of services with prices.
 *
 * To add / edit prices, simply update the objects below.
 */
export const tailorPriceData = [
	{
		label: 'Naaiatelier',
		subcategories: [
			{
				label: 'Colbert',
				services: [
					{ name: 'Mouwen inkorten', price: '€25,-' },
					{ name: 'Mouwen verlengen', price: '€30,-' },
					{ name: 'Taille innemen', price: '€35,-' },
					{ name: 'Voering repareren', price: '€20,-' },
					{ name: 'Knopen vervangen', price: '€5,-' },
				],
			},
			{
				label: 'Broeken',
				services: [
					{ name: 'Inkorten', price: '€12,-' },
					{ name: 'Inkorten met originele zoom', price: '€18,-' },
					{ name: 'Taille innemen', price: '€18,-' },
					{ name: 'Rits vervangen', price: '€15,-' },
					{ name: 'Scheuren repareren', price: '€10,-' },
				],
			},
			{
				label: 'Jurken',
				services: [
					{ name: 'Inkorten', price: '€20,-' },
					{ name: 'Innemen', price: '€25,-' },
					{ name: 'Rits vervangen', price: '€18,-' },
					{ name: 'Zoom repareren', price: '€12,-' },
				],
			},
			{
				label: 'Mannen',
				services: [
					{ name: 'Overhemd innemen', price: '€18,-' },
					{ name: 'Mouwen inkorten', price: '€15,-' },
					{ name: 'Broek inkorten', price: '€12,-' },
					{ name: 'Rits vervangen', price: '€15,-' },
					{ name: 'Knopen vervangen', price: '€5,-' },
				],
			},
		],
	},
	{
		label: 'Stomerij',
		subcategories: [
			{
				label: 'Vrouwen',
				services: [
					{ name: 'Blouse', price: '€8,-' },
					{ name: 'Jurk', price: '€14,-' },
					{ name: 'Rok', price: '€10,-' },
					{ name: 'Jas', price: '€16,-' },
					{ name: 'Trouwjurk', price: '€55,-' },
				],
			},
			{
				label: 'Mannen',
				services: [
					{ name: 'Overhemd', price: '€6,-' },
					{ name: 'Pak (2-delig)', price: '€18,-' },
					{ name: 'Pak (3-delig)', price: '€24,-' },
					{ name: 'Broek', price: '€10,-' },
					{ name: 'Jas / winterjas', price: '€16,-' },
				],
			},
			{
				label: 'Huishoudelijk',
				services: [
					{ name: 'Dekbedovertrek', price: '€20,-' },
					{ name: 'Gordijnen (per m²)', price: '€12,-' },
					{ name: 'Tafelkleed', price: '€14,-' },
					{ name: 'Tapijt (per m²)', price: '€18,-' },
				],
			},
		],
	},
];
