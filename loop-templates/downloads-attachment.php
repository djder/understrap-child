
<?php 
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package understrap
 */


$att_id = get_the_ID();
$att_url = wp_get_attachment_url( $att_id );
$att_link = get_attachment_link( $att_id );
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
<div class="media py-2">
	<a class="mt-2 mr-3" href="<?php echo $att_link ?>">
		<?php 
		$icon_attr = array( 
			'class' => 'attachment-icon',
			);
		echo wp_get_attachment_image( $att_id, 'thumbnail', true, $icon_attr);
		?>
	</a>
	<div class="media-body">
		<div class="d-flex justify-content-between align-items-center">
			<a class="flex-fill mt-0" href="<?php echo $att_link ?>">
				<h6 class="mb-0"><?php the_title('','</h6>') ?></h6>
			</a>
			<a href="<?php echo $att_url ?>">
				<i class="fa fa-download"></i>
				<?php echo $att_str /**/?>
			</a>
		</div><!--.d-flex -->
		<div class="row">
			<div class="col-sm">
				<span class="text-muted"><?php _e('Number: ') ?></span>
				<?php echo CFS()->get( 'attachment_no', $att_id ) /*Номер документа*/?>
			</div>	
 			<div class="col-sm">
				<span class="text-muted"><?php _e('Due to: ') ?></span>
				<?php echo CFS()->get( 'due_date', $att_id ) /*Действителен до*/?>
			</div>
			<div class="col-sm">
				<span class="text-muted"><?php _e('Modified: ') ?></span>
				<?php echo get_the_modified_date( '', $att_id )  /*Обновлен*/?>
			</div>	
			<div class="col-sm">
				<?php echo CFS()->get( 'reestr_link', $att_id ) /*Перейти*/?>
			</div>		
		</div><!--.row -->
	</div><!--.media-body -->
</div><!--.media -->