
<?php 

$options = array(
	'field_name' => 'rel_products',
	'post_type' => 'attachment'
);

$post_id = get_the_ID(); ?>

<table class="table">
	<thead>
		<tr>
			<th  scope="col">Документ</td>
			<th  scope="col">Номер</td>
<!--			<th  scope="col">Действителен до</td>		-->	
			<th  scope="col">Обновлен</td>
			<th  scope="col">Скачать</td>
			<th  scope="col">Перейти</td>
		</tr>	
	</thead>
	<tbody>
<?php
// Получение списка категорий для группировки по пиу документа
$group_terms = get_terms( 'attachment_type',
	array('parent' => 0) 
);
// Цикл по списку категорий для группировки
foreach ( $group_terms as $group_term ) {
    $attachments = new WP_Query( array(
        'post_type' => 'attachment',
        'post_status' => 'any',
        'tax_query' => array(
            array(
                'taxonomy' => 'attachment_type', 
                'field' => 'slug',
                'terms' => $group_term->slug,
                'operator' => 'IN'
            )
		),
		'meta_query' => array(
			array(
				'key' => 'rel_products',
				'value' => strval( $post_id ),
				'compare' => 'LIKE'
			)
		)
    ) );

    // вывод категории 
    if ( $attachments->have_posts() ) : ?>
		<tr scope="row" class="subheader-row">
			<td colspan="5">
		   		<h4 class="category-group"><?php echo $group_term->name?></h4>
			</td>
	   	</tr>	
	    <?php
	    // Вывод списка вложений в категории
    	while ( $attachments->have_posts() ) : $attachments->the_post();
		$att_id = get_the_ID();
		$att_url = wp_get_attachment_url( $att_id );
		$att_path = get_attached_file( $att_id );
		if ( file_exists ( $att_path ) ) {
			$att_filetype = strtoupper(wp_check_filetype( $att_url )['ext']);
			$att_filesize = ntz_products()->get_human_readable_filesize( $att_path );
			$att_str = sprintf( "%s (%s)", $att_filetype, $att_filesize );
			}
		else {
			$att_str = sprintf( "Файл %s не найден", $att_url );
			}	
		?>
			<tr>
				<td>
					<?php the_attachment_link( $att_id ) /*Название документа*/?>
				</td>
				<td>
					<?php echo CFS()->get( 'attachment_no', $att_id ) /*Номер документа*/?>
				</td>
<!--			<td>
					<?php echo CFS()->get( 'due_date', $att_id ) /*Действителен до*/?>
				</td>   -->
				<td>
					<?php echo get_the_modified_date( '', $att_id )  /*Обновлен*/?>
				</td>
				<td>
					<a href="<?php echo $att_url ?>"><?php echo $att_str /**/?>
					</a>
				</td>
				<td>
					<?php echo CFS()->get( 'reestr_link', $att_id ) /*Перейти*/?>
				</td>
			</tr>
		<?php endwhile; 

	endif;
    // Reset things, for good measure
    $attachments = null;
    wp_reset_postdata();
}

?> 
		
	</tbody>
</table>