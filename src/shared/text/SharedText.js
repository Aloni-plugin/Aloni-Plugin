import { getImageUrl } from '../utils/pluginConfig';

export const SharedText = {
	hero: {
		barber: {
			image: getImageUrl('kapsalon-homepage.png'),
			heading: "Klaar voor iets nieuws?",
			primaryButton: {
				text: "Afspraak maken",
				href: "/yamato/reserveren",
				backgroundColor: "#F26B6B",
				textColor: "#ffffff",
				icon: "📅"
			},
			secondaryButton: {
				text: "Onze prijslijst",
				href: "/yamato/kapper-prijslijst",
				backgroundColor: "#ffffff",
				textColor: "#F26B6B",
				borderColor: "#F26B6B",
				icon: "📋"
			},
			logo: {
				topText: "Kapsalon",
				bottomText: "Deniz"
			}
		},
		producten: {
			image: getImageUrl('kapsalon-homepage.png'),
			heading: "Bekijk onze unieke geurtjes",
			logo: {
				topText: "Kapsalon",
				bottomText: "Deniz"
			}
		},
		reservation: {
			image: getImageUrl('kapsalon-homepage.png'),
			heading: "Klaar voor iets nieuws?",
			logo: {
				topText: "Kapsalon",
				bottomText: "Deniz"
			}
		},
		tailor: {
			image: getImageUrl('kleding-reperatie-hero.png'),
			heading: "Klaar voor iets nieuws?",
			primaryButton: {
				text: "Neem contact op",
				href: "/yamato/contact",
				backgroundColor: "#3D4D3E",
				textColor: "#ffffff"
			},
			secondaryButton: {
				text: "Onze prijslijst",
				href: "/yamato/atelier-prijslijst",
				backgroundColor: "transparent",
				textColor: "#3D4D3E",
				borderColor: "#3D4D3E"
			},
			logo: {
				topText: "Atelier",
				bottomText: "Deniz"
			}
		},
		contact: {
			image: getImageUrl('kapsalon-homepage.png'),
			heading: "Neem contact op",
			primaryButton: {
				text: "Afspraak maken",
				href: "/yamato/reserveren",
				backgroundColor: "#F26B6B",
				textColor: "#ffffff",
				icon: "📅"
			},
			logo: {
				topText: "Kapsalon",
				bottomText: "Deniz"
			}
		},
		reviews: {
			image: getImageUrl('kapsalon-homepage.png'),
			heading: "Wat onze klanten zeggen",
			primaryButton: {
				text: "Afspraak maken",
				href: "/yamato/afspraak",
				backgroundColor: "#F86060",
				textColor: "#ffffff"
			},
			secondaryButton: {
				text: "Onze prijslijst",
				href: "/yamato/prijslijst",
				backgroundColor: "transparent",
				textColor: "#ffffff",
				borderColor: "#ffffff"
			},
			logo: {
				topText: "Kapsalon",
				bottomText: "Deniz"
			}
		}
	},
	informationWithPhotos: {
		barber: {
			men: {
				titleItalic: "Deniz voor",
				title: "mannen",
				paragraphs: [
					"Bij Kapsalon Deniz ben je altijd aan het goede adres; zowel jong als oud. We luisteren goed naar je wensen en zorgen er voor dat je tevreden de deur uit gaat!",
					"Naast natuurlijk de nieuwste modellen voor mannen, scheren wij baarden. Omdat we erg zorgzaam met onze klanten omgaan, scheren we natuurlijk even als vendbaarden dorhalen en alles wat u echt hoeft nog mee. En dat altijd voor dezelfde prijs."
				],
				backgroundColor: "#3D4D3E",
				textColor: "#ffffff",
				primaryButton: {
					text: "Afspraak maken",
					href: "/yamato/reserveren"
				},
				secondaryButton: {
					text: "Onze prijslijst",
					href: "/yamato/kapper-prijslijst",
					borderColor: "#ffffff"
				},
				photos: [
					getImageUrl('haircut-men1.png'),
					getImageUrl('haircut-men2.png'),
					getImageUrl('haircut-men3.png'),
				]
			},
			women: {
				titleItalic: "Deniz voor",
				title: "Vrouwen",
				paragraphs: [
					"Kapsalon Deniz gaat altijd met de tijd mee. Zo hebben we de meest kleurrijke en leukste modellen die je maar kunt bedenken! Ook als extra voor de vrouwen hebben we de L'Oreal Professionali producten. Zo kunnen we elke vrouw van elke leeftijd van ruime keuze te kunnen voorzien. Verder werken we ook met ons topmerk Lisap Milano, wat 100 procent grijsdekkend is!",
					"Ook bieden wij keratine behandelingen. Droom je van lang, stijl haar? Dan is deze behandeling ideaal voor jou! Het biedt niet alleen top verzorging voor de haren, maar zorgt er ook voor dat krullen worden omgezet in stijl haar voor maar liefst minimaal 6 maanden (afhankelijk van de lengte van het haar)."
				],
				backgroundColor: "#F86060",
				textColor: "#ffffff",
				primaryButton: {
					text: "Afspraak maken",
					href: "/yamato/reserveren"
				},
				secondaryButton: {
					text: "Onze prijslijst",
					href: "/yamato/kapper-prijslijst",
					borderColor: "#ffffff"
				},
				photos: [
					getImageUrl('haircut-women1.png'),
					getImageUrl('haircut-women2.png'),
					getImageUrl('haircut-women3.png'),
				]
			}
		},
		tailor: {
			titleItalic: "Deniz voor al jouw",
			title: "kledingreperaties",
			paragraphs: [
				"Met de drukke wereld waarin we leven, heb je misschien niet altijd de tijd om aanpassingen voor jezelf, je familie of je huis te doen. Wij zijn gespecialiseerd in het maken en herstellen van kleding, gordijnen, banken, hoezen, maar bijvoorbeeld ook scooterzadels en autobekleding.",
				"Onze ervaren medewerkers weten hoe ze het materiaal moeten repareren en alles er als nieuw uit kunnen laten zien."
			],
			backgroundColor: "#3D4D3E",
			textColor: "#ffffff",
			primaryButton: {
				text: "Neem contact op",
				href: "/yamato/contact",
				backgroundColor: "#F86060"
			},
			secondaryButton: {
				text: "Onze prijslijst",
				href: "/yamato/atelier-prijslijst",
				borderColor: "#ffffff"
			},
			photos: [
				getImageUrl('tailor-information-1.png'),
				getImageUrl('tailor-information-2.png'),
				getImageUrl('tailor-information-3.png'),
			]
		}
	},
	shortPriceList: {
		title: "Onze prijslijst",
		priceItems: [
			{ name: "Colbert korter/langer maken", price: "€20,-" },
			{ name: "Blouse of overhemd korter of langer maken", price: "€15,-" },
			{ name: "Nieuwe rits voor pantalon of jeans", price: "€15,-" },
			{ name: "Knopen aanzetten", price: "€7,-" }
		],
		ctaText: "Wat nog meer?",
		backgroundColor: "#3D4D3E",
		primaryButton: {
			text: "Neem contact op",
			href: "/yamato/contact"
		},
		secondaryButton: {
			text: "Volledige prijslijst",
			href: "/yamato/atelier-prijslijst"
		}
	}
}
