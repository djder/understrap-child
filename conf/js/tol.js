var tip = '1';
var isp = '';
var napr = '';
var gab = '';
var klim_kat = '';
var per_t = '';
var maxtok = '';
var mintok = '';
var maxTherm = '';
var minTherm = '';
var standartTherm = '';
var tokper = 0;
var perek = 0;
var perekl = false;
var tok_perek = '';
var tokperterm = '';
var tokperstand = '';
var bar = '';
var max_vyv = 0;
var obm = new Array();
var vyvod = 2;
var otp = false;
var gabvyv = new Array();
var udobm = 0;
var udotp = 0;
var pref = 'a0';
var maxTherm = 0;
var minTherm = 0;

obm[0] = 0;
// 333 - 180 = 153  
$ = window.jQuery;
//$(document).ready(function(){
//  
//});
t = document.getElementById('tip');

tip = t.options[t.selectedIndex].value;

$('#klass').html('<p>' + t.options[t.selectedIndex].text + '</p>');

$('.text').text(function(index, text) {
	// параметры функции: index (порядковый номер элемента в выборке), text (его текущее содержимое)
	var textLength = text.length;
	return text + ' (' + text.length + ')';
});


$('#tip').change(function() {
	tip = this.options[this.selectedIndex].value;
	if (tip == 1 || tip == 2 || tip == 3) {
		seldata = '<option value="">...</option>';
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
			//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
			data: "table=tip_ispoln&column0=napr&case=tip_id_eq_" + tip,
			success: function(data) {
				$("#napr").html(seldata + data);
				$("#bar_v").html('');
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
			//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
			data: "table=tip_obm&column0=klass",
			success: function(data18) {
				$("#vtor_b_1").html(seldata + data18);
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
			//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
			data: "table=kratn&column0=kratn",
			success: function(data19) {
				$("#d_vtor_c_1").html(seldata + data19);
			}
		});
	}
	return false;
});

if (tip == 1) {
	gabvyv['01'] = 204;
	gabvyv['11'] = 612;
	gabvyv['12'] = 612;
	gabvyv['13'] = 612;
	gabvyv['21'] = 612;
	gabvyv['22'] = 612;
	gabvyv['23'] = 612;
	gabvyv['25'] = 612;
	gabvyv['26'] = 612;
	gabvyv['31'] = 408;
	gabvyv['41'] = 612;
	gabvyv['51'] = 408;
	gabvyv['61'] = 612;
	gabvyv['71'] = 612;
	gabvyv['72'] = 612;
	gabvyv['73'] = 612;
	gabvyv['81'] = 612;
	gabvyv['82'] = 612;
	gabvyv['83'] = 612;
	gabvyv['IV-11'] = 412;
	gabvyv['IV-21'] = 816;
}

if (tip == 2) {
	gabvyv['11'] = 408;
	gabvyv['12'] = 408;
	gabvyv['13'] = 306;
	gabvyv['14'] = 306;
	gabvyv['21'] = 408;
	gabvyv['22'] = 408;
	gabvyv['23'] = 306;
	gabvyv['24'] = 306;
	gabvyv['31'] = 408;
	gabvyv['32'] = 408;
	gabvyv['33'] = 306;
	gabvyv['34'] = 306;
	gabvyv['41'] = 408;
	gabvyv['42'] = 408;
	gabvyv['43'] = 306;
}

if (tip == 3) {
	gabvyv['11'] = 510;
	gabvyv['21'] = 510;
	gabvyv['01'] = 102;
	gabvyv['02'] = 102;
	gabvyv['03'] = 102;
	gabvyv['04'] = 102;
}
if (tip == 20) {
	gabvyv['11'] = 204;
	gabvyv['12'] = 204;
	gabvyv['13'] = 204;
	gabvyv['14'] = 204;
	gabvyv['15'] = 204;
	gabvyv['21'] = 204;
	gabvyv['22'] = 204;
	gabvyv['23'] = 204;
	gabvyv['24'] = 204;
}
var gab0 = 2;
var gab00 = 4;


$('#napr').change(function() {
	napr = this.options[this.selectedIndex].text;
	seldata = '<option value="">...</option>';
	//alert(1);
	t = document.getElementById('tip');
	//alert(t);
	tip = t.options[t.selectedIndex].value;
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_" + tip + "_and_napr_eq_" + napr,
		success: function(data1) {
			$("#gab").html(seldata + data1);
			$("#bar_v").html('');
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=tip_obm&column0=klass",
		success: function(data18) {
			$("#vtor_b_1").html(seldata + data18);
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=kratn&column0=kratn",
		success: function(data19) {
			$("#d_vtor_c_1").html(seldata + data19);
		}
	});

	return false;
});

