import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="reservation-approved-container" data-reservation-approved-page="true"></div>
		</div>
	);
}
