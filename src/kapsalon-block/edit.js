import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="kapsalon-editor-preview">
				<p>{ __( '✂️ Kapsalon homepage', 'kapsalon-homepage' ) }</p>
				<p className="description">
					{ __( 'The whole kapsalon homepage', 'kapsalon-homepage' ) }
				</p>
			</div>
		</div>
	);
}
