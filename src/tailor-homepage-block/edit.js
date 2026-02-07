import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="tailor-editor-preview">
				<p>{ __( '✂️ Tailor homepage', 'tailor-homepage' ) }</p>
				<p className="description">
					{ __( 'The whole tailor homepage', 'tailor-homepage' ) }
				</p>
			</div>
		</div>
	);
}