$('[id^=d_vtor_a_]').change(function() {
	if (this.id.indexOf('nt') == -1) {
		if (this.selectedIndex > 0) { 
			$('#' + this.id + '_nt').prop('disabled', false); 
		} else {
			$('#' + this.id + '_nt').prop('checked', false);
			$('#' + this.id + '_nt').prop('disabled', true);
		}
	}
	return false;
});

$('[id^=d_vtor_c_]').change(function() {
	if (this.id.indexOf('nt') == -1) {
		if (this.selectedIndex > 0) { 
			$('#' + this.id + '_nt').prop('disabled', false); 
		} else {
			$('#' + this.id + '_nt').prop('checked', false);
			$('#' + this.id + '_nt').prop('disabled', true);
		}
	}
	return false;
});

$('[id^=vtor_b_]').change(function() {
	if (this.id.indexOf('nt') == -1) {
		b_ = this.options[this.selectedIndex].text;
		id$ = this.id;
		id$1 = id$.replace('vtor_b', 'd_vtor_c');
		id$2 = id$.replace('vtor_b', 'id_vtor_c');
		seldata = '<option value="">...</option>';
		b_1 = 5;
		b_2 = 35;
		if ((b_ == '0.2S' || b_ == '0.2' || b_ == '0.5S' || b_ == '0.5') && gab == 'IV-11') {
			b_1 = 5;
			b_2 = 20;
		}
		if (b_ == '5Р' || b_ == '10Р') {
			b_1 = 10;
			b_2 = 35;
		}
		if (this.selectedIndex > 0) { 
			$('#' + this.id + '_nt').prop('disabled', false); 
		} else {
			$('#' + this.id + '_nt').prop('checked', false);
			$('#' + this.id + '_nt').prop('disabled', true);
		}
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
			async: false,
			//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
			data: "table=kratn&column0=kratn&case=kratn_gteq_" + b_1 + "_and_kratn_lteq_" + b_2,
			success: function(data29) {
				$('[id=' + id$2 + ']').val('');
				$('[id=' + id$1 + ']').html(seldata + data29);
			}
		});
	}

	return false;
});

//alert(help);

$('#vtor_v_1').change(function() {
	v_1 = this.options[this.selectedIndex].text;
	seldata = '<option value="">...</option>';
	if (gab == 'IV-11') { v_1 = 4; }
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=nagruz&column0=nagr&case=vtor_t_eq_" + v_1,
		success: function(data20) {
			$("#d_vtor_a_1").html(seldata + data20);
		}
	});
	return false;
});

// Загрузка группы переключателей
// 
function loadRadioGroup(groupID, data) {
	group = $('#'+groupID);
	group.empty();

	if (data != null) {
		group.show();
		$.each(data, function(i, item){
			id = groupID+'_option_'+item['id'];
			value = item['name'];
			title = item['title']

			optContainer = $('<div class="form-check form-check-inline"></div>')
			.append('<input class="form-check-input" type="radio" name="'+groupID+'" id="'+id+'" value="'+value+'">')
			.append('<label class="form-check-label" for="'+id+'">'+title+'</label>');
			group.append(optContainer);
		});
		
		$('#'+groupID+'_nt').prop('disabled', (group.length > 1));

	} else {
		group.hide();
	}
}

