<?php
global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';
$email = ($current_user->user_email)?$current_user->user_email:'';
$organ = ($current_user->org_name)?$current_user->org_name:'';
$innal = ($current_user->inn_name)?$current_user->inn_name:'';
$first_name = ($current_user->first_name)?$current_user->first_name:'';
$last_name = ($current_user->last_name)?$current_user->last_name:'';
//echo 'User display name: ' . $current_user->display_name . '<br />';
//echo 'User ID: ' . $current_user->ID;

wp_enqueue_script('harakter', get_stylesheet_directory_uri() . '/conf/js/harakter.js',array('jquery') );
?>
<form id="config">
	<div class="form-row">
		<h4>Общие характеристики</h4>
	</div>				
	<div class="form-row">
		<div class="form-group col-md-6">
			<label for="org">Организация-заказчик</label>
			<input id="org" class="form-control" type="text" value="<?php echo esc_html($organ); ?>">
		</div>
		<div class="form-group col-md-6">
			<label for="inn">ИНН</label>
			<input id="inn" class="form-control" type="text" value="<?php echo $innal; ?>">
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-6">
			<label for="object">Объект</label>
			<input id="object" class="form-control" type="text">
		</div>
		<div class="form-group col-6 col-md-3">
			<label for="tip">Тип</label>
			<select id="tip" class="form-control custom-select">
				<option value="">...</option>	
				<?php
				$_REQUEST['table']='tip_tr';
				$_REQUEST['column0']='id';
				$_REQUEST['column1']='name';
				
				include( __DIR__ . '\res2sel.php');
				?>
			</select>
		</div>
		<div class="form-group col-6 col-md-3">
			<label for="count">Количество</label>
			<input id="count" class="form-control" type="text" onchange="this.value = this.value.replace(',','.'); this.value = 0||isNaN(this.value)?1:(Math.abs(Math.round(this.value*1))/1); this.value = (this.value <= 0)?0:this.value;" value="0">
		</div>
	</div>

	<div id="tabl">
		
	</div>

</form>

<div id="nav">
	
</div>

<!-- <div id="msg" class="alert alert-info" role="alert" style="display: none;">
	<button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="if (this.parentNode.id =='msg') this.parentNode.style.display='none'; ">
		<span aria-hidden="true">&times;</span>
	</button>
	<h4 class="alert-heading" id="msgname">Сообщение</h4>
	<p id="msgtext"></p>
</div>
 -->