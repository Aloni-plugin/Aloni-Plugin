import React, { useState, useRef, useEffect } from 'react';
import { priceData } from './priceData';

export const PriceList = () => {
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
	const sectionRef = useRef(null);
	const containerRef = useRef(null);
	const navRef = useRef(null);
	const [navStuck, setNavStuck] = useState(null); // 'above' | null | 'stuck' | 'bottom'
	const [navLeft, setNavLeft] = useState(null);
	const [columnWidth, setColumnWidth] = useState(null); // lock left column width so nothing jumps

	const scrollToCategory = (index, ev) => {
		const el = document.getElementById(`prijslijst-category-${index}`);
		el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		if (ev?.currentTarget?.blur) ev.currentTarget.blur();
	};

	// Sticky: nav only visible inside section; sticks when centered; unsticks when nav bottom would pass section bottom (desktop only)
	const STICKY_BREAKPOINT = 1024; // match style.scss media query
	useEffect(() => {
		const section = sectionRef.current;
		const container = containerRef.current;
		const nav = navRef.current;
		if (!section || !container || !nav) return;

		const updateSticky = () => {
			const isMobile = window.innerWidth <= STICKY_BREAKPOINT;
			const sectionRect = section.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();
			const vh = window.innerHeight;
			const viewportCenter = vh / 2;
			const navHeight = nav.offsetHeight;
			const stuckNavBottom = viewportCenter + navHeight / 2;

			// Lock column width when nav is in flow; when stuck keep previous value so nothing jumps
			setColumnWidth((prev) =>
				prev != null && navStuck === 'stuck' ? prev : nav.offsetWidth
			);

			if (isMobile) {
				// No sticky on mobile – nav always in flow
				setNavStuck(null);
				setNavLeft(null);
				return;
			}

			if (sectionRect.top > 0) {
				setNavStuck('above');
				setNavLeft(null);
			} else if (sectionRect.bottom <= 0) {
				setNavStuck('bottom');
				setNavLeft(null);
			} else if (
				sectionRect.top <= viewportCenter &&
				sectionRect.bottom >= stuckNavBottom
			) {
				setNavStuck('stuck');
				setNavLeft(containerRect.left);
			} else {
				setNavStuck(null);
				setNavLeft(null);
			}
		};

		updateSticky();
		window.addEventListener('scroll', updateSticky, { passive: true });
		window.addEventListener('resize', updateSticky);
		return () => {
			window.removeEventListener('scroll', updateSticky);
			window.removeEventListener('resize', updateSticky);
		};
	}, [navStuck]);

	// Scroll-spy: only source of truth for active header – section at viewport center
	// Use rAF polling so active updates even when scroll events don’t fire (e.g. inner scroll containers)
	useEffect(() => {
		let rafId = null;
		let lastIndex = -1;

		const updateActiveFromScroll = () => {
			const viewportCenter = window.innerHeight / 2;
			let bestIndex = 0;
			let bestDistance = Infinity;
			priceData.forEach((_, index) => {
				const el = document.getElementById(`prijslijst-category-${index}`);
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const sectionCenter = rect.top + rect.height / 2;
				const distance = Math.abs(sectionCenter - viewportCenter);
				if (distance < bestDistance) {
					bestDistance = distance;
					bestIndex = index;
				}
			});
			if (lastIndex !== bestIndex) {
				lastIndex = bestIndex;
				setActiveCategoryIndex(bestIndex);
			}
		};

		const tick = () => {
			updateActiveFromScroll();
			rafId = requestAnimationFrame(tick);
		};
		rafId = requestAnimationFrame(tick);

		return () => {
			if (rafId != null) cancelAnimationFrame(rafId);
		};
	}, []);

	const navClass = [
		'prijslijst-categories',
		navStuck === 'stuck' ? 'is-stuck' : '',
		navStuck === 'bottom' ? 'is-stuck-bottom' : '',
		navStuck === 'above' ? 'is-above' : '',
	].filter(Boolean).join(' ');
	const navStyle =
		navStuck === 'stuck' && navLeft != null
			? { left: `${navLeft}px`, top: '50%', transform: 'translateY(-50%)' }
			: navStuck === 'above' || navStuck === 'bottom'
				? { visibility: 'hidden' }
				: undefined;
	const wrapStyle = columnWidth != null ? { width: columnWidth } : undefined;

	return (
		<section className="prijslijst-section" ref={sectionRef}>
			<div className="prijslijst-container" ref={containerRef}>
				{/* Left column: fixed width so content never jumps when nav sticks */}
				<div className="prijslijst-categories-wrap" style={wrapStyle}>
					<nav
						ref={navRef}
						className={navClass}
						style={navStyle}
						aria-label="Prijslijst categorieën"
					>
						{priceData.map((category, index) => (
							<button
								key={index}
								className={`prijslijst-category-btn${index === activeCategoryIndex ? ' prijslijst-category-btn--active' : ''}`}
								onClick={(e) => scrollToCategory(index, e)}
								type="button"
							>
								{category.label}
							</button>
						))}
					</nav>
				</div>

				{/* Right side: all category lists stacked – scroll target for each */}
				<div className="prijslijst-content">
					{priceData.map((category, index) => (
						<div
							key={index}
							id={`prijslijst-category-${index}`}
							className="prijslijst-category-section"
						>
							<h2 className="prijslijst-services-title">{category.label}</h2>
							<ul className="prijslijst-services-list">
								{category.services.map((service, sIdx) => (
									<li key={sIdx} className="prijslijst-service-item">
										<span className="prijslijst-service-name">{service.name}</span>
										<span className="prijslijst-service-price">{service.price}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
