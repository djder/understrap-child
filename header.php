<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$container = get_theme_mod( 'understrap_container_type' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php do_action( 'wp_body_open' ); ?>
<div class="site" id="page">

	<!-- ******************* The Navbar Area ******************* -->
	<div id="wrapper-navbar" itemscope itemtype="http://schema.org/WebSite">

		<a class="skip-link sr-only sr-only-focusable" href="#content"><?php esc_html_e( 'Skip to content', 'understrap' ); ?></a>

		<nav class="navbar navbar-expand-md navbar-light">

		<?php if ( 'container' == $container ) : ?>
			<div class="container">
		<?php endif; ?>

				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="custom-logo-link" rel="home" itemprop="url">
					<img width="60" height="60"	src="<?php echo get_stylesheet_directory_uri();?>/assets/logo.png" class="custom-logo" alt="<?php bloginfo( 'name' ); ?>" itemprop="logo">
				</a>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'understrap' ); ?>">
					<span class="navbar-toggler-icon"></span>
				</button>

				<!-- The WordPress Menu goes here -->
				<?php wp_nav_menu(
					array(
						'theme_location'  => 'primary',
						'container_class' => 'collapse navbar-collapse',
						'container_id'    => 'navbarNavDropdown',
						'menu_class'      => 'navbar-nav ml-auto',
						'fallback_cb'     => '',
						'menu_id'         => 'main-menu',
						'depth'           => 2,
						'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
					)
				); 

				//Additional user menu
				if( is_user_logged_in() ){ ?>
					<div id="navbarNavDropdown" class="collapse navbar-collapse">
						<ul id="user-menu" class="navbar-nav ml-auto">
							<li id="user-name-item" class="menu-item menu-item-has-children dropdown nav-item">
								<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<?php $current_user = wp_get_current_user();
									echo get_avatar( $current_user->user_email, 20, '', 'User avatar', array('class'=>'user-avatar') ); 

									echo $current_user->display_name; ?>
								</a>

					<?php wp_nav_menu(
						array(
							'theme_location'  => 'user',
							'container'    	  => false,
							'menu_class'      => 'dropdown-menu dropdown-menu-md-right',
							'fallback_cb'     => '',
							'menu_id'         => 'user_unregistered-menu',
							'depth'           => 1,
							'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
						)
					);	?> 
							</li>
						</ul>
					</div>
				<?php }
				else {
					wp_nav_menu(
						array(
							'theme_location'  => 'user-unregistered',
							'container_class' => 'collapse navbar-collapse',
							'container_id'    => 'navbarNavDropdown',
							'menu_class'      => 'navbar-nav ml-auto',
							'fallback_cb'     => '',
							'menu_id'         => 'user_unregistered-menu',
							'depth'           => 1,
							'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
						)
					);
				} 
				?>
			<?php if ( 'container' == $container ) : ?>
			</div><!-- .container -->
			<?php endif; ?>

		</nav><!-- .site-navigation -->

	</div><!-- #wrapper-navbar end -->
