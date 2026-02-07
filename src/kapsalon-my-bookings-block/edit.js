import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="kapsalon-my-bookings-editor-preview">
				<p>{ __( '✂️ Kapsalon my reservations', 'kapsalon-my-reservations' ) }</p>
				<p className="description">
					{ __( 'The kapsalon my reservatiosn page', 'kapsalon-my-reservations' ) }
				</p>
			</div>
		</div>
	);
}
