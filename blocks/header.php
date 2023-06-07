<div data-collapse="medium" data-animation="default" data-duration="400" bind="fff94cc0-c939-4e48-59e4-dfc5ff61a3c0" data-easing="ease" data-easing2="ease" role="banner" class="header w-nav">
	<div class="f-navigation-container-2">
		<a href="<?php echo site_url() ?>" aria-current="page" class="f-navigation-logo-link-2 w-inline-block w--current"><img loading="lazy" src="<?php echo get_theme_file_uri('images/Rectangle-176.svg')?>" alt="">
			<div class="text-block-19"><strong>Master</strong> Solutions</div>
		</a>
		<nav role="navigation" class="f-navigation-menu-2 w-nav-menu">

			<?php
			$menuLocations = get_nav_menu_locations();
			$meunID = $menuLocations['headerMenu'];
			$menu_items = wp_get_nav_menu_items($meunID);
			foreach ($menu_items as $menu_item) {
				// Check if the current item has a parent (submenu item)
				if ($menu_item->menu_item_parent) {
					continue; // Skip submenu items
				}

				// Output the top-level menu item
				echo '<div class="dropdown"><a class="dropbtn f-navigation-link-2 w-nav-link" href="' . $menu_item->url . '">' . $menu_item->title . '</a>';

				// Get the submenu items
				$submenu_items = get_submenu_items($menu_item->ID, $menu_items);

				// Output the submenu if it exists
				if ($submenu_items) {
					echo '<div class="dropdown-content">';
					foreach ($submenu_items as $submenu_item) {
						echo '<a href="' . $submenu_item->url . '">' . $submenu_item->title . '</a>';
					}
					echo '</div>';
				}
                echo '</div>';
			}

			function get_submenu_items($parent_id, $menu_items) {
				$submenu_items = array();
				foreach ($menu_items as $menu_item) {
					if ($menu_item->menu_item_parent == $parent_id) {
						$submenu_items[] = $menu_item;
					}
				}
				return $submenu_items;
			}

			?>
		</nav>
		<div class="f-navigation-content-2">
			<div class="f-navigation-menu-button-2 w-nav-button">
				<div bind="fff94cc0-c939-4e48-59e4-dfc5ff61a3d5" class="w-icon-nav-menu"></div>
			</div>
			<a href="<?php echo site_url('/contact') ?>" class="f-navigation-button-2 w-inline-block">
				<div class="text-block-2">MAAK AFSPRAAK</div>
			</a>
		</div>
	</div>
</div>