import React, { useState } from 'react';
import { productData } from './productData';

export const ProductGallery = () => {
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
	const activeCategory = productData[activeCategoryIndex];

	return (
		<section className="products-gallery-section">
			<nav className="products-gallery-categories" aria-label="Productcategorieen">
				{productData.map((category, index) => (
					<button
						key={category.label}
						type="button"
						className={`products-gallery-category-btn${
							index === activeCategoryIndex ? ' products-gallery-category-btn--active' : ''
						}`}
						onClick={() => setActiveCategoryIndex(index)}
					>
						{category.label}
					</button>
				))}
			</nav>

			<h2 className="products-gallery-title">{activeCategory.label}</h2>

			<div className="products-gallery-grid">
				{activeCategory.products.map((product) => (
					<article className="products-gallery-card" key={`${activeCategory.label}-${product.name}`}>
						<div className="products-gallery-image-wrap">
							<img
								src={product.image}
								alt={product.name}
								className="products-gallery-image"
								loading="lazy"
							/>
						</div>
						<div className="products-gallery-meta">
							<span className="products-gallery-product-name">{product.name}</span>
							<span className="products-gallery-product-price">{product.price}</span>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};
