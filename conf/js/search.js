$ = window.jQuery;

function search(s) {
	likes = false;
	c = '';
	v = '';
	i = document.getElementById('sform');
	s = document.getElementById('search');
	s.outerHTML = '<select id="search" size="2" style="width:100%; height:50px"><option>Оборудование указаннного типа не найдено</option></select>';

	i.value = s;
	sform = i.value;
	//seldata = '<option value="">...</option>';
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_" + sform,
		//data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+encodeURIComponent(sform)+"",
		success: function(data21) {
			//data = "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
			org = document.getElementById('org').value;
			objectt = document.getElementById('objectt').value;
			count = document.getElementById('count').value;
			adednew = false;
			if (data21 == '') {
				sr = document.getElementById('search');
				_sform = 'sform';
				sr.outerHTML = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="5">Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</td></tr><tr><td width="10%" class="tdsmaltxt">Заказываемая конфигурация:</td><td id="newzakaz">...</td><td class="tdsmaltxt">Вы можете добавить примечание:</td><td><input type="text" id="newzakaztxt" class="inputbox1" style="width:450px;" /></td><td width="10%"><div class="tdbuttonbl" onclick="addnew(document.getElementById(_sform));" id="clcknew"  style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;">Добавить в заказ</div></td></tr></table>';
				document.getElementById('newzakaz').innerText = document.getElementById('sform').value;
				document.getElementById('clcknew').innerText = 'Добавить в заказ';
				document.getElementById('clcknew').className = 'tdbuttonbl';
				//$("#search").html('<option>Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</option>') <input type="text" class="inputbox1" style="width:250px;"/>
			} else {
				$("#search").html(data21);
				sr = document.getElementById('search');
				srtext = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="4">Найденная номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td>Добавление</td></tr>';
				for (i = 0; i < sr.childNodes.length; i++) {
					if (sr.childNodes[i].nodeType == 1) {
						srtext += '<tr><td>' + (i * 1 + 1) + '<input id="id' + i + '" type="hidden" value="' + sr.childNodes[i].value + '" /></td><td id="srt' + i + '">' + sr.childNodes[i].text + '</td><td></td><td><div onclick="addzakaz(' + i + ');this.className=tdbuttongn; this.innerText=aded;" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;" class="tdbuttonbl">Добавить в заказ</div></td></tr>';
					}
				}
				srtext += '</table>';
				sr.outerHTML = srtext;
			}

		}
	});
	//      if ($('#gab_nt').prop('checked') || $('#var_v_v_nt').prop('checked') || $('#bar_v_nt').prop('checked') || $('#d_vtor_a_1_nt').prop('checked') || $('#d_vtor_a_1_1_nt').prop('checked') || $('#vtor_b_1_nt').prop('checked') || $('#vtor_b_1_1_nt').prop('checked') || $('#d_vtor_c_1_nt').prop('checked') || $('#d_vtor_c_1_1_nt').prop('checked') || $('#d_vtor_a_1_2_nt').prop('checked') || $('#vtor_b_1_2_nt').prop('checked') || $('#d_vtor_c_1_2_nt').prop('checked') || $('#d_vtor_a_2_nt').prop('checked') || $('#d_vtor_a_2_1_nt').prop('checked') || $('#vtor_b_2_nt').prop('checked') || $('#vtor_b_2_1_nt').prop('checked') || $('#d_vtor_c_2_nt').prop('checked') || $('#d_vtor_c_2_1_nt').prop('checked') || $('#d_vtor_a_2_2_nt').prop('checked') || $('#vtor_b_2_2_nt').prop('checked') || $('#d_vtor_c_2_2_nt').prop('checked')) {$('#like1').css('display','table-row'); $('#like2').css('display','table-row'); likesearch();}
	if ($('#gab_nt').prop('checked') || $('#var_v_v_nt').prop('checked') || $('#bar_v_nt').prop('checked') || $('#term_t_nt').prop('checked') || likes) {
		$('#like1').css('display', 'table-row');
		$('#like2').css('display', 'table-row');
		likesearch();
	} else {
		$('#like1').css('display', 'none');
		$('#like2').css('display', 'none');
	}
	$('#nav').html('<div id="novy" class="tdbuttonbl" style="width:160px;height:50px;font-size:18px;line-height:48px;display:inline-block;margin:0 0 0 25%;" onclick="novy();">Новый поиск</div><div id="noob" class="tdbuttonbl" style="width:160px;height:50px;font-size:18px;line-height:48px;display:inline-block;margin:0 1px;" onclick="noob();">Новый объект</div><div id="nave" class="tdbuttonbl" style="width:160px;height:50px;font-size:18px;line-height:48px;display:inline-block;margin:0 25% 0 0;" onclick="nave();"> Наверх </div>')
	getdata(tip, -2);
}

