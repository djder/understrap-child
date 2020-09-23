<div id="max_t" style="display:none;">
</div>
<div id="min_t" style="display:none;">
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
<table id="tol" class="empty" style="max-width:100%;width:100%;">
    <tr>
        <td id="klass" style="text-align:center;vertical-align:middle"></td>
        <td colspan="2">
            <p class="help">Класс напряжения, кВ</p>
            <select id="napr" class="inputbox1">
                <option value="">...</option>
                <?php
$tip                 = isset($_REQUEST['tabl']) ? $_REQUEST['tabl'] : '1';
$_REQUEST['table']   = 'tip_ispoln';
$_REQUEST['column0'] = 'napr';
$_REQUEST['case']    = 'tip_id_eq_' . $tip;

include __DIR__ . '\res2sel.php';
?>
            </select>
        </td>
        <td width="15%">
            <p class="help" tag="1">Исполнение</p>
            <select id="gab" class="inputbox1">
            </select>
            <p><input id="gab_nt" type="checkbox" disabled />неточно</p>
        </td>
        <td colspan="2">
            <p class="help">Климатическое исполнение</p>
            <select id="klim_kat" class="inputbox1">
            </select>
        </td>
    </tr>
    <tr>
        <td colspan="1" style="vertical-align:top;">
            <p class="help">Вариант выполнения выводов</p>
            <div id="var_v_v" style="display:inline-block;"></div>
            <p><input id="var_v_v_nt" type="checkbox" disabled />неточно</p>
        </td>
        <td colspan="2" style="vertical-align:top;">
            <div id="gib_v" style="display:none;">
                <p class="help" tag="1">Длина гибких выводов, м</p><input id="gib_vv" type="text" class="inputbox" style="width:100px; background:#fee;" value="" onchange="this.value = this.value.replace(',','.'); this.value = 0||isNaN(this.value)?0.1:(Math.abs(Math.round(this.value*10))/10); this.value = (this.value == 0)?0.1:this.value; this.value = (this.value > 10)?10:this.value;" />
            </div>
        </td>
        <td colspan="2" style="vertical-align:top;">
            <p class="help" tag="1">Наличие барьеров</p>
            <div id="bar_v"></div>
            <p><input id="bar_v_nt" type="checkbox" disabled />неточно</p>
        </td>
    </tr>
    <tr>
        <td colspan="5">
            <p><b>Первичная обмотка</b></p>
        </td>
    </tr>
    <tr>
        <td>
            <p class="help" tag="1">Номинальный первичный ток, А</p>
            <div class="round" onclick="popup('info',1);" style="display:none;">?</div>
            <select id="per_t" class="inputbox1">
            </select>
        </td>
        <td>
            <p class="help" tag="1">Ток терм.стойкости, кА</p>
            <select id="term_t" class="inputbox1">
            </select>
            <p><input id="term_t_nt" type="checkbox" disabled />неточно</p>
        </td>
        <td>
            <p class="help" tag="1">Время протекания, с</p>
            <div id="vrem_pr"></div>
        </td>
        <td colspan="2">
            <p class="help" tag="1">Расширенный диапазон первичного тока, %</p><select id="ras" class="inputbox1" style="width:100px; background:#fee;">
                <option>120</option>
                <option>150</option>
                <option>200</option>
            </select>
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <div id="perpert" style="display:inline-block;">
                <input type="checkbox" id="perek" value="" disabled="true" /> - <p class="help" tag="1">Переключение по первичному току</p>
            </div>
        </td>
        <td> </td>
    </tr>
    <tr>
        <td>
            <div id="perpert1" style="display:none;">
            </div>
        </td>
        <td>
            <div id="perpert2" style="display:none;">
            </div>
        </td>
        <td>
        </td>
        <td> </td>
        <td> </td>
    </tr>
