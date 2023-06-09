<?php

function master_solutions_post_types()
{
    // create review post type
    register_post_type('review', array(
        'supports' => array('title', 'editor'),
        'rewrite' => array('slug' => 'reviews'),
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true, 
        'labels' => array(
            'name' => 'review',
            'add_new_item' => 'Add New review',
            'edit_item' => 'Edit Porgram',
            'all_items' => 'All reviews',
            'singular_name' => 'review',
        ),
        'menu_icon' => 'dashicons-awards'
    ));

	register_post_type('address', array(
		'supports' => array('title', 'editor'),
		'rewrite' => array('slug' => 'address'),
		'has_archive' => true,
		'public' => true,
		'show_in_rest' => true,
		'labels' => array(
			'name' => 'address',
			'add_new_item' => 'Add New address',
			'edit_item' => 'Edit address',
			'all_items' => 'All addresses',
			'singular_name' => 'address',
		),
		'menu_icon' => 'dashicons-location'
	));
}

add_action('init', 'master_solutions_post_types');


function add_theme_scripts()
{
    wp_enqueue_script('webflow.js"', get_theme_file_uri('js/webflow.js"'), NULL, '1.0', true);
    wp_enqueue_style('normalize.css', get_theme_file_uri('/css/normalize.css'));
    wp_enqueue_style('webflow.css', get_theme_file_uri('css/webflow.css'));
    wp_enqueue_style('master-solutions.webflow.css', get_theme_file_uri('css/master-solutions.webflow.css'));
    wp_enqueue_style('style.css', get_stylesheet_uri());
    wp_enqueue_style('googleapis', '//fonts.googleapis.com');
    wp_enqueue_style('gstatic', '//fonts.gstatic.com');

//	wp_enqueue_script( 'custom-script', 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64073c6e318359715d3643ce', array(), null);

    wp_enqueue_script('msfilter@1/cmsfilter.js', "//cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js", NULL, '1.0', true);
    wp_enqueue_script('cmssort@1/cmssort.js', "//cdn.jsdelivr.net/npm/@finsweet/attributes-cmssort@1/cmssort.js", NULL, '1.0', true);
    wp_enqueue_script('cmsload@1/cmsload.js', "//cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js", NULL, '1.0', true);
    wp_enqueue_script('rangeslider@1/rangeslider.js', "//cdn.jsdelivr.net/npm/@finsweet/attributes-rangeslider@1/rangeslider.js", NULL, '1.0', true);
    wp_enqueue_script('university_extra_styles', get_theme_file_uri('/build/index.js'));
    
}

add_action('wp_enqueue_scripts', 'add_theme_scripts');


function add_feature()
{
    register_nav_menu('headerMenu', 'Header Menu');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('editor-styles');
    add_editor_style(array('style.css', '/css/normalize.css', 'css/webflow.css', 'css/master-solutions.webflow.css'));
}

add_action('after_setup_theme', 'add_feature');

function form_plugin()
{
	$content = '<form id="wf-form-Contact" name="wf-form-Contact" data-name="Contact" redirect="/succes" data-redirect="/succes" method="post" action="#">';
    $content .= '<div class="kutup-divider-10px"></div><input type="text" class="kutup-field _1 w-input" maxlength="256" name="Voornaam" data-name="Voornaam" placeholder="Voornaam" id="Name" required="">';
    $content .= '<div class="kutup-divider-10px"></div><input type="text" class="kutup-field _2 w-input" maxlength="256" name="Achternaam" data-name="Achternaam" placeholder="Achternaam" id="Achternaam" required="">';
    $content .= '<div class="kutup-divider-10px"></div><input type="text" class="kutup-field _3 w-input" maxlength="256" name="Bedrijfsnaam" data-name="Bedrijfsnaam" placeholder="Bedrijfsnaam" id="Bedrijfsnaam" required="">';
    $content .= '<div class="kutup-divider-10px"></div><input type="email" class="kutup-field _3 w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" id="Email-2" required="">';
    $content .= '<div class="kutup-divider-20px"></div><input type="text" class="kutup-field _5 w-input" maxlength="256" name="Uw-vraag" data-name="Uw vraag" placeholder="Uw vraag" id="Uw-vraag" required="">';
    $content .= '<div class="kutup-divider-20px"></div><input type="submit" name="form_submit" value="Verzend" data-wait="Even geduld... " class="kutup-button-white w-button">';
    $content .= '</form>';
    return $content;
}

add_shortcode('form', 'form_plugin');

function start_session() {
    if(!session_id()) {
        session_start();
    }
}
add_action('init', 'start_session', 1);