function likesearch() {
	c = '';
	v = '';
	i = document.getElementById('likesform');
	s = document.getElementById('likesearch');
	s.outerHTML = '<select id="likesearch" size="2" style="width:100%; height:50px"><option>Оборудование похожего типа не найдено</option></select>';

	//тип
	d = document.getElementById('tip');
	c += (d.selectedIndex > 0) ? (d.options[d.selectedIndex].text) : '';
	c += '-НТЗ';

	//напряжение
	d = document.getElementById('napr');
	c += (d.selectedIndex > 0) ? ('-' + d.options[d.selectedIndex].text) : '';

	//габарит
	d = document.getElementById('gab');
	if (d.selectedIndex > 0) {
		c += (!$('#gab_nt').prop('checked')) ? ('-' + d.options[d.selectedIndex].text + '') : '%';
	} else {
		c += (!$('#gab_nt').prop('checked')) ? ('') : '%';
	}

	//типы выводов
	v = '';
	if ($("#sec_term_id_sec_term_1").is(':checked')) { c += (!$('#var_v_v_nt').prop('checked')) ? ('А') : '%' }; //русская А
	if ($("#sec_term_id_sec_term_2").is(':checked')) { c += (!$('#var_v_v_nt').prop('checked')) ? ('В') : '%' }; //русская В
	if ($("#sec_term_id_sec_term_3").is(':checked') && document.getElementById('gib_vv').value * 1 >= 1) {
		c += (!$('#var_v_v_nt').prop('checked')) ? ('С') : '%';
		v = (!$('#var_v_v_nt').prop('checked')) ? (' (выводы ' + document.getElementById('gib_vv').value + 'м)') : ' %'
	}; //русская С
	if ($("#sec_term_id_sec_term_4").is(':checked') && document.getElementById('gib_vv').value * 1 >= 1) {
		c += (!$('#var_v_v_nt').prop('checked')) ? ('D') : '%';
		v = (!$('#var_v_v_nt').prop('checked')) ? (' (выводы ' + document.getElementById('gib_vv').value + 'м)') : ' %'
	};
	if ($("#sec_term_id_sec_term_3").is(':checked') && document.getElementById('gib_vv').value * 1 < 1) {
		c += (!$('#var_v_v_nt').prop('checked')) ? ('С') : '%';
		v = (!$('#var_v_v_nt').prop('checked')) ? (' (выводы ' + document.getElementById('gib_vv').value * 1000 + 'мм)') : ' %'
	}; //русская С
	if ($("#sec_term_id_sec_term_4").is(':checked') && document.getElementById('gib_vv').value * 1 < 1) {
		c += (!$('#var_v_v_nt').prop('checked')) ? ('D') : '%';
		v = (!$('#var_v_v_nt').prop('checked')) ? (' (выводы ' + document.getElementById('gib_vv').value * 1000 + 'мм)') : ' %'
	};
	if ($("#sec_term_id_sec_term_5").is(':checked')) { c += (!$('#var_v_v_nt').prop('checked')) ? ('Е') : '%' }; //русская Е

	//отпайки
	o = '';
	if (!perekl) {
		for (a = 1; a <= obm.length; a++) {
			if (obm[a - 1] > 0) { o = 'К'; }
		}
	} else { o = 'П'; }
	c += o;

	//барьеры
	if (document.getElementById('bar_vv')) {
		if ($("#bar_vv").is(':checked')) {
			c += (!$('#bar_v_nt').prop('checked')) ? ('Б') : '%';
		} else {
			c += (!$('#bar_v_nt').prop('checked')) ? ('') : '%';
		}
	}

	c += '-';
	//alert('bar');

	for (a = 1; a <= obm.length; a++) {
		//обмотка
		btc = false;
		//класс точн.
		bb = document.getElementById('vtor_b_' + a).value;
		bb = (!$('#vtor_b_' + a + '_nt').prop('checked')) ? (bb) : '%';
		bb0 = '';
		bb1 = '';

		//коэфф.безопасности
		bc = document.getElementById('id_vtor_c_' + a).value;
		bc = (!$('#d_vtor_c_' + a + '_nt').prop('checked')) ? (bc) : '%';
		bc0 = '';
		bc1 = '';
		if (bc != '') btc = true;

		//отпайки
		if (obm[a - 1] > 0) {
			for (b = 1; b <= obm[a - 1]; b++) {
				//класс точн.
				db = document.getElementById('vtor_b_' + a + '_' + b);
				if (db) {
					db = document.getElementById('vtor_b_' + a + '_' + b).value;
					if (db && db != bb) {
						bb0 = '(';
						bb1 = ')';
					}
					if (db && b == 1 && db != bb) { c += (!$('#vtor_b_' + a + '_' + b + '_nt').prop('checked')) ? (db) : '%'; }
					if (db && b > 1 && db != bb) {
						c += '(';
						c += (!$('#vtor_b_' + a + '_' + b + '_nt').prop('checked')) ? (db) : '%';
						c += ')';
					}
				}
			}

		}
		//обмотка коэфф.безопасности
		c += bb0 + bb + bb1;
		for (b = 1; b <= obm[a - 1]; b++) {
			//нужен ли Fs в коэф.безопасности
			dc = document.getElementById('id_vtor_c_' + a + '_' + b);
			if (dc) {
				dc = document.getElementById('id_vtor_c_' + a + '_' + b).value;
				if (dc != '') btc = true;
			}
			//alert(dc);
		}
		if (bb.indexOf('Р') == -1 && bb.indexOf('%') == -1 && bb != '' && btc) c += 'Fs';

		if (obm[a - 1] > 0) {
			for (b = 1; b <= obm[a - 1]; b++) {
				//коэф.безопасности
				dc = document.getElementById('id_vtor_c_' + a + '_' + b);
				if (dc) {
					dc = document.getElementById('id_vtor_c_' + a + '_' + b).value;
					if (dc != '') btc = true;
					if (dc && dc != bc && bc) {
						bc0 = '(';
						bc1 = ')';
					}
					if (dc && b == 1 && dc != bc) { c += (!$('#d_vtor_c_' + a + '_' + b + '_nt').prop('checked')) ? (dc) : '%'; }
					if (dc && b > 1 && dc != bc) {
						c += '(';
						c += (!$('#d_vtor_c_' + a + '_' + b + '_nt').prop('checked')) ? (dc) : '%';
						c += ')';
					}
					//alert(d);
				}
			}

		}
		c += bc0 + bc + bc1;

		if (a < obm.length) c += '/';
	}

	c += '-';

	for (a = 1; a <= obm.length; a++) {
		//нагрузка
		ba0 = '';
		ba1 = '';
		ba = document.getElementById('id_vtor_a_' + a);
		if (ba) {
			ba = document.getElementById('id_vtor_a_' + a).value;
			ba = (!$('#d_vtor_a_' + a + '_nt').prop('checked')) ? (ba) : '%';
			//отпайки
			if (obm[a - 1] > 0) {
				for (b = 1; b <= obm[a - 1]; b++) {
					//нагрузка
					da = document.getElementById('id_vtor_a_' + a + '_' + b);
					if (da) {
						da = document.getElementById('id_vtor_a_' + a + '_' + b).value;
						if (da && da != ba) {
							ba0 = '(';
							ba1 = ')';
						}
						if (da && b == 1 && da != ba) { c += (!$('#d_vtor_a_' + a + '_' + b + '_nt').prop('checked')) ? (da) : '%'; }
						if (da && b > 1 && da != ba) {
							c += '(';
							c += (!$('#d_vtor_a_' + a + '_' + b + '_nt').prop('checked')) ? (da) : '%';
							c += ')';
						}
						//alert(d);
					}
				}
			}
			//c += '-'+d.options[d.selectedIndex].text;
			c += ba0 + ba + ba1;
			if (a < obm.length) c += '/';
		}
	}

	c += '-';
	ravny_p = true;
	ravny_v = true;
	ravny_o = new Array();
	o1 = new Array();

	v0 = document.getElementById('vtor_v_1');
	if (v0) {
		v0 = document.getElementById('vtor_v_1').value;
	}

	for (a = 1; a <= obm.length; a++) {
		if (obm[a - 1] > 0) ravny_o[a - 1] = true;
		//первич. ток обмотки
		d = document.getElementById('per_t');
		if (d) {
			d = document.getElementById('per_t').value;
		}
		bp = document.getElementById('vtor_p_' + a);
		if (bp) {
			bp = document.getElementById('vtor_p_' + a).value;
		}
		v1 = document.getElementById('vtor_v_' + a);
		if (v1) {
			v1 = document.getElementById('vtor_v_' + a).value;
		}
		//c += '-'+d.options[d.selectedIndex].text;
		if (d != bp) { ravny_p = false; }
		if (v0 != v1) { ravny_v = false; }
		for (b = 1; b <= obm[a - 1]; b++) {
			if (b > 0) { ravny_p = false; }
		}
	}
	for (a = 1; a <= obm.length; a++) {
		bp = document.getElementById('vtor_p_' + a);
		if (bp) {
			bp = document.getElementById('vtor_p_' + a).value;
		}
		bp0 = '';
		bp1 = '';

		if ((a == obm.length && ravny_p) || (!ravny_p) || (!ravny_v)) { //if ((a == obm.length && ravny_p) || (!ravny_p) || (!ravny_v))
			//o1 = document.getElementById('id_vtor_c_'+a).value;
			//отпайки
			if (obm[a - 1] > 0) {
				//первичные токи
				for (b = 1; b <= obm[a - 1]; b++) {
					dp = document.getElementById('vtor_p_' + a + '_' + b);
					if (dp) {
						dp = document.getElementById('vtor_p_' + a + '_' + b).value;
						if (dp && dp != bp) {
							bp0 = '(';
							bp1 = ')';
						}
						if (dp && b == 1 && dp != bp) { c += dp; }
						if (dp && b > 1 && dp != bp) {
							c += '(' + dp;
							c += ')';
						}
					}
				}
			}
			//обмотка //первичный ток
			//ток переключения
			if (perekl) {
				c += document.getElementById('tokperek').value + '-';
			}
			c += bp0 + bp + bp1;
			//вторич. ток обмотки
			b = document.getElementById('vtor_v_' + a);
			if (b) {
				b = document.getElementById('vtor_v_' + a).value;
				c += '/' + b; //            if (!ravny_v) c += '/'+b;

				if (a < obm.length) c += '-';
			}

		}
	}
	//if (ravny_v) c += '/'+b;

	//ток термическ. стойкости
	d = document.getElementById('term_t');
	//ток терм.стойкости переключения
	dpt = '';
	if (perekl) {
		dptd = document.getElementById('per_term');
		dptd = dptd.options[dptd.selectedIndex].text;
		if (d.options[d.selectedIndex].text != dptd) dpt = dptd + '-';
	}

	c += (d.selectedIndex > 0) ? (' ' + dpt + ((!$('#term_t_nt').prop('checked')) ? (d.options[d.selectedIndex].text) : '%') + 'кА') : '';
	//c += ' '+d;

	//климатич.категория
	d = document.getElementById('klim_kat');
	c += (d.selectedIndex > 0) ? (' ' + d.options[d.selectedIndex].text) : '';

	//расширенный диапазон
	d = document.getElementById('ras');
	if (d.options[d.selectedIndex].text == '150' || d.options[d.selectedIndex].text == '200') {
		c += ' (расш.' + d.options[d.selectedIndex].text + '%)';
	}
	//длина выводов
	c += v;

	i.value = c;
	//s.innerHTML = '<option>'+c+'</option>';
	sform = i.value;
	//seldata = '<option value="">...</option>';
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_" + sform,
		//data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+encodeURIComponent(sform)+"",
		success: function(data21) {
			//data = "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
			org = document.getElementById('org').value;
			objectt = document.getElementById('objectt').value;
			count = document.getElementById('count').value;
			adednew = false;
			if (data21 == '') {
				//data = "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
				sr = document.getElementById('likesearch');
				//_sform = 'likesform';
				_sform = 'sform';

				//sr.outerHTML = '<table id="likesearch" style="max-width:100%"><tr><td colspan="5">Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</td></tr><tr><td width="10%" class="tdsmaltxt">Заказываемая конфигурация:</td><td id="likezakaz">...</td><td class="tdsmaltxt">Вы можете добавить примечание:</td><td><input type="text" id="likezakaztxt" class="inputbox1" style="width:450px;" /></td><td width="10%"><div class="tdbuttonor" onclick="addnew(document.getElementById(_sform));" id="clcknew"  style="cursor:pointer; width:100px;margin:0px;height:36px;">Добавить в заказ</div></td></tr></table>';
				//document.getElementById('likezakaz').innerText = document.getElementById('likesform').value;
				//document.getElementById('clcknew').innerText = 'Добавить в заказ';
				//document.getElementById('clcknew').className = 'tdbuttonor';

				//$("#search").html('<option>Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</option>') <input type="text" class="inputbox1" style="width:250px;"/>
			} else {
				$("#likesearch").html(data21);
				sr = document.getElementById('likesearch');
				srtext = '<table id="likesearch" style="max-width:100%;width:100%;"><tr><td colspan="4">Похожая номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td>Добавление</td></tr>';
				for (i = 0; i < sr.childNodes.length; i++) {
					if (sr.childNodes[i].nodeType == 1) {
						srtext += '<tr><td>' + (i * 1 + 1) + '<input id="id' + i + '" type="hidden" value="' + sr.childNodes[i].value + '" /></td><td id="srt' + i + '">' + sr.childNodes[i].text + '</td><td></td><td><div onclick="addzakaz(' + i + ');this.className=tdbuttongn; this.innerText=aded;" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;" class="tdbuttonbl">Добавить в заказ</div></td></tr>';
					}
				}
				srtext += '</table>';
				sr.outerHTML = srtext;
			}
		}
	});
}