// Обработка изменения конструктивного исполнения
// 
$('#gab').change(function() {
	gab = this.options[this.selectedIndex].text;
	isp = this.options[this.selectedIndex].value;
	seldata = '<option value="">...</option>';
	if (this.selectedIndex > 0) { $('#' + this.id + '_nt').prop('disabled', false); } else {
		$('#' + this.id + '_nt').prop('checked', false);
		$('#' + this.id + '_nt').prop('disabled', true);
	}
	gab0 = Math.floor(gabvyv[gab] / 100);
	gab00 = gabvyv[gab] * 1 - Math.floor(gabvyv[gab] / 100) * 100;
	$('#countvyv').html('Допустимо максимум обмоток: ' + gab0 + ', либо выводов: ' + gab00 + '  суммарно (вместе с отпайками)');
	if (tokper * 1 == 1) { $("#perpert").css("display", "inline-block"); } else { $("#perpert").css("display", "none"); }
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_" + isp,
		success: function(data2) {
			$("#klim_kat").html(seldata + data2);
		}
	});
	$.getJSON(confUrl + 'secterms.php', {'q': isp}, function(response) {
			loadRadioGroup('var_v_v', response);

			$('#var_v_v_option_3').addClass('flex');// гибкие выводы только у исп "с" (id = 3)
			
			// Переключение видимости блока длины гибких выводов в зависимости от выбранного варианта выводов
			$('input:radio[name=var_v_v]').change(function() {
				$('#gib_v').toggle( $(this).hasClass('flex') )
			});

			$('#var_v_v .form-check:first-child input').prop("checked", true).trigger('change');
		}
	);
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tip_ispoln&column0=opc_bar&case=id_eq_" + isp,
		success: function(data16) {
			//alert("2="+maxtok);
			$("#bar").html('<input id="bar_" type="text" value="' + data16 + '" />');
			bar = document.getElementById("bar_").value;
			if (bar == 1) {
				$("#bar_v").html('<input id="bar_vv" type="checkbox" /> - Барьеры');
				$('#bar_v_nt').prop('disabled', false);
			} else {
				$("#bar_v").html('');
				$('#bar_v_nt').prop('disabled', true);
			}
		}
	});
	//$("#var_v_1").prop('disabled', true);
	// загрузка значения максимального номинального первичного тока
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tip_ispoln&column0=max_tok&case=id_eq_" + isp,
		success: function(data3) {
			maxtok = data3;
			//alert("1="+maxtok);
		}
	});
	// загрузка значения минимального номинального первичного тока
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tip_ispoln&column0=min_tok&case=id_eq_" + isp,
		success: function(data4) {
			mintok = data4;
			//alert("2="+mintok);
		}
	});
	// загрузка списка значений номинального первичного тока
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=per_t&column0=tok&case=tok_lteq_" + maxtok + '_and_tok_gteq_' + mintok,
		success: function(data5) {
			$("#per_t").html(seldata + data5);
		}
	});
	// загрузка значения максимального количества выводов
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tip_ispoln&column0=max_vyv&case=id_eq_" + isp,
		success: function(data17) {
			max_vyv = data17;
		}
	});

	//загрузка списка значений вторичных нагрузок
	if (gab == 'IV-11') { v_1 = 4 } else { v_1 = 1 }; // ???если выбрано исполнение 'IV-11'
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=nagruz&column0=nagr&case=vtor_t_eq_" + v_1,
		success: function(data20) {
			$("#d_vtor_a_1").html(seldata + data20);
		}
	});
	return false;
});

