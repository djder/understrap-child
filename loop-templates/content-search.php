<?php
/**
 * Search results partial template.
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<header class="entry-header">
		<h5>
			<a href="<?php echo get_permalink() ?>" rel="bookmark">
				<?php if ( function_exists( 'relevanssi_the_title' ) ) :
					relevanssi_the_title(); 
				else: 
					the_title();
				endif; ?>
			</a>
			<small><span class="badge badge-light text-muted"><?php echo get_post_type_labels( get_post_type_object( get_post_type() ) )->singular_name ?></span></small>
		</h5>
	</header><!-- .entry-header -->

	<div class="entry-summary">

		<?php the_excerpt(); ?>

	</div><!-- .entry-summary -->

</article><!-- #post-## -->
