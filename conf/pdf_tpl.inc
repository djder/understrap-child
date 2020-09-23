	data1 = '';
	prim = '';
	data2 = '';
	ttol = ''; ttol1 = '';
	data1 +='<IMG WIDTH="40" HEIGHT="40" SRC="https://intzv.ru/wp-content/themes/semicolon/ntz-volhov1.png">';
	data1 +='<table>';
	data1 +='<tr><td WIDTH="70px" ALIGN="CENTER" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td ALIGN="RIGHT" WIDTH="70mm"  HEIGHT="4mm"><font size="10" color="#000000">Организация-заказчик:</font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" ALIGN="CENTER" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td ALIGN="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000"><b>'+$("#org").val()+'</b></font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" ALIGN="CENTER" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td ALIGN="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000">ИНН:</font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td align="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000"><b>'+$("#inn").val()+'</b></font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td align="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000">Объект:</font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td align="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000"><b>'+$("#objectt").val()+'</b></font></td></tr>';
	data1 +='<tr><td WIDTH="190mm" HEIGHT="8mm" ALIGN="CENTER" BORDER="B" BORDERCOLOR="#202050" BORDERWIDTH="1mm"><font size="14" color="#202050"><b>ОПРОСНЫЙ ЛИСТ</b></font></td></tr>';
	data1 +='<tr>';
	data1 +='</tr>';
	//data +='<tr><td width="100mm" BORDER="R" BORDERCOLOR="#000" BORDERWIDTH="0.1mm"><font size="10" color="#000"><b>Общие характеристики</b></font></td><td width="80mm" BORDER="R" BORDERCOLOR="#000" BORDERWIDTH="0.1mm">*</td></tr>';
	data1 +='<tr>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Тип</font></td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Класс напряж., кВ</td>';
	data1 +='<td WIDTH="24mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Исполнение</td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Климатич. исполн.</td>';
	data1 +='</tr>';
	data1 +='<tr>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#tip option:selected").text()+'</td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#napr option:selected").text()+'</td>';
	data1 +='<td WIDTH="24mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#gab option:selected").text()+($('#gab_nt').prop('checked')?' неточно':'')+'</td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#klim_kat option:selected").text()+'</td>';
	data1 +='</tr>';
	data1 +='<tr>';
	data1 +='</tr>';
	data1 +='</table>';
	
	data1 += '<table>'; 
	data1 +='<tr>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Вариант вып. выводов</font></td>';
	data1 +='<td WIDTH="46mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Длина гибких выводов, м</font></td>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Наличие барьеров</font></td>';
	data1 +='</tr>';
	data1 +='<tr>';
	if ((types == 1 || types == 2 || types == 3) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_1').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">А '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	if ((types == 1 || types == 2 || types == 3) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_2').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">В '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	if ((types == 1 || types == 2 || types == 3) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_3').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">С '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	if ((types == 1 || types == 2 || types == 3) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_4').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">D '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	data1 +='<td WIDTH="46mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">';
	if ((types == 1 || types == 2 || types == 3) && ($('#gib_v').css('display') == 'inline-block')){
	    data1 +=(($('#gib_vv').val()!='')?('<font size="10" color="#000000">'+$('#gib_vv').val()+'</font>'):'<font size="10" color="#000000">0</font>');
    }
	else {
		data1 += '<font size="10" color="#ffffff">.</font>';
	}
	data1 +='</td>';
	data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">';
	if ((types == 1 || types == 2 || types == 3) && ($('#bar_v').css('display') == 'block') && ($('#bar_vv').prop('checked'))){
	    data1 +='<font size="10" color="#000000">ДА '+($('#bar_v_nt').prop('checked')?'неточно</font>':'</font>');
    }
	if ((types == 1 || types == 2 || types == 3) && ($('#bar_v').css('display') == 'block') && (!$('#bar_vv').prop('checked'))){
	    data1 +='<font size="10" color="#000000">НЕТ '+($('#bar_v_nt').prop('checked')?'неточно</font>':'</font>');
    }
	data1 +='<font size="10" color="#fff"></font></td></tr>';
	data1 +='<tr></tr>';
	data1 +='</table>';
	
	ttol = '<table>'; 
	ttol +='<tr></tr>';
	ttol +='<tr></tr>';
	ttol +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
    ttol +='<tr>';
	ttol +='<td WIDTH="52mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Номинальный первичный ток, А</font></td>';
    ttol +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Ток терм.стойкости, кА</font></td>';
    ttol +='<td WIDTH="34mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Время протекания, с</font></td>';
    ttol +='<td WIDTH="65mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Расширенный диапазон первичн. тока, %</font></td>';
	ttol +='</tr>';
    ttol +='<tr>';
	ttol +='<td WIDTH="52mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#per_t option:selected").text()+'</font></td>';
    ttol +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#term_t option:selected").text()+' '+($('#term_t_nt').prop('checked')?'неточно':'')+'</font></td>';
    ttol +='<td WIDTH="34mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#vrem_prot").val()+'</font></td>';
    ttol +='<td WIDTH="65mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#ras option:selected").text()+'</font></td>';
	ttol +='</tr>';
	if ((types == 1 || types == 2 || types == 3) && ($('#perek').prop('checked'))){
	    ttol +='<tr>';
		ttol +='<td WIDTH="60mm" align="CENTER"><font size="10" color="#000000">Переключение по первичному току</font></td></tr><tr>';
	    ttol +='<td WIDTH="60mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Номинальный ток переключения, А</td>';  
		ttol +='<td WIDTH="74mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Ток термической стойкости переключения, кА</td>';
		ttol +='</tr>';
	    ttol +='<tr>';
	    ttol +='<td WIDTH="60mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$('#tokperek').val()+'</td>';  
		ttol +='<td WIDTH="74mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#per_term option:selected").text()+'</td>';
		ttol +='</tr>';
    }
	ttol +='<tr><td> </td><td> </td></tr>';
	ttol +='</table>';
	
	ttol1 = '<table>'; 
	ttol1 +='<tr><td><b>'+$("#countvyv").text()+'</b></td></tr>';
	ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">№ Обмотки</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">№ Отпайки</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Выводы</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Перв.ток,А</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Втор.ток,А</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Нагр.,ВА</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Кл.точн.</td><td WIDTH="33mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm">Коэф.безоп./Кратн.</td></tr>';
	if (types == 1 || types == 2 || types == 3){
		for (a = 1; a <= obm.length; a++ ){
			//нагрузка
			//ttol1 +='<tr>';
			ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LTR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#tdd_"+(a-1)+" p").text()+'</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vyv_"+a+"_0").val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_p_"+a+" option:selected").text()+'</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_v_"+a+" option:selected").text()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_a_"+a).val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_b_"+a+" option:selected").text()+'</td><td WIDTH="33mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_c_"+a).val()+'</td></tr>';
			ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LBR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="24mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_a_"+a+"_nt").prop("checked")?('<font size="10" color="#000000">неточно</font>'):('<font size="10" color="#ffffff">.</font>'))+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#vtor_b_"+a+"_nt").prop("checked")?('<font size="10" color="#000000">неточно</font>'):('<font size="10" color="#ffffff">.</font>'))+'</td><td WIDTH="33mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_c_"+a+"_nt").prop("checked")?('<font size="10" color="#000000">неточно</font>'):('<font size="10" color="#ffffff">.</font>'))+'</td></tr>';
			
			//ttol1 +='<td>'+$("#tdd_"+(a-1)+" p").text()+'</td><td> '+$("#vyv_"+a+"_0").val()+$("#vtor_p_"+a+" option:selected").text()+'</td><td>'+$("#vtor_v_"+a+" option:selected").text()+$("#id_vtor_a_"+a).val()+'</td><td>'+$("#vtor_b_"+a+" option:selected").text()+$("#id_vtor_c_"+a).val()+'</td>';
			//ttol1 +='</tr>';
			//ttol1 +='<tr>';
			//ttol1 +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#d_vtor_a_'+a+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_nt').prop('checked')?'неточно':'             ')+'.</td>';
			//ttol1 +='</tr>';
			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//нагрузка
					//ttol1 +='<tr>';
					ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LTR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#td_"+a+"_"+b+" p").text()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vyv_"+a+"_"+b).val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_p_"+a+"_"+b+" option:selected").text()+'</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_v_"+a+"_"+b+" option:selected").text()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_a_"+a+"_"+b).val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_b_"+a+"_"+b+" option:selected").text()+'</td><td WIDTH="33mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_c_"+a+"_"+b).val()+'</td></tr>';
					//ttol1 +='<td>'+$("#td_"+a+"_"+b+" p").text()+'</td><td> '+$("#vyv_"+a+"_"+b).val()+$("#vtor_p_"+a+"_"+b+" option:selected").text()+'</td><td>'+$("#vtor_v_"+a+"_"+b+" option:selected").text()+$("#id_vtor_a_"+a+"_"+b).val()+'</td><td>'+$("#vtor_b_"+a+"_"+b+" option:selected").text()+$("#id_vtor_c_"+a+"_"+b).val()+'</td>';
					//ttol1 +='</tr>';
					//ttol1 +='<tr>';
					ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LBR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="24mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_a_"+a+"_"+b+"_nt").prop("checked")?('<font size="10" color="#000000">неточно</font>'):('<font size="10" color="#ffffff">.</font>'))+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#vtor_b_"+a+"_"+b+"_nt").prop("checked")?('<font size="10" color="#000000">неточно</font>'):('<font size="10" color="#ffffff">.</font>'))+'</td><td WIDTH="33mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_c_"+a+"_"+b+"_nt").prop("checked")?('<font size="10" color="#000000">неточно</font>'):('<font size="10" color="#ffffff">.</font>'))+'</td></tr>';
					//ttol1 +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#d_vtor_a_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+' </td>';
					//ttol1 +='</tr>';
				}
			}
		}
	}
	ttol1 +='</table>';

	nali ='<table>';
	nali +='<tr><td>Класс напряжения, кВ</td><td>'+$("#napr option:selected").text()+'</td></tr>';
	nali +='<tr><td>Исполнение</td><td>'+$("#gab option:selected").text()+' '+($('#gab_nt').prop('checked')?'неточно':'')+'</td></tr>';
	nali +='<tr><td>Климатическое<br /> исполнение</td><td>'+$("#klim_kat option:selected").text()+'</td></tr>';
    if ((types == 7 || types == 8 || types == 9 || types == 10) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_1').prop('checked'))){
	    nali +='<tr><td>Вариант выполнения <br />выводов</td><td>А</td></tr>';
    }
    if ((types == 7 || types == 8 || types == 9 || types == 10) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_2').prop('checked'))){
	    nali +='<tr><td>Вариант выполнения <br />выводов</td><td>В</td></tr>';
    }
    if ((types == 7 || types == 8 || types == 9 || types == 10) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_3').prop('checked'))){
	    nali +='<tr><td>Вариант выполнения <br />выводов</td><td>С</td></tr>';
    }
    if ((types == 7 || types == 8 || types == 9 || types == 10) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_4').prop('checked'))){
	    nali +='<tr><td>Вариант выполнения <br />выводов</td><td>D</td></tr>';
    }
    if ((types == 7 || types == 8 || types == 9 || types == 10) && ($('#gib_v').css('display') == 'inline-block')){
	    nali +='<tr><td>Длина гибких <br />выводов, м</td><td>'+$("#gib_vv").val()+'</td></tr>';
    }
    nali +='<tr><td>Номинальная <br />частота, Гц</td><td>'+$("#chast option:selected").text()+'</td></tr><tr><td> </td><td> </td></tr>';
	nali +='</table>';

	nali4 ='<table>';
	nali4 +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
	nali4 +='<tr><td>Номинальное <br />напряжение <br />первичной обмотки <br />(ВН), В</td><td>'+$("#per_n option:selected").text()+'</td></tr>';
	nali4 +='</table>';
	nali4 ='<table>';
	nali4 +='<tr><td><b>Вторичные обмотки</b></td><td> </td></tr>';
	if ($('#td_02').prop('checked')) {
	    nali4 +='<tr><td>Обмотка</td><td>Основная (а<sub>1</sub>,в<sub>1</sub>,с<sub>1</sub>,о<sub>1</sub>)</td></tr>';
	    nali4 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_0 option:selected").text()+'</td></tr>';
	    nali4 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_0 option:selected").text()+' '+($('#vtor_v_0_nt').prop('checked')?'неточно':'')+'</td></tr>';
	    nali4 +='<tr><td>Номинальная <br />трехфазная <br />мощность, ВА</td><td>'+$("#id_vtor_a_0").val()+' '+($('#d_vtor_a_0_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if ($('#td_12').prop('checked')) {
	    nali4 +='<tr><td>Обмотка</td><td>Основная (а<sub>2</sub>,в<sub>2</sub>,с<sub>2</sub>,о<sub>2</sub>)</td></tr>';
	    nali4 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_1 option:selected").text()+'</td></tr>';
	    nali4 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_1 option:selected").text()+' '+($('#vtor_v_1_nt').prop('checked')?'неточно':'')+'</td></tr>';
	    nali4 +='<tr><td>Номинальная <br />трехфазная <br />мощность, ВА</td><td>'+$("#id_vtor_a_1").val()+' '+($('#d_vtor_a_1_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}
	nali4 +='<tr><td>Обмотка</td><td>Дополнительная (а<sub>д</sub>,х<sub>д</sub>)</td></tr>';
	nali4 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_2 option:selected").text()+'</td></tr>';
	nali4 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_2 option:selected").text()+' '+($('#vtor_v_2_nt').prop('checked')?'неточно':'')+'</td></tr>';
	nali4 +='<tr><td>Номинальная <br />трехфазная <br />мощность, ВА</td><td>'+$("#id_vtor_a_2").val()+' '+($('#d_vtor_a_2_nt').prop('checked')?'неточно':'')+'</td></tr>';
	nali4 +='<tr><td> </td><td> </td></tr></table>';

	nali78 ='<table>';
	nali78 +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
	nali78 +='<tr><td>Номинальное <br />напряжение <br />первичной обмотки <br />(ВН), В</td><td>'+$("#per_n option:selected").text()+'</td></tr>';
	nali78 +='<tr><td>Предельная мощность <br />трансформатора <br />(вне КТ), ВА</td><td>'+$("#max_m option:selected").text()+'</td></tr>';
	nali78 +='</table>';
	nali78 +='<tr><td><b>Вторичные обмотки</b></td><td> </td></tr>';
	nali78 +='<tr><td>Обмотка</td><td>Основная (а<sub>1</sub>-x<sub>1</sub>)</td></tr>';
	nali78 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_5 option:selected").text()+'</td></tr>';
	nali78 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_5 option:selected").text()+' '+($('#vtor_v_5_nt').prop('checked')?'неточно':'')+'</td></tr>';
	nali78 +='<tr><td>Номинальная <br />трехфазная <br />мощность, ВА</td><td>'+$("#id_vtor_a_5").val()+' '+($('#d_vtor_a_5_nt').prop('checked')?'неточно':'')+'</td></tr>';
	if ($('#td_62').prop('checked')) {
	    nali78 +='<tr><td>Обмотка</td><td>Основная (а<sub>2</sub>-x<sub>2</sub>)</td></tr>';
	    nali78 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_6 option:selected").text()+'</td></tr>';
	    nali78 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_6 option:selected").text()+' '+($('#vtor_v_6_nt').prop('checked')?'неточно':'')+'</td></tr>';
	    nali78 +='<tr><td>Номинальная <br />трехфазная <br />мощность, ВА</td><td>'+$("#id_vtor_a_6").val()+' '+($('#d_vtor_a_6_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if ($('#td_72').prop('checked')) {
	    nali78 +='<tr><td>Обмотка</td><td>Дополнительная (а<sub>д</sub>-х<sub>д</sub>)</td></tr>';
	    nali78 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_7 option:selected").text()+'</td></tr>';
	    nali78 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_7 option:selected").text()+' '+($('#vtor_v_7_nt').prop('checked')?'неточно':'')+'</td></tr>';
	    nali78 +='<tr><td>Номинальная <br />трехфазная <br />мощность, ВА</td><td>'+$("#d_vtor_a_7 option:selected").text()+' '+($('#d_vtor_a_7_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}
	nali78 +='<tr><td> </td><td> </td></tr></table>';

	nali910 ='<table>';
	nali910 +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
	nali910 +='<tr><td>Номинальное <br />напряжение <br />первичной обмотки <br />(ВН), В</td><td>'+$("#per_n option:selected").text()+'</td></tr>';
	nali910 +='<tr><td>Предельная мощность <br />трансформатора <br />(вне КТ), ВА</td><td>'+$("#max_m option:selected").text()+'</td></tr>';
	nali910 +='</table>';
	nali910 +='<tr><td><b>Вторичные обмотки</b></td><td> </td></tr>';
	nali910 +='<tr><td>Обмотка</td><td>Основная (а<sub>1</sub>-x<sub>1</sub>)</td></tr>';
	nali910 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_3 option:selected").text()+'</td></tr>';
	nali910 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_3 option:selected").text()+' '+($('#vtor_v_5_nt').prop('checked')?'неточно':'')+'</td></tr>';
	nali910 +='<tr><td>Номинальная <br />мощность, ВА</td><td>'+$("#id_vtor_a_3").val()+' '+($('#d_vtor_a_3_nt').prop('checked')?'неточно':'')+'</td></tr>';
	if ($('#td_42').prop('checked')) {
	    nali910 +='<tr><td>Обмотка</td><td>Основная (а<sub>2</sub>-x<sub>2</sub>)</td></tr>';
	    nali910 +='<tr><td>Номинальное <br />напряжение, В</td><td>'+$("#vtor_p_4 option:selected").text()+'</td></tr>';
	    nali910 +='<tr><td>Класс точности</td><td>'+$("#vtor_v_4 option:selected").text()+' '+($('#vtor_v_4_nt').prop('checked')?'неточно':'')+'</td></tr>';
	    nali910 +='<tr><td>Номинальная <br />мощность, ВА</td><td>'+$("#id_vtor_a_4").val()+' '+($('#d_vtor_a_4_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	nali910 +='<tr><td> </td><td> </td></tr></table>';

    ntol = '<table>';
    ntol +='<tr><td>Класс напряжения, кВ</td><td>'+$("#napr option:selected").text()+'</td></tr>';
	ntol +='<tr><td>Исполнение</td><td>'+$("#gab option:selected").text()+' '+($('#gab_nt').prop('checked')?'неточно':'')+'</td></tr>';
	ntol +='<tr><td>Климатическое <br />исполнение</td><td>'+$("#klim_kat option:selected").text()+'</td></tr>';
	if ((types == 5 || types == 6) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_1').prop('checked'))){
	    ntol +='<tr><td>Вариант выполнения <br />выводов</td><td>А '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 5 || types == 6) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_2').prop('checked'))){
	    ntol +='<tr><td>Вариант выполнения <br />выводов</td><td>В '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 5 || types == 6) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_3').prop('checked'))){
	    ntol +='<tr><td>Вариант выполнения <br />выводов</td><td>С '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 5 || types == 6) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_4').prop('checked'))){
	    ntol +='<tr><td>Вариант выполнения <br />выводов</td><td>D '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 5 || types == 6) && ($('#gib_v').css('display') == 'inline-block')){
	    ntol +='<tr><td>Длина гибких <br />выводов, м </td><td>'+(($('#gib_vv').val()!='')?$('#gib_vv').val():'0')+'</td></tr>';
    }
	if ((types == 5 || types == 6) && ($('#bar_v').css('display') == 'block') && ($('#bar_vv').prop('checked'))){
	    ntol +='<tr><td>Наличие <br />барьеров </td><td>ДА '+($('#bar_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 5 || types == 6) && ($('#bar_v').css('display') == 'block') && (!$('#bar_vv').prop('checked'))){
	    ntol +='<tr><td>Наличие <br />барьеров </td><td>НЕТ '+($('#bar_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
    ntol +='<tr><td>Номинальная <br />частота, Гц</td><td>'+$("#chast option:selected").text()+'</td></tr>';
	ntol +='<tr><td> </td><td> </td></tr>';
	ntol +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
    ntol +='<tr><td>Номинальное напряжение <br />первичной обмотки (ВН), <br />В для ТН в составе КТ</td><td>'+$("#per_n option:selected").text()+'</td></tr>';
    ntol +='<tr><td>Предельная мощность <br />трансформатора (вне КТ), <br />ВА для ТН в составе КТ <br />(комбинированный <br />трансформатор)</td><td>'+$("#max_m option:selected").text()+'</td></tr>';
	ntol +='<tr><td> </td><td> </td></tr></table>';

    ntol += '<table>';
	ntol +='<tr><td><b>Вторичные обмотки для ТН в составе КТ</b></td><td> </td><td> </td><td> </td></tr>';
	ntol +='<tr><td>       Обмотка    </td><td>Номинальное напр., В</td><td>    Класс точности    </td><td>Номинальная мощность, ВА</td></tr>';
	if (types == 5){
		ntol +='<tr><td>   Основная (а1-х1)    </td><td>    '+$("#vtor_p_0 option:selected").text()+'</td><td>    '+$("#vtor_v_0 option:selected").text()+'   '+($('#vtor_v_0_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_0").val()+'       '+($('#d_vtor_a_0_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 5 && ($('#td_12').prop('checked'))){
    	ntol +='<tr><td>   Основная (а2-х2)    </td><td>    '+$("#vtor_p_1 option:selected").text()+'</td><td>'+$("#vtor_v_1 option:selected").text()+'   '+($('#vtor_v_1_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_1").val()+'       '+($('#d_vtor_a_1_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 5 && ($('#td_32').prop('checked'))){
    	ntol +='<tr><td>Дополнительная (ад,хд)</td><td>    '+$("#vtor_p_3 option:selected").text()+'</td><td>'+$("#vtor_v_3 option:selected").text()+'   '+($('#vtor_v_3_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#d_vtor_a_32 option:selected").text()+'       '+($('#d_vtor_a_3_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 6){
		ntol +='<tr><td>   Основная (а1-х1)    </td><td>    '+$("#vtor_p_2 option:selected").text()+'</td><td>'+$("#vtor_v_2 option:selected").text()+'   '+($('#vtor_v_2_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_2").val()+'       '+($('#d_vtor_a_2_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 6 && ($('#td_42').prop('checked'))){
    	ntol +='<tr><td>   Основная (а2-х2)    </td><td>    '+$("#vtor_p_4 option:selected").text()+'</td><td>'+$("#vtor_v_4 option:selected").text()+'   '+($('#vtor_v_4_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_4").val()+'       '+($('#d_vtor_a_4_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	ntol +='<tr><td> </td><td> </td><td> </td><td> </td></tr></table>';

    ntol += '<table>';
	ntol +='<tr><td><b>Параметры ТТ в составе КТ</b></td><td> </td></tr>';
    ntol +='<tr><td>Номинальный первичный <br />ток для ТТ <br />в составе КТ, А</td><td>'+$("#per_t option:selected").text()+'</td></tr>';
    ntol +='<tr><td>Ток <br />терм.стойкости, кА</td><td>'+$("#term_t option:selected").text()+' '+($('#term_t_nt').prop('checked')?'неточно':'')+'</td></tr>';
    ntol +='<tr><td>Время протекания, с</td><td>'+$("#vrem_prot").val()+'</td></tr>';
    ntol +='<tr><td>Расширенный диапазон <br />первичного тока, %</td><td>'+$("#ras option:selected").text()+'</td></tr>';
	if ((types == 5 || types == 6) && ($('#perek').prop('checked'))){
	    ntol +='<tr><td>Переключение <br />по первичному току</td><td> </td></tr>';
	    ntol +='<tr><td>Номинальный ток <br />переключения, А </td><td>'+$('#tokperek').val()+'</td></tr>';  
		ntol +='<tr><td>Ток термической <br />стойкости <br />переключения, кА</td><td>'+$("#per_term option:selected").text()+'</td></tr>';
    }
	ntol +='<tr><td> </td><td> </td></tr>';
	ntol +='<tr><td><b>Вторичные обмотки для ТТ в составе КТ</b></td><td> </td></tr>';
	ntol +='<tr><td>№ Обмотки | № Отпайки |</td><td> Выводы | Перв.ток,А |</td><td> Втор.ток,А |  Нагр.,ВА  |</td><td> Кл.точн. | Коэф.безоп./Кратн.</td></tr>';
	if (types == 5 || types == 6){
		for (a = 1; a <= obm.length; a++ ){
			//нагрузка
			ntol +='<tr>';
			ntol +='<td>'+sp100.substr(0, 8)+$("#tdd_"+(a-1)+" p").eq(1).text()+sp100.substr(0, 25)+'</td><td> '+$("#vyv_"+a+"_0").val()+sp100.substr(0, 8)+$("#d_vtor_p_"+a+" option:selected").text()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#d_vtor_v_"+a+" option:selected").text()+sp100.substr(0, 22)+$("#vtor_a_"+a+" option:selected").text()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#vtor_b_"+a+" option:selected").text()+sp100.substr(0, 17)+$("#d_vtor_c_"+a).val()+'</td>';
			ntol +='</tr>';
			ntol +='<tr>';
			ntol +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#vtor_a_'+a+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_nt').prop('checked')?'неточно':'             ')+'.</td>';
			ntol +='</tr>';
			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//нагрузка
					ntol +='<tr>';
					ntol +='<td>'+sp100.substr(0, 25)+$("#td_"+a+"_"+b+" p").text()+sp100.substr(0, 8)+'</td><td> '+$("#vyv_"+a+"_"+b).val()+sp100.substr(0, 8)+$("#d_vtor_p_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#d_vtor_v_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 22)+$("#vtor_a_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#vtor_b_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 17)+$("#d_vtor_c_"+a+"_"+b+" option:selected").text()+'</td>';
					ntol +='</tr>';
					ntol +='<tr>';
					ntol +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#vtor_a_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+' </td>';
					ntol +='</tr>';
				}
			}
		}
	}
	ntol +='</table>';
	
	tzlk ='<table>';
	tzlk +='<tr><td>Класс напряжения, кВ</td><td>'+$("#napr option:selected").text()+'</td></tr>';
	tzlk +='<tr><td>Исполнение</td><td>'+$("#gab option:selected").text()+' '+($('#gab_nt').prop('checked')?'неточно':'')+'</td></tr>';
	tzlk +='<tr><td>Климатическое<br /> исполнение</td><td>'+$("#klim_kat option:selected").text()+'</td></tr>';
    tzlk +='<tr><td>Номинальная <br />частота, Гц</td><td>'+$("#chast option:selected").text()+'</td></tr>';
    tzlk +='<tr><td>Коэффициент <br />трансформации</td><td>'+$("#koeftr option:selected").text()+'</td></tr>';
	tzlk +='</table>';

    txzn = '<table>';
    txzn +='<tr><td>Класс напряжения, кВ</td><td>'+$("#napr option:selected").text()+'</td></tr>';
	txzn +='<tr><td>Исполнение</td><td>'+$("#gab option:selected").text()+' '+($('#gab_nt').prop('checked')?'неточно':'')+'</td></tr>';
	txzn +='<tr><td>Климатическое <br />исполнение</td><td>'+$("#klim_kat option:selected").text()+'</td></tr>';
    txzn +='<tr><td>Номинальная <br />частота, Гц</td><td>'+$("#chast option:selected").text()+'</td></tr>';
	txzn +='<tr><td> </td><td> </td></tr>';
	txzn +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
    txzn +='<tr><td>Номинальное напряжение <br />первичной <br />обмотки (ВН), В</td><td>'+$("#per_n option:selected").text()+'</td></tr>';
    txzn +='<tr><td>Предельная мощность <br />трансформатора <br />(вне КТ), ВА</td><td>'+$("#max_m option:selected").text()+'</td></tr>';
	txzn +='<tr><td> </td><td> </td></tr></table>';

    txzn += '<table>';
	txzn +='<tr><td><b>Вторичные обмотки</b></td><td> </td><td> </td><td> </td></tr>';
	txzn +='<tr><td>       Обмотка    </td><td>Номинальное напр., В</td><td>    Класс точности    </td><td>Номинальная мощность, ВА</td></tr>';
	if (types == 15){
		txzn +='<tr><td>   Основная (а1-х1)    </td><td>    '+$("#vtor_p_0 option:selected").text()+'</td><td>    '+$("#vtor_v_0 option:selected").text()+'   '+($('#vtor_v_0_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_0").val()+'       '+($('#id_vtor_a_0_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 15 && ($('#td_12').prop('checked'))){
    	txzn +='<tr><td>   Основная (а2-х2)    </td><td>    '+$("#vtor_p_1 option:selected").text()+'</td><td>    '+$("#vtor_v_1 option:selected").text()+'   '+($('#vtor_v_1_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_1").val()+'       '+($('#id_vtor_a_1_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 15 && ($('#td_22').prop('checked'))){
    	txzn +='<tr><td>Дополнительная (ад,хд)</td><td>    '+$("#vtor_p_2 option:selected").text()+'</td><td>    '+$("#vtor_v_2 option:selected").text()+'   '+($('#vtor_v_2_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#d_vtor_a_2 option:selected").text()+'       '+($('#d_vtor_a_2_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 16){
		txzn +='<tr><td>   Основная (а1-х1)    </td><td>    '+$("#vtor_p_0 option:selected").text()+'</td><td>    '+$("#vtor_v_0 option:selected").text()+'   '+($('#vtor_v_0_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_0").val()+'       '+($('#id_vtor_a_0_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 16 && ($('#td_12').prop('checked'))){
    	txzn +='<tr><td>   Основная (а2-х2)    </td><td>    '+$("#vtor_p_1 option:selected").text()+'</td><td>    '+$("#vtor_v_1 option:selected").text()+'   '+($('#vtor_v_1_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#id_vtor_a_1").val()+'       '+($('#d_vtor_a_1_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	if (types == 16 && ($('#td_22').prop('checked'))){
    	txzn +='<tr><td>Дополнительная (ад,хд)</td><td>    '+$("#vtor_p_2 option:selected").text()+'</td><td>    '+$("#vtor_v_2 option:selected").text()+'   '+($('#vtor_v_2_nt').prop('checked')?'неточно':'            ')+'  </td><td>    '+$("#d_vtor_a_2 option:selected").text()+'       '+($('#d_vtor_a_2_nt').prop('checked')?'неточно':'')+'</td></tr>';
	}	
	txzn +='<tr><td> </td><td> </td><td> </td><td> </td></tr></table>';

	conf = '<table>';
	conf += '<tr><td> </td><td> </td></tr>';
	conf += '<tr><td><b>Заказываемая конфигурация</b></td><td> </td></tr>';
    conf += '<tr><td>'+$("#sform").val()+'</td><td> </td></tr>';
	conf += '<tr><td> </td><td> </td></tr>';
	conf += '</table>';

	prim +='<table>';
	prim +='<tr>';
	prim +='<td WIDTH="158mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Примечание</font></td>';
	prim +='<td WIDTH="31mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BGCOLOR="#f0e8ff" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Количество</font></td>';
	prim +='</tr>';
	prim +='<tr>';
	prim +='<td WIDTH="158mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">';
	if ($("#newzakaztxt").val() != '') {
		prim +='<font size="10" color="#000000">'+$("#newzakaztxt").val()+'</font>';
	} else {	
		prim +='<font size="10" color="#ffffff">.</font>';
	}	
	prim +='</td>';
	prim +='<td WIDTH="31mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">';
	if ($("#count").val() != '') {
		prim +='<font size="10" color="#000000">'+$("#count").val()+'</font>';
	} else {	
		prim +='<font size="10" color="#ffffff">.</font>';
	}	
	prim +='</td>';
	prim +='</tr>';
	prim += '<tr><td> </td><td> </td></tr>';
	prim +='</table>';
	dat = now.getDate()+'';
	data2 += '<table>';
	data2 += '<tr><td>______________________</td><td> <?php echo $first_name.' '.$last_name ; ?> </td></tr>';
	data2 += '<tr><td>       подпись        </td><td> </td></tr>';
	data2 += '<tr><td> </td><td> </td></tr>';
	data2 += '<tr><td>Дата печати: '+((dat.length==1)?('0'+dat):dat)+'.'+((mon.length==1)?('0'+mon):mon)+'.'+now.getFullYear()+'</td><td> </td></tr>';
	data2 += '</table>';

	if (types == 1 || types == 2 || types == 3){
		data3 = ttol + ttol1 + conf;
	}
	if (types == 4){
		data2 += nali + nali4 + conf;
	}
	if (types == 7 || types == 8){
		data2 += nali + nali78 + conf;
	}
	if (types == 9 || types == 10){
		data2 += nali + nali910 + conf;
	}

	if (types == 5 || types == 6){
		data2 += ntol +  conf;
	}

	if (types == 11 || types == 12){
		data2 += tzlk +  conf;
	}

	if (types == 15 || types == 16){
		data2 += txzn +  conf;
	}

