<?php
/**
 * Plugin Name:       Aloni Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aloni-plugin
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_aloni_plugin_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_aloni_plugin_block_init' );

// Render function for your booking page block
function render_kapsalon_booking_block() {
    ob_start();
    ?>
    <div data-kapsalon-booking="true"></div>
    <div class="salon-booking-section">
        <?php echo do_shortcode('[salon/]'); ?>
    </div>
    <?php
    return ob_get_clean();
}

// Register the block
function register_kapsalon_booking_block() {
    register_block_type('kapsalon/booking-page', array(
        'render_callback' => 'render_kapsalon_booking_block',
        'editor_script' => 'kapsalon-booking-editor', // Your editor script handle
        'script' => 'kapsalon-booking-view' // Your view.js script handle
    ));
}
add_action('init', 'register_kapsalon_booking_block');

// Render function for your review page block
function render_kapsalon_review_block() {
    ob_start();
    ?>
    <div data-kapsalon-review="true"></div>
    <div class="site-reviews-section">
        <div class="site-reviews-columns">
            <div class="site-reviews-form-column">
                <h2 class="site-reviews-heading">Jouw beoordeling</h2>
                <?php echo do_shortcode('[site_reviews_form]'); ?>
            </div>
            <div class="site-reviews-list-column">
                <h2 class="site-reviews-heading">Beoordelingen</h2>
                <?php echo do_shortcode('[site_reviews display=10 pagination="ajax" schema=true]'); ?>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

// Register the review block
function register_kapsalon_review_block() {
    register_block_type('kapsalon/review-page', array(
        'render_callback' => 'render_kapsalon_review_block',
        'editor_script' => 'kapsalon-review-editor',
        'script' => 'kapsalon-review-view'
    ));
}
add_action('init', 'register_kapsalon_review_block');

