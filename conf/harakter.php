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
<div id="config">
<table class="empty" style="max-width:100%;width:100%;">
	<tr>
		<td colspan="5" style="text-align:center;">
			<p style="max-width:100%;width:100%;"><b>Общие характеристики</b></p>
		</td>
	</tr>				
		<tr>
			<td style="text-align:right;"><p>Организация-заказчик</p></td><td><input id="org" type="text" style="width:500px; background:#fee; border: 1px solid #f01010;" value="<?php echo $organ; ?>"></td><td style="text-align:right;"><p>ИНН</p></td><td><input id="inn" type="text" style="width:200px; background:#fee; border: 1px solid #f01010;" value="<?php echo $innal; ?>"></td><td></td>
		</tr>
		<tr>
			<td style="text-align:right;"><p>Объект</p></td><td colspan="4"><input id="objectt" type="text" style="width:500px; border: 1px solid #304090;"></td>
		</tr>
		<tr>
			<td style="text-align:right;"><p>Тип</p></td>
			<td>
				<select id="tip" class="inputbox1">
					<option value="">...</option>	
					<?php
					$_REQUEST['table']='tip_tr';
					$_REQUEST['column0']='id';
					$_REQUEST['column1']='name';
					
					include( __DIR__ . '\res2sel.php');
					?>
				</select>
			</td>
			<td style="text-align:right;">Количество</td>
			<td>
				<input id="count" type="text" style="width:50px; border: 1px solid #304090;" onchange="this.value = this.value.replace(',','.'); this.value = 0||isNaN(this.value)?1:(Math.abs(Math.round(this.value*1))/1); this.value = (this.value <= 0)?0:this.value;" value="0">
			</td>
			<td></td>
		</tr>
</table>	

<div id="tabl">
	
</div>

</div>

<div id="nav">
	
</div>

<div id="msg" class="info" style="display:none;">
	<table class="empty" style="width:100%; height:200px; max-width:100%; margin:0;">
		<tr>
			<td id="msgname" style="text-align:center;background:#304090;color:#fff;">Сообщение</td>
			<td width="32px" height="32px" style="text-align:center;background:#304090;color:#fff; cursor:pointer;">
			 	<p  onclick="if (this.parentNode.parentNode.parentNode.parentNode.id =='msg') this.parentNode.parentNode.parentNode.parentNode.style.display='none'; if (this.parentNode.parentNode.parentNode.parentNode.parentNode.id =='msg') this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display='none';">
					X
				</p>
			</td>
		</tr>
		<tr>
			<td colspan="2" id="msgtext" style="padding:8px;">
			</td>
		</tr>
	</table>	
</div>
