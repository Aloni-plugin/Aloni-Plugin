import { getImageUrl } from '../shared/utils/pluginConfig';

const makeImagePath = (folder, fileName) =>
	getImageUrl(`${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`);

const menFiles = [
	'kred.jpeg',
	'za-one-50ml.jpeg',
	'brbr-hro-50ml.jpeg',
	'gsda-50ml.jpeg',
	'9-50ml.jpeg',
	'yo-50ml.jpeg',
	'y-sl.jpeg',
	'j-lover.jpeg',
	'j-altrml-50ml.jpeg',
	'vntm-50ml.jpeg',
	'blu-ch.jpeg',
	'one-m-50ml.jpeg',
	'madawi-50ml.jpeg',
	'one-m-50ml-2.jpeg',
	'skndl.jpeg',
	'imegnshen.jpeg',
	'tabk-vanil.jpeg',
	'erpa.jpeg',
	'bor-n-roma.jpeg',
	'trno-24-50ml.jpeg',
	'jpardes-50ml.jpeg',
	'tonka.jpeg',
];

const womenFiles = [
	'lo-st-chry.jpeg',
	'vanilla-vip.jpeg',
	'kandy-mix.jpeg',
	'lebr-nts.jpeg',
	'marshmlo-50ml.jpeg',
	'brbr-h-50ml.jpeg',
	'devin.jpeg',
	'lktrk-chry.jpeg',
	'my-wy.jpeg',
];

const menPrices = Array(menFiles.length).fill('€ 25');

const womenPrices = Array(womenFiles.length).fill('€ 25');

const menProductNames = [
	'KRED',
	'ZA ONE 50ML',
	'BRBR HRO 50ML',
	'GSDA 50ML',
	'9 50ML',
	'YO 50ML',
	'Y,SL',
	'J LOVER',
	'J ALTRML 50ML',
	'VNTM 50ML',
	'BLU CH',
	'ONE M 50ML',
	'MADAWI 50ML',
	'ONE M 50ML',
	'SKNDL',
	'IMEGNSHEN',
	'TABK VANIL',
	'ERPA',
	'BOR.N ROMA',
	'TRNO 24 50ML',
	'JPARDES 50ML',
	'TONKA',
];

const womenProductNames = [
	'LO.ST CHRY',
	'VANILLA VIP',
	'KANDY MIX',
	'LEBR NTS',
	'MARSHMLO 50ML',
	'BRBR H 50ML',
	'DEVIN',
	'LKTRK CHRY',
	'MY WY',
];

const buildProducts = (files, folder, prices, productNames, titlePrefix) =>
	files.map((fileName, index) => ({
		name: productNames[index] || `${titlePrefix} ${index + 1}`,
		price: prices[index] ?? prices[prices.length - 1],
		image: makeImagePath(folder, fileName),
	}));

export const productData = [
	{
		label: 'Heren parfums',
		products: buildProducts(menFiles, 'men perfume', menPrices, menProductNames, 'Heren parfum'),
	},
	{
		label: 'Dames parfums',
		products: buildProducts(womenFiles, 'women perfumes', womenPrices, womenProductNames, 'Dames parfum'),
	},
];
