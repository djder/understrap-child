<?php
/*
 * Template Name: Product type
 * Template Post Type: product
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 */

get_header(); ?>
<div id="page">
	<?php 
		// Вставка хлебных крошек
		// if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(); 
	?>
	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
				<?php 
					the_post(); 
					get_template_part( 'content', 'product' );
				?>

			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->
</div><!-- #page -->
<?php get_footer(); ?>