var tip = '1';
var isp = '';	
var napr = '';
var gab = '';
var klim_kat = '';
var per_t = '';	
var maxtok = '';
var mintok = '';
var tokterm = '';
var tokterm0 = '';
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
var gabvyv = new Array();
gabvyv['01'] = 4;
gabvyv['11'] = 12;
gabvyv['12'] = 12;
gabvyv['13'] = 12;
gabvyv['21'] = 12;
gabvyv['22'] = 12;
gabvyv['23'] = 12;
gabvyv['25'] = 12;
gabvyv['26'] = 12;
gabvyv['31'] = 8;
gabvyv['41'] = 12;
gabvyv['51'] = 8;
gabvyv['61'] = 12;
obm[0] = 0;	
// 333 - 180 = 153	
$ = window.jQuery;	
//$(document).ready(function(){
//	
//});
t = document.getElementById('tip');

tip = t.options[t.selectedIndex].value;
tip = 1;
$('#klass').html('<p>'+t.options[t.selectedIndex].text+'</p>');
  $('#tip').change(function(){	
	tip = this.options[this.selectedIndex].value; 
	tip = 1;
/*	if (tip == 1 || tip == 2 || tip == 3) {
		$("#tol").css("display", "block"); $("#a00").css("display", "block");
		$("#nali").css("display", "none"); $("#b00").css("display", "none");
		$("#znol").css("display", "none"); $("#c00").css("display", "none");
	}
	if (tip == 4) {
		$("#tol").css("display", "none"); $("#a00").css("display", "none");
		$("#nali").css("display", "block"); $("#b00").css("display", "block");
		$("#znol").css("display", "none"); $("#c00").css("display", "none");
	}
	if (tip == 5) {
		$("#tol").css("display", "none"); $("#a00").css("display", "none");
		$("#nali").css("display", "none"); $("#b00").css("display", "none");
		$("#znol").css("display", "block"); $("#c00").css("display", "block");
	}
*/	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=napr&case=tip_id_eq_"+tip,
      success: function(data){
        $("#napr").html(seldata+data);
		$("#bar_v").html('');
      }
    });
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_obm&column0=klass",
      success: function(data18){
        $("#vtor_b_1").html(seldata+data18);
      }
    });
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=kratn&column0=kratn",
      success: function(data19){
        $("#d_vtor_c_1").html(seldata+data19);
      }
    });
  return false;
  });

  $('#napr').change(function(){	
	napr = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	//alert(1);
	t = document.getElementById('tip');
	//alert(t);
	tip = t.options[t.selectedIndex].value;
	tip = 1; 
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+napr,
      success: function(data1){
        $("#gab").html(seldata+data1);
		$("#bar_v").html('');
      }
    });
	$.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_obm&column0=klass",
      success: function(data18){
        $("#vtor_b_1").html(seldata+data18);
      }
    });
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=kratn&column0=kratn",
      success: function(data19){
        $("#d_vtor_c_1").html(seldata+data19);
      }
    });
  
  return false;
  });	

  $('#vtor_v_1').change(function(){	
	v_1 = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nagruz&column0=nagr&case=vtor_t_eq_"+v_1,
      success: function(data20){
        $("#d_vtor_a_1").html(seldata+data20);
      }
    });
  return false;
  });	
	
  $('#gab').change(function(){	
	gab = this.options[this.selectedIndex].text; 
	isp = this.options[this.selectedIndex].value; 
	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=KlimKatRef&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      success: function(data2){
        $("#klim_kat").html(seldata+data2);
		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2rad.php",
	      data: "table=SecTermRef&column0=sec_term_id&column1=sec_term&case=tip_isp_id_eq_"+isp,
	      success: function(data15){
			$("#var_v_v").html(data15);
	    //    $("#var_v_v").html('<input id="var_vv" type="text" value="'+data15+'" />');
		//	var_v_1=document.getElementById("var_vv").value;
		//	//alert("2="+mintok);
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2var.php",
		      data: "table=tip_ispoln&column0=opc_bar&case=id_eq_"+isp,
		      success: function(data16){
				//alert("2="+maxtok);
		        $("#bar").html('<input id="bar_" type="text" value="'+data16+'" />');
				bar=document.getElementById("bar_").value;  
				if (bar == 1) {$("#bar_v").html('<input id="bar_vv" type="checkbox" /> - Барьеры');}
				else {$("#bar_v").html('');}
				$("#sec_term_id_sec_term_1").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_2").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_3").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_4").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	  
		      }
		    });  
	      }
	    });  
        //$("#var_v_1").prop('disabled', true);
      }
    });
	$.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2var.php",
      data: "table=tip_ispoln&column0=max_tok&case=id_eq_"+isp,
      success: function(data3){
		$("#max_t").html('<input id="max_tok" type="text" value="'+data3+'" />');
		maxtok=document.getElementById("max_tok").value;
		//alert("1="+maxtok);
		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2var.php",
	      data: "table=tip_ispoln&column0=min_tok&case=id_eq_"+isp,
	      success: function(data4){
	        $("#min_t").html('<input id="min_tok" type="text" value="'+data4+'" />');
			mintok=document.getElementById("min_tok").value;
			//alert("2="+mintok);
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=per_t&column0=tok&case=tok_lteq_"+maxtok+'_and_tok_gteq_'+mintok,
		      success: function(data5){
				//alert("2="+maxtok);
		        $("#per_t").html(seldata+data5);
		        
				$.ajax({
		      	  type: "POST",
		     	  url: "/wp-content/themes/semicolon/res2var.php",
		      	  data: "table=tip_ispoln&column0=max_vyv&case=id_eq_"+isp,
		      	  success: function(data17){
				  //alert("2="+maxtok);
		        	$("#max_vyv").html('<input id="max_v" type="text" value="'+data17+'" />');
					max_vyv=document.getElementById("max_v").value;
					//alert(max_vyv);
		      	  }
		   	    });  
		      }
		    });  
	      }
	    });  
      }
    });  
  return false;
  });	


  $('#per_t').change(function(){	
	per_t = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	$.ajax({
	  type: "POST",
	  url: "/wp-content/themes/semicolon/res2var.php",
	  data: "table=tok_term&column0=max&case=tok_eq_"+per_t,
	  success: function(data8){
	    $("#tok_term").html('<input id="t_term" type="text" value="'+data8+'" />');
	    tokterm=document.getElementById("t_term").value;
		//alert("2="+mintok);
		$.ajax({
		  type: "POST",
		  url: "/wp-content/themes/semicolon/res2var.php",
		  data: "table=tok_term&column0=stand&case=tok_eq_"+per_t,
		  success: function(data9){
		    //alert("2="+maxtok);
		    $("#tok_stand").html('<input id="t_stand" type="text" value="'+data9+'" />');
			tokstand=document.getElementById("t_stand").value;  

			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2var.php",
		      data: "table=tok_term&column0=min&case=tok_eq_"+per_t,
	  		  success: function(data25){
	    	    $("#tok_term0").html('<input id="t_term0" type="text" value="'+data25+'" />');
	    	    tokterm0=document.getElementById("t_term0").value;
			  }
			});	
			  
			//значение первичного тока вторичной обмотки, равное per_t
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=per_t&column0=tok&case=tok_lteq_"+maxtok+"_and_tok_gteq_"+mintok+"&mark="+per_t+"",
		      success: function(data21){
                $("#vtor_p_1").html(seldata+data21);
			  }
			});	
			  
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      //data: "table=tokterm&column0=tokterm&case=tokterm_gteq_"+tokterm0+"_and_tokterm_lteq_"+tokterm +"&mark="+tokstand+"",
		      data: "table=tokterm&column0=tokterm&case=tokterm_lteq_"+tokterm+"&mark="+tokstand+"",
		      success: function(data7){
		        //alert(data7);
		        $("#term_t").html(seldata+data7);
//------------------для тока переключения-----------------
				  $.ajax({
					type: "POST",
					url: "/wp-content/themes/semicolon/res2var.php",
					data: "table=tip_ispoln&column0=opc_perek&case=id_eq_"+isp,
					success: function(data10){
	                  $("#tok_per").html('<input id="t_perek" type="text" value="'+data10+'" />');
			          tokper=document.getElementById("t_perek").value;
			          //alert("2="+mintok);
			          $.ajax({
		                type: "POST",
		                url: "/wp-content/themes/semicolon/res2var.php",
		                data: "table=per_t&column0=perek&case=tok_eq_"+per_t,
		                success: function(data11){
				          //alert("2="+maxtok);
		                  $("#per").html('<input id="_perek" type="text" value="'+data11+'" />');
			              perek=document.getElementById("_perek").value;
						  tok_perek = per_t / 2;	
						  $("#perpert1").html('Номинальный ток<br /> переключения, А<br /><input id="tokperek" type="text" class="inputbox" style="width:100px; background:#fee;" value="'+tok_perek+'" disabled />');
						  $("#perpert2").html('Ток термической стойкости<br /> переключения, кА<br /><select id="per_term" class="inputbox1"></select>');
						  $('#perek').click(function(){ if ($(this).is(':checked') && (!otp)){$("#perpert1").css("display", "inline-block"); $("#perpert2").css("display", "inline-block"); perekl = true;} else {$("#perpert1").css("display", "none"); $("#perpert2").css("display", "none"); perekl = false;} });	
						  //alert(per_t); $("#perpert").html('<input type="checkbox" id="perek" value="" /> - Переключение по<br /> первичному току');	
						  if ((perek * tokper * 1 == 1) && (!otp)) {
							  $('#perek').prop('disabled', false); //$("#perpert").css("display", "inline-block"); 
						  } else {$('#perek').prop('disabled', true);$("#perpert1").css("display", "none"); $("#perpert2").css("display", "none");};	
			              $.ajax({
		                    type: "POST",
		                    url: "/wp-content/themes/semicolon/res2var.php",
		                    data: "table=tok_term&column0=max&case=tok_eq_"+tok_perek,
		                    success: function(data12){
				              //alert("2="+maxtok);
		                      $("#tokper_term").html('<input id="tper_term" type="text" value="'+data12+'" />');
	                          tokperterm=document.getElementById("tper_term").value;
			                  $.ajax({
		                        type: "POST",
		                        url: "/wp-content/themes/semicolon/res2var.php",
		                        data: "table=tok_term&column0=stand&case=tok_eq_"+tok_perek,
		                        success: function(data13){
				                  //alert("2="+maxtok);
		                          $("#tokper_stand").html('<input id="tper_stand" type="text" value="'+data13+'" />');
	                              tokperstand=document.getElementById("tper_stand").value;
			                      $.ajax({
		                            type: "POST",
		                            url: "/wp-content/themes/semicolon/res2sel.php",
		                            data: "table=tokterm&column0=tokterm&case=tokterm_lteq_"+tokperterm+"&mark="+tokperstand,
		                            success: function(data14){
				                      //alert("2="+maxtok);
		                              $("#per_term").html(seldata+data14);
		                            }
		                          });  
		                        }
		                      });  
		                    }
		                  });  
		                }
		              });  
	                }
	              }); 
//------------------------------------------------------------------				  
		      }
		    });  
		  }
		});  
	  }
	});  
	  
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2var.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=term_sek&case=id_eq_"+isp,
      success: function(data6){
        $("#vrem_pr").html('<input id="vrem_prot" class="inputbox" style="width:100px; background:#fee;" type="text" value="'+data6+'" disabled />');
      }
    });
  return false;
  });	

