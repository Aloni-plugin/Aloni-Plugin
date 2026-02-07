import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="contact-container" data-contact-page="true"></div>
		</div>
	);
}
