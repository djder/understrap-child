<?php
global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';
$email = ($current_user->user_email)?$current_user->user_email:'';
$organ = ($current_user->org_name)?$current_user->org_name:'';
$innal = ($current_user->inn_name)?$current_user->inn_name:'';
$facen = ($current_user->first_name)?($current_user->first_name):'';
$facen .= ($current_user->last_name)?(' '.$current_user->last_name):'';
$phone = ($current_user->phone_name)?$current_user->phone_name:'';
$postn = ($current_user->post_name)?$current_user->post_name:'';
$man_name = ($current_user->manage_name)?$current_user->manage_name:'';
$man_email = ($current_user->manage_email)?$current_user->manage_email:'';
//echo 'User display name: ' . $current_user->display_name . '<br />';
//echo 'User ID: ' . $current_user->ID;
?>
<style type="text/css">
	table#zakaz p.check{
		line-height:16px;
		margin-bottom:0;
	}
</style>
<table class="empty" style="max-width:100%;width:100%;">
	<tr>
		<td width="100%" colspan="5"><div id="safenew"   class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:24px;"><b>Сохранить заказ</b></div><div id="newfind"   class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:48px;"><b>Новый поиск</b></div><div id="newobject" class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:48px;"><b>Новый объект</b></div><div id="newclearzak" class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:48px;"><b>Новый заказ</b></div><div id="safezakaz" class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:24px;"><b>Сохранить и отправить</b></div><div id="sendnew"   class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:24px;"><b>Отправить заказ</b></div><p style="text-align:right;margin-bottom: 0.7em;margin-left:2%;vertical-align:bottom;display:inline-block;"> №</p>
		<input id="nomzakaz" value="" style="width:150px;display:inline-block;" disabled />
		</td>
	</tr>
</table>	
<table class="empty" style="max-width:100%;width:100%;">
	<tr>
	<td colspan="5" style="text-align:center;"><p style="max-width:100%;"><b>Общие характеристики</b></p></td>
	</tr>			
	<tr>
		<td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">Организация-заказчик</p></td><td colspan="2"><input id="org_z" type="text" style="width:500px; background:#fee; border: 1px solid #f01010;" value="<?php echo $organ; ?>"></td><td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">ИНН</p></td><td><input id="inn_z" type="text" style="width:200px; background:#fee; border: 1px solid #f01010;" value="<?php echo $innal; ?>"></td><td></td>
	</tr>
	<tr>
		<td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">Имя и фамилия сотрудника</p></td><td colspan="2"><input id="manager_z" type="text" style="width:300px; background:#fee; border: 1px solid #f01010;" value="<?php echo $facen; ?>"></td><td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">E-mail</p></td><td colspan="2"><input id="mail" type="text" style="width:300px; background:#fee; border: 1px solid #f01010;" value="<?php echo $email; ?>"></td>
	</tr>
	<tr>
		<td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">Адрес</p></td><td><input id="address" type="text" style="width:500px; border: 1px solid #304090;" value="<?php echo $postn; ?>"></td><td>&nbsp;</td><td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">Тел.</p></td><td><input id="phone" type="text" style="width:200px; border: 1px solid #304090;" value="<?php echo $phone; ?>"></td><td></td>
	</tr>
	<tr>
		<td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">Ведущий менеджер</p></td><td><input id="man_name" type="text" style="width:500px; border: 1px solid #304090;" value="<?php echo $man_name; ?>" disabled></td><td>&nbsp;</td><td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">E-mail</p></td><td><input id="man_email" type="text" style="width:200px; border: 1px solid #304090;" value="<?php echo $man_email; ?>" disabled></td><td></td>
	</tr>
	<tr style="display:none;">
		<td><p style="text-align:right;margin-bottom: 0.7em;vertical-align:bottom;">Объект</p></td><td colspan="4"><input id="objectt_z" type="text" style="width:500px; background:#fee; border: 1px solid #f01010;"></td><td></td>
	</tr>
</table>	
<table id="zakaz" style="max-width:100%;">
</table>
<table class="empty" style="max-width:100%;width:100%;">
	<tr>
		<td width="100%" colspan="5"><div id="safenew_"   class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:24px;"><b>Сохранить заказ</b></div><div id="newfind_"   class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:48px;"><b>Новый поиск</b></div><div id="newobject_" class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:48px;"><b>Новый объект</b></div><div id="newclearzak_" class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:48px;"><b>Новый заказ</b></div><div id="safezakaz_" class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:24px;"><b>Сохранить и отправить</b></div><div id="sendnew_"   class="tdbuttongr" style="height:50px;margin-right:1px;width:150px;display:inline-block;font-size:18px;line-height:24px;"><b>Отправить заказ</b></div><p style="text-align:right;margin-bottom: 0.7em;margin-left:2%;vertical-align:bottom;display:inline-block;"> №</p>
		<input id="nomzakaz_" value="" style="width:150px;display:inline-block;" disabled />
		</td>
	</tr>
</table>
<div id="del" class="infowide" style="display:none;font-size:12px; padding:10% auto;">
	<table style="max-width:100%;position:relative;border:1px solid #304090;background:#fff;width:800px;height:200px;margin:10% auto;">
		<tr><td>
			<table id="deltab">
				
			</table>
			</td></tr>
		<tr><td><p id="delclk" style="cursor:pointer;color:red;text-align:center;"><b>Удалить</b></p></td></tr>
	</table>
</div>