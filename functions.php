<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function understrap_remove_scripts() {
    wp_dequeue_style( 'understrap-styles' );
    wp_deregister_style( 'understrap-styles' );

    wp_dequeue_script( 'understrap-scripts' );
    wp_deregister_script( 'understrap-scripts' );

    // Removes the parent themes stylesheet and scripts from inc/enqueue.php
}
add_action( 'wp_enqueue_scripts', 'understrap_remove_scripts', 20 );

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {

	// Get the theme data
	$the_theme = wp_get_theme();
    wp_enqueue_style( 'child-understrap-styles', get_stylesheet_directory_uri() . '/css/child-theme.css', array(), $the_theme->get( 'Version' ) );
    wp_enqueue_script( 'jquery');
    wp_enqueue_script( 'child-understrap-scripts', get_stylesheet_directory_uri() . '/js/child-theme.min.js', array(), $the_theme->get( 'Version' ), true );
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}

add_action( 'after_setup_theme', 'understrap_child_setup' );
function understrap_child_setup() {

    add_child_theme_textdomain();

    //Register addiditonal menus
    register_nav_menus( 
        array(
        'user'  => __( 'User Menu', 'understrap' ),
        'user-unregistered'  => __( 'Unregistered User Menu', 'understrap' )
        ) 
    );

}

function add_child_theme_textdomain() {
    load_child_theme_textdomain( 'understrap-child', get_stylesheet_directory() . '/languages' );
}

// Customize search form
add_filter( 'get_search_form', 'custom_search_form', 100 );
function custom_search_form( $form ) {
    $form = get_template_part( 'global-templates/search-form' );

    return $form;
}

add_filter( 'widget_title', 'remove_widget_title', 10, 3 );
function remove_widget_title( $title, $instance, $id_base ) {
    if ( 'custom-post-type-search' == $id_base || 'search' == $id_base ) {
        $title = "";
    }

    return $title;
}

remove_all_filters( 'get_the_excerpt' );
add_filter( 'get_the_excerpt', 'change_excerpt_more', 10, 1 );
function change_excerpt_more($more) {
	return $more .= '...';
}