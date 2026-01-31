import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="sticky-cards-container" data-sticky-cards="true"></div>
		</div>
	);
}
