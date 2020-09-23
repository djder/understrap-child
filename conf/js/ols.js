var tip = '11';
var isp = '';	
var napr = '';
var gab = '';
var klim_kat = '';
var per_t = '';	
var maxtok = '';
var mintok = '';
var tokterm = '';
var tokstand = '';
var tokper = '';
var perek = '';
var perekl = false;
var tok_perek = '';	
var tokperterm = '';	
var tokperstand = '';
var bar = '';
var max_vyv = 0;
var obm = new Array();	
var vyv = 2;	
var otp = false;

obm[0] = 0;	
// 333 - 180 = 153	
$ = window.jQuery;	
//$(document).ready(function(){
//	
//});
t = document.getElementById('tip');

tip = t.options[t.selectedIndex].value;


$('#klass').html('<p>'+t.options[t.selectedIndex].text+'</p>');

$(document).ready(function() {
	        if (tip == 17) { 
				$("#ols1").css('visibility','visible'); 
				$("#vtor_n").css('visibility','visible'); 
			}
			 else {
				$("#ols1").css('visibility','hidden'); 
				$("#vtor_n").css('visibility','hidden'); 
			}
});


  $('.help').click(function(){	
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var height = $(window).height();
	var top = Math.ceil(scrollTop + (height - $('#msg').outerHeight())/2);
	var mes = '';  
	tag = this.childNodes[0].textContent; 
	for (i = 0; i < help.length; i++){
		if (help[i][0] == tag && (help[i][2] == 0 || help[i][2] == 3)) {mes = help[i][1];}
	}  
	//$('#msg').css('left', Math.ceil(($(window).width() - $('#msg').outerWidth())/2));  
	//$('#msg').css('top', Math.ceil((scrollTop + document.body.clientHeight - $('#msg').outerHeight())/2));  
	$('#msg').css('top', top);  
	$('#msgname').html(tag);
	$('#msgtext').html(mes);
	//alert(Math.ceil(($(window).width() - $('#msg').outerWidth())/2)) ; 
	$('#msg').css('display','block');
	//alert(mes);
	//for (a in this.childNodes[0]) {alert(a) ;} 
	return false;
  });	


