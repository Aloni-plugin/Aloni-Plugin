import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="kapsalon-prices-container" data-kapsalon-prices="true"></div>
		</div>
	);
}
