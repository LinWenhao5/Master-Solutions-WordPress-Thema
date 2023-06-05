<?php
if (!isset($attributes['imgURL'])) {
	$attributes['imgURL'] = get_theme_file_uri('images/DemoInspectieApp_DEF-1.png');
}
if (!isset($attributes['title'])) {
	$attributes['title'] = "De inspectie app";
}
if (!isset($attributes['subtitle'])) {
	$attributes['subtitle'] = "Columbo";
}
if (!isset($attributes['text'])) {
	$attributes['text'] = "Lorem ipsum dolor sit amet consectetur. Volutpat lacus praesent semper tristique. Volutpat odio ultrices volutpat nullam diam massa vitae tincidunt neque. Nulla diam suspendisse venenatis rhoncus. Porttitor faucibus phasellus et lobortis viverra nunc placerat fringilla vivamus.Suspendisse vitae id aliquam risus mauris. In porttitor ac neque";
}
if (!isset($attributes['buttonText'])) {
	$attributes['buttonText'] = "JA, IK HEB INTERESSE";
}
if (!isset($attributes['linkObject'])) {
	$attributes['linkObject']['url'] = "#";
}
?>

<div class="div-block-49">
    <img src="<?php echo $attributes['imgURL'] ?>"
       loading="lazy"
       sizes="(max-width: 860px) 100vw, (max-width: 991px) 860px, (max-width: 1279px) 51vw, (max-width: 1919px) 52vw, 860px"
       id="w-node-_6b025275-0e53-13d9-0ab8-460680e1d5a2-e3abbb81"
       srcset="<?php echo $attributes['imgURL'] ?> 500w, <?php echo $attributes['imgURL'] ?> 800w, <?php echo $attributes['imgURL'] ?> 860w" alt="" class="image-20">
	<div id="w-node-_04c3b03c-e56b-5f78-1063-a2e351498186-e3abbb81" class="div-block-50">
		<h1 class="heading-22"><?php echo $attributes['title'] ?><br><?php echo $attributes['subtitle'] ?></h1>
		<div class="text-block-32"><?php echo $attributes['text'] ?></div>
		<a bind="4f276a88-5dbb-8f20-84e5-4d93437ca95e" href="<?php echo $attributes['linkObject']['url']?>" class="button-21 w-button"><?php echo $attributes['buttonText'] ?></a>
</div>
</div>