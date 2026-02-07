import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="kapsalon-review-editor-preview">
				<p>{ __( '⭐ Kapsalon beoordelingen', 'kapsalon-review-block' ) }</p>
				<p className="description">
					{ __( 'The kapsalon reviews page', 'kapsalon-review-block' ) }
				</p>
			</div>
		</div>
	);
}
