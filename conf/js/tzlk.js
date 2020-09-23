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

if ((tip == 11 || tip == 12)) {
    //           $("#napr").html('<option value="">0.66</option>');
    
}
//alert($('#napr :first').text());

$('#klass').html('<p>'+t.options[t.selectedIndex].text+'</p>');

$(document).ready(function() {
    if ((tip == 11 || tip == 12)) {
        $("#napr").html('<option value="" selected>0.66</option>');
        
    }
    //alert($("#napr").html());
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
      data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+0,
      success: function(data1){
		seldata = '<option value="">...</option>';
        $("#gab").html(seldata+data1);

        //          $('#napr').html('option value="">0.66</option>');
		//$("#bar_v").html('');
      }
    });

  $('#tip').change(function(){
	tip = this.options[this.selectedIndex].value; 
    //seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=napr&case=tip_id_eq_"+tip,
      success: function(data){
	    $.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2sel.php",
	      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
	      data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+0,
	      success: function(data1){
			seldata = '<option value="">...</option>';
	        $("#gab").html(seldata+data1);
			$("#bar_v").html('');
	        if (tip == 11 || tip == 12) $("#napr").html('<option value="">0.66</option>'); 
	      }
	    });

		  //seldata = '<option value="">0.66</option>';
		  //seldata = '<option value="">...</option>';
		  //$("#bar_v").html('');
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
	//napr = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	//alert(1);
	t = document.getElementById('tip');
	//alert(t);
	tip = t.options[t.selectedIndex].value;
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=tip_ispoln&column0=id&column1=ispoln&case=tip_id_eq_"+tip+"_and_napr_eq_"+0,
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

  $('input[name="nazn"]').change(function(){	
	  if ($('input[name="nazn"]:checked').val() == 1) {
	  	$("#tzlk1").css('display', 'table-row');
		$("#koeftr_nt").prop('disabled', false);
		$("#max_p_nt").prop('disabled', false); 
  		$("#pred_n_nt").prop('disabled', false);
				$.ajax({
		      	  type: "POST",
		     	  url: "/wp-content/themes/semicolon/res2var.php",
		      	  data: "table=tip_ispoln&column0=max_obm&case=id_eq_"+isp,
		      	  success: function(data17){
				  //alert("2="+maxtok);
		        	$("#tok_stand").html('<input id="tok_standi" type="text" value="'+data17+'" />');
					tok_stand=document.getElementById("tok_standi").value;
					//alert(max_vyv);
					$.ajax({
		      			type: "POST",
		      			url: "/wp-content/themes/semicolon/res2sel.php",
		      			data: "table=per_t_tzlk&column0=tok&case=value_gteq_"+min_t+"_and_value_lteq_"+max_t+"&mark="+tok_stand,
		      			success: function(data25){
		        			$("#koeftr").html(seldata+data25);		        
		      			}
		    		});  

					$.ajax({
      				  type: "POST",
      				  url: "/wp-content/themes/semicolon/res2var.php",
      				  data: "table=tip_ispoln&column0=max_vyv&case=id_eq_"+isp,
      				  success: function(data3){
						$("#tok_term").html('<input id="nagrst" type="text" value="'+data3+'" />');
						nagrstand=document.getElementById("nagrst").value;
						//alert(nagrstand);
						$.ajax({
	      				  type: "POST",
	      				  url: "/wp-content/themes/semicolon/res2var.php",
	      				  data: "table=tip_ispoln&column0=max_tok_per&case=id_eq_"+isp,
	      				  success: function(data4){
	        				$("#tok_per").html('<input id="pogrst" type="text" value="'+data4+'" />');
							pogrstand=document.getElementById("pogrst").value;
							//alert("2="+mintok);
							$.ajax({
		      				  type: "POST",
		      				  url: "/wp-content/themes/semicolon/res2sel.php",
		      				  data: "table=tzlk_mz_nagr&column0=value&case=value_gteq_0&mark="+nagrstand+"",
		      				  success: function(data7){
		        					//alert("stand="+tokstand);
		        					$("#pred_n").html(seldata+data7);
							  		$.ajax({
		      	  					  type: "POST",
		     	  					  url: "/wp-content/themes/semicolon/res2sel.php",
		      	  					  data: "table=tzlk_mz_pogresh&column0=value&case=value_gteq_0&mark="+pogrstand+"",
		      	  					  success: function(data17){
				  					  //alert("2="+maxtok);
		        					  $("#max_p").html(seldata+data17);
									  //alert(max_vyv);
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
	  }
	  else {
		$("#tzlk1").css('display', 'none');
				$.ajax({
		      	  type: "POST",
		     	  url: "/wp-content/themes/semicolon/res2var.php",
		      	  data: "table=tip_ispoln&column0=tok_vtor&case=id_eq_"+isp,
		      	  success: function(data17){
				  //alert("2="+maxtok);
		        	$("#tok_stand").html('<input id="tok_standi" type="text" value="'+data17+'" />');
					tok_stand=document.getElementById("tok_standi").value;
					//alert(max_vyv);
					$.ajax({
		      			type: "POST",
		      			url: "/wp-content/themes/semicolon/res2sel.php",
		      			data: "table=per_t_tzlk&column0=tok&case=value_gteq_"+min_t+"_and_value_lteq_"+max_t+"&mark="+tok_stand,
		      			success: function(data25){
		        			$("#koeftr").html(seldata+data25);		        
		      			}
		    		});  
		      	  }
		   	    });  
	  }

	return false;
  });	
	
  $('#klim_kat').change(function(){	
  	$("#klim_kat_nt").prop('disabled', false); 
	//$(this).removeClass('attention');  
	//$("#per_n").addClass('attention');
  	return false;
  });	

  $('#koeftr').change(function(){	
  	$("#koeftr_nt").prop('disabled', false); 
	//$(this).removeClass('attention');  
	//$("#per_n").addClass('attention');
  	return false;
  });	

  $('#max_p').change(function(){	
  	$("#max_p_nt").prop('disabled', false); 
	//$(this).removeClass('attention');  
	//$("#per_n").addClass('attention');
  	return false;
  });	

  $('#pred_n').change(function(){	
  	$("#pred_n_nt").prop('disabled', false); 
	//$(this).removeClass('attention');  
	//$("#per_n").addClass('attention');
  	return false;
  });	

  $('#gab').change(function(){	
	gab = this.options[this.selectedIndex].text; 
	isp = this.options[this.selectedIndex].value; 
	seldata = '<option value="">...</option>';
  	$("#gab_nt").prop('disabled', false); 
	$("#koeftr_nt").prop('disabled', false);
	if (gab == '100х490'){
		$('#nazn1').css('visibility', 'hidden');
		$('#nazn00').attr('checked', 'checked');
		$("#tzlk1").css('display', 'none');
	}
	else {
		$('#nazn1').css('visibility', 'visible');
	}
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      success: function(data2){
        $("#klim_kat").html(seldata+data2);
		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2var.php",
	      data: "table=tip_ispoln&column0=max_tok&case=id_eq_"+isp,
	      success: function(data15){
			$("#max_t").html('<input id="max_ti" type="text" value="'+data15+'" />');
			max_t=document.getElementById("max_ti").value;
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2var.php",
		      data: "table=tip_ispoln&column0=min_tok&case=id_eq_"+isp,
		      success: function(data16){
				//alert("2="+maxtok);
		        $("#min_t").html('<input id="min_ti" type="text" value="'+data16+'" />');
				min_t=document.getElementById("min_ti").value;  
				$.ajax({
		      	  type: "POST",
		     	  url: "/wp-content/themes/semicolon/res2var.php",
		      	  data: "table=tip_ispoln&column0=tok_vtor&case=id_eq_"+isp,
		      	  success: function(data17){
				  //alert("2="+maxtok);
		        	$("#tok_stand").html('<input id="tok_standi" type="text" value="'+data17+'" />');
					tok_stand=document.getElementById("tok_standi").value;
					//alert(max_vyv);
					$.ajax({
		      			type: "POST",
		      			url: "/wp-content/themes/semicolon/res2sel.php",
		      			data: "table=per_t_tzlk&column0=tok&case=value_gteq_"+min_t+"_and_value_lteq_"+max_t+"&mark="+tok_stand,
		      			success: function(data25){
		        			$("#koeftr").html(seldata+data25);		        

	  if ($('input[name="nazn"]:checked').val() == 1) {
	  	$("#tzlk1").css('display', 'table-row');
				$.ajax({
		      	  type: "POST",
		     	  url: "/wp-content/themes/semicolon/res2var.php",
		      	  data: "table=tip_ispoln&column0=max_obm&case=id_eq_"+isp,
		      	  success: function(data17){
				  //alert("2="+maxtok);
		        	$("#tok_stand").html('<input id="tok_standi" type="text" value="'+data17+'" />');
					tok_stand=document.getElementById("tok_standi").value;
					//alert(max_vyv);
					$.ajax({
		      			type: "POST",
		      			url: "/wp-content/themes/semicolon/res2sel.php",
		      			data: "table=per_t_tzlk&column0=tok&case=value_gteq_"+min_t+"_and_value_lteq_"+max_t+"&mark="+tok_stand,
		      			success: function(data25){
		        			$("#koeftr").html(seldata+data25);		        
		      			}
		    		});  

					$.ajax({
      				  type: "POST",
      				  url: "/wp-content/themes/semicolon/res2var.php",
      				  data: "table=tip_ispoln&column0=max_vyv&case=id_eq_"+isp,
      				  success: function(data3){
						$("#tok_term").html('<input id="nagrst" type="text" value="'+data3+'" />');
						nagrstand=document.getElementById("nagrst").value;
						//alert(nagrstand);
						$.ajax({
	      				  type: "POST",
	      				  url: "/wp-content/themes/semicolon/res2var.php",
	      				  data: "table=tip_ispoln&column0=max_tok_per&case=id_eq_"+isp,
	      				  success: function(data4){
	        				$("#tok_per").html('<input id="pogrst" type="text" value="'+data4+'" />');
							pogrstand=document.getElementById("pogrst").value;
							//alert("2="+mintok);
							$.ajax({
		      				  type: "POST",
		      				  url: "/wp-content/themes/semicolon/res2sel.php",
		      				  data: "table=tzlk_mz_nagr&column0=value&case=value_gteq_0&mark="+nagrstand+"",
		      				  success: function(data7){
		        					//alert("stand="+tokstand);
		        					$("#pred_n").html(seldata+data7);
							  		$.ajax({
		      	  					  type: "POST",
		     	  					  url: "/wp-content/themes/semicolon/res2sel.php",
		      	  					  data: "table=tzlk_mz_pogresh&column0=value&case=value_gteq_0&mark="+pogrstand+"",
		      	  					  success: function(data17){
				  					  //alert("2="+maxtok);
		        					  $("#max_p").html(seldata+data17);
									  //alert(max_vyv);
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
	  }

						}
		    		});  
		      	  }
		   	    });  
		      }
		    });  
	      }
	    });  
        //$("#var_v_1").prop('disabled', true);
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
					url: "/wp-content/themes/semicolon/res2var.php",
					data: "table=tip_ispoln&column0=value&case=value_gteq_0&mark="+pogrstand+"",
					success: function(data10){
	                  $("#max_p").html('<input id="t_perek" type="text" value="'+data10+'" />');
			          nagrstand=document.getElementById("t_perek").value;
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
							$.ajax({
		      					type: "POST",
		      					url: "/wp-content/themes/semicolon/res2sel.php",
		      					data: "table=tzlk_mz_nagr&column0=value&case=value_gteq_0&mark="+tokstand+"",
		      					success: function(data7){
		        					//alert("stand="+tokstand);
		        					$("#pred_n").html(seldata+data7);
			                      	$.ajax({
		                            	type: "POST",
		                            	url: "/wp-content/themes/semicolon/res2sel.php",
		                            	data: "table=tzlk_mz_pogresh&column0=value&case=value_gteq_0&mark="+pogrstand+"",
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

		//напряжение
		d = document.getElementById('napr');
		c += (d.selectedIndex>-1)?('-'+d.options[d.selectedIndex].text):'';

        //габарит
		d = document.getElementById('gab');
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'';

		if ($('input[name="nazn"]:checked').val() == 1) {
	        //макс.погрешность
			d = document.getElementById('max_p');
			c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'';		

			//предел.нагрузка
			d = document.getElementById('pred_n');
			c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'';
		
				d = document.getElementById('koeftr');
			//if (d.options[d.selectedIndex].text != tok_stand) {
		    	c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text + '/1'):'';
			//}

		}
		else{
			//исполн.100х490
			if (isp == 113) {
				d = document.getElementById('koeftr');
		    	c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text + '/1'):'';
			}
			else {
			  d = document.getElementById('koeftr');
			  if (d.options[d.selectedIndex].text != tok_stand) {
		    	c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text + '/1'):'';
			  }
			}
		}
	
		//климатич.категория
		d = document.getElementById('klim_kat');
		c += (d.selectedIndex>0)?(' '+d.options[d.selectedIndex].text + ''):'';

		//d = document.getElementById('per_n');
		//c += (d.selectedIndex>0)?('U1=' + d.options[d.selectedIndex].text + 'В'):'';
		//без обмотки
		//if (bez != '') {c += ' ('+ bez +')';}
		
		//c += ' '+v;
		if ($('input[name="nazn"]:checked').val() == 1) {
	        //MZ
			//d = document.getElementById('max_p');
			c += ' МЗ';		
		}
		
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
			srtext = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="4">Найденная номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td>Добавление</td></tr>';
			for (i = 0 ; i < sr.childNodes.length; i++) {
				if (sr.childNodes[i].nodeType == 1) {
					srtext += '<tr><td>'+(i*1+1)+'<input id="id'+i+'" type="hidden" value="'+sr.childNodes[i].value+'" /></td><td id="srt'+i+'">'+sr.childNodes[i].text+'</td><td></td><td><div onclick="addzakaz('+i+');this.className=tdbuttongn; this.innerText=aded;" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;" class="tdbuttonbl">Добавить в заказ</div></td></tr>';
				}
			}
			srtext += '</table>';
			sr.outerHTML = srtext;
		}
      }
    });
		if ($('#napr_nt').prop('checked') || $('#gab_nt').prop('checked') || $('#klim_kat_nt').prop('checked') || $('#max_p_nt').prop('checked') || $('#pred_n_nt').prop('checked') || $('#koeftr_nt').prop('checked')) 		{
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
		s.outerHTML = '<select id="likesearch" size="2" style="width:100%; height:50px"><option>Оборудование указаннного типа не найдено</option></select>';

		//тип
		d = document.getElementById('tip');
		c += (d.selectedIndex>0)?(d.options[d.selectedIndex].text):'';
		c += '-НТЗ';

		//напряжение
		d = document.getElementById('napr');
		dd = (!$('#napr_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		c += (d.selectedIndex>-1)?('-'+dd):'';

        //габарит
		d = document.getElementById('gab');
		dd = (!$('#gab_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		c += (d.selectedIndex>0)?('-'+dd+''):'';

		if ($('input[name="nazn"]:checked').val() == 1) {
	        //макс.погрешность
			d = document.getElementById('max_p');
			dd = (!$('#max_p_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
			c += (d.selectedIndex>0)?('-'+dd+''):'';		

			//предел.нагрузка
			d = document.getElementById('pred_n');
			dd = (!$('#pred_n_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
			c += (d.selectedIndex>0)?('-'+dd+''):'';
		
				d = document.getElementById('koeftr');
			//if (d.options[d.selectedIndex].text != tok_stand) {
				dd = (!$('#koeftr_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		    	c += (d.selectedIndex>0)?('-'+dd + '/1'):'';
			//}

		}
		else{
			//исполн.100х490
			if (isp == 113) {
				d = document.getElementById('koeftr');
				dd = (!$('#koeftr_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		    	c += (d.selectedIndex>0)?('-'+dd + '/1'):'';
			}
			else{
			  d = document.getElementById('koeftr');
			  if (d.options[d.selectedIndex].text != tok_stand) {
				dd = (!$('#koeftr_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		    	c += (d.selectedIndex>0)?('-'+dd + '/1'):'';
			  }
			}
		}
	
		//климатич.категория
		d = document.getElementById('klim_kat');
		dd = (!$('#klim_kat_nt').prop('checked'))?(d.options[d.selectedIndex].text):'%';
		c += (d.selectedIndex>0)?(' '+dd + ''):'';

		//d = document.getElementById('per_n');
		//c += (d.selectedIndex>0)?('U1=' + d.options[d.selectedIndex].text + 'В'):'';
		//без обмотки
		//if (bez != '') {c += ' ('+ bez +')';}
		
		//c += ' '+v;
		if ($('input[name="nazn"]:checked').val() == 1) {
	        //MZ
			//d = document.getElementById('max_p');
			c += ' МЗ';		
		}
		
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
			sr = document.getElementById('likesearch');
			_sform = 'sform';
			//sr.outerHTML = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="5">Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</td></tr><tr><td width="10%" class="tdsmaltxt">Заказываемая конфигурация:</td><td id="newzakaz">...</td><td width="10%" class="tdsmaltxt">Вы можете добавить примечание:</td><td><input type="text" id="newzakaztxt" class="inputbox1" style="width:450px;" /></td><td width="10%"><div class="tdbuttonbl" onclick="addnew(document.getElementById(_sform));" id="clcknew" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:34px;line-height:36px;">Добавить в заказ</div></td></tr></table>';
			//document.getElementById('newzakaz').innerText = document.getElementById('sform').value;
		    //document.getElementById('clcknew').innerText = 'Добавить в заказ';
			//document.getElementById('clcknew').className = 'tdbuttonbl';
			//$("#search").html('<option>Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</option>') <input type="text" class="inputbox1" style="width:250px;"/>
		}
        else {
			$("#likesearch").html(data21);
			sr = document.getElementById('likesearch');
			srtext = '<table id="likesearch" style="max-width:100%;width:100%;"><tr><td colspan="4">Найденная номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td>Добавление</td></tr>';
			for (i = 0 ; i < sr.childNodes.length; i++) {
				if (sr.childNodes[i].nodeType == 1) {
					srtext += '<tr><td>'+(i*1+1)+'<input id="id'+i+'" type="hidden" value="'+sr.childNodes[i].value+'" /></td><td id="srt'+i+'">'+sr.childNodes[i].text+'</td><td></td><td><div onclick="addzakaz('+i+');this.className=tdbuttongn; this.innerText=aded;" style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;" class="tdbuttonbl">Добавить в заказ</div></td></tr>';
				}
			}
			srtext += '</table>';
			sr.outerHTML = srtext;
		}
      }
    });
}
