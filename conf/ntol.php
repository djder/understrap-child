<div id="max_t" style="display:none;">
</div>
<div id="min_t" style="display:none;">
</div>
<div id="def_n" style="display:none;">
</div>
<div id="tok_term" style="display:none;">
</div>
<div id="tok_term0" style="display:none;">
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
<table id="nali" class="empty" style="min-width:100%;width:100%;">
	<tr>
				<td id="klass" style="text-align:center;vertical-align:middle"></td><td colspan="2">
				<p>Класс напряжения, кВ</p>
<select id="napr" class="inputbox1">
<option value="">...</option>	
<?php
$tip = isset($_REQUEST['tabl'])?$_REQUEST['tabl']:'7';
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
		</td><td colspan="2">
				<p>Климатическое исполнение</p>
<select id="klim_kat" class="inputbox1">

</select>
				</td>
			</tr>
			<tr id="rowvyv" style="display:none;">
				<td colspan="2" style="vertical-align:top;">
					<p>Вариант выполнения выводов</p>
					<div id="var_v_v" style="display:inline-block;"></div>
					<p><input id="var_v_v_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td colspan="2" style="vertical-align:top;"><div id="gib_v" style="display:none;"><p>Длина гибких выводов, м</p><input id="gib_vv" type="text" class="inputbox" style="width:100px; background:#fee;" value="" onchange="this.value = this.value.replace(',','.'); this.value = 0||isNaN(this.value)?0.1:(Math.abs(Math.round(this.value*10))/10); this.value = (this.value == 0)?0.1:this.value;"/></div></td>
				<td colspan="2" style="vertical-align:top;">
				&nbsp;
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
				<td colspan="2"><p id="nali1" style="display:none">Номинальное напряжение первичной обмотки (ВН), В&nbsp;<div class="round" onclick="popup('info',1);" style="display:none;">?</div></p><p id="ntol1" style="display:none">Номинальное напряжение первичной обмотки (ВН), В для ТН в составе КТ<div class="round" onclick="popup('info',1);" style="display:none;">?</div></p><br />
<select id="per_n" class="inputbox1">

</select> 	 
				</td>
<td colspan="4"><p></p><p id="ntol2" style="display:none">Предельная мощность трансформатора (вне КТ), ВА для ТН в составе КТ (комбинированный трансформатор)<div class="round" onclick="popup('info',1);" style="display:none;">?</div></p><br />
<select id="max_m" class="inputbox1"  style="display:none;">
<option value="400">400</option>
</select></td>
			</tr>
		</table>


		<table id="c00" class="empty" style="display:none; min-width:100%;">
			<tr>
				<td colspan="6"><p><b>Вторичные обмотки для ТН в составе КТ</b></p></td>
			</tr>
			<tr>
				<td colspan="2"><p>Обмотка</p></td><td><p>Номинальное напряжение, В</p></td><td><p>Класс точности</p></td><td><p>Номинальная мощность, ВА</p></td><td><p style="display:none;">Предельная мощность (вне КТ), ВА</p></td>
			</tr>
			<tr>
				<td id="tdd_0" width="14%"><p></p></td>
				<td id="td_01" width="14%"><p>Основная (а<sub>1</sub>-х<sub>1</sub>)</p></td>
				<td><select id="vtor_p_0" class="inputbox1"><option value="">...</option><option value="100">100/V3</option><option value="110">110/V3</option><option value="120">120/V3</option><option value="127">127/V3</option><option value="200">200/V3</option><option value="220">220/V3</option><option value="230">230/V3</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option></select></td>
				<td><select id="vtor_v_0" class="inputbox1"><option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option></select><p><input id="vtor_v_0_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_0min" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align: center;" value="0" disabled><input type="text" id="id_vtor_a_0" class="inputbox" style="width:74px; background:#fee; display:inline-block; z-index:1; text-align: center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><input type="text" id="id_vtor_a_0max" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align:right; text-align: center;" value="0" disabled><select id="d_vtor_a_0" class="inputbox1" style="display:none; position:relative; top:-0px; left:-104px; z-index:1;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].text"></select><input id="d_vtor_a_01" type="range" min="5" max="25" step="5" value="5" style="display:block; margin-top:8px;" /><p><input id="d_vtor_a_0_nt" type="checkbox" disabled/>неточно</p>
