<?php
    if(!isset($attributes['text'])) {
        $attributes['text'] = "Je bedrijf is afhankelijk van stabiele IT-voorzieningen. Daarom zetten wij onze decennialange ervaring in om ervoor te zorgen dat jij je dagelijkse werkzaamheden zonder gedoe kunt uitvoeren. Apparaten aanschaffen, installeren en updaten. Verbindingsproblemen oplossen en licenties beheren. Je netwerk beveiligen… Regelen we allemaal voor je. Jij hebt wel wat beters te doen dan IT beheren, toch?";
    }

    if (!isset($attributes['imgURL'])) {
	    $attributes['imgURL'] = get_theme_file_uri('/images/🎛-Fixed-Aspect-Ratio-Spacer-Variants.svg');
    }
    if (!isset($attributes['className'])) {
	    $attributes['className'] = "grid-10";
    }
?>

<div class="section-16 wf-section">
	<div class="w-layout-grid <?php echo $attributes['className']?>">
		<div id="w-node-_993d318d-7a60-b2cd-f7ed-b9699b551f08-495a224b" class="text-block-37"><?php echo $attributes['text'] ?></div><img src="<?php echo $attributes['imgURL'] ?>" loading="lazy" id="w-node-_993d318d-7a60-b2cd-f7ed-b9699b551f0a-495a224b" alt="" class="image-22">
	</div>
</div>

