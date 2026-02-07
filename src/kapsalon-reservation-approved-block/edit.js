import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="reservation-approved-editor-preview">
				<p>{ __( '✂️ Reservation page', 'reservation-approved-page' ) }</p>
				<p className="description">
					{ __( 'The whole reservation approved page', 'reservation-approved-page' ) }
				</p>
			</div>
		</div>
	);
}
