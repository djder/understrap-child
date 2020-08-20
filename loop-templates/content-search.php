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
		<h3>
			<a href="<?php echo get_permalink() ?>" rel="bookmark">
				<?php if ( function_exists( 'relevanssi_the_title' ) ) :
					relevanssi_the_title(); 
				else: 
					the_title();
				endif; ?>
			</a>
		</h3>
	</header><!-- .entry-header -->

	<div class="entry-summary">

		<?php the_excerpt(); ?>

	</div><!-- .entry-summary -->

</article><!-- #post-## -->
