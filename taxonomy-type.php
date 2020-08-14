<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 */

get_header(); ?>
<div id="page">
	<div id="content" class="site-content">
		<main id="main" class="site-main" role="main">
			
		<header class="entry-header">
			<h1 class="entry-title"><?php single_cat_title(); ?></h1>
		</header><!-- .entry-header -->

		<p><?php echo term_description() ?></p>


	    <?php
	    // Вывод списка дочерних категорий
			$termID = get_queried_object()->term_id;
			$taxonomyName = "type";
			$termchildren = get_term_children( $termID, $taxonomyName );

			echo '<ul class="sub-category">';
			foreach ($termchildren as $child) {
				$term = get_term_by( 'id', $child, $taxonomyName );
				echo '<li><a href="' . get_term_link( $term->term_id, $term->taxonomy ) . '">' . $term->name . '</a></li>';
			}
			echo '</ul>';
		?>


		<?php 
		// Вывод списка продуктов
			if ( have_posts() ) : ?>

			<?php
				// Получение списка категорий для группировки по классу напряжения
				$member_group_terms = get_terms( 'voltclass' );
				// Цикл по списку категорий для группировки
				foreach ( $member_group_terms as $member_group_term ) {
				    $member_group_query = new WP_Query( array(
				        'post_type' => 'product',
				        'tax_query' => array(
				        	'relation' => 'AND',
				            array(
				            	// по типу
				                'taxonomy' => 'type', 
				                'field' => 'slug',
				                'terms' => get_queried_object()->slug,
				                'operator' => 'IN'
				            ),
				            array(
				            	// по классу напряжения
				                'taxonomy' => 'voltclass', 
				                'field' => 'slug',
				                'terms' => array( $member_group_term->slug ),
				                'operator' => 'IN'
				            )
				        )
				    ) ); 
				    // вывод категории 
				    if ( $member_group_query->have_posts() ) : 
					    // вывод категории 
					    echo '<h2 class="category-group"><a href="',get_term_link($member_group_term),'">', $member_group_term->name, '</a></h2>';
					    echo '<ul class="product-list">';
					    // Вывод списка продуктов в категории
				    	while ( $member_group_query->have_posts() ) : $member_group_query->the_post();
					        get_template_part( 'content', 'products' );
						endwhile; 
				  		echo '</ul>';
					endif;
				    // Reset things, for good measure
				    $member_group_query = null;
				    wp_reset_postdata();
				} ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #content -->
</div> <!-- #page -->
<?php get_footer(); ?>