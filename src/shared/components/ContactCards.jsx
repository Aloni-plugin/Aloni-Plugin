import { getImageUrl } from '../utils/pluginConfig';

export const ContactCards = () => {
	return (
		<section className="contact-cards-section">
			<div className="contact-cards-container">
				<div className="contact-card contact-card-kapper">
					<h3 className="contact-card-title">Contact Kapper Deniz</h3>
					<div className="contact-info">
						<p>
							<span className="contact-label">Email:</span>{' '}
							<a href="mailto:info@kapsalondeniz.nl" className="contact-link">
								info@kapsalondeniz.nl
							</a>
						</p>
						<p>
							<span className="contact-label">Telefoon:</span>{' '}
							<a href="tel:0341-795122" className="contact-link">
								0341-795122
							</a>
						</p>
					</div>
				</div>

				<div className="contact-card contact-card-atelier">
					<h3 className="contact-card-title">Contact Atelier Deniz</h3>
					<div className="contact-info">
						<p>
							<span className="contact-label">Email:</span>{' '}
							<a href="mailto:info@atelierdeniz.nl" className="contact-link">
								info@atelierdeniz.nl
							</a>
						</p>
						<p>
							<span className="contact-label">Telefoon:</span>{' '}
							<a href="tel:0341-795122" className="contact-link">
								0341-795122
							</a>
						</p>
					</div>
				</div>

				{/* Image positioned on top of both cards */}
				<div className="contact-card-image">
					<img
						src={getImageUrl('contact-location.png')}
						alt="Donkerestraat 37-A, 3862 NA Ermelo"
					/>
				</div>
			</div>
		</section>
	);
};
