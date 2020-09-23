<div id="max_t" style="display:none;">
</div>
<div id="min_t" style="display:none;">
</div>
<div id="tok_term" style="display:none;">
</div>
<div id="tok_stand" style="display:none;">
</div>
<div id="tok_per" style="display:none;">
</div>
<div id="per" style="display:none;">
</div>
<div id="tokper_stand" style="display:none;">
</div>
<div id="tokper_term" style="display:none;">
</div>
<div id="bar" style="display:none;">
</div>
<div id="max_vyv" style="display:none;">
</div>
	
<table id="ols" class="empty" style="max-width:100%;width:100%;">
	<tr>
				<td id="klass" style="text-align:center;vertical-align:middle"></td><td colspan="2">
				<p>Класс напряжения, кВ</p>
<select id="napr" class="inputbox1">
<option value="" selected>...</option>	
<?php
$tip = isset($_REQUEST['tabl'])?$_REQUEST['tabl']:'1';
$_REQUEST['table']='tip_ispoln';
$_REQUEST['column0']='napr';
$_REQUEST['case']='tip_id_eq_'.$tip;
//echo '<option value="" selected>...</option>';
include("res2sel.php");
?>
</select><p style="visibility:hidden;"><input id="napr_nt" type="checkbox" disabled/>неточно</p>
				</td><td>
				<p id="ols0" style="visibility:hidden;">Исполнение</p>
<select id="gab" class="inputbox1" style="visibility:hidden;">
<?php
$tip = isset($_REQUEST['tabl'])?$_REQUEST['tabl']:'11';
$_REQUEST['table']='tip_ispoln';
$_REQUEST['column0']='napr';
$_REQUEST['case']='tip_id_eq_'.$tip.'_and_ispoln_eq_1';

include("res2sel.php");
?>
</select><p id="pgab_nt" style="visibility:hidden;" ><input id="gab_nt" type="checkbox" disabled/>неточно</p>
				</td><td colspan="2">
				<p>Климатическое исполнение</p>
<select id="klim_kat" class="inputbox1">

</select><p><input id="klim_kat_nt" type="checkbox" disabled/>неточно</p>
				</td>
			</tr>
			<tr>
				<td colspan="1" style="vertical-align:top;">
					<p>Номинальная частота</p>
<select id="chast" class="inputbox1">
<option value="50">50</option><option value="60">60</option>
</select><p style=""></p><br /> 
				</td>
				<td colspan="1" style="vertical-align:top;">
				
				</td>
				<td colspan="2" style="vertical-align:top;">
					<p></p>
 
				</td>
				<td colspan="2" style="vertical-align:top;">

				</td>
			</tr>	
			<tr>
				<td colspan="2"><p class="help" style="">Номинальная мощность, кВА</p>
<select id="max_m" class="inputbox1"  style="">
<option value="">...</option>
</select><p><input id="max_m_nt" type="checkbox" disabled/>неточно</p><br /> 	 
				</td>
<td colspan="4"><p id="ols2" style=""></p><br />

				</td>
			</tr>	
			<tr>
				<td colspan="2"><p class="help" style="">Номинальное напряжение первичной обмотки (ВН), В</p>
<select id="per_n" class="inputbox1">
<option value="">...</option>
</select><p><input id="per_n_nt" type="checkbox" disabled/>неточно</p><br /> 	 
				</td>
<td colspan="4"><p style=""></p><br />

				</td>
			</tr>	
			<tr>
				<td colspan="2"><p id="ols1" class="help" style="visibility:hidden;">Номинальное напряжение вторичной обмотки (НН), В</p>
<select id="vtor_n" class="inputbox1" style="visibility:hidden;">
<option value="">...</option><option value="100">100</option><option value="127">127</option><option value="230">230</option>
</select><p id="pvtor_n_nt" style="visibility:hidden;"><input id="vtor_n_nt" type="checkbox" disabled/>неточно</p><br /> 	 
				</td>
<td colspan="4"></td>
			</tr>		
