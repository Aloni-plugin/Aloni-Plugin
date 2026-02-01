import React from 'react';

export const InformationWithPhotos = ({
								   title,
								   titleItalic,
								   paragraphs,
								   backgroundColor,
								   textColor = '#ffffff',
								   buttonPrimaryColor = '#F86060',
								   buttonSecondaryBorder = '#ffffff',
								   photos = []
							   }) => {
	return (
		<section className="info-photos-section">
			<div className="info-photos-container" style={{ backgroundColor }}>
				<div className="info-photos-content">
					<h2 className="info-photos-heading" style={{ color: textColor }}>
						<span className="heading-italic">{titleItalic}</span> {title}
					</h2>

					<div className="info-photos-text" style={{ color: textColor }}>
						{paragraphs.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>

					<div className="info-photos-buttons">
						<button
							className="btn-primary"
							style={{ backgroundColor: buttonPrimaryColor, borderColor: buttonPrimaryColor }}
						>
							Afspraak maken
						</button>
						<button
							className="btn-secondary"
							style={{
								color: textColor,
								borderColor: buttonSecondaryBorder,
								backgroundColor: 'transparent'
							}}
						>
							Onze prijslijst
						</button>
					</div>
				</div>

				<div className="info-photos-images">
					{photos.map((photo, index) => (
						<img key={index} src={photo} alt="" className="framed-photo" />
					))}
				</div>
			</div>
		</section>
	);
};
