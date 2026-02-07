import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="kapsalon-booking-container" data-kapsalon-booking="true"></div>
		</div>
	);
}