//Обработка изменения значения номинального первичного тока
//
//
$('#per_t').change(function() {
	per_t = this.options[this.selectedIndex].text;
	seldata = '<option value="">...</option>';
	// получение максимального значения тока термики для первичного тока 'per_t'
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tok_term&column0=max&case=tok_eq_" + per_t,
		success: function(data8) {
			maxTherm = data8;
			$("#perpert").toggle(tokper * 1 == 1); 
		}
	});
	// получение минимального значения тока термики для первичного тока 'per_t'
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tok_term&column0=min&case=tok_eq_" + per_t,
		success: function(data25) {
			minTherm = data25;
		}
	});
	// получение стандартного значения тока термики для первичного тока 'per_t'
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tok_term&column0=stand&case=tok_eq_" + per_t,
		success: function(data9) {
			standartTherm = data9;
		}
	});
	// получение списка первичных токов для вторичных обмоток и установка выбранного значения номинального первичного тока
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table=per_t&column0=tok&case=tok_lteq_"+per_t+"_and_tok_gteq_"+mintok+"&mark="+per_t+"",
		data: "table=per_t&column0=tok&case=tok_lteq_" + per_t + "&mark=" + per_t,
		//data: "table=per_t&column0=tok&case=tok_lteq_"+per_t+"",
		success: function(data21) {
			//$("#vtor_p_1").html(seldata+data21);
			$('[id^=vtor_p_]').html(seldata + data21);
			//alert($('[id^=vtor_p_]').length);
			if (perekl) { 
				$('[id^=vtor_p_]').html('<option value="' + per_t + '">' + per_t + '</option>'); 
			}
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=tokterm&column0=tokterm&case=tokterm_gteq_" + minTherm + "_and_tokterm_lteq_" + maxTherm + "&mark=" + standartTherm,
		//data: "table=tokterm&column0=tokterm&case=tokterm_lteq_"+tokterm+"&mark="+tokstand+"",
		success: function(data7) {
			//alert(data7);
			$("#term_t").html(seldata + data7);
			if (tip == 1 && napr == '35' && gab == 'IV-11' && per_t >= 100 && per_t <= 800) { $("#term_t :last").remove(); }
			if (tip == 1 && napr == '10' && gab == '61' && per_t >= 400 && per_t <= 4000) { $('#term_t  option:contains("40")').before('<option value="31.5">31.5</option>'); }
			//if (tip == 1 && (gab == '31' || gab =='41' || gab == '51' || gab == '61') && per_t >= 100 && per_t <= 4000 ) {$("#term_t :last").remove();}
			if (tip == 2 && (gab == '11' || gab == '12' || gab == '13' || gab == '14' || gab == '21' || gab == '22' || gab == '23' || gab == '24') && per_t >= 100 && per_t <= 4000) { $("#term_t :last").remove(); }
			//if (per_t == 30) {$("#term_t").append( $('<option value="12">12.5</option>'));}  
			if (tip == 3 && napr == '10' && per_t >= 600 && per_t <= 3000) { $("#term_t").html(seldata + '<option value="40">40</option>'); }
			if (tip == 3 && napr == '10' && per_t == 4000) { $("#term_t").html(seldata + '<option value="140">140</option>'); }
			if (tip == 3 && napr == '10' && per_t >= 5000 && per_t <= 6000) { $("#term_t").html(seldata + '<option value="175">175</option>'); }
			if (tip == 3 && napr == '0.66' && per_t == 300) { $("#term_t").html(seldata + '<option value="31.5">31.5</option>'); }
			if (tip == 3 && napr == '0.66' && per_t >= 400 && per_t <= 4000) { $("#term_t").html(seldata + '<option value="40">40</option>'); }
			$('#term_t_nt').prop('disabled', false);
			//------------------для тока переключения-----------------
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tip_ispoln&column0=opc_perek&case=id_eq_" + isp,
		success: function(data10) {
			$("#tok_per").html('<input id="t_perek" type="text" value="' + data10 + '" />');
			tokper = document.getElementById("t_perek").value * 1;
			//alert("2="+mintok);
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=per_t&column0=perek&case=tok_eq_" + per_t,
		success: function(data11) {
			//alert("2="+maxtok);
			$("#per").html('<input id="_perek" type="text" value="' + data11 + '" />');
			perek = document.getElementById("_perek").value * 1;
			if (tokper * 1 == 1) { $("#perpert").css("display", "inline-block"); } else { $("#perpert").css("display", "none"); }
			tok_perek = per_t / 2;
			$("#perpert1").html('Номинальный ток<br /> переключения, А<br /><input id="tokperek" type="text" class="inputbox" style="width:100px; background:#fee;" value="' + tok_perek + '" disabled />');
			$("#perpert2").html('Ток термической стойкости<br /> переключения, кА<br /><select id="per_term" class="inputbox1"></select>');
			$('#perek').click(function() {
				if ($(this).is(':checked') && (!otp)) {
					$("#perpert1").css("display", "inline-block");
					$("#perpert2").css("display", "inline-block");
					perekl = true;
					$('[id^=vtor_p_]').html('<option value="' + per_t + '">' + per_t + '</option>');
				} else {
					$("#perpert1").css("display", "none");
					$("#perpert2").css("display", "none");
					perekl = false;
					seldata = '<option value="">...</option>';
				}
			});
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=per_t&column0=tok&case=tok_lteq_" + per_t + "&mark=" + per_t + "",
		success: function(data21) {
			$('[id^=vtor_p_]').html(seldata + data21);
		}
	});
	//alert(per_t); $("#perpert").html('<input type="checkbox" id="perek" value="" /> - Переключение по<br /> первичному току');    
	if ((perek * tokper * 1 >= 1) && (!otp)) {
		$('#perek').prop('disabled', false); //$("#perpert").css("display", "inline-block"); 
	} else {
		$('#perek').prop('disabled', true);
		$('#perek').prop('checked', false);
		perekl = false;
		$("#perpert1").css("display", "none");
		$("#perpert2").css("display", "none");
	}
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=per_t&column0=tok&case=tok_lteq_" + per_t + "&mark=" + per_t + "",
		success: function(data21) {
			$('[id^=vtor_p_]').html(seldata + data21);
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tok_term&column0=max&case=tok_eq_" + tok_perek,
		success: function(data12) {
			//alert("2="+maxtok);
			$("#tokper_term").html('<input id="tper_term" type="text" value="' + data12 + '" />');
			tokperterm = document.getElementById("tper_term").value;
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		data: "table=tok_term&column0=stand&case=tok_eq_" + tok_perek,
		success: function(data13) {
			//alert("2="+maxtok);
			$("#tokper_stand").html('<input id="tper_stand" type="text" value="' + data13 + '" />');
			tokperstand = document.getElementById("tper_stand").value;
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		data: "table=tokterm&column0=tokterm&case=tokterm_lteq_" + tokperterm + "&mark=" + tokperstand,
		success: function(data14) {
			//alert("2="+maxtok);
			$("#per_term").html(seldata + data14);
		}
	});
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2var.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=tip_ispoln&column0=term_sek&case=id_eq_" + isp,
		success: function(data6) {
			$("#vrem_pr").val(data6);
		}
	});

	return false;
});

