<?php if ( $docs ) { ?>

<div class="row">

	<?php foreach ( $docs as $main_doc ) { ?>
		<div class="col-lg-6 card-group">
			<div class="card my-2">
				<div class="card-body">
					<h4 class="card-title">
						<a href="<?php echo get_permalink( $main_doc['doc']->ID ); ?>">
							<?php echo $main_doc['doc']->post_title; ?>  
						</a>
					</h3>

					<?php if ( $main_doc['sections'] ) { ?>

						<div class="card-text">
							<ul class="wedocs-doc-sections">
								<?php foreach ( $main_doc['sections'] as $section ) { ?>
									<li><a href="<?php echo get_permalink( $section->ID ); ?>"><?php echo $section->post_title; ?></a></li>
								<?php } ?>
							</ul>
						</div>

					<?php } ?>

				</div>
				<div class="card-footer">
					<a href="<?php echo get_permalink( $main_doc['doc']->ID ); ?>"><?php echo $more; ?></a>
				</div>
			</div>
		</div>

	<?php } ?>
</div>


<?php }
