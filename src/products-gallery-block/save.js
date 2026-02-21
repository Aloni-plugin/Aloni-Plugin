import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<div className="products-gallery-container" data-products-gallery="true"></div>
		</div>
	);
}