function mailer()
{
    if (array_key_exists('postdata', $_SESSION)) {
        $first_name = sanitize_text_field($_SESSION['postdata']['Voornaam']);
        $last_name = sanitize_text_field($_SESSION['postdata']['Achternaam']);
        $company_name = sanitize_text_field($_SESSION['postdata']['Bedrijfsnaam']);
        $email = sanitize_text_field($_SESSION['postdata']['Email']);
        $content = sanitize_text_field($_SESSION['postdata']['Uw-vraag']);
        $to = 'test-whqya5wva@srv1.mail-tester.com';
        $subject = 'Contact Form';
        $message = "Name: $first_name$last_name\r\nCompany: $company_name\r\nEmail: $email\r\nMessage: $content";
        wp_mail($to, $subject, $message);
        unset($_SESSION['postdata']);
    }
//	print_r($_SESSION);
}

add_action('wp_head', 'mailer');


function my_custom_redirect() {
    if (isset($_POST['form_submit'])) {
        $url = site_url('/contact');
        $_SESSION['postdata'] = $_POST;
        unset($_POST);
        wp_redirect($url);
    }
}
add_action ('wp_loaded', 'my_custom_redirect');

function MapKey($api) {
	//	Gebruik Eigen API KEY !!!
	$api['key'] = '';
	return $api;
}

add_filter('acf/fields/google_map/api', 'MapKey');

class PlaceholderBlock
{
	function __construct($name) {
		$this->name = $name;
		add_action("init", [$this, "onInit"]) ;
	}

	function ourRenderCallback($attributes, $content) {
		ob_start();
		require get_theme_file_path("/blocks/{$this->name}.php");
		return ob_get_clean();
	}

	function onInit() {
		wp_register_script($this->name, get_stylesheet_directory_uri() . "/blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));

		register_block_type("blocktheme/{$this->name}", array(
			'editor_script' => $this->name,
			'render_callback' => [$this, 'ourRenderCallback']
		));
	}
}
// Dynamic areas(placeholder)
new PlaceholderBlock("section-reviews");
new PlaceholderBlock("blog-home");
new PlaceholderBlock("blog");
new PlaceholderBlock("section-search");
new PlaceholderBlock("header");
new PlaceholderBlock("footer");
new PlaceholderBlock('section-map');
new PlaceholderBlock('contact-form');
new PlaceholderBlock('simple-page');
class JSXBlock
{
    function __construct($name, $renderCallback = NULL, $data = NULL) {
        $this->name = $name;
		$this->data = $data;
        $this->renderCallback = $renderCallback;
        add_action("init", [$this, "onInit"]) ;
    }

    function ourRenderCallback($attributes, $content) {
        ob_start();
        require get_theme_file_path("/blocks/{$this->name}.php");
        return ob_get_clean();
    }

    function onInit() {
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
		if($this->data) {
			wp_localize_script($this->name, "preloadImage", $this->data);
		}
        $ourArgs = [
            'editor_script' => $this->name
        ];
        if ($this->renderCallback) {
            $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
        }
        register_block_type("blocktheme/{$this->name}", $ourArgs);
    }
}
//homepage banner
new JSXBlock('hero-home', true, ['fallbackimage' => get_theme_file_uri('/images/🎛-Fixed-Aspect-Ratio-Spacer-Variants_2.jpg')]);

// FAQ Area
new JSXBlock('faq', true);

//diensten and software
new JSXBlock('section-diensten-software', true);
new JSXBlock('blog-static', false, ['fallbackimage' => get_theme_file_uri('/images/Stock-Foto-1-.jpg')]);

//nieuwsbrief area
new JSXBlock('section-nieuwsbrief', true);

// diensten page top grid small
new JSXBlock('section-grid-small', true, ['fallbackimage' => get_theme_file_uri('/images/🎛-Fixed-Aspect-Ratio-Spacer-Variants.svg')]);

// diesten page multicolumn grid
new JSXBlock('section-multicolumn-grid', true);
new JSXBlock('child-column', false, ['fallbackimage' => get_theme_file_uri('/images/network-kopie.png')]);

//diensten page grid large
new JSXBlock('section-grid-large', true);
new JSXBlock('grid-text');
new JSXBlock('grid-image', false, ['fallbackimage' => get_theme_file_uri('/images/🎛-Fixed-Aspect-Ratio-Spacer-Variants_3.jpg')]);

//product page top grid large
new JSXBlock('top-grid-large', true, ['fallbackimage' => get_theme_file_uri('images/DemoInspectieApp_DEF-1.png')]);

//product page text area
new JSXBlock('text-area', true);

//faq
new JSXBlock('faq-content', true);
new JSXBlock('faq-subtitle');
new JSXBlock('faq-item');

//content block
new JSXBlock('heading');
new JSXBlock('text-block');
new JSXBlock('div-block');

//button
new JSXBlock('button');

?>