/**
 * Copyright (c) 2016 - 2018, CKSource - Frederico Knabben. All rights reserved.
 */

/**
 * @module media-embed/mediaembedtoolbar
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import WidgetToolbarRepository from '@ckeditor/ckeditor5-widget/src/widgettoolbarrepository';
import { isMediaWidgetSelected } from './utils';

/**
 * The media embed toolbar plugin. It creates a toolbar for media embed that shows up when the media element is selected.
 *
 * Instances of toolbar components (e.g. buttons) are created based on the
 * {@link module:media-embed/mediaembedtoolbar~MediaEmbedConfig#toolbar `media.toolbar` configuration option}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class MediaEmbedToolbar extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ WidgetToolbarRepository ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'MediaEmbedToolbar';
	}

	/**
	 * @inheritDoc
	 */
	afterInit() {
		const editor = this.editor;
		const widgetToolbarRepository = editor.plugins.get( WidgetToolbarRepository );

		widgetToolbarRepository.register( 'mediaEmbed', {
			items: editor.config.get( 'mediaEmbed.toolbar' ) || [],
			visibleWhen: isMediaWidgetSelected,
		} );
	}
}

/**
 * Items to be placed in the media embed toolbar.
 * This option requires adding {@link module:media-embed/mediaembedtoolbar~MediaEmbedToolbar} to the plugin list.
 *
 * Read more about configuring toolbar in {@link module:core/editor/editorconfig~EditorConfig#toolbar}.
 *
 * @member {Array.<String>} module:media-embed/mediaembedtoolbar~MediaEmbedConfig#toolbar
 */
