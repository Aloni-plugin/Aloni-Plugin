import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div className="products-gallery-editor-preview">
				<p>{__('🧴 Producten Galerij', 'products-gallery')}</p>
				<p className="description">
					{__('Toont heren- en dames parfum producten met prijzen', 'products-gallery')}
				</p>
			</div>
		</div>
	);
}
