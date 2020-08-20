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

				<?php get_search_form();

				// Render post type filter navigation
				$post_types = get_post_types( array( 'exclude_from_search' => false ), 'objects' );
				
				unset($post_types['attachment']); // исключить тип записей "вложения"
				unset($post_types['page']); // исключить тип записей "страницы"
				
				$post_types = array_reverse($post_types, true); 
				$post_types[''] = (object) array('name' => '', 'label' => 'Все'); //добавить "Все" к массиву типов записей в начало
				$post_types = array_reverse($post_types, true); 
				?>
			 
				<ul class="nav">

					<?php foreach ( $post_types as $post_type => $value ) { 
						$is_active = $post_type == get_query_var('post_type');
						$search_url = home_url('/?s=').get_query_var('s').'&post_type='. $post_type; ?>
						<li class="nav-item">						
							<a class="nav-link<?php echo esc_attr($is_active ? ' active':'')?>" href="<?php echo esc_url($search_url) ?>"><?php echo $value->label ?></a>
						</li>
					<?php } ?>

				</ul>

			<?php if ( have_posts() ) :
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