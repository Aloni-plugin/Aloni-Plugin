import React from 'react';

export const Footer = () => {
	return (
		<footer className="footer-section">
			<svg className="footer-background" viewBox="0 0 1472 606" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
				<path d="M1392 0C1436.18 0 1472 35.8172 1472 80V526C1472 570.183 1436.18 606 1392 606H1079C1034.82 606 999 570.183 999 526V451C999 406.817 963.183 371 919 371H80C35.8172 371 0 335.183 0 291V80C1.28869e-07 35.8172 35.8172 1.54624e-06 80 0H1392Z" fill="#F86060"/>
			</svg>

			<div className="footer-content">
				<div className="footer-links">
					<div className="footer-column">
						<h3 className="footer-heading">Snel naar...</h3>
						<ul>
							<li><a href="#over-ons">Over ons</a></li>
							<li><a href="#wat-we-doen">Wat we doen</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>

					<div className="footer-column">
						<h3 className="footer-heading">Kapsalon</h3>
						<ul>
							<li><a href="#prijslijst">Prijslijst</a></li>
							<li><a href="#beoordelingen">Beoordelingen</a></li>
							<li><a href="#afspraak">Afspraak maken</a></li>
						</ul>
					</div>

					<div className="footer-column">
						<h3 className="footer-heading">Atelier</h3>
						<ul>
							<li><a href="#prijslijst">Prijslijst</a></li>
							<li><a href="#beoordelingen">Beoordelingen</a></li>
						</ul>
					</div>

					<div className="footer-column">
						<h3 className="footer-heading">Producten</h3>
						<ul>
							<li><a href="#parfums">Parfums en geurtjes</a></li>
							<li><a href="#haarproducten">Haarproducten</a></li>
						</ul>
					</div>
				</div>

				<div className="footer-cta">
					<div className="footer-cta-box">
						<h3 className="footer-cta-heading">Kappersafspraak maken?</h3>
						<div className="footer-cta-buttons">
							<button className="footer-btn footer-btn-primary">
								Afspraak via de website
							</button>
							<button className="footer-btn footer-btn-secondary">
								Afspraak via Facebook
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
