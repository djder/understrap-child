<form method="get" id="searchform" action="<?php echo home_url( '/' ); ?>" role="search">
	<label class="sr-only" for="s"><?php echo _x( 'Search for:', 'label' ) ?></label>
	<div class="input-group">
		<input class="field form-control" id="s" name="s" data-swplive="true" data-swpengine="default" data-swpconfig="default" type="text" placeholder="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" value="<?php the_search_query(); ?>" autocomplete="off" aria-expanded="false" aria-autocomplete="both" aria-activedescendant="">
		<span class="input-group-append">
			<button class="submit btn btn-primary" id="searchsubmit" name="submit" type="submit" value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>">
				<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
				  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
				</svg>
			</button>
		</span>
	</div>
</form>