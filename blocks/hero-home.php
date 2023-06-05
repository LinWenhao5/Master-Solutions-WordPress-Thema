<?php
    if (!isset($attributes["imgURL"])) {
        $attributes["imgURL"] = get_theme_file_uri('/images/🎛-Fixed-Aspect-Ratio-Spacer-Variants_2.jpg');
    }
?>
<div class="hero-foto wf-section">
    <div class="div-block-45"><img src="<?php echo $attributes["imgURL"] ?>" loading="lazy" alt="" class="image-19"></div>
</div>
<div class="hero-tekst wf-section">
    <div class="container-2 w-container">
        <?php echo $content ?>
    </div>
</div>