</table>
<table id="a00" class="empty" style="max-width:100%;width:100%;">
    <tr>
        <td colspan="8">
            <p style="max-width:100%;"><b id="countvyv">Вторичные обмотки и отпайки</b></p>
        </td>
    </tr>
    <tr>
        <td>
            <p class="help" tag="1">№ Обмотки</p>
        </td>
        <td>
            <p>№ Отпайки</p>
        </td>
        <td width="12%">
            <p class="help" tag="1">Выводы</p>
        </td>
        <td>
            <p class="help" tag="1">Первичный ток, А</p>
        </td>
        <td>
            <p class="help" tag="1">Вторичный ток, А</p>
        </td>
        <td width="12%">
            <p class="help" tag="1">Нагрузка, ВА</p>
        </td>
        <td>
            <p class="help" tag="1">Класс точности</p>
        </td>
        <td width="17%">
            <p class="help" tag="1">Коэф. безоп./ Кратность</p>
        </td>
    </tr>
    <tr>
        <td id="tdd_0">
            <p>1</p>
        </td>
        <td colspan="7">
            <table id="a01" style="max-width:100%;width:100%;">
                <tr>
                    <td id="td_1">
                        <p></p>
                    </td>
                    <td width="15%"><input id="vyv_1_0" class="inputbox" style="width:100px; background:#fee;" value="И1-И2" disabled type="text" /></td>
                    <td width="15%"><select id="vtor_p_1" class="inputbox1"></select></td>
                    <td width="15%"><select id="vtor_v_1" class="inputbox1">
                            <option value="">...</option>
                            <option value="1">1</option>
                            <option value="5">5</option>
                        </select></td>
                    <td width="15%"><input type="text" id="id_vtor_a_1" class="inputbox" style="width:106px; background:#fee; position:relative; z-index:7;" onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;"><select id="d_vtor_a_1" class="inputbox1" style="position:relative; top:-26px; left:1px; z-index:6;" onchange="document.getElementById('i'+this.id).value = this.options[this.selectedIndex].value"></select>
                        <p><input id="d_vtor_a_1_nt" type="checkbox" disabled />неточно</p>
                    </td>
                    <td width="15%">
                        <select id="vtor_b_1" class="inputbox1">
                        </select>
                        <p><input id="vtor_b_1_nt" type="checkbox" disabled />неточно</p>
                    </td>
                    <td width="15%"><input type="text" id="id_vtor_c_1" class="inputbox" style="width:106px; background:#fee; position:relative; z-index:7;" onchange="this.value = isNaN(this.value)?2:this.value; this.value = (Math.abs(this.value) % 36); this.value = (this.value)<2?2:this.value;"><select id="d_vtor_c_1" class="inputbox1" style="position:relative; top:-26px; left:1px; z-index:6;" onchange="document.getElementById('i'+this.id).value = this.options[this.selectedIndex].value"></select>
                        <p><input id="d_vtor_c_1_nt" type="checkbox" disabled />неточно</p>
                    </td>
                </tr>
                <tr>
                    <td onclick="addrow2('a01');" class="tdbuttonbl">добавить<br /> отпайку</td>
                    <td colspan="6"></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td onclick="addrow('a00');" class="tdbuttonbl">добавить<br />обмотку</td>
        <td colspan="7"></td>
    </tr>
</table>
<table id="sch" class="empty" style="max-width:100%;width:100%;">
    <tr>
        <td></td>
        <td colspan="6"></td>
        <td></td>
    </tr>
    <tr>
        <td width="10%"></td>
        <td onclick="search();" id="clck" class="tdbuttonbl" style="height:50px;font-size:18px;line-height:48px;width:80%;" colspan="6">Выполнить поиск</td>
        <td onclick="createpdf(tip);" id="create" class="tdbuttonbl" style="border-left:1px solid white; height:50px;font-size:18px;line:height:48px;width:10%;">PDF документ</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="6"><input id="sform" type="text" disabled style="width:100%;" /></td>
        <td></td>
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
        <td width="10%" class="tdsmaltxt">Неточная конфигурация оборудования:</td>
        <td colspan="6"><input id="likesform" type="text" disabled style="width:100%;" /></td>
        <td width="10%"></td>
    </tr>
    <tr id="like2" style="display:none;">
        <td colspan="8">
            <select id="likesearch" size="2" style="width:100%; height:50px">
                <option>Оборудование похожего типа не найдено</option>
            </select>
        </td>
    </tr>
</table>