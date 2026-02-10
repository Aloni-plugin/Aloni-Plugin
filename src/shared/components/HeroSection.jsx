import React from 'react';

export const HeroSection = ({
	image,
	heading,
	primaryButton,
	secondaryButton,
	logo,
	useDesignLayout = false
}) => {
	const ButtonWrapper = ({ href, children, icon, ...props }) => {
		const content = (
			<>
				{icon && <span className="hero-btn-icon" aria-hidden>{icon}</span>}
				{children}
			</>
		);
		if (href) {
			return <a href={href} {...props}>{content}</a>;
		}
		return <button {...props}>{content}</button>;
	};

	const content = (
		<div className="hero-content">
				<div className="hero-cta">
					<h2 className="hero-heading">{heading}</h2>

					<div className="hero-buttons">
					{primaryButton && (
						<ButtonWrapper
							href={primaryButton.href}
							className="btn-primary"
							icon={primaryButton.icon}
							style={{
								backgroundColor: primaryButton.backgroundColor,
								color: primaryButton.textColor,
								borderColor: primaryButton.backgroundColor
							}}
						>
							{primaryButton.text}
						</ButtonWrapper>
					)}
					{secondaryButton && (
						<ButtonWrapper
							href={secondaryButton.href}
							className="btn-secondary"
							icon={secondaryButton.icon}
							style={{
								backgroundColor: secondaryButton.backgroundColor,
								color: secondaryButton.textColor,
								borderColor: secondaryButton.borderColor
							}}
						>
							{secondaryButton.text}
						</ButtonWrapper>
					)}
					</div>
				</div>

				{logo && (
					<div className="hero-logo">
						<span className="logo-kapsalon">{logo.topText}</span>
						<span className="logo-deniz">{logo.bottomText}</span>
					</div>
				)}
			</div>
	);

	return (
		<div className={`hero-container ${useDesignLayout ? 'hero-design-layout' : ''}`}>
			{useDesignLayout ? (
				<div className="hero-inner">
					<img src={image} alt="" className="hero-background" />
					{content}
				</div>
			) : (
				<>
					<img src={image} alt="" className="hero-background" />
					{content}
				</>
			)}
		</div>
	);
};
