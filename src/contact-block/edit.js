import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div className="contact-editor-preview">
				<p>{ __( '✂️ Contact page', 'contact-page' ) }</p>
				<p className="description">
					{ __( 'The whole contact page', 'contact-page' ) }
				</p>
			</div>
		</div>
	);
}
