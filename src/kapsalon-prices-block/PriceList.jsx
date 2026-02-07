import React, { useState } from 'react';
import { priceData } from './priceData';

export const PriceList = () => {
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
	const activeCategory = priceData[activeCategoryIndex];

	return (
		<section className="prijslijst-section">
			<div className="prijslijst-container">
				{/* Left sidebar: category list */}
				<nav className="prijslijst-categories">
					{priceData.map((category, index) => (
						<button
							key={index}
							className={`prijslijst-category-btn${index === activeCategoryIndex ? ' prijslijst-category-btn--active' : ''}`}
							onClick={() => setActiveCategoryIndex(index)}
							type="button"
						>
							{category.label}
						</button>
					))}
				</nav>

				{/* Right side: services for the active category */}
				<div className="prijslijst-services">
					<h2 className="prijslijst-services-title">{activeCategory.label}</h2>

					<ul className="prijslijst-services-list">
						{activeCategory.services.map((service, index) => (
							<li key={index} className="prijslijst-service-item">
								<span className="prijslijst-service-name">{service.name}</span>
								<span className="prijslijst-service-price">{service.price}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
