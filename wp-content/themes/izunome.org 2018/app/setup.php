<?php

    function une_init(){
        register_menus();
    }
    add_action('init', 'une_init');

    function enqueue_styles_scripts(){
		/**
		 * 
		 * 	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
		 *	<link rel="stylesheet" href="style.css" type="text/css" />
		 *	<link rel="stylesheet" href="css/dark.css" type="text/css" />
		 *	<link rel="stylesheet" href="css/swiper.css" type="text/css" />
		 *	<link rel="stylesheet" href="demos/business/business.css" type="text/css" />
		 *	<link rel="stylesheet" href="demos/business/css/fonts.css" type="text/css" />
		 *	<link rel="stylesheet" href="css/font-icons.css" type="text/css" />
		 *	<link rel="stylesheet" href="css/animate.css" type="text/css" />
		 *	<link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
		 *	<link rel="stylesheet" href="one-page/css/et-line.css" type="text/css" />
		 *	<link rel="stylesheet" href="css/responsive.css" type="text/css" />
		 *  <link rel="stylesheet" href="demos/business/css/colors.css" type="text/css" />
		 */
		wp_enqueue_style( 'normalize-css', get_asset_uri('css/vendor/normalize.css'), null, ASSETS_VERSION, 'all' );		
		wp_enqueue_style( 'bootstrap-css', get_asset_uri('css/vendor/bootstrap.min.css'), null, ASSETS_VERSION, 'all' );		

		/**
		* <script type="text/javascript" src="js/jquery.js"></script>
		* <script type="text/javascript" src="js/plugins.js"></script>	
		* <script type="text/javascript" src="js/functions.js"></script>
		*/
		wp_enqueue_script( 'jquery-js', get_asset_uri('js/vendor/jquery.min.js'), null, ASSETS_VERSION, true );	
		wp_enqueue_script( 'popper-js', get_asset_uri('js/vendor/popper.min.js'), null, ASSETS_VERSION, true );	
		wp_enqueue_script( 'bootstrap-js', get_asset_uri('js/vendor/bootstrap.min.js'), array('jquery-js'), ASSETS_VERSION, true );	
    }
	add_action('wp_enqueue_scripts', 'enqueue_styles_scripts');

	function register_menus(){
		register_nav_menu('primary', 'Menu Principal');

		// Add 'active' class to current-menu-item
		add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);		
		function special_nav_class ($classes, $item) {
			if (in_array('current-menu-item', $classes) ){
				$classes[] = 'active ';
			}
			return $classes;
		}
	}