var rowinner1 = '';
var rowinner2 = '';

function addrow(t) {
	tab = document.getElementById(t);
	if (tab == null) {return}

	tbody = tab.tBodies[0];
	var rowIndex = tbody.rows.length - 1;
	maxObm = Math.floor(gabvyv[gab] / 100);
	maxVyv = gabvyv[gab] * 1 - Math.floor(gabvyv[gab] / 100) * 100;
	if (obm.length < maxObm && vyvod < (maxVyv - 1)) {
		var row = tbody.insertRow(rowIndex);
		if (rowinner1 == '') {
			rowinner = tbody.rows[0].innerHTML;
			rowinner1 = tbody.rows[0].innerHTML;
		} else {
			rowinner = rowinner1
		};
		rowinner = rowinner.replace('<td id="tdd_0"><p>1</p></td>', '<td id="tdd_' + (rowIndex) + '"><p>' + (rowIndex + 1) + '</p></td>');
		//rowinner = rowinner.replace('input id="vyv_1_0"', 'input id="vyv_' + (rowIndex-2) + '_0"');
		rowinner = rowinner.replace('id="vyv_1_0"', 'id="vyv_' + (rowIndex + 1) + '_0"');
		rowinner = rowinner.replace('table id="a01"', 'table id="a0' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('onclick="addrow2(\'a01\');"', 'onclick="addrow2(\'a0' + (rowIndex + 1) + '\');"');
		rowinner = rowinner.replace('id="td_1"', 'id="td_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="vtor_p_1"', 'id="vtor_p_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="vtor_v_1"', 'id="vtor_v_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="id_vtor_a_1"', 'id="id_vtor_a_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="d_vtor_a_1"', 'id="d_vtor_a_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="d_vtor_a_1_nt"', 'id="d_vtor_a_' + (rowIndex + 1) + '_nt"');
		rowinner = rowinner.replace('id="vtor_b_1"', 'id="vtor_b_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="vtor_b_1_nt"', 'id="vtor_b_' + (rowIndex + 1) + '_nt"');
		rowinner = rowinner.replace('id="id_vtor_c_1"', 'id="id_vtor_c_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="d_vtor_c_1"', 'id="d_vtor_c_' + (rowIndex + 1) + '"');
		rowinner = rowinner.replace('id="d_vtor_c_1_nt"', 'id="d_vtor_c_' + (rowIndex + 1) + '_nt"');
		obm.push(0);
		vyvod = vyvod + 2;
		row.innerHTML = rowinner;
		//      row.innerHTML = '<td><p>' + (rowIndex-2) + '</p></td><td colspan="7"><table id="a0' + (rowIndex-2) + '"><tr><td></td><td><p>И1-И2</p></td><td><select id="vtor_p_1" class="inputbox1"></select></td><td><select id="vtor_v_1" class="inputbox1"></select></td><td><select id="vtor_a_1" class="inputbox1"></select></td><td><select id="vtor_b_1" class="inputbox1"></select></td><td><select id="vtor_c_1" class="inputbox1"></select></td></tr><tr><td onclick="addrow2(\'a0' + (rowIndex-2) + '\');" class="tdbutton">добавить<br />отпайку</td><td colspan="6"></td></tr></table></td>';
		//      notab = document.getElementById('a0' + (rowIndex-3));
		//      notab.rows[notab.rows.length-1].innerHTML = '<td onclick="addrow2();" class="tdbutton_">добавить<br> отпайку</td><td colspan="6"></td>'
		vyvy();
		//alert('#vtor_v_'+(obm.length));
		$.ajax({
			type: "POST",
			async: false,
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
			//data: "table=per_t&column0=tok&case=tok_lteq_"+per_t+"_and_tok_gteq_"+mintok+"&mark="+per_t+"",
			//data: "table=per_t&column0=tok&case=tok_lteq_"+per_t+"&mark="+per_t+"",
			data: "table=per_t&column0=tok&case=tok_lteq_" + per_t + "",
			success: function(data21) {
				//$("#vtor_p_1").html(seldata+data21);
				$('#vtor_p_' + (obm.length)).html(seldata + data21);
				if (perekl) { $('[id^=vtor_p_]').html('<option value="' + per_t + '">' + per_t + '</option>'); }
			}
		});
	}
};

$('#vtor_v_' + (obm.length)).change(function() {
	v_1 = this.options[this.selectedIndex].text;
	seldata = '<option value="">...</option>';
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=nagruz&column0=nagr&case=vtor_t_eq_" + v_1,
		success: function(data20) {
			$("#d_vtor_a_" + (obm.length)).html(seldata + data20);
		}
	});
	return false;
});

