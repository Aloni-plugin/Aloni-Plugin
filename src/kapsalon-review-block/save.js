import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="kapsalon-review-container" data-kapsalon-review="true"></div>
		</div>
	);
}
