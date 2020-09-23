<?php
/**
 * Post type filter navigation
 *
 * @package understrap
 */
// Get avalable post types
$post_types = get_post_types( array( 'exclude_from_search' => false ), 'objects' );

//unset($post_types['attachment']); // исключить тип записей "вложения"
unset($post_types['page']); // исключить тип записей "страницы"

$post_types = array_reverse($post_types, true); 
$post_types[''] = (object) array('name' => '', 'label' => 'Все'); //добавить "Все" к массиву типов записей в начало
$post_types = array_reverse($post_types, true); 

// Get avalable post types
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