function addrow2(t) {
	if (rowinner1 == '') { rowinner1 = document.getElementById("a00").rows[2].innerHTML; }
	if (!perekl) {
		otp = true;
		$('#perek').prop('disabled', true);
	}
	tab = document.getElementById(t);
	gab00 = gabvyv[gab] * 1 - Math.floor(gabvyv[gab] / 100) * 100;
	//alert(gab00);
	if (tab && !perekl && obm[t.substr(2, 1) * 1 - 1] < 2 && vyvod < gab00) {
		var rowCount = tab.rows.length;
		rowinner0 = tab.rows[rowCount - 2].innerHTML;
		var row = tab.insertRow(rowCount - 2);
		t = t.substr(2, 1) * 1;
		//if (rowinner1 != '') {rowinner1 = document.getElementById("a0"+t).rows[2].innerHTML;}
		vyvod++;
		rowinner0 = rowinner0.replace('<p></p></td>', '<p>' + (rowCount - 1) + '</p></td>');
		rowinner0 = rowinner0.replace('_0" class="inputbox"', '_' + (rowCount - 1) + '" class="inputbox"');
		rowinner0 = rowinner0.replace('class="inputbox" id="vyv_' + (t) + '_0" ', 'class="inputbox" id="vyv_' + (t) + '_' + (rowCount - 1) + '" ');
		//rowinner0 = rowinner0.replace('class="inputbox" id="id_vtor_a_'+(t)+'_0" ', 'class="inputbox" id="id_vtor_a_'+(t)+'_' + (rowCount-1) + '" '); 
		rowinner0 = rowinner0.replace('id="td_' + (t) + '"', 'id="td_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_p_' + (t) + '"', 'id="vtor_p_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_v_' + (t) + '"', 'id="vtor_v_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="id_vtor_a_' + (t) + '"', 'id="id_vtor_a_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_a_' + (t) + '"', 'id="d_vtor_a_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_a_' + (t) + '_nt"', 'id="d_vtor_a_' + (t) + '_' + (rowCount - 1) + '_nt"');
		rowinner0 = rowinner0.replace('id="vtor_b_' + (t) + '"', 'id="vtor_b_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_b_' + (t) + '_nt"', 'id="vtor_b_' + (t) + '_' + (rowCount - 1) + '_nt"');
		rowinner0 = rowinner0.replace('id="id_vtor_c_' + (t) + '"', 'id="id_vtor_c_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_c_' + (t) + '"', 'id="d_vtor_c_' + (t) + '_' + (rowCount - 1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_c_' + (t) + '_nt"', 'id="d_vtor_c_' + (t) + '_' + (rowCount - 1) + '_nt"');
		row.innerHTML = rowinner0;
		if (t > 0) { obm[t - 1]++; }
		di = document.getElementById("vtor_p_" + t);
		if (di.options[di.selectedIndex]) {
			d = di.options[di.selectedIndex].text;
			dp = document.getElementById("vtor_p_" + t + "_" + (rowCount - 1));
			for (i = 0; i < dp.options.length; i++) {
				if (dp.options[i].text == d) { dp.selectedIndex = i - 1; }
			}
		}
		di = document.getElementById("vtor_v_" + t);
		if (di.options[di.selectedIndex]) {
			d = di.options[di.selectedIndex].text;
			dp = document.getElementById("vtor_v_" + t + "_" + (rowCount - 1));
			for (i = 0; i < dp.options.length; i++) {
				if (dp.options[i].text == d) { dp.selectedIndex = i; }
			}
			//dp.disabled = true;
			dp.style.visibility = 'hidden';
		}
		di = document.getElementById("id_vtor_a_" + t);
		d = di.value;
		dp = document.getElementById("id_vtor_a_" + t + "_" + (rowCount - 1));
		dp.value = d;
		di = document.getElementById("vtor_b_" + t);
		if (di.options[di.selectedIndex]) {
			d = di.options[di.selectedIndex].text;
			dp = document.getElementById("vtor_b_" + t + "_" + (rowCount - 1));
			for (i = 0; i < dp.options.length; i++) {
				if (dp.options[i].text == d) { dp.selectedIndex = i; }
			}
		}
		di = document.getElementById("id_vtor_c_" + t);
		d = di.value;
		dp = document.getElementById("id_vtor_c_" + t + "_" + (rowCount - 1));
		dp.value = d;
		vyvy();
	}
};

$('#vtor_v_' + (t) + '_' + (rowCount - 1)).change(function() {
	v_1 = this.options[this.selectedIndex].text;
	seldata = '<option value="">...</option>';
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/res2sel.php",
		async: false,
		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
		data: "table=nagruz&column0=nagr&case=vtor_t_eq_" + v_1,
		success: function(data20) {
			$("#d_vtor_a_" + (t) + "_" + (rowCount - 1)).html(seldata + data20);
		}
	});
	return false;
});

