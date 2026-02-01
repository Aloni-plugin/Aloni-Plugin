
import { useState, useEffect } from 'react';

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Lock scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			{/* Google Material Symbols Font */}
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
			/>

			{/* Desktop Navigation */}
			<nav className="liquidGlass-wrapper navigation desktop-nav">
				<div className="liquidGlass-effect"></div>
				<div className="liquidGlass-tint"></div>
				<div className="liquidGlass-shine"></div>
				<div className="liquidGlass-text">
					<a href="/" className="nav-link">Kapsalon</a>
					<a href="/kleding-atelier" className="nav-link">Kleding atelier</a>
					<a href="/producten" className="nav-link">Onze producten</a>
					<a href="/over-ons" className="nav-link">Over ons</a>
					<a href="/contact" className="nav-link">Contact</a>
				</div>
			</nav>

			{/* Mobile Burger Button - Hidden when menu is open */}
			<button
				className={`liquidGlass-wrapper burger-button ${isMenuOpen ? 'hidden' : ''}`}
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				<div className="liquidGlass-effect"></div>
				<div className="liquidGlass-tint"></div>
				<div className="liquidGlass-shine"></div>
				<div className="liquidGlass-text burger-icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			{/* Mobile Menu Overlay */}
			<div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
				<nav className={`liquidGlass-wrapper mobile-nav ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
					<div className="liquidGlass-effect"></div>
					<div className="liquidGlass-tint"></div>
					<div className="liquidGlass-shine"></div>

					{/* Close Button (X) - Top Left */}
					<button
						className="liquidGlass-wrapper close-button"
						onClick={closeMenu}
						aria-label="Close menu"
					>
						<div className="liquidGlass-effect"></div>
						<div className="liquidGlass-tint"></div>
						<div className="liquidGlass-shine"></div>
						<div className="liquidGlass-text">
							<span className="material-symbols-outlined">close</span>
						</div>
					</button>

					<div className="liquidGlass-text mobile-nav-links">
						<a href="/" className="nav-link" onClick={closeMenu}>Kapsalon</a>
						<a href="/kleding-atelier" className="nav-link" onClick={closeMenu}>Kleding atelier</a>
						<a href="/producten" className="nav-link" onClick={closeMenu}>Onze producten</a>
						<a href="/over-ons" className="nav-link" onClick={closeMenu}>Over ons</a>
						<a href="/contact" className="nav-link" onClick={closeMenu}>Contact</a>
					</div>
				</nav>
			</div>

			{/* SVG Filter for Glass Effect */}
			<svg style={{ display: 'none' }}>
				<filter
					id="glass-distortion"
					x="0%"
					y="0%"
					width="100%"
					height="100%"
					filterUnits="objectBoundingBox"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.01 0.01"
						numOctaves="1"
						seed="5"
						result="turbulence"
					/>
					<feComponentTransfer in="turbulence" result="mapped">
						<feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
						<feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
						<feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
					</feComponentTransfer>
					<feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
					<feSpecularLighting
						in="softMap"
						surfaceScale="5"
						specularConstant="1"
						specularExponent="100"
						lightingColor="white"
						result="specLight"
					>
						<fePointLight x="-200" y="-200" z="300" />
					</feSpecularLighting>
					<feComposite
						in="specLight"
						operator="arithmetic"
						k1="0"
						k2="1"
						k3="1"
						k4="0"
						result="litImage"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="softMap"
						scale="150"
						xChannelSelector="R"
						yChannelSelector="G"
					/>
				</filter>
			</svg>
		</>
	);
};
