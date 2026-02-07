import React, { useState } from 'react';
import { tailorPriceData } from './priceData';

export const TailorPriceList = () => {
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
	const activeCategory = tailorPriceData[activeCategoryIndex];

	return (
		<section className="tailor-prijslijst-section">
			{/* Category tabs – centered horizontally */}
			<nav className="tailor-prijslijst-categories">
				{tailorPriceData.map((category, index) => (
					<button
						key={index}
						className={`tailor-prijslijst-category-btn${index === activeCategoryIndex ? ' tailor-prijslijst-category-btn--active' : ''}`}
						onClick={() => setActiveCategoryIndex(index)}
						type="button"
					>
						{category.label}
					</button>
				))}
			</nav>

			{/* Subcategories in a 2-column grid */}
			<div className="tailor-prijslijst-grid">
				{activeCategory.subcategories.map((sub, index) => (
					<div key={index} className="tailor-prijslijst-subcategory">
						<h3 className="tailor-prijslijst-subcategory-title">{sub.label}</h3>

						<ul className="tailor-prijslijst-services-list">
							{sub.services.map((service, sIdx) => (
								<li key={sIdx} className="tailor-prijslijst-service-item">
									<span className="tailor-prijslijst-service-name">{service.name}</span>
									<span className="tailor-prijslijst-service-price">{service.price}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};