$.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+napr,
      success: function(data1){
		seldata = '<option value="">...</option>';
        $("#gab").html(seldata+data1);
	        if (tip == 17) { 
				$("#ols1").css('visibility','visible'); 
				$("#vtor_n").css('visibility','visible'); 
				$("#pvtor_n_nt").css('visibility','visible'); 
			}
			 else {
				$("#ols1").css('visibility','hidden'); 
				$("#vtor_n").css('visibility','hidden'); 
				$("#pvtor_n_nt").css('visibility','hidden'); 
			}
		$("#napr").addClass('attention');  
		$("#per_n").removeClass('attention');  
		$("#vtor_n").removeClass('attention');  
		$("#klim_kat").removeClass('attention');  
		$("#max_m").removeClass('attention');  
      }
    });

  $('#tip').change(function(){
	tip = this.options[this.selectedIndex].value; 
	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=napr&case=tip_id_eq_"+tip,
      success: function(data){
	    $("#napr").html(seldata+data);
		$("#napr").addClass('attention');  
	    $.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2sel.php",
	      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
	      data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+napr,
	      success: function(data1){
	        $("#gab").html(seldata+data1);
	        if (tip == 17) { 
				$("#ols1").css('visibility','visible'); 
				$("#vtor_n").css('visibility','visible'); 
				$("#pvtor_n_nt").css('visibility','visible'); 
			}
			 else {
				$("#ols1").css('visibility','hidden'); 
				$("#vtor_n").css('visibility','hidden'); 
				$("#pvtor_n_nt").css('visibility','hidden'); 
			}
	      }
	    });
      }
    });
  return false;
  });

  $('#napr').change(function(){	
	napr = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	$(this).removeClass('attention');  
	t = document.getElementById('tip');
	//alert(t);
	tip = t.options[t.selectedIndex].value;
	if ((tip == 17 && napr == 6) || (tip == 17 && napr == 10)) {
		$("#ols0").css('visibility','visible'); 
		$("#gab").css('visibility','visible'); 
		$("#gab").addClass('attention');  
		$("#pgab_nt").css('visibility','visible'); 
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2sel.php",
      		//data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      		data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+napr,
      		success: function(data1){
        		$("#gab").html(seldata+data1);
				//$("#bar_v").html('');
      		}
    	});
	} 
	else{
		$("#ols0").css('visibility','hidden'); 
		$("#gab").css('visibility','hidden'); 
		$("#gab").removeClass('attention');  
		$("#pgab_nt").css('visibility','hidden'); 
		$.ajax({
		    type: "POST",
		    url: "/wp-content/themes/semicolon/res2var.php",
		    data: "table=tip_ispoln&column0=id&case=tip_id_eq_"+tip+"_and_napr_eq_"+napr+"_and_ispoln_eq_00",
		    success: function(data17){
			//alert("2="+maxtok);
		    $("#max_vyv").html('<input id="max_v" type="text" value="'+data17+'" />');
			isp=document.getElementById("max_v").value;
			//alert(max_vyv);
    		$.ajax({
      			type: "POST",
      			url: "/wp-content/themes/semicolon/res2sel.php",
      			data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      			success: function(data2){
        			$("#klim_kat").html(seldata+data2);
					$.ajax({
	      				type: "POST",
	      				url: "/wp-content/themes/semicolon/res2sel.php",
	      				data: "table=nom_power&column0=id&column1=power&case=tip_tr_id_eq_"+tip+"_and_kl_napr_eq_"+napr+"_and_gab_eq_00",
	      				success: function(data15){
							$("#max_m").html(seldata+data15);
							$("#max_m").addClass('attention');  
							$.ajax({
		      					type: "POST",
		      					url: "/wp-content/themes/semicolon/res2sel.php",
		      					data: "table=nom_napr&column0=id&column1=extra_napr&case=id_tip_eq_"+tip+"_and_kl_napr_eq_"+napr,
		      					success: function(data16){
									//alert("2="+maxtok);
		        					$("#per_n").html(seldata+data16);
		      					}
		    				});  
	      				}
	    			});  
      			}
    		});
		    }
		});  
	}  
	$("#napr_nt").prop('disabled', false);   
  return false;
  });	

  $('#max_m').change(function(){	
	pow = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	$(this).removeClass('attention');  
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nom_napr&column0=id&column1=extra_napr&case=id_tip_eq_"+tip+"_and_kl_napr_eq_"+napr,
      success: function(data20){
        $("#per_n").html(seldata+data20);
		$.ajax({
		    type: "POST",
		    url: "/wp-content/themes/semicolon/res2var.php",
		    data: "table=tip_ispoln&column0=id&case=tip_id_eq_"+tip+"_and_napr_eq_"+napr+"_and_ispoln_eq_00",
		    success: function(data17){
			//alert("2="+maxtok);
		    $("#max_vyv").html('<input id="max_v" type="text" value="'+data17+'" />');
			isp=document.getElementById("max_v").value;
			//alert(max_vyv);
    		$.ajax({
      			type: "POST",
      			url: "/wp-content/themes/semicolon/res2sel.php",
      			data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      			success: function(data2){
        			$("#klim_kat").html(seldata+data2);
					$("#klim_kat").addClass('attention');  
					if (pow == '2.5' || pow == '5.0') {
						$("#per_n :contains('6600')").remove();
						$("#per_n :contains('11000')").remove();
						$("#klim_kat :contains('УХЛ2')").remove();
						$("#klim_kat :contains('Т2')").remove();
	  				}
					if ((tip == 18 && pow == '0.63') || (tip == 18 && pow == '1.25')) {
						$("#klim_kat :contains('У2')").remove();
	  				}
      			}
    		});
		    }
		});  
      }
    });
  $("#max_m_nt").prop('disabled', false); 
  return false;
  });	
	
  $('#klim_kat').change(function(){	
  	$("#klim_kat_nt").prop('disabled', false); 
	$(this).removeClass('attention');  
	$("#per_n").addClass('attention');
  	return false;
  });	

  $('#per_n').change(function(){	
  	$("#per_n_nt").prop('disabled', false); 
	$(this).removeClass('attention');  
	$("#vtor_n").addClass('attention');
  	return false;
  });	

  $('#vtor_n').change(function(){	
  	$("#vtor_n_nt").prop('disabled', false); 
	$(this).removeClass('attention');  
  	return false;
  });	

