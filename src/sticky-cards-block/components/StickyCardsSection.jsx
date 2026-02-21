import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StickyCardsSection = () => {
	const stickyRef = useRef(null);
	const cardContainerRef = useRef(null);
	const card1Ref = useRef(null);
	const card2Ref = useRef(null);
	const card3Ref = useRef(null);

	useEffect(() => {
		// Set body background
		document.body.style.background = 'url("/wp-content/plugins/Aloni-Plugin/images/texture.jpg") center center';
		document.body.style.backgroundSize = '500px';
		document.body.style.animation = 'moveBackground 60s linear infinite';
		document.body.style.backgroundAttachment = 'fixed';

		const ctx = gsap.context(() => {
			const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

			let gapAnimationCompleted = false;
			let flipAnimationCompleted = false;

			// Gap animation timeline
			const gapTl = gsap.timeline({ paused: true });
			gapTl
				.to(cardContainerRef.current, { gap: 30, duration: 1, ease: 'power3.out' }, 0)
				.to(card1Ref.current, { x: -30, duration: 1, ease: 'power3.out' }, 0)
				.to(card3Ref.current, { x: 30, duration: 1, ease: 'power3.out' }, 0)
				.to(cards, { borderRadius: '20px', duration: 1, ease: 'power3.out' }, 0);

			// Flip animation timeline
			const flipTl = gsap.timeline({ paused: true });
			flipTl
				.to(
					cards,
					{
						rotationY: 180,
						duration: 1,
						ease: 'power3.inOut',
						stagger: 0.1,
						transformOrigin: 'center center',
					},
					0
				)
				.to(
					[card1Ref.current, card3Ref.current],
					{
						y: 30,
						rotationZ: (i) => (i === 0 ? -15 : 15),
						duration: 1,
						ease: 'power3.inOut',
					},
					0
				);

			// Scissors animation timeline
			const scissorsTl = gsap.timeline({ paused: true });
			scissorsTl
				.fromTo(
					'.scissors-left',
					{
						top: '-100px',
						opacity: 0,
						rotation: 180
					},
					{
						top: '100%',
						opacity: 1,
						duration: 1.5,
						ease: 'power2.inOut'
					},
					0
				)
				.fromTo(
					'.scissors-right',
					{
						top: '-100px',
						opacity: 0,
						rotation: 180
					},
					{
						top: '100%',
						opacity: 1,
						duration: 1.5,
						ease: 'power2.inOut'
					},
					0
				)
				.to(['.scissors-left', '.scissors-right'], {
					opacity: 0,
					duration: 0.3
				}, 1.5);

			// Main ScrollTrigger
			const mm = gsap.matchMedia();

			mm.add('(min-width: 1000px)', () => {
				ScrollTrigger.create({
					trigger: stickyRef.current,
					start: 'top top',
					end: `+=${window.innerHeight * 2}`,
					scrub: 0.5,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
					onUpdate: (self) => {
						const progress = self.progress;

						// Update card width (0 - 0.35)
						if (progress <= 0.35) {
							const widthPercentage = gsap.utils.mapRange(0, 0.35, 75, 60, progress);
							gsap.set(cardContainerRef.current, { width: `${widthPercentage}%` });
						} else {
							gsap.set(cardContainerRef.current, { width: '60%' });
						}

						// Gap animation (0.45) + Scissors
						if (progress >= 0.45 && !gapAnimationCompleted) {
							gapTl.play();
							scissorsTl.play();
							gapAnimationCompleted = true;
						} else if (progress < 0.45 && gapAnimationCompleted) {
							gapTl.reverse();
							scissorsTl.reverse();
							gapAnimationCompleted = false;
						}

						// Flip animation (0.7)
						if (progress >= 0.7 && !flipAnimationCompleted) {
							flipTl.play();
							flipAnimationCompleted = true;
						} else if (progress < 0.7 && flipAnimationCompleted) {
							flipTl.reverse();
							flipAnimationCompleted = false;
						}
					},
				});
			});
		}, stickyRef);

		return () => {
			ctx.revert();
			ScrollTrigger.refresh();
		};
	}, []);

	return (
		<section className="sticky" ref={stickyRef} style={{ background: 'transparent' }}>
			<div className="card-container" ref={cardContainerRef}>
				<div className="card" id="card-1" ref={card1Ref}>
					<div className="card-front">
						<img src="/wp-content/plugins/Aloni-Plugin/images/Main-card-left.png" alt="Left Section"/>
					</div>
					<div className="card-back">
						<img src="/wp-content/plugins/Aloni-Plugin/images/card-back-1.png" alt="Card 1 back"/>
						<div className="card-overlay">
							<div className="card-content">
								<div className="card-heading">
									<h2 className="card-title">Kapsalon</h2>
									<h2 className="card-subtitle">Deniz</h2>
								</div>
								<div className="card-buttons">
									<a href="/kapsalon" className="card-btn card-btn-primary">
										<span className="btn-icon">🏠</span>
										Over de salon
									</a>
									<a href="/kapper-prijslijst" className="card-btn card-btn-secondary">
										<span className="btn-icon">📋</span>
										Onze prijslijst
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card" id="card-2" ref={card2Ref}>
					<div className="card-front">
						<img src="/wp-content/plugins/Aloni-Plugin/images/Main-card-center.png" alt="Center Section"/>
					</div>
					<div className="card-back">
						<img src="/wp-content/plugins/Aloni-Plugin/images/card-back-2.png" alt="Card 2 back"/>
						<div className="card-overlay">
							<div className="card-content">
								<div className="card-heading">
									<h2 className="card-title">Atelier</h2>
									<h2 className="card-subtitle">Deniz</h2>
								</div>
								<div className="card-buttons">
									<a href="/atelier" className="card-btn card-btn-primary">
										<span className="btn-icon">🏠</span>
										Over het atelier
									</a>
									<a href="/atelier-prijslijst" className="card-btn card-btn-secondary">
										<span className="btn-icon">📋</span>
										Onze prijslijst
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card" id="card-3" ref={card3Ref}>
					<div className="card-front">
						<img src="/wp-content/plugins/Aloni-Plugin/images/Main-card-right.png" alt="Right Section"/>
					</div>
					<div className="card-back">
						<img src="/wp-content/plugins/Aloni-Plugin/images/card-back-3.png" alt="Card 3 back"/>
						<div className="card-overlay">
							<div className="card-content">
								<div className="card-heading">
									<h2 className="card-title">Onze</h2>
									<h2 className="card-subtitle">Producten</h2>
								</div>
								<div className="card-buttons">
									<div className="button-wrapper">
										<button className="card-btn card-btn-primary" disabled>
											<span className="btn-icon">🛍️</span>
											Onze producten
										</button>
										<span className="coming-soon-badge">Binnenkort</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Scissors AFTER cards */}
				<img
					src="/wp-content/plugins/Aloni-Plugin/images/scissors.png"
					alt=""
					className="scissors-left"
				/>
				<img
					src="/wp-content/plugins/Aloni-Plugin/images/scissors.png"
					alt=""
					className="scissors-right"
				/>
			</div>
		</section>
	);
};