</td>
				<td><select id="vtor_bn_0" class="inputbox1" style="display:none;"><option value="">...</option></select></td>
			</tr>
			<tr>
				<td id="tdd_1" width="14%"><input id="td_12" type="checkbox" /><p>(добавить)</p></td>
				<td id="td_11" width="14%"><p>Основная (а<sub>2</sub>-х<sub>2</sub>)</p></td>
				<td><select id="vtor_p_1" class="inputbox1"><option value="">...</option><option value="100">100/V3</option><option value="110">110/V3</option><option value="120">120/V3</option><option value="127">127/V3</option><option value="200">200/V3</option><option value="220">220/V3</option><option value="230">230/V3</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option></select></td>
				<td><select id="vtor_v_1" class="inputbox1"><option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option></select><p><input id="vtor_v_1_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_1min" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align: center;" value="0" disabled><input type="text" id="id_vtor_a_1" class="inputbox" style="width:74px; background:#fee; display:inline-block; z-index:1; text-align: center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><input type="text" id="id_vtor_a_1max" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align:right; text-align: center;" value="0" disabled><select id="d_vtor_a_3" class="inputbox1" style="display:none; position:relative; top:-0px; left:-104px; z-index:1;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].text"></select><input id="d_vtor_a_11" type="range" min="5" max="25" step="5" value="5" style="display:block; margin-top:8px;" /><p><input id="d_vtor_a_1_nt" type="checkbox" disabled/>неточно</p></td>
				<td><select id="vtor_bn_1" class="inputbox1" style="display:none;"><option value="">...</option></select></td>
			</tr>
			<tr>
				<td id="tdd_3" width="14%"><input id="td_32" type="checkbox" /><p>(добавить)</p></td>
				<td id="td_31" width="14%"><p>Дополнительная (а<sub>д</sub>,х<sub>д</sub>)</p></td>
				<td><select id="vtor_p_3" class="inputbox1"><option value="">...</option><option value="10">100/3</option><option value="11">110/3</option><option value="12">120/3</option><option value="13">127/3</option><option value="20">200/3</option><option value="22">220/3</option><option value="23">230/3</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option></select></td>
				<td><select id="vtor_v_3" class="inputbox1"><option value="">...</option><option value="1">3</option><option value="2">3Р</option><option value="3">6Р</option></select><p><input id="vtor_v_3_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_3" class="inputbox" style="display:none; width:106px; background:#fee; position:relative; z-index:1;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><select id="d_vtor_a_32" class="inputbox1" style="position:relative; top:0px; left:0px; z-index:1;" onchange = "document.getElementById('i'+this.id).value = this.options[this.selectedIndex].text"><option value="">...</option><option value="30">30</option><option value="50">50</option><option value="75">75</option><option value="100">100</option><option value="150">150</option><option value="200">200</option><option value="300">300</option></select><p><input id="d_vtor_a_3_nt" type="checkbox" disabled/>неточно</p></td>
				<td><select id="vtor_bn_3" class="inputbox1" style="display:none;"><option value="">...</option></select></td>
			</tr>
		</table>

		<table id="d00" class="empty" style="display:none; min-width:100%;">
			<tr>
				<td colspan="6"><p><b>Вторичные обмотки для ТН в составе КТ</b></p></td>
			</tr>
			<tr>
				<td colspan="2"><p>Обмотка</p></td><td><p>Номинальное напряжение, В</p></td><td><p>Класс точности</p></td><td><p>Номинальная мощность, ВА</p></td><td><p style="display:none;">Предельная мощность (вне КТ), ВА</p></td>
			</tr>
			<tr>
				<td id="tdd_2" width="14%"><p></p></td>
				<td id="td_21" width="14%"><p>Основная (а<sub>1</sub>-х<sub>1</sub>)</p></td>
				<td><select id="vtor_p_2" class="inputbox1"><option value="">...</option><option value="100">100</option></select></td>
				<td><select id="vtor_v_2" class="inputbox1"><option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option></select><p><input id="vtor_v_2_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_2min" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align: center;" value="0" disabled><input type="text" id="id_vtor_a_2" class="inputbox" style="width:74px; background:#fee; display:inline-block; z-index:1; text-align: center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><input type="text" id="id_vtor_a_2max" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align:right; text-align: center;" value="0" disabled><input id="d_vtor_a_21" type="range" min="5" max="25" step="5" value="5" style="display:block; margin-top:8px;" /><p><input id="d_vtor_a_2_nt" type="checkbox" disabled/>неточно</p></td>
				<td><select id="vtor_bn_2" class="inputbox1" style="display:none;"><option value="">...</option></select></td>
			</tr>
			<tr>
				<td id="tdd_4" width="14%"><input id="td_42" type="checkbox" /><p>(добавить)</p></td>
				<td id="td_41" width="14%"><p>Основная (а<sub>2</sub>-х<sub>2</sub>)</p></td>
				<td><select id="vtor_p_4" class="inputbox1"><option value="">...</option><option value="100">100</option></select></td>
				<td><select id="vtor_v_4" class="inputbox1"><option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option></select><p><input id="vtor_v_4_nt" type="checkbox" disabled/>неточно</p>
				</td>
				<td width="280px"><input type="text" id="id_vtor_a_4min" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align: center;" value="0" disabled><input type="text" id="id_vtor_a_4" class="inputbox" style="width:74px; background:#fee; display:inline-block; z-index:1; text-align: center;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><input type="text" id="id_vtor_a_4max" class="inputbox0" style="width:26px; background:transparent; position:relative; z-index:1; border:none; text-align:right; text-align: center;" value="0" disabled><input id="d_vtor_a_41" type="range" min="5" max="25" step="5" value="5" style="display:block; margin-top:8px;" disabled/><p><input id="d_vtor_a_4_nt" type="checkbox" disabled/>неточно</p></td>
				<td><select id="vtor_bn_4" class="inputbox1" style="display:none;"><option value="">...</option></select></td>
			</tr>
		</table>

		<table id="c01" class="empty" style="display:none; min-width:100%;">
			<tr>
				<td colspan="8"><p><b>Параметры ТТ в составе КТ</b></p></td>
			</tr>
			<tr>
				<td colspan="3"><p>Номинальный первичный ток для ТТ в составе КТ, А<div class="round" onclick="popup('info',1);" style="display:none;">?</div></p>