$('#gab').change(function(){	
	gab = this.options[this.selectedIndex].text; 
	isp = this.options[this.selectedIndex].value; 
	seldata = '<option value="">...</option>';
	$(this).removeClass('attention');  
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      success: function(data2){
        $("#klim_kat").html(seldata+data2);
		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2sel.php",
	      data: "table=nom_power&column0=id&column1=power&case=tip_tr_id_eq_"+tip+"_and_kl_napr_eq_"+napr+"_and_gab_eq_"+gab,
	      success: function(data15){
			$("#max_m").html(seldata+data15);
			$("#max_m").addClass('attention');  
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=nom_napr&column0=id&column1=extra_napr&case=id_tip_eq_"+tip+"_and_kl_napr_eq_"+napr,
		      success: function(data16){
				//alert("2="+maxtok);
		        $("#per_n").html(seldata+data16);
		      }
		    });  
	      }
	    });  
        //$("#var_v_1").prop('disabled', true);
      }
    });
	$("#gab_nt").prop('disabled', false); 
  return false;
  });	
	
var rowinner1 = '';
var rowinner2 = '';	
function addrow(t){
		tab = document.getElementById(t);
		var rowCount = tab.rows.length;
		var row = tab.insertRow(rowCount-1);
		if (rowinner1 == '') {rowinner = tab.rows[2].innerHTML; rowinner1 = tab.rows[2].innerHTML;}
		else {rowinner = rowinner1};
        rowinner = rowinner.replace('<td id="tdd_0"><p>1</p></td>', '<td id="tdd_'+(rowCount-3)+'"><p>' + (rowCount-2) + '</p></td>');
        rowinner = rowinner.replace('input id="vyv_1_0"', 'input id="vyv_' + (rowCount-2) + '_0"');
		rowinner = rowinner.replace('table id="a01"', 'table id="a0' + (rowCount-2) + '"');
		rowinner = rowinner.replace('onclick="addrow2(\'a01\');"', 'onclick="addrow2(\'a0' + (rowCount-2) + '\');"');
		rowinner = rowinner.replace('id="td_1"',        'id="td_'        + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="vtor_p_1"',    'id="vtor_p_'    + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="vtor_v_1"',    'id="vtor_v_'    + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="id_vtor_a_1"', 'id="id_vtor_a_' + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="d_vtor_a_1"',  'id="d_vtor_a_'  + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="vtor_b_1"',    'id="vtor_b_'    + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="id_vtor_c_1"', 'id="id_vtor_c_' + (rowCount-2) + '"');
		rowinner = rowinner.replace('id="d_vtor_c_1"',  'id="d_vtor_c_'  + (rowCount-2) + '"');
		obm.push(0);
		vyv = vyv + 2;
		row.innerHTML = rowinner;
//		row.innerHTML = '<td><p>' + (rowCount-2) + '</p></td><td colspan="7"><table id="a0' + (rowCount-2) + '"><tr><td></td><td><p>И1-И2</p></td><td><select id="vtor_p_1" class="inputbox1"></select></td><td><select id="vtor_v_1" class="inputbox1"></select></td><td><select id="vtor_a_1" class="inputbox1"></select></td><td><select id="vtor_b_1" class="inputbox1"></select></td><td><select id="vtor_c_1" class="inputbox1"></select></td></tr><tr><td onclick="addrow2(\'a0' + (rowCount-2) + '\');" class="tdbutton">добавить<br />отпайку</td><td colspan="6"></td></tr></table></td>';
//		notab = document.getElementById('a0' + (rowCount-3));
//		notab.rows[notab.rows.length-1].innerHTML = '<td onclick="addrow2();" class="tdbutton_">добавить<br> отпайку</td><td colspan="6"></td>'
		vyvy();
  //alert('#vtor_v_'+(obm.length));
  $('#vtor_v_'+(obm.length)).change(function(){	
	v_1 = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nagruz&column0=nagr&case=vtor_t_eq_"+v_1,
      success: function(data20){
        $("#d_vtor_a_"+(obm.length)).html(seldata+data20);
      }
    });
  return false;
  });	
}

