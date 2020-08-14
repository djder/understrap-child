<?php
/**
 */
$post_id = get_the_ID();
?>

<li id="product-<?php echo $post_id ?>" <?php post_class(); ?>>
	<header class="product-header">
		<h3 class="product-title">
			<a class="procuct-link" href="<?php the_permalink(); ?>">
			<?php the_title(); 
			the_post_thumbnail(array(60, 60)); ?></a>
		</h3>
	</header><!-- .product-header -->
	<div class="procuct-actions" style="display: none;">
		<a href="">Подобрать параметры</a>	
		<a href="<?php the_permalink(); ?>">Подробнее</a>	
	</div><!-- .procuct-actions -->
	<div class="procuct-desc" style="display: none;">
		<p>Тип: <?php the_field('type'); ?></p>
		<ul><?php echo get_the_term_list( $post_id, 'type', '<li>', ', ', '</li>' ) ?></ul>
		<ul><?php echo get_the_term_list( $post_id, 'climcategory', '<li>', ', ', '</li>' ) ?></ul>
		<ul><?php echo get_the_term_list( $post_id, 'voltclass', '<li>', ', ', '</li>' ) ?></ul>
	</div><!-- .procuct-desc -->
</li><!-- #product-## -->