<?php
$address = new WP_Query(array(
	'posts_per_page' => 1,
	'post_type' => 'address',
));
while($address->have_posts()) {
	$address->the_post();
	$mapLocation = get_field('map_location');
	?>

<div class="maps w-container">
	<div class="columns w-row">
		<div class="column-2 w-col w-col-6">
			<h1 class="heading-12">Let&#x27;s talk</h1>
			<h1 class="heading-21"><?php the_title()?></h1>
			<div class="text-block-16"><?php echo $mapLocation['street_name'] . ' ' .  $mapLocation['street_number']?><br><?php echo $mapLocation['post_code'] . ' ' .  $mapLocation['city']?><br><?php echo $mapLocation['country']?></div>
			<div class="text-block-17"><?php echo get_field('phone_number') ?><br><?php echo get_field('email') ?></div>
			<a bind="12c1999e-7e69-1577-13fe-39817c073d54" href="https://www.google.com/maps/dir/<?php echo $mapLocation['address'] ?>" target="_blank" class="button-10 w-button">ROUTEBESCHRIJVING</a>
		</div>
		<div class="column w-col w-col-6">
			<div class="w-widget w-widget-map" data-widget-style="terrain" data-widget-latlng="<?php echo $mapLocation['lat']?>,<?php echo $mapLocation['lng']?>" aria-label="" data-enable-scroll="true" role="region" title="" data-enable-touch="true" data-widget-zoom="10" bind="b9dedb5e-7b31-54ad-af13-2fc070b86c58" data-widget-tooltip=""></div>
		</div>
	</div>
</div>

<?php
}
wp_reset_postdata();
?>