
<?php 
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package understrap
 */
?>

<div class="col-6 col-md-4 col-lg-3">
	<article id="post-<?php the_ID(); ?>" <?php post_class('card mb-4'); ?>>
		<a href="<?php the_permalink() ?>">
			<?php the_post_thumbnail('', 'class=card-img') ?>
		</a>
		<div class="card-body">
			<a href="<?php the_permalink() ?>">
				<h5 class="card-title entry-title"><?php the_title(); ?></h5>
			</a>	
			<?php //the_content(); ?>			
			<small>
				<?php the_terms( get_the_ID(), 'type'); ?>
			</small>
		</div>
	</article>
</div>