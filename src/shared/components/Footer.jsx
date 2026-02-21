import React from 'react';
import { getImageUrl } from '../utils/pluginConfig';

const MOBILE_BREAKPOINT = 768;
const DESKTOP_ANIMATION = 'moveBackground 60s linear infinite';
const MOBILE_ANIMATION = 'moveBackground 480s linear infinite';

const getFooterTextureStyle = () => {
	const isMobile = typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT;
	return {
	background: `url("${getImageUrl('texture.jpg')}") center center`,
	backgroundSize: '500px',
	backgroundAttachment: 'fixed',
	animation: isMobile ? MOBILE_ANIMATION : DESKTOP_ANIMATION,
	};
};

export const Footer = () => {
	return (
		<footer className="footer-section" style={getFooterTextureStyle()}>
			<div className="footer-background-wrap">
				<svg className="footer-background" width="1472" height="606" viewBox="0 0 1472 606" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
					<path d="M1392 0C1436.18 0 1472 35.8172 1472 80V526C1472 570.183 1436.18 606 1392 606H1079C1034.82 606 999 570.183 999 526V451C999 406.817 963.183 371 919 371H80C35.8172 371 0 335.183 0 291V80C1.28869e-07 35.8172 35.8172 1.54624e-06 80 0H1392Z" fill="#F86060"/>
				</svg>
				<div className="footer-content">
					<div className="footer-links">
						<div className="footer-column">
							<h3 className="footer-heading">Snel naar...</h3>
							<ul>
								<li><a href="/yamato/kapsalon">Over ons</a></li>
								<li><a href="/yamato/kapsalon#wat-we-doen">Wat we doen</a></li>
								<li><a href="/yamato/contact">Contact</a></li>
							</ul>
						</div>

						<div className="footer-column">
							<h3 className="footer-heading">Kapsalon</h3>
							<ul>
								<li><a href="/yamato/kapper-prijslijst">Prijslijst</a></li>
								<li><a href="/yamato/beoordelingen">Beoordelingen</a></li>
								<li><a href="/yamato/reserveren">Afspraak maken</a></li>
							</ul>
						</div>

						<div className="footer-column">
							<h3 className="footer-heading">Atelier</h3>
							<ul>
								<li><a href="/yamato/atelier-prijslijst">Prijslijst</a></li>
								<li><a href="/yamato/beoordelingen">Beoordelingen</a></li>
							</ul>
						</div>

						<div className="footer-column">
							<h3 className="footer-heading">Producten</h3>
							<ul>
								<li><a href="/yamato/producten">Parfums en geurtjes</a></li>
							</ul>
						</div>
					</div>

					<div className="footer-cta">
						<div className="footer-cta-box">
							<h3 className="footer-cta-heading">Kappersafspraak maken?</h3>
							<div className="footer-cta-buttons">
								<a href="/yamato/reserveren" className="footer-btn footer-btn-primary">
									Afspraak via de website
								</a>
								<a href="https://www.facebook.com/p/Kapsalon-Deniz-100082979419912/" target="_blank"
									rel="noopener noreferrer" className="footer-btn footer-btn-secondary">
									Afspraak via Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
