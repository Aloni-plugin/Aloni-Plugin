import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="sticky-cards-editor-preview">
				<p>{ __( '✂️ Sticky Cards Animation Block', 'sticky-cards' ) }</p>
				<p className="description">
					{ __( 'This block displays animated card flips with scissors. Preview on frontend.', 'sticky-cards' ) }
				</p>
			</div>
		</div>
	);
}
