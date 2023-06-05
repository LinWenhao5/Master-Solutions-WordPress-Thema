<div bind="175da8a4-0438-c61e-84d1-ae4ad5a72c3e" role="listitem" class="collection-item-3 _1 w-dyn-item">
    <div class="div-block-26">
        <img sizes="(max-width: 479px) 96vw, (max-width: 991px) 245px, 310px" loading="lazy" bind="d4d995aa-c8e5-f2e0-077d-ccf8c6b56733"
        src="<?php the_post_thumbnail_url() ?>"
        srcset="<?php the_post_thumbnail_url() ?> 500w, 
        <?php the_post_thumbnail_url() ?> 560w" alt="" class="image-14"> 
        
    </div>
    <div class="div-block-42">
        <h4 bind="a0b6d938-f158-3213-3c33-bbbc7f8b8c40" class="heading-18"><?php the_title()?></h4>
        <div bind="0e978f14-42ab-125c-9045-38b06fa3f57b" class="text-block-22"><?php echo wp_trim_words(get_the_content(), 50) ?></div>
        <a href="<?php the_permalink() ?>" bind="8f139c0c-113c-97ec-1bf4-c88b7a215064" class="button-12 w-button">Lees meer</a>
    </div>
</div>