<select id="per_t" class="inputbox1">

</select> 
					 
				</td>
                <td colspan="2"><p>Ток терм.стойкости, кА&nbsp;<div class="round"  onclick="popup('info',1);" style="display:none;">?</div></p><br />
<select id="term_t" class="inputbox1">
					
</select>		 
<p><input id="term_t_nt" type="checkbox" disabled/>неточно</p>
</td><td><p>Время протекания, с</p><div id="vrem_pr"></div></td><td colspan="2"><p>Расширенный диапазон первичного тока, %</p><select id="ras" class="inputbox1" style="width:100px; background:#fee;"><option>120</option><option>150</option><option>200</option></select></td>
			</tr>
			<tr>
				<td colspan="8"><p><b>Вторичные обмотки для ТТ в составе КТ</b></p></td>
			</tr>
			<tr>
				<td width="10%"><p>№ Обмотки</p></td><td width="10%"><p>№ Отпайки</p></td><td width="10%"><p>Выводы</p></td><td><p>Первичный ток, А</p></td><td><p>Вторичный ток, А</p></td><td><p>Нагрузка, ВА</p></td><td><p>Класс точности</p></td><td><p>Коэф. безоп./ Кратность</p></td>
			</tr>
			<tr>
				<td id="tdd_0"><p>1</p></td><td colspan="7"><table id="a01" style="min-width:100%;"><tr>
				  <td id="td_1"><p></p></td>
				  <td width="15%"><input id="vyv_1_0" class="inputbox" style="width:100px; background:#fee;" value="И1-И2" disabled type="text" /></td>
				  <td width="15%"><select id="d_vtor_p_1" class="inputbox1"></select></td>
				  <td width="15%"><select id="d_vtor_v_1" class="inputbox1"><option value="">...</option><option value="1">1</option><option value="5">5</option></select></td>
				  <td width="15%"><select id="vtor_a_1" class="inputbox1" style="position:relative; top:-0px; left:0px;">
						<option value="">...</option><option value="1">1</option><option value="2">2</option><option value="3">2.5</option><option value="4">3</option><option value="5">5</option><option value="6">7.5</option><option value="7">10</option><option value="8">12.5</option><option value="9">15</option>
					  </select><p><input id="vtor_a_1_nt" type="checkbox" disabled/>неточно</p></td>
				  <td width="15%">
					  <select id="vtor_b_1" class="inputbox1">
						<option value="">...</option><option value="1">0.2S</option><option value="2">0.2</option><option value="3">0.5S</option><option value="4">0.5</option><option value="5">5Р</option><option value="6">10Р</option>
					  </select><p><input id="vtor_b_1_nt" type="checkbox" disabled/>неточно</p>
				  </td>
				  <td width="15%"><select id="d_vtor_c_1" class="inputbox1" style="position:relative; top:-0px; left:0px;"></select><p><input id="d_vtor_c_1_nt" type="checkbox" disabled/>неточно</p>
				  </td>
				  </tr>
				  <tr>
				  <td onclick="addrow2('a01');" class="tdbuttonbl">добавить<br /> отпайку</td><td colspan="6"></td>
				  </tr>	  
				  </table>
				</td>
			</tr>
			<tr>
				<td></td><td colspan="7"></td>
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

<div id="msg" class="info" style="display:none;">
	<div>
		
	</div>
	<p  onclick="this.parent.style.display='none';">
		x
	</p>
</div>
