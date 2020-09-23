<?php
/**
 * The template used for displaying page content in page.php
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<!-- main desc -->
		<div class="row">
				
			<?php if ( has_post_thumbnail() ): ?>
				
			<div class="col-md-4">
				<?php echo get_the_post_thumbnail() ?>
			</div>

			<?php endif; ?>

			<div class="col-md-8">
				<header class="entry-header">
					<h1 class="entry-title"><?php the_title() ?></h1>
				</header><!-- .entry-header -->
				<p class="lead">
					<?php the_terms( get_the_ID(), 'type', 'Вид: '); ?>
				</p>		
				<?php the_content(); ?>			
				<a class="btn btn-primary" href="https://ntz-volhov.r-host.ru/?page_id=2030" role="button">Подобрать по параметрам</a>
			</div>
		</div><!-- .row -->
		<!-- tabs -->
		<p>
			<ul class="nav nav-tabs flex-column flex-sm-row" id="product-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<a class="nav-link active" id="params-tab" data-toggle="tab" href="#params" role="tab" aria-controls="params" aria-selected="true">Технические характеристики</a>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" id="docs-tab" data-toggle="tab" href="#docs" role="tab" aria-controls="docs" aria-selected="false">Загрузки</a>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" id="faq-tab" data-toggle="tab" href="#faq" role="tab" aria-controls="faq" aria-selected="false">Особенности</a>
				</li>
			</ul>
			<!-- tab content -->
			<div class="tab-content" id="product-tab-content">
				<div class="tab-pane active" id="params" role="tabpanel" aria-labelledby="params-tab">
					<p><?php the_field('chars'); ?></p>
				</div>
				<div class="tab-pane" id="docs" role="tabpanel" aria-labelledby="docs-tab">
					<p><?php get_template_part( 'content', 'attached' ); ?></p>
				</div>
				<div class="tab-pane" id="faq" role="tabpanel" aria-labelledby="faq-tab">
					<p><?php the_field('certs'); ?></p>
				</div>
			</div>
		</p>

		
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'semicolon' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
