import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="kapsalon-prices-editor-preview">
				<p>{ __( '💈 Kapsalon Prijslijst', 'kapsalon-prices-block' ) }</p>
				<p className="description">
					{ __( 'The kapsalon price list page', 'kapsalon-prices-block' ) }
				</p>
			</div>
		</div>
	);
}
