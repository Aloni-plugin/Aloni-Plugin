<?php
/**
 * Render callback for Kapsalon Review Block
 */
?>
<div class="kapsalon-review-wrapper">
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
</div>
