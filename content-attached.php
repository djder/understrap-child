
<?php 

$options = array(
	'field_name' => 'rel_products',
	'post_type' => 'attachment'
);

$post_id = get_the_ID(); ?>

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
		   		<h5 class="category-group"><?php echo $group_term->name?></h5>
			</td>
	   	</tr>	
	    <?php
	    // Вывод списка вложений в категории
    	while ( $attachments->have_posts() ) : $attachments->the_post();

			get_template_part( 'loop-templates/downloads','attachment' );

		endwhile; 

	endif;
    // Reset things, for good measure
    $attachments = null;
    wp_reset_postdata();
}

?> 
		
	</tbody>
</table>