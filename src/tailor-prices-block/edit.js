import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="tailor-prices-editor-preview">
				<p>{ __( '🧵 Atelier Prijslijst', 'tailor-prices' ) }</p>
				<p className="description">
					{ __( 'The tailor price list page', 'tailor-prices' ) }
				</p>
			</div>
		</div>
	);
}
