<?php
/**
 * The template used for displaying page content in page.php
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
	</header><!-- .entry-header -->

<div class="entry-content">
		<!-- main desc -->
	<div class="production">
			
		<div class="product-main" style="clear: both;">
			<?php 
			$mainimage = get_field('main_image');

			if( $mainimage ): ?>

	
			</div>
				<div class="product-main-image" style="width: 300px; float: left;">
					<img src="<?php echo $mainimage['sizes']['medium']; ?>" alt="<?php echo $mainimage['alt']; ?>"/>
				</div><!-- .product-main-image -->

			<?php endif; ?>

			<div class="product-desc">
				<?php the_field('desc'); ?>			
			</div><!-- .product-desc -->
		   
		<div  class="buttonpro" style="padding-bottom: 100px; ">
			<a href="https://ntz-volhov.r-host.ru/?page_id=2030"p><button id="myActionButton">Подобрать по параметрам</button></a>
		</div>

	<ul class="nav nav-tabs" id="product-tab" role="tablist">
		<li class="nav-item" role="presentation">
			<a class="nav-link" id="params-tab" href="#params" role="tab" aria-controls="params" aria-selected="false">Параметры</a>
		</li>
		<li class="nav-item" role="presentation">
			<a class="nav-link active" id="docs-tab" href="#docs" role="tab" aria-controls="docs" aria-selected="true">Документы</a>
		</li>
		<li class="nav-item" role="presentation">
			<a class="nav-link" id="faq-tab" href="#faq" role="tab" aria-controls="faq" aria-selected="false">Вопросы и ответы</a>
		</li>
	</ul>
	<div class="tab-content" id="product-tab-content">
		<div class="tab-pane fade" id="params" role="tabpanel" aria-labelledby="params-tab">
			<?php the_field('chars'); ?>
		</div>
		<div class="tab-pane fade show active" id="docs" role="tabpanel" aria-labelledby="docs-tab">
			<?php get_template_part( 'content', 'attached' ); ?>
		</div>
		<div class="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
			<?php the_field('certs'); ?>
		</div>
	</div>
</div>
<!--
 		<div class="product-tabs-body">
			<section id="chars" class="product-tab">
				<?php the_field('chars'); ?>
			</section>	
			<section id="docs" class="product-tab tab-hidden">
				<?php the_field('docs'); ?>
			</section>	
			<section id="certs" class="product-tab tab-hidden">
				<?php the_field('certs'); ?>
			</section>	
		</div> --> <!-- .product-tabs-body -->


		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'semicolon' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
