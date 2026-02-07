import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="kapsalon-booking-editor-preview">
				<p>{ __( '✂️ Kapsalon reservation', 'kapsalon-reservation' ) }</p>
				<p className="description">
					{ __( 'The kapsalon reservation page', 'kapsalon-reservation' ) }
				</p>
			</div>
		</div>
	);
}
