import React from 'react';

export const HeroSection = ({
								image,
								heading,
								primaryButton,
								secondaryButton,
								logo
							}) => {
	const ButtonWrapper = ({ href, children, ...props }) => {
		if (href) {
			return <a href={href} {...props}>{children}</a>;
		}
		return <button {...props}>{children}</button>;
	};

	return (
		<div className="hero-container">
			<img src={image} alt="" className="hero-background" />

			<div className="hero-content">
				<h2 className="hero-heading">{heading}</h2>

				<div className="hero-buttons">
					<ButtonWrapper
						href={primaryButton.href}
						className="btn-primary"
						style={{
							backgroundColor: primaryButton.backgroundColor,
							color: primaryButton.textColor,
							borderColor: primaryButton.backgroundColor
						}}
					>
						{primaryButton.text}
					</ButtonWrapper>
					<ButtonWrapper
						href={secondaryButton.href}
						className="btn-secondary"
						style={{
							backgroundColor: secondaryButton.backgroundColor,
							color: secondaryButton.textColor,
							borderColor: secondaryButton.borderColor
						}}
					>
						{secondaryButton.text}
					</ButtonWrapper>
				</div>

				<div className="hero-logo">
					<span className="logo-kapsalon">{logo.topText}</span>
					<span className="logo-deniz">{logo.bottomText}</span>
				</div>
			</div>
		</div>
	);
};