function vyvy() {
	otp = false;
	for (a = 1; a <= obm.length; a++) {
		//alert('otp='+obm[a-1]+' a='+a);
		if (obm[a - 1] > 0) {
			//document.getElementById('vyv_'+a+'_0').value = (a*2-1)+'И'+(a*2-1)+'-'+(a*2-1)+'И'+(a*2+obm[a-1]);
			otp = true;
			for (b = 0; b <= obm[a - 1]; b++) {
				//alert('vyv_'+a+'_'+b);
				pref = 'a0';
				d = document.getElementById('vyv_' + a + '_' + b);
				//alert('step='+b+' vyv_'+a+'_'+b+'='+d);  alert(this.parentElement.parentElement.parentElement.id); 
				if (document.getElementById('td_' + a + '_' + (b + 1))) {
					td = document.getElementById('td_' + a + '_' + (b + 1));
					if (b < obm[a - 1] - 1) { td.innerHTML = '<p>' + (b + 1) + '</p>'; }
					//td.innerHTML = '<p>'+(b+1)+'</p><div id="udp_'+a+'_'+(b+1)+'" onclick = "udobm = this.parentElement.id.substr(3,1)*1; udotp = this.parentElement.id.substr(5,1)*1; obm[udobm-1]--; document.getElementById(pref+udobm).deleteRow(udotp-1); vyvod--; vyvy();" class="tddel">Удалить<br>отпайку</div>';
					//alert('a='+a+' b='+b+' obm[a-1]='+obm[a-1]);
					if (b == obm[a - 1] - 1) { td.innerHTML = '<p>' + (b + 1) + '</p><div id="udp_' + a + '_' + (b + 1) + '" onclick = "udobm = this.parentElement.id.substr(3,1)*1; udotp = this.parentElement.id.substr(5,1)*1; obm[udobm-1]--; document.getElementById(pref+udobm).deleteRow(udotp-1); vyvod--; vyvy();" class="tddel">Удалить<br>отпайку</div>'; }
				}
				na = '';
				if (obm.length > 1) { na = a; }
				if (b == 0) {
					//d.value = (a*2-1)+'И'+(a*2-1)+'-'+(a*2-1)+'И'+(a*2-1+b);
					//alert(udotp);
					d.value = (na) + 'И' + (1) + '-' + (na) + 'И' + (obm[a - 1] + 2);
				} else {
					d.value = (na) + 'И' + (1) + '-' + (na) + 'И' + (b + 1);
				}
				if (a == udobm) {
					//alert(udobm);
					for (c = udotp; c <= obm[a - 1]; c++) {
						tdd = document.getElementById('td_' + a + '_' + (c + 1));
						if (tdd) {
							tdd.id = 'td_' + a + '_' + (c);
							vyv = document.getElementById('vyv_' + a + '_' + (c + 1));
							vyv.id = 'vyv_' + a + '_' + (c);
							//if (a <= obm.length){tdd.innerHTML = '<p>'+(c)+'</p>';}
							//alert('td_'+a+'_'+(b+1)+' - '+td);
							if (c == obm[a - 1] - 1) { tdd.innerHTML = '<p>' + (c) + '</p><div id="udp_' + a + '_' + (c) + '" onclick = "udobm = this.parentElement.id.substr(3,1)*1; udotp = this.parentElement.id.substr(5,1)*1; obm[udobm-1]--; document.getElementById(pref+udobm).deleteRow(udotp-1); vyvod--; vyvy();" class="tddel">Удалить<br>отпайку</div>'; }
						}
					}
					udobm = 0;
					udotp = 0;
				}
			}

		} else {
			//alert('obm='+a);
			na = '';
			if (obm.length > 1) { na = a; }
			if (a == obm.length) {
				//alert(a);
				document.getElementById('vyv_' + a + '_0').value = (na) + 'И' + (1) + '-' + (na) + 'И' + (2);
			} else {
				//alert(a);
				document.getElementById('vyv_' + a + '_0').value = (na) + 'И' + (1) + '-' + (na) + 'И' + (2);
			}

		}
		if (document.getElementById('tdd_' + (a - 1))) {
			tdd = document.getElementById('tdd_' + (a - 1));
			if (a <= obm.length) { tdd.innerHTML = '<p>' + (a) + '</p>'; }
			//alert('td_'+a+'_'+(b+1)+' - '+td);
			if (a == obm.length && a > 1) {
				tdd.innerHTML = '<p>' + (a) + '</p><div id="udo_' + (a - 1) + '" onclick = "this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); obm.splice(' + (a - 1) + ', 1); vyvod-=2; vyvy();" class="tddel">Удалить<br>обмотку</div>';
			}
		}
	}
	if ((perek * tokper * 1 == 1) && (!otp)) { $('#perek').prop('disabled', false); } else { $('#perek').prop('disabled', true); }

}

