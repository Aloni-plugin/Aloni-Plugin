import React from 'react';

// Normalize color to lowercase hex for comparison (handles #hex and rgb(r,g,b))
function normalizeToHex(color) {
	if (!color || typeof color !== 'string') return '';
	const t = color.trim();
	if (t.startsWith('#')) return t.toLowerCase();
	const m = t.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
	if (m) {
		const r = parseInt(m[1], 10).toString(16).padStart(2, '0');
		const g = parseInt(m[2], 10).toString(16).padStart(2, '0');
		const b = parseInt(m[3], 10).toString(16).padStart(2, '0');
		return `#${r}${g}${b}`;
	}
	return t.toLowerCase();
}

// When background is coral → button green; when background is green → button coral.
const CORAL_HEXES = ['#f86060', '#f26b6b'];
const GREEN_HEXES = ['#4a5d52', '#3d4d3e'];

function getContrastingButtonColor(backgroundColor, { contrastCoral = '#F86060', contrastGreen = '#3D4D3E' } = {}) {
	const hex = normalizeToHex(backgroundColor);
	if (CORAL_HEXES.includes(hex)) return contrastGreen;
	if (GREEN_HEXES.includes(hex)) return contrastCoral;
	return null;
}

export const InformationWithPhotos = ({
										  title,
										  titleItalic,
										  paragraphs,
										  backgroundColor,
										  textColor = '#ffffff',
										  buttonPrimaryColor = '#F86060',
										  buttonSecondaryBorder = '#ffffff',
										  contrastCoral = '#F86060',
										  contrastGreen = '#3D4D3E',
										  photos = [],
										  primaryButton = {},
										  secondaryButton = {}
									  }) => {
	const resolvedPrimaryColor =
		primaryButton.backgroundColor
		|| getContrastingButtonColor(backgroundColor, { contrastCoral, contrastGreen })
		|| buttonPrimaryColor;

	return (
		<section className="info-photos-section">
			<div className="info-photos-container" style={{ backgroundColor }}>
				<div className="info-photos-content">
					<h2 className="info-photos-heading" style={{ color: textColor }}>
						<span className="heading-italic">{titleItalic}</span>{' '}
						<span className="heading-bold">{title}</span>
					</h2>

					<div className="info-photos-text" style={{ color: textColor }}>
						{paragraphs.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>

					<div className="info-photos-buttons">
						{primaryButton.text && (
							<a
								href={primaryButton.href}
								className="btn-primary"
								style={{
									backgroundColor: resolvedPrimaryColor,
									borderColor: resolvedPrimaryColor
								}}
							>
								{primaryButton.text}
							</a>
						)}
						{secondaryButton.text && (
							<a
								href={secondaryButton.href}
								className="btn-secondary"
								style={{
									color: textColor,
									borderColor: secondaryButton.borderColor || buttonSecondaryBorder,
									backgroundColor: 'transparent'
								}}
							>
								{secondaryButton.text}
							</a>
						)}
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