function addrow2(t){
	  if (rowinner1 == '') {rowinner1 = document.getElementById("a00").rows[2].innerHTML;}
	  if (!perekl) {otp = true; $('#perek').prop('disabled', true);}
	  tab = document.getElementById(t);
	  if (tab && !perekl) {
		var rowCount = tab.rows.length;
		rowinner0 = tab.rows[rowCount-2].innerHTML;
		var row = tab.insertRow(rowCount-2);
		t = t.substr(2,1)*1;
	    //if (rowinner1 != '') {rowinner1 = document.getElementById("a0"+t).rows[2].innerHTML;}
		vyv++;
		rowinner0 = rowinner0.replace('<p></p></td>', '<p>' + (rowCount-1) + '</p></td>');
        rowinner0 = rowinner0.replace('_0" class="inputbox"', '_' + (rowCount-1) + '" class="inputbox"');
		rowinner0 = rowinner0.replace('id="td_'+(t)+'"',        'id="td_'+(t)+'_'        + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_p_'+(t)+'"',    'id="vtor_p_'+(t)+'_'    + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_v_'+(t)+'"',    'id="vtor_v_'+(t)+'_'    + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="id_vtor_a_'+(t)+'"', 'id="id_vtor_a_'+(t)+'_' + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_a_'+(t)+'"',  'id="d_vtor_a_'+(t)+'_'  + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_b_'+(t)+'"',    'id="vtor_b_'+(t)+'_'    + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="id_vtor_c_'+(t)+'"', 'id="id_vtor_c_'+(t)+'_' + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_c_'+(t)+'"',  'id="d_vtor_c_'+(t)+'_'  + (rowCount-1) + '"');
		row.innerHTML = rowinner0;
		if ( t > 0 ){ obm[t-1]++; }
		di = document.getElementById("vtor_p_"+t);
		if (di.options[di.selectedIndex]){
		  d = di.options[di.selectedIndex].text;
		  dp = document.getElementById("vtor_p_"+t+"_"+(rowCount-1));
		  for(i=0;i<dp.options.length;i++){
			if (dp.options[i].text == d){dp.selectedIndex = i-1;}
		  }
		}
		di = document.getElementById("vtor_v_"+t);
		if (di.options[di.selectedIndex]){
		  d = di.options[di.selectedIndex].text;
		  dp = document.getElementById("vtor_v_"+t+"_"+(rowCount-1));
		  for(i=0;i<dp.options.length;i++){
			if (dp.options[i].text == d){dp.selectedIndex = i;}
		  }
		  //dp.disabled = true;
		  dp.style.visibility = 'hidden';	
		}
		di = document.getElementById("id_vtor_a_"+t);
		d = di.value;
		dp = document.getElementById("id_vtor_a_"+t+"_"+(rowCount-1));
		dp.value = d;
		di = document.getElementById("vtor_b_"+t);
		if (di.options[di.selectedIndex]){
		  d = di.options[di.selectedIndex].text;
		  dp = document.getElementById("vtor_b_"+t+"_"+(rowCount-1));
		  for(i=0;i<dp.options.length;i++){
			if (dp.options[i].text == d){dp.selectedIndex = i;}
		  }
		}
		di = document.getElementById("id_vtor_c_"+t);
		d = di.value;
		dp = document.getElementById("id_vtor_c_"+t+"_"+(rowCount-1));
		dp.value = d;
		vyvy();
  $('#vtor_v_'+(t)+'_' + (rowCount-1)).change(function(){	
	v_1 = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nagruz&column0=nagr&case=vtor_t_eq_"+v_1,
      success: function(data20){
        $("#d_vtor_a_"+(t)+"_" + (rowCount-1)).html(seldata+data20);
      }
    });
  return false;
  });	
	  }
}

