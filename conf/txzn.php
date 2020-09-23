<script typ="text/javascript">
<?php
if (isset($_REQUEST["sesid"]) && $_REQUEST["sesid"] !=""){
	echo "sesid = ".$_REQUEST["sesid"].";";
}
?>
</script>
<div id="max_t" style="display:none;">
</div>
<div id="def_n" style="display:none;">
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
<table id="nali" class="empty" style="max-width:100%;width:100%;">
	<tr>
				<td id="klass" style="text-align:center;vertical-align:middle"></td><td colspan="2">
				<p>Класс напряжения, кВ</p>
<select id="napr" class="inputbox1">
<option value="">...</option>	
<?php
$tip = isset($_REQUEST['tabl'])?$_REQUEST['tabl']:'15';
$_REQUEST['table']='tip_ispoln';
$_REQUEST['column0']='napr';
$_REQUEST['case']='tip_id_eq_'.$tip;

include("res2sel.php");
?>
</select>
				</td><td>
				<p>Исполнение</p>
<select id="gab" class="inputbox1">

</select>
<p><input id="gab_nt" type="checkbox" disabled/>неточно</p>
		</td><td colspan="2">
				<p>Климатическое исполнение</p>
<select id="klim_kat" class="inputbox1">

</select>
				</td>
			</tr>
			<tr id="rowvyv" style="display:none;">
				<td colspan="1" style="vertical-align:top;">
					<p>Вариант выполнения выводов</p>
					<div id="var_v_v" style="display:inline-block;"></div>
				</td>
				<td colspan="2" style="vertical-align:top;"><div id="gib_v" style="display:none;"><p>Длина гибких выводов, м</p><input id="gib_vv" type="text" class="inputbox" style="width:100px; background:#fee;" value="" onchange="this.value = this.value.replace(',','.'); this.value = 0||isNaN(this.value)?0.1:(Math.abs(Math.round(this.value*10))/10); this.value = (this.value == 0)?0.1:this.value;"/></div></td>
				<td colspan="2" style="vertical-align:top;">
				&nbsp;
				</td>
				<td><p id="poni">Пониженная индукция</p>
					<div id="pon_i"><input id="pon_in" type="checkbox" /> - пониженная индукция</div>
				</td>
			</tr>
			<tr>
				<td colspan="1" style="vertical-align:top;">
					<p>Номинальная частота</p>
<select id="chast" class="inputbox1">
<option value="50">50</option><option value="60">60</option>
</select> 
				</td>
				<td colspan="2" style="vertical-align:top;">

				</td>
				<td colspan="2" style="vertical-align:top;">
				
				</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="6"><p><b>Первичная обмотка</b></p></td>
			</tr>
			<tr>
				<td colspan="2"><p id="nali1">Номинальное напряжение первичной обмотки (ВН), В&nbsp;<div class="round" onclick="popup('info',1);" style="display:none;">?</div></p><br />
<select id="per_n" class="inputbox1">

</select> 	 
				</td>
