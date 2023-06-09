<!-- review -->
<div class="review _1 w-slide">
    <div class="brix---card-testimonial-v13">
        <div class="div-block-44">
	        <?php
	        $rating = get_field('ster_rating');
	        for ($i=1; $i<=$rating; $i++) {
		        ?>
                <img src="<?php echo get_theme_file_uri('/images/Star-1.svg')?>" loading="lazy" alt="">
		        <?php
	        }
	        ?>
        </div>
        <div class="brix---mg-bottom-24px">
            <div class="brix---color-neutral-600">
                <p class="brix---paragraph-default"><?php the_content() ?></p>
            </div>
        </div>
        <div class="brix---flex-horizontal">
            <div class="div-block-43">
            <div class="brix---mg-bottom-8px">
                <div class="brix---color-neutral-800">
                <h3 bind="9a6d0e46-6f85-79f9-6ea5-1a95e5781f38" class="brix---heading-h4-size"><?php the_title() ?></h3>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
<!-- review -->