function vyvy(){
		otp = false;
		for (a = 1; a <= obm.length; a++ ){

			  if (obm[a-1] > 0) {
				//document.getElementById('vyv_'+a+'_0').value = (a*2-1)+'И'+(a*2-1)+'-'+(a*2-1)+'И'+(a*2+obm[a-1]);
				otp = true;
				for (b = 0; b <= obm[a-1]; b++){
					//alert('vyv_'+a+'_'+b);
					d = document.getElementById('vyv_'+a+'_'+b);
					//alert('step='+b+' vyv_'+a+'_'+b+'='+d);  alert(this.parentElement.parentElement.parentElement.id); 
					if (document.getElementById('td_'+a+'_'+(b+1))){
						td = document.getElementById('td_'+a+'_'+(b+1));
						if (a < obm.length){td.innerHTML = '<p>'+(b+1)+'</p><div id="udp_'+a+'_'+(b+1)+'" onclick = "obm[this.parentElement.parentElement.parentElement.parentElement.id.substr(2,1)*1-1]--; this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); vyvy();" class="tddel">Удалить<br>отпайку</div>';}
						//alert('td_'+a+'_'+(b+1)+' - '+td);
						if (a == obm.length){td.innerHTML = '<p>'+(b+1)+'</p><div id="udp_'+a+'_'+(b+1)+'" onclick = "obm[this.parentElement.parentElement.parentElement.parentElement.id.substr(2,1)*1-1]--; this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); vyvy();" class="tddel">Удалить<br>отпайку</div>';}
					}
					na = '';
					if (obm.length>1) {na = a;}
					if (b==0)
						//d.value = (a*2-1)+'И'+(a*2-1)+'-'+(a*2-1)+'И'+(a*2-1+b);
						d.value = (na)+'И'+(1)+'-'+(na)+'И'+(obm[a-1]+2);
					else
						d.value = (na)+'И'+(1)+'-'+(na)+'И'+(b+1);
				}

			  }
			  else {
					//alert('obm='+a);
				    na = '';
					if (obm.length>1) {na = a;}
				  if (a == obm.length) {
					  //alert(a);
					  document.getElementById('vyv_'+a+'_0').value = (na)+'И'+(1)+'-'+(na)+'И'+(2);
				  }
			      else {
					  //alert(a);
					  document.getElementById('vyv_'+a+'_0').value = (na)+'И'+(1)+'-'+(na)+'И'+(2);
				  }

			}
					if (document.getElementById('tdd_'+(a-1))){
						tdd = document.getElementById('tdd_'+(a-1));
						if (a <= obm.length){tdd.innerHTML = '<p>'+(a)+'</p>';}
						//alert('td_'+a+'_'+(b+1)+' - '+td);
						if (a == obm.length && a > 1){tdd.innerHTML = '<p>'+(a)+'</p><div id="udo_'+(a-1)+'" onclick = "this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); obm.splice('+(a-1)+', 1); vyvy();" class="tddel">Удалить<br>обмотку</div>';}
					}
		}
		if ((perek * tokper * 1 == 1) && (!otp)) { $('#perek').prop('disabled', false); }
		else {$('#perek').prop('disabled', true);}
	}	

	function popup(classn,t){
		dv = document.getElementById('msg');
		if (classn !='') {dv.className = classn;}
		else {dv.className = 'info';}
		//alert(dv.style.display);
		dv.style.display = 'block';
		//dv.style.left = '150px';
		dv.innerHTML = '<div>Первичный ток</div><p  onclick="this.parentNode.style.display=\'none\';">x</p>';		
	}

