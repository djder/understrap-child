<form method="get" id="searchform" action="<?php echo home_url( '/' ); ?>" role="search">
	<label class="sr-only" for="s"><?php echo _x( 'Search for:', 'label' ) ?></label>
	<div class="input-group">
		<input class="field form-control" id="s" name="s" data-swplive="true" data-swpengine="default" data-swpconfig="default" type="text" placeholder="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" value="<?php the_search_query(); ?>" autocomplete="off" aria-expanded="false" aria-autocomplete="both" aria-activedescendant="">
		<span class="input-group-append">
			<button class="submit btn btn-primary" id="searchsubmit" name="submit" type="submit" value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>">
				<i class="fa fa-search" aria-hidden="true"></i>
			</button>
		</span>
	</div>
</form>