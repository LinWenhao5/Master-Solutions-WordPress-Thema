<div class="reviews-section wf-section">
    <div class="brix---container-default w-container">
        <div data-delay="4000" data-animation="slide" class="brix---slider-wrapper w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
            <div class="brix---slider-mask-width-390px w-slider-mask">

				<?php
				$homepageReviews = new WP_Query(array(
					'posts_per_page' => -1,
					'post_type' => 'review',
					'orderby' => 'title',
					'order' => 'ASC',
				));
				while($homepageReviews->have_posts()) {
					$homepageReviews->the_post();
					get_template_part('template_parts/content', 'review');
				}
				wp_reset_postdata()
				?>
            </div>
            <div class="brix---btn-slider-arrow-left---testimonial-v12 w-slider-arrow-left"><img src="<?php echo get_theme_file_uri('/images/left-arrow-line-icon-elements-brix-templates.svg')?>" loading="lazy" alt="Icon - Elements Webflow Library - BRIX Templates" class="image-17"></div>
            <div class="brix---btn-slider-arrow-right---testimonial-v12 w-slider-arrow-right"><img src="<?php echo get_theme_file_uri('/images/right-arrow-line-icon-elements-brix-templates.svg')?>" loading="lazy" alt="Icon - Elements Webflow Library - BRIX Templates"></div>
            <div class="brix---hidden-desktop w-slider-nav w-round"></div>
        </div>
    </div>
</div>