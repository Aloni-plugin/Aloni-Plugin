import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="tailor-prices-container" data-tailor-prices="true"></div>
		</div>
	);
}
