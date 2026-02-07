import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="tailor-container" data-tailor-homepage="true"></div>
		</div>
	);
}