//alert(tip);  


var rowinner1 = '';
var rowinner2 = '';	
	function addrow(t){
		tab = document.getElementById(t);
		//alert(gabvyv[gab]);
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
						alert('id='+this.parentElement.parentElement.parentElement.parentElement.id+'a='+a+'b=1='+(b+1));
						if (a < obm.length){td.innerHTML = '<p>'+(b+1)+'</p><div id="udp_'+a+'_'+(b+1)+'" onclick = "obm[this.parentElement.parentElement.parentElement.parentElement.id.substr(2,1)*1-1]--; this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); vyv--; vyvy();" class="tddel">Удалить<br>отпайку</div>';}
						if (a == obm.length){td.innerHTML = '<p>'+(b+1)+'</p><div id="udp_'+a+'_'+(b+1)+'" onclick = "obm[this.parentElement.parentElement.parentElement.parentElement.id.substr(2,1)*1-1]--; this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); vyv--; vyvy();" class="tddel">Удалить<br>отпайку</div>';}
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
						if (a == obm.length && a > 1){tdd.innerHTML = '<p>'+(a)+'</p><div id="udo_'+(a-1)+'" onclick = "this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement); obm.splice('+(a-1)+', 1); vyv-=2; vyvy();" class="tddel">Удалить<br>обмотку</div>';}
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
		i = document.getElementById('sform');
		s = document.getElementById('search');

		//тип
		d = document.getElementById('tip');
		c += (d.selectedIndex>0)?(d.options[d.selectedIndex].text):'';
		c += '-НТЗ';

		//напряжение
		d = document.getElementById('napr');
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text):'';

        //габарит
		d = document.getElementById('gab');
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text):'';

		//типы выводов
		v = '';
		if ($("#sec_term_id_sec_term_1").is(':checked')){ c += 'А'}; //русская А
        if ($("#sec_term_id_sec_term_2").is(':checked')){ c += 'В'}; //русская В
        if ($("#sec_term_id_sec_term_3").is(':checked')){ c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
        if ($("#sec_term_id_sec_term_4").is(':checked')){ c += 'D'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'};

		//отпайки
		o = '';
		if (!perekl){
		  for (a = 1; a <= obm.length; a++ ){
			if (obm[a-1] > 0) { o = 'К';}
		  }
		}
		else { o = 'П';}
		c += o;

		//барьеры
		if (document.getElementById('bar_vv')) {if ($("#bar_vv").is(':checked')){ c += 'Б'};}
			
		c += '-';
        //alert('bar');

		for (a = 1; a <= obm.length; a++ ){
			//обмотка
			btc = false;
			//класс точн.
			bb = document.getElementById('vtor_b_'+a).value;
			bb0 = ''; bb1 = '';

			//коэфф.безопасности
		    bc = document.getElementById('id_vtor_c_'+a).value;
			bc0 = ''; bc1 = '';
			if (bc != '') btc = true;

			//отпайки
			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//класс точн.
				    db = document.getElementById('vtor_b_'+a+'_'+b).value;
					if (db && db != bb) { bb0 = '('; bb1 = ')';}
				    if (db && b == 1 && db != bb) {c += db; }
				    if (db && b > 1 && db != bb) {c += '(' + db; c += ')';}
			    }
				
			}
			//обмотка коэфф.безопасности
			c += bb0 + bb + bb1;
			for (b = 1; b <= obm[a-1]; b++){
					//нужен ли Fs в коэф.безопасности
				    dc = document.getElementById('id_vtor_c_'+a+'_'+b).value;
					if (dc != '') btc = true;
			}	
			if (bb.indexOf('Р') == -1 && bb !='' && btc) c += 'Fs';

			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//коэф.безопасности
				    dc = document.getElementById('id_vtor_c_'+a+'_'+b).value;
					if (dc != '') btc = true;
					if (dc && dc != bc && bc) { bc0 = '('; bc1 = ')';}
				    if (dc && b == 1 && dc != bc) {c += dc;}
				    if (dc && b > 1 && dc != bc) {c += '(' + dc + ')';}
					//alert(d);
			    }
				
			}
            c += bc0+bc+bc1;


			if (a < obm.length) c += '/';
		}

		c += '-';

		for (a = 1; a <= obm.length; a++ ){
			//нагрузка
			ba0 = ''; ba1 = '';
		    ba = document.getElementById('id_vtor_a_'+a).value;
			//отпайки
			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//нагрузка
				    da = document.getElementById('id_vtor_a_'+a+'_'+b).value;
					if (da && da != ba) { ba0 = '('; ba1 = ')';}
				    if (da && b == 1 && da != ba) {c += da; }
				    if (da && b > 1 && da != ba) {c += '(' + da; c += ')';}
					//alert(d);
			    }
			}
		    //c += '-'+d.options[d.selectedIndex].text;
            c += ba0 + ba + ba1;

			if (a < obm.length) c += '/';
		}

		c += '-';
        ravny_p = true;
        ravny_v = true;
		ravny_o = new Array();
		o1 = new Array();
		
		v0 = document.getElementById('vtor_v_1').value;

		for (a = 1; a <= obm.length; a++ ){
			if (obm[a-1] > 0) ravny_o[a-1] = true;
			//первич. ток обмотки
			d = document.getElementById('per_t').value;
		    bp = document.getElementById('vtor_p_'+a).value;
			v1 = document.getElementById('vtor_v_'+a).value;
		    //c += '-'+d.options[d.selectedIndex].text;
			if (d != bp){ravny_p = false;}
			if (v0 != v1){ravny_v = false;}
			for (b = 1; b <= obm[a-1]; b++){
				    if (b > 0) {ravny_p = false;}
			}
		}
		for (a = 1; a <= obm.length; a++ ){
		  bp = document.getElementById('vtor_p_'+a).value;
		  bp0 = ''; bp1 = '';

		  if ((a == obm.length && ravny_p) || (!ravny_p) || (!ravny_v)) {
			//o1 = document.getElementById('id_vtor_c_'+a).value;
			//отпайки
			if (obm[a-1] > 0) {
				//первичные токи
			    for (b = 1; b <= obm[a-1]; b++){
				    dp = document.getElementById('vtor_p_'+a+'_'+b).value;
					if (dp && dp != bp) { bp0 = '('; bp1 = ')';}
				    if (dp && b == 1 && dp != bp) {c += dp; }
				    if (dp && b > 1 && dp != bp) {c += '(' + dp; c += ')';}
			    }
			}
			//обмотка //первичный ток
			//ток переключения
			if (perekl) {
				c += document.getElementById('tokperek').value + '-'; 
			}
			c += bp0+bp+bp1;
			//вторич. ток обмотки
		    b = document.getElementById('vtor_v_'+a).value;
            if (!ravny_v) c += '/'+b;
            if (a < obm.length) c += '-';
				
		  }
		}
		if (ravny_v) c += '/'+b;

		//ток термическ. стойкости
		d = document.getElementById('term_t');
		//ток терм.стойкости переключения
		dpt = '';
		if (perekl) {
			dptd = document.getElementById('per_term'); 
			dptd = dptd.options[dptd.selectedIndex].text; 
			if (d.options[d.selectedIndex].text != dptd) dpt = dptd + '-';
		}

		c += (d.selectedIndex>0)?(' '+dpt+d.options[d.selectedIndex].text+'кА'):'';
        //c += ' '+d;

		//климатич.категория
		d = document.getElementById('klim_kat');
		c += (d.selectedIndex>0)?(' '+d.options[d.selectedIndex].text):'';

		//длина выводов
		c += v;

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
		if (data21 == '') {$("#search").html('<option>Оборудование указаннного типа не найдено</option>')}
        else {$("#search").html(data21);}
      }
    });

	}