function popup1(ob,t){
		dv = document.getElementById(ob);
		dv.style.display = 'block';
		dv.style.left = '300px';
		dv.innerHTML = '<div>Ток терм.стойкости</div><p  onclick="this.parentNode.style.display=\'none\';">x</p>';		
	}

function search(){
		c = '';
		v = '';
		i = document.getElementById('sform');
		s = document.getElementById('search');
		s.outerHTML = '<select id="search" size="2" style="width:100%; height:50px"><option>Оборудование указаннного типа не найдено</option></select>';

		//тип
		d = document.getElementById('tip');
		c += (d.selectedIndex>0)?(d.options[d.selectedIndex].text):'';
		c += '-НТЗ';

		//ном.мощность
		d = document.getElementById('max_m');
		ti = (d.selectedIndex>-1)?(d.options[d.selectedIndex].text):''; //fix: получить значение мощности (djd)
		c += (d.selectedIndex>-1)?('-'+ti):''; //fix: добавить значение мощности в обозначение (djd)
		//напряжение
		d = document.getElementById('napr');
		nom_napr = (d.selectedIndex>-1)?d.options[d.selectedIndex].text:''; //add: получить значение напряжения для использования в условии (djd)
		c += (d.selectedIndex>-1)?('/'+nom_napr):'';

        //габарит
		//d = document.getElementById('gab');
		//c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'';
		if (tip == 17) {
			d = document.getElementById('gab');
			//dd = (!$('#gab_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
			c += (d.selectedIndex>1)?('-'+d.options[d.selectedIndex].text+''):'';
		}

        // III or IV
        // fix: категория загрязнения в зависимости от напряжения и мощности (djd)
		if (tip == 17 && ti != '%') {
			if (nom_napr == '6' || nom_napr == '10' || (nom_napr == '35' && ti == '1.25')) {
				c += '-IV';
			} else {
				c += '-III';
			}	
		}
		// коэф.трпнсформации 100х490
		//if (isp == 113) {
		//	d = document.getElementById('koeftr');
		//    c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text + ''):'';
		//}

		//климатич.категория
		d = document.getElementById('klim_kat');
		c += (d.selectedIndex>0)?(' '+d.options[d.selectedIndex].text):'';

		if (ti*(-1) < 2.5) {
			d = document.getElementById('per_n');
			c += (d.selectedIndex>0)?(', U1=' + d.options[d.selectedIndex].text + 'В'):'';
			//ОЛ
			if (tip == 17) {
				d = document.getElementById('vtor_n');
				c += (d.selectedIndex>0)?(', U2=' + d.options[d.selectedIndex].text + 'В'):'';
			}
		}
		else {
			d = document.getElementById('per_n');
			c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text/1000):'';
			c += '/0.24/0.12';
		}

		
		//c += ' '+v;
		
		i.value = c;
		//s.innerHTML = '<option>'+c+'</option>';
	sform = i.value; 
	//seldata = '<option value="">...</option>';

    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform,
      //data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+encodeURIComponent(sform)+"",
      success: function(data21){
		//data = "/wp-content/themes/semicolon/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
			org = document.getElementById('org').value;
			objectt = document.getElementById('objectt').value;
			count = document.getElementById('count').value;
		    adednew = false;

		if (data21 == '') {
			sr = document.getElementById('search');
			_sform = 'sform';
			sr.outerHTML = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="5">Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</td></tr><tr><td width="10%" class="tdsmaltxt">Заказываемая конфигурация:</td><td id="newzakaz">...</td><td width="10%" class="tdsmaltxt">Вы можете добавить примечание:</td><td><input type="text" id="newzakaztxt" class="inputbox1" style="width:450px;" /></td><td width="10%"><div class="tdbuttonbl" onclick="addnew(document.getElementById(_sform));" id="clcknew" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:34px;line-height:36px;">Добавить в заказ</div></td></tr></table>';
			document.getElementById('newzakaz').innerText = document.getElementById('sform').value;
		    document.getElementById('clcknew').innerText = 'Добавить в заказ';
			document.getElementById('clcknew').className = 'tdbuttonbl';
			//$("#search").html('<option>Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</option>') <input type="text" class="inputbox1" style="width:250px;"/>
		}
        else {
			$("#search").html(data21);
			sr = document.getElementById('search');
			srtext = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="4">Найденная номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td style="width:10%;">Добавление</td></tr>';
			for (i = 0 ; i < sr.childNodes.length; i++) {
				if (sr.childNodes[i].nodeType == 1) {
					srtext += '<tr><td>'+(i*1+1)+'<input id="id'+i+'" type="hidden" value="'+sr.childNodes[i].value+'" /></td><td id="srt'+i+'">'+sr.childNodes[i].text+'</td><td></td><td style="width:10%;"><div onclick="addzakaz('+i+');this.className=tdbuttongn; this.innerText=aded;" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;" class="tdbuttonbl">Добавить в заказ</div></td></tr>';
				}
			}
			srtext += '</table>';
			sr.outerHTML = srtext;
		}
      }
    });
		if ($('#napr_nt').prop('checked') || $('#gab_nt').prop('checked') || $('#klim_kat_nt').prop('checked') || $('#max_m_nt').prop('checked') || $('#per_n_nt').prop('checked') || $('#vtor_n_nt').prop('checked')) 		{
			$('#like1').css('display','table-row'); $('#like2').css('display','table-row'); likesearch();
		}
		else{
			$('#like1').css('display','none'); $('#like2').css('display','none');
		}
		$('#nav').html('<div id="novy" class="tdbuttonbl" style="width:160px;height:50px;font-size:18px;line-height:48px;display:inline-block;margin:0 0 0 25%;" onclick="novy();">Новый поиск</div><div id="noob" class="tdbuttonbl" style="width:160px;height:50px;font-size:18px;line-height:48px;display:inline-block;margin:0 1px;" onclick="noob();">Новый объект</div><div id="nave" class="tdbuttonbl" style="width:160px;height:50px;font-size:18px;line-height:48px;display:inline-block;margin:0 25% 0 0;" onclick="nave();"> Наверх </div>')
	getdata(tip, -2);

}

