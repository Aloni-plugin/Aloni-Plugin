import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@fontsource/licorice';
import '@fontsource/poppins';

gsap.registerPlugin(ScrollTrigger);

export const DiagonalCutSection = ({
									   bottomRightColor = '#a8d5ba',
									   topLeftColor = '#f4c2c2',
									   showWavyLines = true,
									   showLeafs = true,
									   children,
									   onButtonClick,
								   }) => {
	const sectionRef = useRef(null);
	const stackedImagesRef = useRef(null);

	useEffect(() => {
		if (!stackedImagesRef.current) return;

		const images = stackedImagesRef.current.querySelectorAll('.stackedImage');

		// Images are now positioned with specific coordinates and rotations from Figma
		// The CSS handles the final positioning, so we can add subtle animations if needed
	}, []);

	return (
		<div className="diagonalContainer">
			<section ref={sectionRef} className="diagonalSection">
				{/* Background layers - lowest z-index */}
				<div
					className="triangleTopLeft"
					style={{ background: topLeftColor }}
				>
					{showWavyLines && (
						<img
							src="/wp-content/plugins/Aloni-Plugin/images/wavy-lines.svg"
							alt="Wavy lines decoration"
							className="wavyLines"
						/>
					)}
				</div>

				<div
					className="triangleBottomRight"
					style={{ background: bottomRightColor }}
				>
					{showLeafs && (
						<img
							src="/wp-content/plugins/Aloni-Plugin/images/moving-leafs.svg"
							alt="Leaf decorations"
							className="movingLeafs"
						/>
					)}
				</div>

				{/* Content layers - higher z-index to stay on top */}
				<div className="pinkContent">
					<div className="barberSection">
						<div className="textOverlays">
							<h1 className="kapsalonTitle">
								<span className="kapsalonText">Kapsalon</span>
								<span className="denizText">Deniz</span>
							</h1>
							<p className="Subtitle">Een prachtig nieuw kapsel....</p>
						</div>

						<div className="mainImageFrame">
							<svg className="glowEffect glowEffect-primary" width="683" height="721" viewBox="0 0 683 721" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.54" filter="url(#filter0_f_primary)">
									<circle cx="322.5" cy="360.5" r="160.5" fill="#F86060" fillOpacity="0.71" />
								</g>
								<defs>
									<filter id="filter0_f_primary" x="-38" y="0" width="721" height="721" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
										<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_primary" />
									</filter>
								</defs>
							</svg>
							<img
								src="/wp-content/plugins/Aloni-Plugin/images/Kapsalon-image.png"
								alt="Kapsalon with barber and tools"
								className="mainImage"
							/>
						</div>

						<button
							className="CTAButton is-primary"
							onClick={onButtonClick || (() => window.location.href = '/reserveren')}
						>
							Kapper afspraak
						</button>
					</div>
				</div>

				<div className="greenContent">
					<div className="atelierSection">
						<div className="atelierTextOverlays">
							<h1 className="atelierTitle">
								<span className="atelierText">Atelier</span>
								<span className="atelierDenizText">Deniz</span>
							</h1>
							<p className="Subtitle">Of je oude kleding als nieuw?</p>
						</div>

						<div className="atelierImageFrame">
							<svg className="glowEffect glowEffect-secondary" width="683" height="721" viewBox="0 0 683 721" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.54" filter="url(#filter0_f_secondary)">
									<circle cx="322.5" cy="360.5" r="160.5" fill="#3D4D3E" fillOpacity="0.71" />
								</g>
								<defs>
									<filter id="filter0_f_secondary" x="-38" y="0" width="721" height="721" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
										<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_secondary" />
									</filter>
								</defs>
							</svg>
							<img
								src="/wp-content/plugins/Aloni-Plugin/images/Atelier Main.png"
								alt="Atelier with clothing repair"
								className="atelierImage"
							/>
						</div>
						<button
							className="CTAButton is-secondary"
							onClick={onButtonClick || (() => window.location.href = '/contact')}
						>
							Contact opnemen
						</button>
					</div>
				</div>

				<svg className="dashedLine">
					<line x1="100%" y1="0%" x2="0%" y2="100%" />
				</svg>

				<div className="content">
					{children}
				</div>
			</section>
		</div>
	);
};