</table>
		<table id="a00" class="empty" style="display:none;">
			<tr>
				<td colspan="8"><p><b>Вторичные обмотки и отпайки</b></p></td>
			</tr>
			<tr>
				<td><p>№ Обмотки</p></td><td><p>№ Отпайки</p></td><td><p>Выводы</p></td><td><p>Первичный ток, А</p></td><td><p>Вторичный ток, А</p></td><td><p>Нагрузка, ВА</p></td><td><p>Класс точности</p></td><td><p>Коэф. безоп./ Кратность</p></td>
			</tr>
			<tr>
				<td id="tdd_0"><p>1</p></td><td colspan="7"><table id="a01"><tr>
				  <td id="td_1"><p></p></td>
				  <td width="15%"><input id="vyv_1_0" class="inputbox" style="width:100px; background:#fee;" value="И1-И2" disabled type="text" /></td>
				  <td width="15%"><select id="vtor_p_1" class="inputbox1"></select></td>
				  <td width="15%"><select id="vtor_v_1" class="inputbox1"><option value="">...</option><option value="1">1</option><option value="5">5</option></select></td>
				  <td width="15%"><input type="text" id="id_vtor_a_1" class="inputbox" style="width:106px; background:#fee; position:relative; z-index:7;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><select id="d_vtor_a_1" class="inputbox1" style="position:relative; top:-26px; left:1px; z-index:6;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].value"></select></td>
				  <td width="15%"><select id="vtor_b_1" class="inputbox1"></select></td>
				  <td width="15%"><input type="text" id="id_vtor_c_1" class="inputbox" style="width:106px; background:#fee; position:relative; z-index:7;" onchange="this.value = isNaN(this.value)?2:this.value; this.value = (Math.abs(this.value) % 36); this.value = (this.value)<2?2:this.value;"><select id="d_vtor_c_1" class="inputbox1" style="position:relative; top:-26px; left:1px; z-index:6;" onchange="document.getElementById('i'+this.id).value = this.options[this.selectedIndex].value"></select>
				  </td>
				  </tr>
				  <tr>
				  <td onclick="addrow2('a01');" class="tdbuttonbl">добавить<br /> отпайку</td><td colspan="6"></td>
				  </tr>	  
				  </table>
				</td>
			</tr>
			<tr>
				<td onclick="addrow('a00');" class="tdbuttonbl">добавить<br />обмотку</td><td colspan="7"></td>
			</tr>
		</table>



		<table id="sch" class="empty" style="max-width:100%;width:100%;">
			<tr>
				<td></td><td colspan="6"></td><td></td>
			</tr>
			<tr>
				<td width="10%"></td><td onclick="search();" id="clck" class="tdbuttonbl" style="height:50px;font-size:18px;line-height:48px;width:80%;" colspan="6">Выполнить поиск</td><td onclick="createpdf(tip);" id="create" class="tdbuttonbl" style="border-left:1px solid white; height:50px;font-size:18px;line:height:48px;width:10%;">PDF документ</td>
			</tr>
			<tr>
				<td></td><td colspan="6"><input id="sform" type="text" disabled style="width:100%;"/></td><td></td>
			</tr>
			<tr>
				<td colspan="8">
				<select id="search" size="2" style="width:100%; height:50px;display:none;">
					<option>Оборудование указаннного типа не найдено</option>
				</select>
				</td>
			</tr>
			<tr>
				<td colspan="8">&nbsp;</td>
			</tr>
			<tr id="like1" style="display:none;">
				<td width="10%" class="tdsmaltxt">Неточная конфигурация оборудования:</td><td colspan="6"><input id="likesform" type="text" disabled style="width:100%;"/></td><td width="10%"></td>
			</tr>
			<tr id="like2" style="display:none;">
				<td colspan="8">
				<select id="likesearch" size="2" style="width:100%; height:50px">
					<option>Оборудование похожего типа не найдено</option>
				</select>
				</td>
			</tr>
        </table>