<td colspan="4"><p id="nali2">Предельная мощность трансформатора (вне КТ), ВА<div class="round" onclick="popup('info',1);" style="display:none;">?</div></p><br />
<select id="max_m" class="inputbox1">
<option value="">...</option><option value="400">400</option><option value="630">630</option>
</select></td>
			</tr>
		</table>

		<table id="b00" class="empty" style="max-width:100%;width:100%;">
			<tr>
				<td colspan="5"><p><b>Вторичные обмотки</b></p></td>
			</tr>
			<tr>
				<td colspan="2"><p>Обмотка</p></td><td><p>Номинальное напряжение, В</p></td><td><p>Класс точности</p></td><td><p>Номинальная трехфазная мощность, ВА</p></td>
			</tr>
			<tr>
				<td id="tdd_0" width="14%"><p></p></td>
				<td id="td_01" width="14%"><p>Основная (а<sub>1</sub>-x<sub>1</sub>)</p></td>
				<td><select id="vtor_p_0" class="inputbox1"><option value="">...</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option></select></td>
				<td><select id="vtor_v_0" class="inputbox1"><option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option></select><p><input id="vtor_v_0_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_0min" class="inputbox0" style="width:26px; background:transparent; position:relative; border:none;" disabled value="0"><input type="text" id="id_vtor_a_0" class="inputbox" style="width:74px; background:#fee; position:relative; text-align:center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;" value="0"><input type="text" id="id_vtor_a_0max" class="inputbox0" style="width:26px; background:transparent; position:relative; border:none; text-align:right;" disabled value="0"><select id="d_vtor_a_0" class="inputbox1" style="display:none; position:relative; top:-0px; left:-104px;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].text"></select><input id="d_vtor_a_01" type="range" min="0" max="0" step="5" value="0" style="margin-top:4px; display:block;" /><p><input id="id_vtor_a_0_nt" type="checkbox" disabled/>неточно</p></td>
			</tr>
			<tr id="row05">
				<td id="tdd_1" width="14%"><input id="td_12" type="checkbox" /><p>(добавить)</p></td>
				<td id="td_11" width="14%"><p>Основная (а<sub>2</sub>-x<sub>2</sub>)</p></td>
				<td><select id="vtor_p_1" class="inputbox1"><option value="">...</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option></select></td>
				<td><select id="vtor_v_1" class="inputbox1"><option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option></select><p><input id="vtor_v_1_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_1min" class="inputbox0" style="width:26px; background:transparent; position:relative; border:none;" disabled value="0"><input type="text" id="id_vtor_a_1" class="inputbox" style="width:74px; background:#fee; position:relative; text-align:center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;" value="0"><input type="text" id="id_vtor_a_1max" class="inputbox0" style="width:26px; background:transparent; position:relative; border:none; text-align:right;" disabled value="0"><select id="d_vtor_a_1" class="inputbox1" style="display:none; position:relative; top:-0px; left:-104px;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].text"></select><input id="d_vtor_a_11" type="range" min="0" max="0" step="5" value="0" style="margin-top:4px; display:block;" /><p><input id="id_vtor_a_1_nt" type="checkbox" disabled/>неточно</p></td>
			</tr>
			<tr>
				<td id="tdd_2" width="14%"><input id="td_22" type="checkbox" /><p>(добавить)</p></td>
				<td id="td_21" width="14%"><p>Дополнительная (а<sub>д</sub>-х<sub>д</sub>)</p></td>
				<td><select id="vtor_p_2" class="inputbox1"><option value="">...</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option></select></td>
				<td><select id="vtor_v_2" class="inputbox1"><option value="">...</option><option value="1">3</option><option value="2">3Р</option></select><p><input id="vtor_v_2_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_2" class="inputbox" style="display:none; width:106px; background:#fee; position:relative; z-index:7; text-align:center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><select id="d_vtor_a_2" class="inputbox1" style="position:relative; top:-0px; left:-0px;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].text"><option value="">...</option><option value="1">30</option><option value="2">100</option></select><p><input id="d_vtor_a_2_nt" type="checkbox" disabled/>неточно</p></td>
			</tr>
		</table>

		<table id="sch" class="empty" style="max-width:100%;width:100%;">
			<tr>
				<td width="10%"></td><td onclick="search();" id="clck" class="tdbuttonbl" style="height:50px;font-size:18px;line-height:48px;width:80%;" colspan="6">Выполнить поиск</td><td onclick="createpdf(tip);" id="create" class="tdbuttonbl" style="border-left:1px solid white; height:50px;font-size:18px;line:height:48px;width:10%;">PDF документ</td>
			</tr>
			<tr>
				<td width="10%" class="tdsmaltxt">Полученная конфигурация оборудования:</td><td colspan="6"><input id="sform" type="text" disabled style="width:100%;"/></td><td width="10%"></td>
			</tr>
			<tr>
				<td colspan="8">
				<select id="search" size="10" style="width:100%; height:100px">
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
				<select id="likesearch" size="10" style="width:100%; height:100px">
					<option>Оборудование похожего типа не найдено</option>
				</select>
				</td>
			</tr>
        </table>

<div id="msg" class="info" style="display:none;">
	<div>
		
	</div>
	<p  onclick="this.parent.style.display='none';">
		x
	</p>
</div>