function search() {

	likes = false;
	v = '';
	c = '';

	product.reset();

	product.addParam('tip','','-НТЗ'); //тип
	product.addParam('napr', '-'); //напряжение
	product.addParam('gab', '-'); //габарит
	product.addParam('var_v_v'); //типы выводов

	if ($("#sec_term_id_sec_term_3").is(':checked')) {
		leadLength = $('#gib_vv').val();
		if (leadLength >= 1) {
			product.addInfoParam(leadLength, 'выводы ','м');
		} else {			
			product.addInfoParam(leadLength * 1000, 'выводы ','мм');
		};
	};

	//отпайки
	if (!perekl) {
		for (a = 1; a <= obm.length; a++) {
			if (obm[a - 1] > 0) { 
				product.addStr('К'); 
			}
		}
	} else { 
		if ($("#perek").is(':checked')) { 
			product.addStr('П'); 
		};
	};

	//барьеры
	if ($("#bar_vv").is(':checked')) { 
		product.addStr('Б'); 
	};

	c = product.getFullCaption();

	for (a = 1; a <= obm.length; a++) {
		//обмотка
		btc = false;
		//класс точн.
		bb = document.getElementById('vtor_b_' + a).value;
		bb0 = '';
		bb1 = '';

		//коэфф.безопасности
		bc = document.getElementById('id_vtor_c_' + a).value;
		bc0 = '';
		bc1 = '';
		if (bc != '') btc = true;

		if ($('#vtor_b_' + a + '_nt').prop('checked')) likes = true;
		if ($('#d_vtor_a_' + a + '_nt').prop('checked')) likes = true;
		if ($('#d_vtor_c_' + a + '_nt').prop('checked')) likes = true;

		//отпайки
		if (obm[a - 1] > 0) {
			for (b = 1; b <= obm[a - 1]; b++) {
				//класс точн.
				db = document.getElementById('vtor_b_' + a + '_' + b);
				if (db) {

					if ($('#vtor_b_' + a + '_' + b + '_nt').prop('checked')) likes = true;
					if ($('#d_vtor_a_' + a + '_' + b + '_nt').prop('checked')) likes = true;
					if ($('#d_vtor_c_' + a + '_' + b + '_nt').prop('checked')) likes = true;

					db = document.getElementById('vtor_b_' + a + '_' + b).value;
					if (db && db != bb) {
						bb0 = '(';
						bb1 = ')';
					}
					if (db && b == 1 && db != bb) { c += db; }
					if (db && b > 1 && db != bb) {
						c += '(' + db;
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
		if (bb.indexOf('Р') == -1 && bb != '' && btc) c += 'Fs';

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
					if (dc && b == 1 && dc != bc) { c += dc; }
					if (dc && b > 1 && dc != bc) { c += '(' + dc + ')'; }
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
						if (da && b == 1 && da != ba) { c += da; }
						if (da && b > 1 && da != ba) {
							c += '(' + da;
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

	c += (d.selectedIndex > 0) ? (' ' + dpt + d.options[d.selectedIndex].text + 'кА') : '';
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

	//seldata = '<option value="">...</option>';

	i = document.getElementById('sform');
	s = document.getElementById('search');
	i.value = c;
	sform = i.value;
	// Запрос точного совпадения
	$.get(ajaxSearchUrl, "q=" + sform, function(data21) {
			org = document.getElementById('org').value;
			object = document.getElementById('object').value;
			count = document.getElementById('count').value;
			adednew = false;
			if (data21 == '') {
				sr = document.getElementById('search');
				_sform = 'sform';
				$("#search").html('Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления')
			} else {
				$("#search").html(data21);
			}
		}
	);

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
	sform = i.value;
	$.ajax({
		type: "POST",
		url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/search.php",
		async: false,
		data: "s=" + sform,
		success: function(data21) {
			org = document.getElementById('org').value;
			object = document.getElementById('object').value;
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