import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="kapsalon-container" data-kapsalon-homepage="true"></div>
		</div>
	);
}