function likesearch(){
		c = '';
		v = '';
		i = document.getElementById('likesform');
		s = document.getElementById('likesearch');
		s.outerHTML = '<select id="likesearch" size="2" style="width:100%; height:50px"><option>Оборудование похожего типа не найдено</option></select>';

		//тип
		d = document.getElementById('tip');
		c += (d.selectedIndex>0)?(d.options[d.selectedIndex].text):'';
		c += '-НТЗ';

		//ном.мощность
		d = document.getElementById('max_m'); 
		di = (!$('#max_m_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		ti = (d.selectedIndex>-1)?(d.options[d.selectedIndex].text):'';
		c += (d.selectedIndex>-1)?('-'+ di):'';
		//напряжение
		d = document.getElementById('napr');
		dd = (!$('#napr_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		c += (d.selectedIndex>-1)?('////'+ dd):'';

        //габарит
		//d = document.getElementById('gab');
		//c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'';
		if (tip == 17) {
			d = document.getElementById('gab');
			dd = (!$('#gab_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
			if (d.selectedIndex == 2){
					c += (dd == '%')?'%':('-'+dd);
				}
			if (d.selectedIndex == 1){
					c += (dd == '%')?'%':('');
				}
			//c += (d.selectedIndex == 2 && dd != '%')?('-'+dd):'%';
			//c += (d.selectedIndex == 1 && dd != '%')?'':'%';
		}
        // III or IV
        if (tip == 17 && di == '%') {
			c += '-%'
		}
		if (tip == 17 && di != '%') {
			if (dd == '6' || dd == '10' || (dd == '35' && ti == '1.25' )) {
				c += '-IV'
			} else {
				c += '-III'
			}	
		}

		// коэф.трпнсформации 100х490
		//if (isp == 113) {
		//	d = document.getElementById('koeftr');
		//    c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text + ''):'';
		//}

		//климатич.категория
		d = document.getElementById('klim_kat');
		dd = (!$('#klim_kat_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		c += (d.selectedIndex>0)?(' '+ dd):'';

		if (ti*(-1) < 2.5) {
			d = document.getElementById('per_n');
			dd = (!$('#per_n_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
			c += (d.selectedIndex>0)?(', U1=' + dd + 'В'):'';
			//ОЛ
			if (tip == 17) {
				d = document.getElementById('vtor_n');
				dd = (!$('#vtor_n_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
				c += (d.selectedIndex>0)?(', U2=' + dd + 'В'):'';
			}
		}
		else {
			d = document.getElementById('per_n');
			dd = (!$('#per_n_nt').prop('checked'))?(d.options[d.selectedIndex].text)/1000:'%';
			c += (d.selectedIndex>0)?(' ' + dd):'';
			c += '/0.24/0.12';
		}

		
		//c += ' '+v;

		i.value = c;
		//s.innerHTML = '<option>'+c+'</option>';
	sform = i.value; 
	//seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform,
      //data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+encodeURIComponent(sform)+"",
      success: function(data21){
		//data = "/wp-content/themes/semicolon/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
			org = document.getElementById('org').value;
			objectt = document.getElementById('objectt').value;
			count = document.getElementById('count').value;
		    adednew = false;
		if (data21 == '') {
		//data = "/wp-content/themes/semicolon/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
			sr = document.getElementById('likesearch');
			//_sform = 'likesform';
			_sform = 'sform';

			//sr.outerHTML = '<table id="likesearch" style="max-width:100%"><tr><td colspan="5">Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</td></tr><tr><td width="10%" class="tdsmaltxt">Заказываемая конфигурация:</td><td id="likezakaz">...</td><td class="tdsmaltxt">Вы можете добавить примечание:</td><td><input type="text" id="likezakaztxt" class="inputbox1" style="width:450px;" /></td><td width="10%"><div class="tdbuttonor" onclick="addnew(document.getElementById(_sform));" id="clcknew"  style="cursor:pointer; width:100px;margin:0px;height:36px;">Добавить в заказ</div></td></tr></table>';
			//document.getElementById('likezakaz').innerText = document.getElementById('likesform').value;
		    //document.getElementById('clcknew').innerText = 'Добавить в заказ';
			//document.getElementById('clcknew').className = 'tdbuttonor';

			//$("#search").html('<option>Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</option>') <input type="text" class="inputbox1" style="width:250px;"/>
		}
        else {
			$("#likesearch").html(data21);
			sr = document.getElementById('likesearch');
			srtext = '<table id="likesearch" style="max-width:100%;width:100%;"><tr><td colspan="4">Похожая номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td style="width:10%;">Добавление</td></tr>';
			for (i = 0 ; i < sr.childNodes.length; i++) {
				if (sr.childNodes[i].nodeType == 1) {
					srtext += '<tr><td>'+(i*1+1)+'<input id="id'+i+'" type="hidden" value="'+sr.childNodes[i].value+'" /></td><td id="srt'+i+'">'+sr.childNodes[i].text+'</td><td></td><td style="width:10%;"><div onclick="addzakaz('+i+');this.className=tdbuttongn; this.innerText=aded;" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;" class="tdbuttonbl">Добавить в заказ</div></td></tr>';
				}
			}
			srtext += '</table>';
			sr.outerHTML = srtext;
		}

      }
    });
}
