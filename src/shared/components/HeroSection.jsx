import React from 'react';

export const HeroSection = () => {
	return (
		<div className="hero-container">
			<img src="/wp-content/plugins/Aloni-Plugin/images/kapsalon-homepage.png" alt="" className="hero-background" />

			<div className="hero-content">
				<h2 className="hero-heading">Klaar voor iets nieuws?</h2>

				<div className="hero-buttons">
					<button className="btn-primary">
						Afspraak maken
					</button>
					<button className="btn-secondary">
						Onze prijslijst
					</button>
				</div>

				<div className="hero-logo">
					<span className="logo-kapsalon">Kapsalon</span>
					<span className="logo-deniz">Deniz</span>
				</div>
			</div>
		</div>
	);
};
