<?php
global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';
$email = ($current_user->user_email)?$current_user->user_email:'';
$organ = ($current_user->org_name)?$current_user->org_name:'';
$innal = ($current_user->inn_name)?$current_user->inn_name:'';
$first_name = ($current_user->first_name)?$current_user->first_name:'';
$last_name = ($current_user->last_name)?$current_user->last_name:'';

wp_enqueue_script('podbor', __DIR__ . '/js/podbor.js')

?>
<div class="korpus">
  <input type="radio" name="odin" checked="checked" id="vkl1"/><label for="vkl1" onclick="$('#vkl10').attr('checked', true);">Подбор по характеристикам</label><input type="radio" name="odin" id="vkl2"/><label for="vkl2" onclick="$('#vkl20').attr('checked', true);">Подбор по аналогам</label><input type="radio" name="odin" id="vkl3"/><label for="vkl3" onclick="$('#vkl30').attr('checked', true);">Заказ <p id="sumzak" style="width:28px;display:inline;"></p></label><input type="radio" name="odin" id="vkl4"/><label for="vkl4" onclick="$('#vkl40').attr('checked', true); vse();">Мои заказы</label><?php if ($login == "ntz-volhov" || $login == "velikanov") echo '<input type="radio" name="odin" id="vkl5" /><label for="vkl5" onclick="$(\'#vkl50\').attr(\'checked\', true);" >Пользователи</label>' ; ?><?php if ($login == "ntz-volhov") echo '<input type="radio" name="odin" id="vkl6" /><label for="vkl6" onclick="$(\'#vkl60\').attr(\'checked\', true);" >*</label>' ; ?>
  <div>
  <?php
    include("harakter.php");
  ?>
  </div>
  <div>
  <?php
    include("analogs.php");
  ?>
  </div>
  <div>
  <?php
    include("dopoln.php");
  ?>
  </div>
  <div id="vsezakazy">
  <?php
    include("vsezakaz.php");
  ?>
  </div>
  <div>	
  <?php
    if ($login == "ntz-volhov") include("controls.php");
  ?>
  </div>
</div>
<div class="korpus" style="border-top:#304060 solid 1px; padding-top:3px;margin-bottom:28px;">
  <input type="radio" name="dva" checked="checked" id="vkl10"/><label class="down" for="vkl10" onclick="$('#vkl1').attr('checked', true);">Подбор по характеристикам</label><input type="radio" name="dva" id="vkl20"/><label class="down" for="vkl20" onclick="$('#vkl2').attr('checked', true);">Подбор по аналогам</label><input type="radio" name="dva" id="vkl30"/><label class="down" for="vkl30" onclick="$('#vkl3').attr('checked', true);">Заказ <p id="sumzak_" style="width:28px;display:inline;"></p></label><input type="radio" name="dva" id="vkl40" /><label class="down" for="vkl40" onclick="$('#vkl4').attr('checked', true); vse();">Мои заказы</label><?php if ($login == "ntz-volhov" || $login == "velikanov") echo '<input type="radio" name="dva" id="vkl50" /><label class="down" for="vkl50" onclick="$(\'#vkl5\').attr(\'checked\', true);">Пользователи</label>' ; ?><?php if ($login == "ntz-volhov") echo '<input type="radio" name="dva" id="vkl60" /><label class="down" for="vkl60" onclick="$(\'#vkl6\').attr(\'checked\', true);">*</label>' ; ?>
</div>
<script type="text/javascript">
$('#nomzakaz').attr("value", "");
$('#nomzakaz_').attr("value", "");

</script>


