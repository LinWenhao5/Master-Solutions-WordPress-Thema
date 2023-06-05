<div class="blogs-post-automatisch w-container">
	<div class="section-10 wf-section">
		<div bind="175da8a4-0438-c61e-84d1-ae4ad5a72c3c" class="collection-list-wrapper-2 w-dyn-list">
			<div bind="175da8a4-0438-c61e-84d1-ae4ad5a72c3d" role="list" class="collection-list-5 w-dyn-items">
				<?php
				$homepagePosts = new WP_Query(array(
					'posts per page' => 4
				));
				while($homepagePosts->have_posts())
				{
					$homepagePosts->the_post();
					get_template_part('template_parts/content', 'blog3');
				}
				wp_reset_postdata();
				?>

			</div>
		</div>
	</div>
</div>