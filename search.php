<?php
/*
Template Name: Search Results
*/
get_header();
global $wp_query;
$container = get_theme_mod( 'understrap_container_type' );
?>

<div class="wrapper" id="single-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content" tabindex="-1">

		<div class="row">

			<!-- Do the left sidebar check -->
			<?php get_template_part( 'global-templates/left-sidebar-check' ); ?>

			<main class="site-main" id="main">

			<?php 
			get_search_form();
			get_template_part( 'global-templates/search', 'filter' );

			if ( have_posts() ) :
				while ( have_posts() ) : the_post(); //Start the Loop

					get_template_part( 'loop-templates/content', 'search' );

				endwhile; 

			else :

				get_template_part( 'content', 'none' );

			endif; ?>

			</main><!-- #main -->

			<!-- The pagination component -->
			<?php understrap_pagination(); ?>

			<!-- Do the right sidebar check -->
			<?php //get_template_part( 'global-templates/right-sidebar-check' ); ?>

		</div><!-- .row -->

	</div><!-- #content -->

</div><!-- #single-wrapper -->

<?php get_footer(); ?>