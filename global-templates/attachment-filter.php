<?php
/**
 * Attachment type filter navigation
 *
 * @package understrap
 */
// Get avalable post types
$att_types = get_terms( [
	'taxonomy' => 'attachment_type',
	'hide_empty' => true,
] );

$att_types = array_reverse($att_types, true); 
$att_types[''] = (object) array(
	'name' => 'Все'
	); //добавить "Все" к массиву типов записей в начало
$att_types = array_reverse($att_types, true); 

// Get avalable post types
?>
<ul class="nav nav-pills">

	<?php foreach ( $att_types as $att_type ) { 
		$is_active = $att_type->slug == get_query_var('attachment_type');
		$search_url = esc_url( get_term_link( $att_type ) ) ?>
		<li class="nav-item">						
			<a class="nav-link<?php echo esc_attr($is_active ? ' active':'')?>" href="<?php echo esc_url($search_url) ?>"><?php echo $att_type->name ?></a>
		</li>
	<?php } ?>

</ul>