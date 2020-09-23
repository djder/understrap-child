<?php
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

global $post; // Access the global $post object.

$taxonomy = array( "name" => 'type' , "slug" => 'types');
$terms = get_terms( array (
	'taxonomy'   => $taxonomy['name'],
	'orderby'       => 'id', 
	'order'         => 'ASC',
	'hide_empty' => true,
	'parent'   => 0
	) );

$container = get_theme_mod( 'understrap_container_type' );
?>

<div class="wrapper" id="archive-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content" tabindex="-1">

		<div class="row">

			<!-- Do the left sidebar check -->
			<?php get_template_part( 'global-templates/left-sidebar-check' ); ?>

			<main class="site-main" id="main">

				<?php 
				get_search_form();
				get_template_part( 'global-templates/product','filter' );
				if ( have_posts() ) : ?>

					<header class="page-header">
						<h1 class="page-title"><?php post_type_archive_title() ?></h1>
						<?php the_archive_description( '<div class="taxonomy-description">', '</div>' ); ?>
					</header><!-- .page-header -->

					<?php foreach( $terms as $term ) { ?>

					<h3 class="term-title">
						<?php echo $term->name; ?>
					</h3>

					<?php 
					echo term_description($term->term_id);
					$posts = get_posts(array(
						'post_type' => 'product',
						'orderby'     => 'date',
						'order'       => 'ASC',
						'numberposts' => 5,
					    'taxonomy' => $term->taxonomy,
					    'term' => $term->slug,
					    'suppress_filters' => true
					));
 					?>

					<div class="row">
					<?php /* Start the Loop */

					foreach( $posts as $post ) { 

						setup_postdata($post);
						
						get_template_part( 'loop-templates/content','product' );
						
					}; 

					wp_reset_postdata();?>
					
					</div>

					<?php } // foreach( $terms as $term )  ?>

				<?php else : ?>

					<?php get_template_part( 'loop-templates/content', 'none' ); ?>

				<?php endif; ?>

			</main><!-- #main -->

		</div> <!-- .row -->

	</div><!-- #content -->

	</div><!-- #archive-wrapper -->

<?php get_footer(); ?>
