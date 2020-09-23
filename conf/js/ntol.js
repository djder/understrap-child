var tip = '';
var isp = '';	
var napr = '';
var gab = '';
var klim_kat = '';
var per_t = '';	
var mintok = '';
var maxtok = '';
var defn = '';
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
	
t = document.getElementById('tip');
	
tip = t.options[t.selectedIndex].value;

$('#klass').html('<p>'+t.options[t.selectedIndex].text+'</p>');

  $('.help').click(function(){	
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var height = $(window).height();
	var top = Math.ceil(scrollTop + (height - $('#msg').outerHeight())/2);
	var mes = '';  
	tag = this.childNodes[0].textContent; 
	for (i = 0; i < help.length; i++){
		if (help[i][0] == tag && (help[i][2] == 1 || help[i][2] == 2 || help[i][2] == 3)) {mes = help[i][1];}
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

if (tip == 5 || tip == 6) {
	if (document.getElementById('rowvyv')) {document.getElementById('rowvyv').style.display = 'table-row';}
	if (document.getElementById('ntol1')) {document.getElementById('ntol1').style.display = 'inline';}
	if (document.getElementById('nali1')) {document.getElementById('nali1').style.display = 'none';}
	if (document.getElementById('ntol2')) {document.getElementById('ntol2').style.display = 'inline';}
	if (document.getElementById('max_m')) {document.getElementById('max_m').style.display = 'inline';}
	if (document.getElementById('b00')) {document.getElementById('b00').style.display = 'none';}
	if (document.getElementById('c01')) {document.getElementById('c01').style.display = 'table';}
	if (tip == 5 && document.getElementById('c00')) {
	  document.getElementById('c00').style.display = 'table';
      if (document.getElementById('td_12')){
	    $('#vtor_p_1').prop('disabled', true);
	    $('#vtor_v_1').prop('disabled', true);
	    $('#id_vtor_a_1').prop('disabled', true);
	    $('#d_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_11').prop('disabled', true);
	    $('#vtor_bn_1').prop('disabled', true);
      }
      if (document.getElementById('td_32')){
	    $('#d_vtor_a_32').prop('disabled', true);
	    $('#vtor_p_3').prop('disabled', true);
	    $('#vtor_v_3').prop('disabled', true);
	    $('#id_vtor_a_3').prop('disabled', true);
	    $('#vtor_bn_3').prop('disabled', true);
      }
	}
	if (tip == 6 && document.getElementById('d00')) {document.getElementById('d00').style.display = 'table';
      if (document.getElementById('td_42')){
	    $('#vtor_p_4').prop('disabled', true);
	    $('#vtor_v_4').prop('disabled', true);
	    $('#id_vtor_a_4').prop('disabled', true);
	    $('#d_vtor_a_4').prop('disabled', true);
	    $('#vtor_bn_4').prop('disabled', true);
      }
	}
}
/*
//tip = t.options[t.selectedIndex].value;
if (tip == 4) {
	//alert(tip);
	if (document.getElementById('rowvyv')) {document.getElementById('rowvyv').style.display = 'none';}
	if (document.getElementById('ntol1')) {document.getElementById('ntol1').style.display = 'none';}
	if (document.getElementById('nali1')) {document.getElementById('nali1').style.display = 'inline';}
	if (document.getElementById('ntol2')) {document.getElementById('ntol2').style.display = 'none';}
	if (document.getElementById('max_m')) {document.getElementById('max_m').style.display = 'none';}
	if (document.getElementById('b00')) {document.getElementById('b00').style.display = 'table';}
	if (document.getElementById('c00')) {document.getElementById('c00').style.display = 'none';}
	if (document.getElementById('d00')) {document.getElementById('d00').style.display = 'none';}
	if (document.getElementById('c01')) {document.getElementById('c01').style.display = 'none';}
  if (document.getElementById('td_02')){
	$('#vtor_p_0').prop('disabled', true);
	$('#vtor_v_0').prop('disabled', true);
	$('#id_vtor_a_0').prop('disabled', true);
	$('#d_vtor_a_0').prop('disabled', true);
	$('#vtor_b_0').prop('disabled', true);
  }
  if (document.getElementById('td_12')){
	$('#vtor_p_1').prop('disabled', true);
	$('#vtor_v_1').prop('disabled', true);
	$('#id_vtor_a_1').prop('disabled', true);
	$('#d_vtor_a_1').prop('disabled', true);
	$('#vtor_b_1').prop('disabled', true);
  }
}
//$(document).ready(function(){
//	
//});
*/

  $('#td_02').change(function(){	
	if ($(this).is(':checked')){
		$('#vtor_p_0').prop('disabled', false);
		$('#vtor_v_0').prop('disabled', false);
		$('#id_vtor_a_0').prop('disabled', false);
		$('#d_vtor_a_0').prop('disabled', false);
		$('#vtor_b_0').prop('disabled', false);
	}
	else {
		$('#vtor_p_0').prop('disabled', true);
		$('#vtor_v_0').prop('disabled', true);
		$('#id_vtor_a_0').prop('disabled', true);
		$('#d_vtor_a_0').prop('disabled', true);
		$('#vtor_b_0').prop('disabled', true);
	}
  return false;
  });
	  
  $('#td_12').change(function(){	
	if ($(this).is(':checked')){
		$('#vtor_p_1').prop('disabled', false);
		$('#vtor_v_1').prop('disabled', false);
		$('#id_vtor_a_1').prop('disabled', false);
		$('#d_vtor_a_1').prop('disabled', false);
		$('#d_vtor_a_11').prop('disabled', false);
		//$('#vtor_b_1').prop('disabled', false);
		$('#vtor_bn_1').prop('disabled', false);
		$('#td_32').prop('disabled', true);
	}
	else {
		$('#vtor_p_1').prop('disabled', true);
		$('#vtor_v_1').prop('disabled', true);
		$('#id_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_11').prop('disabled', true);
		//$('#vtor_b_1').prop('disabled', true);
		$('#vtor_bn_1').prop('disabled', true);
		$('#td_32').prop('disabled', false);
		$('#vtor_p_1 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_v_1 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#d_vtor_a_11').attr('min',0); $('#id_vtor_a_1min').val(0);
		$('#d_vtor_a_11').attr('max',0); $('#id_vtor_a_1max').val(0);
		$('#id_vtor_a_1').val(0);
			if (gab == '1'){
				if ((max_m == 400 && !$('#td_12').is(':checked'))) {
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
						$('#d_vtor_a_01').attr('max',40); $('#id_vtor_a_0max').val(40);
						$('#id_vtor_a_0').val(5);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
						$('#d_vtor_a_01').attr('max',100); $('#id_vtor_a_0max').val(100);
						$('#id_vtor_a_0').val(10);
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',20); $('#id_vtor_a_0min').val(20);
						$('#d_vtor_a_01').attr('max',200); $('#id_vtor_a_0max').val(200);
						$('#id_vtor_a_0').val(20);
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',100); $('#id_vtor_a_0min').val(100);
						$('#d_vtor_a_01').attr('max',300); $('#id_vtor_a_0max').val(300);
						$('#id_vtor_a_0').val(100);
					}
				}
			}
			if (gab == 'IV'){
				if ((max_m == 400 && !$('#td_12').is(':checked'))) {
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
						$('#d_vtor_a_01').attr('max',40); $('#id_vtor_a_0max').val(40);
						$('#id_vtor_a_0').val(10);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',20); $('#id_vtor_a_0min').val(20);
						$('#d_vtor_a_01').attr('max',100); $('#id_vtor_a_0max').val(100);
						$('#id_vtor_a_0').val(20);
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',50); $('#id_vtor_a_0min').val(50);
						$('#d_vtor_a_01').attr('max',200); $('#id_vtor_a_0max').val(200);
						$('#id_vtor_a_0').val(50);
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',150); $('#id_vtor_a_0min').val(150);
						$('#d_vtor_a_01').attr('max',300); $('#id_vtor_a_0max').val(300);
						$('#id_vtor_a_0').val(150);
					}
				}
			}
	}
  return false;
  });

  $('#td_32').change(function(){	
	if ($(this).is(':checked')){
		$('#vtor_p_3').prop('disabled', false);
		$('#vtor_v_3').prop('disabled', false);
		$('#id_vtor_a_3').prop('disabled', false);
		$('#d_vtor_a_32').prop('disabled', false);
		$('#td_12').prop('disabled', true);
	}
	else {
		$('#vtor_p_3').prop('disabled', true);
		$('#vtor_v_3').prop('disabled', true);
		$('#id_vtor_a_3').prop('disabled', true);
		$('#d_vtor_a_32').prop('disabled', true);
		$('#td_12').prop('disabled', false);
	} 
  return false;
  });

  $('#td_42').change(function(){	
	if ($(this).is(':checked')){
		$('#vtor_p_4').prop('disabled', false);
		$('#vtor_v_4').prop('disabled', false);
		$('#id_vtor_a_4').prop('disabled', false);
		$('#d_vtor_a_4').prop('disabled', false);
		$('#vtor_bn_4').prop('disabled', false);
		$('#d_vtor_a_41').prop('disabled', false);
	}
	else {
		$('#vtor_p_4').prop('disabled', true);
		$('#vtor_v_4').prop('disabled', true);
		$('#id_vtor_a_4').prop('disabled', true);
		$('#d_vtor_a_4').prop('disabled', true);
		$('#vtor_bn_4').prop('disabled', true);
		$('#d_vtor_a_41').prop('disabled', true);
		$('#d_vtor_a_41').attr('min',0); $('#id_vtor_a_4min').val(0);
		$('#d_vtor_a_41').attr('max',0); $('#id_vtor_a_4max').val(0);
		$('#id_vtor_a_4').val(0);
			if (gab == '1'){
				if ((max_m == 400 && !$('#td_42').is(':checked'))) {
					if ($('#vtor_v_2 option:selected').text() == '0.2') {
						$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
						$('#d_vtor_a_21').attr('max',40); $('#id_vtor_a_2max').val(40);
						$('#id_vtor_a_2').val(5);
					}
					if ($('#vtor_v_2 option:selected').text() == '0.5') {
						$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
						$('#d_vtor_a_21').attr('max',100); $('#id_vtor_a_2max').val(100);
						$('#id_vtor_a_2').val(10);
					}
					if ($('#vtor_v_2 option:selected').text() == '1') {
						$('#d_vtor_a_21').attr('min',20); $('#id_vtor_a_2min').val(20);
						$('#d_vtor_a_21').attr('max',200); $('#id_vtor_a_2max').val(200);
						$('#id_vtor_a_2').val(20);
					}
					if ($('#vtor_v_2 option:selected').text() == '3') {
						$('#d_vtor_a_21').attr('min',100); $('#id_vtor_a_2min').val(100);
						$('#d_vtor_a_21').attr('max',300); $('#id_vtor_a_2max').val(300);
						$('#id_vtor_a_2').val(100);
					}
				}
			}
			if (gab == 'IV'){
				if ((max_m == 400 && !$('#td_42').is(':checked'))) {
					if ($('#vtor_v_2 option:selected').text() == '0.2') {
						$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
						$('#d_vtor_a_21').attr('max',40); $('#id_vtor_a_2max').val(40);
						$('#id_vtor_a_2').val(10);
					}
					if ($('#vtor_v_2 option:selected').text() == '0.5') {
						$('#d_vtor_a_21').attr('min',20); $('#id_vtor_a_2min').val(20);
						$('#d_vtor_a_21').attr('max',100); $('#id_vtor_a_2max').val(100);
						$('#id_vtor_a_2').val(20);
					}
					if ($('#vtor_v_2 option:selected').text() == '1') {
						$('#d_vtor_a_21').attr('min',50); $('#id_vtor_a_2min').val(50);
						$('#d_vtor_a_21').attr('max',200); $('#id_vtor_a_2max').val(200);
						$('#id_vtor_a_2').val(50);
					}
					if ($('#vtor_v_2 option:selected').text() == '3') {
						$('#d_vtor_a_21').attr('min',150); $('#id_vtor_a_2min').val(150);
						$('#d_vtor_a_21').attr('max',300); $('#id_vtor_a_2max').val(300);
						$('#id_vtor_a_2').val(150);
					}
				}
			}
	}
  return false;
  });


  $('#vtor_v_0').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 5){
		if (napr == 6 || napr == 10){
			if (gab == '1'){
				if ((max_m == 400 && !$('#td_12').is(':checked'))) {
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
						$('#d_vtor_a_01').attr('max',40); $('#id_vtor_a_0max').val(40);
						$('#id_vtor_a_0').val(5);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
						$('#d_vtor_a_01').attr('max',100); $('#id_vtor_a_0max').val(100);
						$('#id_vtor_a_0').val(10);
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',20); $('#id_vtor_a_0min').val(20);
						$('#d_vtor_a_01').attr('max',200); $('#id_vtor_a_0max').val(200);
						$('#id_vtor_a_0').val(20);
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',100); $('#id_vtor_a_0min').val(100);
						$('#d_vtor_a_01').attr('max',300); $('#id_vtor_a_0max').val(300);
						$('#id_vtor_a_0').val(100);
					}
				}
			}
			if (gab == 'IV'){
				if ((max_m == 400 && !$('#td_12').is(':checked'))) {
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
						$('#d_vtor_a_01').attr('max',40); $('#id_vtor_a_0max').val(40);
						$('#id_vtor_a_0').val(10);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',20); $('#id_vtor_a_0min').val(20);
						$('#d_vtor_a_01').attr('max',100); $('#id_vtor_a_0max').val(100);
						$('#id_vtor_a_0').val(20);
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',50); $('#id_vtor_a_0min').val(50);
						$('#d_vtor_a_01').attr('max',200); $('#id_vtor_a_0max').val(200);
						$('#id_vtor_a_0').val(50);
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',150); $('#id_vtor_a_0min').val(150);
						$('#d_vtor_a_01').attr('max',300); $('#id_vtor_a_0max').val(300);
						$('#id_vtor_a_0').val(150);
					}
				}
			}
				if ((max_m == 400 && $('#td_12').is(':checked'))) {
				  if (gab == '1' || gab == 'IV'){
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
						$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
						$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
						$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
						$('#id_vtor_a_0').val(5);
						$('#id_vtor_a_1').val(5);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
						$('#d_vtor_a_01').attr('max',90); $('#id_vtor_a_0max').val(90);
						$('#d_vtor_a_11').attr('min',10); $('#id_vtor_a_1min').val(10);
						$('#d_vtor_a_11').attr('max',90); $('#id_vtor_a_1max').val(90);
						$('#id_vtor_a_0').val(10);
						$('#id_vtor_a_1').val(10);
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
							$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
							$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
							$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
							$('#id_vtor_a_0').val(5);
							$('#id_vtor_a_1').val(5);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',25); $('#id_vtor_a_0min').val(25);
						$('#d_vtor_a_01').attr('max',175); $('#id_vtor_a_0max').val(175);
						$('#d_vtor_a_11').attr('min',25); $('#id_vtor_a_1min').val(25);
						$('#d_vtor_a_11').attr('max',175); $('#id_vtor_a_1max').val(175);
						$('#id_vtor_a_0').val(25);
						$('#id_vtor_a_1').val(25);
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
							$('#d_vtor_a_01').attr('max',90); $('#id_vtor_a_0max').val(90);
							$('#d_vtor_a_11').attr('min',10); $('#id_vtor_a_1min').val(10);
							$('#d_vtor_a_11').attr('max',90); $('#id_vtor_a_1max').val(90);
							$('#id_vtor_a_0').val(10);
							$('#id_vtor_a_1').val(10);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
							$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
							$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
							$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
							$('#id_vtor_a_0').val(5);
							$('#id_vtor_a_1').val(5);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
						$('#d_vtor_a_01').attr('max',225); $('#id_vtor_a_0max').val(225);
						$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
						$('#d_vtor_a_11').attr('max',225); $('#id_vtor_a_1max').val(225);
						$('#id_vtor_a_0').val(75);
						$('#id_vtor_a_1').val(75);
						if ($('#vtor_v_1 option:selected').text() == '1.0') {
							$('#d_vtor_a_01').attr('min',25); $('#id_vtor_a_0min').val(25);
							$('#d_vtor_a_01').attr('max',175); $('#id_vtor_a_0max').val(175);
							$('#d_vtor_a_11').attr('min',25); $('#id_vtor_a_1min').val(25);
							$('#d_vtor_a_11').attr('max',175); $('#id_vtor_a_1max').val(175);
							$('#id_vtor_a_0').val(25);
							$('#id_vtor_a_1').val(25);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
							$('#d_vtor_a_01').attr('max',90); $('#id_vtor_a_0max').val(90);
							$('#d_vtor_a_11').attr('min',10); $('#id_vtor_a_1min').val(10);
							$('#d_vtor_a_11').attr('max',90); $('#id_vtor_a_1max').val(90);
							$('#id_vtor_a_0').val(10);
							$('#id_vtor_a_1').val(10);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
							$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
							$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
							$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
							$('#id_vtor_a_0').val(5);
							$('#id_vtor_a_1').val(5);
						}
					}
				  }
				}
			//$('#id_vtor_a_4').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_41').attr('min'));  
		}
	}	
	return false;
  });

  $('#vtor_v_2').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 6){
		if (napr == 6 || napr == 10){
			if (gab == '1'){
				if ((max_m == 400 && !$('#td_12').is(':checked'))) {
					if ($('#vtor_v_2 option:selected').text() == '0.2') {
						$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
						$('#d_vtor_a_21').attr('max',40); $('#id_vtor_a_2max').val(40);
						$('#id_vtor_a_2').val(5);
					}
					if ($('#vtor_v_2 option:selected').text() == '0.5') {
						$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
						$('#d_vtor_a_21').attr('max',100); $('#id_vtor_a_2max').val(100);
						$('#id_vtor_a_2').val(10);
					}
					if ($('#vtor_v_2 option:selected').text() == '1') {
						$('#d_vtor_a_21').attr('min',20); $('#id_vtor_a_2min').val(20);
						$('#d_vtor_a_21').attr('max',200); $('#id_vtor_a_2max').val(200);
						$('#id_vtor_a_2').val(20);
					}
					if ($('#vtor_v_2 option:selected').text() == '3') {
						$('#d_vtor_a_21').attr('min',100); $('#id_vtor_a_2min').val(100);
						$('#d_vtor_a_21').attr('max',300); $('#id_vtor_a_2max').val(300);
						$('#id_vtor_a_2').val(100);
					}
				}
			}
			if (gab == 'IV'){
				if ((max_m == 400 && !$('#td_12').is(':checked'))) {
					if ($('#vtor_v_2 option:selected').text() == '0.2') {
						$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
						$('#d_vtor_a_21').attr('max',40); $('#id_vtor_a_2max').val(40);
						$('#id_vtor_a_2').val(10);
					}
					if ($('#vtor_v_2 option:selected').text() == '0.5') {
						$('#d_vtor_a_21').attr('min',20); $('#id_vtor_a_2min').val(20);
						$('#d_vtor_a_21').attr('max',100); $('#id_vtor_a_2max').val(100);
						$('#id_vtor_a_2').val(20);
					}
					if ($('#vtor_v_2 option:selected').text() == '1') {
						$('#d_vtor_a_21').attr('min',50); $('#id_vtor_a_2min').val(50);
						$('#d_vtor_a_21').attr('max',200); $('#id_vtor_a_2max').val(200);
						$('#id_vtor_a_2').val(50);
					}
					if ($('#vtor_v_2 option:selected').text() == '3') {
						$('#d_vtor_a_21').attr('min',150); $('#id_vtor_a_2min').val(150);
						$('#d_vtor_a_21').attr('max',300); $('#id_vtor_a_2max').val(300);
						$('#id_vtor_a_2').val(150);
					}
				}
			}
				if ((max_m == 400 && $('#td_42').is(':checked'))) {
				  if (gab == '1' || gab == 'IV'){
					if ($('#vtor_v_2 option:selected').text() == '0.2') {
						$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
						$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
						$('#id_vtor_a_2').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_2 option:selected').text() == '0.5') {
						$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
						$('#d_vtor_a_21').attr('max',90); $('#id_vtor_a_2max').val(90);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
						$('#id_vtor_a_2').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
							$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_2').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_2 option:selected').text() == '1') {
						$('#d_vtor_a_21').attr('min',25); $('#id_vtor_a_2min').val(25);
						$('#d_vtor_a_21').attr('max',175); $('#id_vtor_a_2max').val(175);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
						$('#id_vtor_a_2').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
							$('#d_vtor_a_21').attr('max',90); $('#id_vtor_a_2max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_2').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
							$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_2').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_2 option:selected').text() == '3') {
						$('#d_vtor_a_21').attr('min',75); $('#id_vtor_a_2min').val(75);
						$('#d_vtor_a_21').attr('max',225); $('#id_vtor_a_2max').val(225);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_2').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1.0') {
							$('#d_vtor_a_21').attr('min',25); $('#id_vtor_a_2min').val(25);
							$('#d_vtor_a_21').attr('max',175); $('#id_vtor_a_2max').val(175);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
							$('#id_vtor_a_2').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
							$('#d_vtor_a_21').attr('max',90); $('#id_vtor_a_2max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_2').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
							$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_2').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				  }
				}
			//$('#id_vtor_a_4').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_41').attr('min'));  
		}
	}	
	return false;
  });


  $('#vtor_v_1').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 5){
		if (napr == 6 || napr == 10){
				 if (gab == '1' || gab == 'IV'){
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
						$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
						$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
						$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
						$('#id_vtor_a_0').val(5);
						$('#id_vtor_a_1').val(5);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
						$('#d_vtor_a_01').attr('max',90); $('#id_vtor_a_0max').val(90);
						$('#d_vtor_a_11').attr('min',10); $('#id_vtor_a_1min').val(10);
						$('#d_vtor_a_11').attr('max',90); $('#id_vtor_a_1max').val(90);
						$('#id_vtor_a_0').val(10);
						$('#id_vtor_a_1').val(10);
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
							$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
							$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
							$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
							$('#id_vtor_a_0').val(5);
							$('#id_vtor_a_1').val(5);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',25); $('#id_vtor_a_0min').val(25);
						$('#d_vtor_a_01').attr('max',175); $('#id_vtor_a_0max').val(175);
						$('#d_vtor_a_11').attr('min',25); $('#id_vtor_a_1min').val(25);
						$('#d_vtor_a_11').attr('max',175); $('#id_vtor_a_1max').val(175);
						$('#id_vtor_a_0').val(25);
						$('#id_vtor_a_1').val(25);
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
							$('#d_vtor_a_01').attr('max',90); $('#id_vtor_a_0max').val(90);
							$('#d_vtor_a_11').attr('min',10); $('#id_vtor_a_1min').val(10);
							$('#d_vtor_a_11').attr('max',90); $('#id_vtor_a_1max').val(90);
							$('#id_vtor_a_0').val(10);
							$('#id_vtor_a_1').val(10);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
							$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
							$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
							$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
							$('#id_vtor_a_0').val(5);
							$('#id_vtor_a_1').val(5);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
						$('#d_vtor_a_01').attr('max',225); $('#id_vtor_a_0max').val(225);
						$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
						$('#d_vtor_a_11').attr('max',225); $('#id_vtor_a_1max').val(225);
						$('#id_vtor_a_0').val(75);
						$('#id_vtor_a_1').val(75);
						if ($('#vtor_v_1 option:selected').text() == '1') {
							$('#d_vtor_a_01').attr('min',25); $('#id_vtor_a_0min').val(25);
							$('#d_vtor_a_01').attr('max',175); $('#id_vtor_a_0max').val(175);
							$('#d_vtor_a_11').attr('min',25); $('#id_vtor_a_1min').val(25);
							$('#d_vtor_a_11').attr('max',175); $('#id_vtor_a_1max').val(175);
							$('#id_vtor_a_0').val(25);
							$('#id_vtor_a_1').val(25);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',10); $('#id_vtor_a_0min').val(10);
							$('#d_vtor_a_01').attr('max',90); $('#id_vtor_a_0max').val(90);
							$('#d_vtor_a_11').attr('min',10); $('#id_vtor_a_1min').val(10);
							$('#d_vtor_a_11').attr('max',90); $('#id_vtor_a_1max').val(90);
							$('#id_vtor_a_0').val(10);
							$('#id_vtor_a_1').val(10);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',5); $('#id_vtor_a_0min').val(5);
							$('#d_vtor_a_01').attr('max',35); $('#id_vtor_a_0max').val(35);
							$('#d_vtor_a_11').attr('min',5); $('#id_vtor_a_1min').val(5);
							$('#d_vtor_a_11').attr('max',35); $('#id_vtor_a_1max').val(35);
							$('#id_vtor_a_0').val(5);
							$('#id_vtor_a_1').val(5);
						}
					}
				  }
			}
			//$('#id_vtor_a_4').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_41').attr('min'));  
		}
	
	return false;
  });

  $('#vtor_v_4').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 6){
		if (napr == 6 || napr == 10){
				 if (gab == '1' || gab == 'IV'){
					if ($('#vtor_v_2 option:selected').text() == '0.2') {
						$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
						$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
						$('#id_vtor_a_2').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_2 option:selected').text() == '0.5') {
						$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
						$('#d_vtor_a_21').attr('max',90); $('#id_vtor_a_2max').val(90);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
						$('#id_vtor_a_2').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
							$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_2').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_2 option:selected').text() == '1') {
						$('#d_vtor_a_21').attr('min',25); $('#id_vtor_a_2min').val(25);
						$('#d_vtor_a_21').attr('max',175); $('#id_vtor_a_2max').val(175);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
						$('#id_vtor_a_2').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
							$('#d_vtor_a_21').attr('max',90); $('#id_vtor_a_2max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_2').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
							$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_2').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_2 option:selected').text() == '3') {
						$('#d_vtor_a_21').attr('min',75); $('#id_vtor_a_2min').val(75);
						$('#d_vtor_a_21').attr('max',225); $('#id_vtor_a_2max').val(225);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_2').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_21').attr('min',25); $('#id_vtor_a_2min').val(25);
							$('#d_vtor_a_21').attr('max',175); $('#id_vtor_a_2max').val(175);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
							$('#id_vtor_a_2').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_21').attr('min',10); $('#id_vtor_a_2min').val(10);
							$('#d_vtor_a_21').attr('max',90); $('#id_vtor_a_2max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_2').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_21').attr('min',5); $('#id_vtor_a_2min').val(5);
							$('#d_vtor_a_21').attr('max',35); $('#id_vtor_a_2max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_2').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				  }
			}
			//$('#id_vtor_a_4').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_41').attr('min'));  
		}
	
	return false;
  });



  $('#d_vtor_a_01').change(function(){
	$('#id_vtor_a_0').val($(this).val());  
	if ((napr == 6 && gab == '1') || (napr == 10 && gab == '1') || (napr == 6 && gab == 'IV') || (napr == 10 && gab == 'IV')){
	if ($('#td_12').is(':checked'))  {
	  if ($('#vtor_v_1 option:selected').text() == '0.2') {
		$('#d_vtor_a_11').attr('max', 40 - $(this).val());
		$('#id_vtor_a_1max').val(40 - $(this).val());
	  }
	  if ($('#vtor_v_1 option:selected').text() == '0.5') {
		$('#d_vtor_a_11').attr('max', 100 - $(this).val());
		$('#id_vtor_a_1max').val(100 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 40 - $(this).val());
			$('#id_vtor_a_1max').val(40 - $(this).val());
		}
	  }
	  if ($('#vtor_v_1 option:selected').text() == '1') {
		$('#d_vtor_a_11').attr('max', 200 - $(this).val());
		$('#id_vtor_a_1max').val(200 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '0.5') {
			$('#d_vtor_a_11').attr('max', 100 - $(this).val());
			$('#id_vtor_a_1max').val(100 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 40 - $(this).val());
			$('#id_vtor_a_1max').val(40 - $(this).val());
		}
	  }
	  if ($('#vtor_v_1 option:selected').text() == '3') {
		$('#d_vtor_a_11').attr('max', 300 - $(this).val());
		$('#id_vtor_a_1max').val(300 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '1') {
			$('#d_vtor_a_11').attr('max', 200 - $(this).val());
			$('#id_vtor_a_1max').val(200 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.5') {
			$('#d_vtor_a_11').attr('max', 100 - $(this).val());
			$('#id_vtor_a_1max').val(100 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 40 - $(this).val());
			$('#id_vtor_a_1max').val(40 - $(this).val());
		}
	  }
	}
	}
  return false;
  });

  $('#d_vtor_a_21').change(function(){
	$('#id_vtor_a_2').val($(this).val());  
	if ((napr == 6 && gab == '1') || (napr == 10 && gab == '1') || (napr == 6 && gab == 'IV') || (napr == 10 && gab == 'IV')){
	if ($('#td_42').is(':checked'))  {
	  if ($('#vtor_v_4 option:selected').text() == '0.2') {
		$('#d_vtor_a_41').attr('max', 40 - $(this).val());
		$('#id_vtor_a_4max').val(40 - $(this).val());
	  }
	  if ($('#vtor_v_4 option:selected').text() == '0.5') {
		$('#d_vtor_a_41').attr('max', 100 - $(this).val());
		$('#id_vtor_a_4max').val(100 - $(this).val());
		if ($('#vtor_v_2 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 40 - $(this).val());
			$('#id_vtor_a_4max').val(40 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '1') {
		$('#d_vtor_a_41').attr('max', 200 - $(this).val());
		$('#id_vtor_a_4max').val(200 - $(this).val());
		if ($('#vtor_v_2 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 100 - $(this).val());
			$('#id_vtor_a_4max').val(100 - $(this).val());
		}
		if ($('#vtor_v_2 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 40 - $(this).val());
			$('#id_vtor_a_4max').val(40 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '3') {
		$('#d_vtor_a_41').attr('max', 300 - $(this).val());
		$('#id_vtor_a_4max').val(300 - $(this).val());
		if ($('#vtor_v_2 option:selected').text() == '1') {
			$('#d_vtor_a_41').attr('max', 200 - $(this).val());
			$('#id_vtor_a_4max').val(200 - $(this).val());
		}
		if ($('#vtor_v_2 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 100 - $(this).val());
			$('#id_vtor_a_4max').val(100 - $(this).val());
		}
		if ($('#vtor_v_2 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 40 - $(this).val());
			$('#id_vtor_a_4max').val(40 - $(this).val());
		}
	  }
	}
	}
  return false;
  });

  $('#d_vtor_a_11').change(function(){
	$('#id_vtor_a_1').val($(this).val());  
	if ((napr == 6 && gab == '1')|| (napr == 10 && gab == '1') || (napr == 6 && gab == 'IV') || (napr == 10 && gab == 'IV')){
	if ($('#vtor_v_0 option:selected').text() == '0.2') {
		$('#d_vtor_a_01').attr('max', 40 - $(this).val());
		$('#id_vtor_a_0max').val(40 - $(this).val());
	}
	if ($('#vtor_v_0 option:selected').text() == '0.5') {
		$('#d_vtor_a_01').attr('max', 100 - $(this).val());
		$('#id_vtor_a_0max').val(100 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 40 - $(this).val());
			$('#id_vtor_a_0max').val(40 - $(this).val());
		}
	}
	if ($('#vtor_v_0 option:selected').text() == '1') {
		$('#d_vtor_a_01').attr('max', 200 - $(this).val());
		$('#id_vtor_a_0max').val(200 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '0.5') {
			$('#d_vtor_a_01').attr('max', 100 - $(this).val());
			$('#id_vtor_a_0max').val(100 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 40 - $(this).val());
			$('#id_vtor_a_0max').val(40 - $(this).val());
		}
	}
	if ($('#vtor_v_0 option:selected').text() == '3') {
		$('#d_vtor_a_01').attr('max', 300 - $(this).val());
		$('#id_vtor_a_0max').val(300 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '1') {
			$('#d_vtor_a_01').attr('max', 200 - $(this).val());
			$('#id_vtor_a_0max').val(200 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.5') {
			$('#d_vtor_a_01').attr('max', 100 - $(this).val());
			$('#id_vtor_a_0max').val(100 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 40 - $(this).val());
			$('#id_vtor_a_0max').val(40 - $(this).val());
		}
	}
	}
  return false;
  });
	
  $('#d_vtor_a_41').change(function(){
	$('#id_vtor_a_4').val($(this).val());  
	if ((napr == 6 && gab == '1')|| (napr == 10 && gab == '1') || (napr == 6 && gab == 'IV') || (napr == 10 && gab == 'IV')){
	if ($('#vtor_v_2 option:selected').text() == '0.2') {
		$('#d_vtor_a_21').attr('max', 40 - $(this).val());
		$('#id_vtor_a_2max').val(40 - $(this).val());
	}
	if ($('#vtor_v_2 option:selected').text() == '0.5') {
		$('#d_vtor_a_21').attr('max', 100 - $(this).val());
		$('#id_vtor_a_2max').val(100 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_21').attr('max', 40 - $(this).val());
			$('#id_vtor_a_2max').val(40 - $(this).val());
		}
	}
	if ($('#vtor_v_2 option:selected').text() == '1') {
		$('#d_vtor_a_21').attr('max', 200 - $(this).val());
		$('#id_vtor_a_2max').val(200 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_21').attr('max', 100 - $(this).val());
			$('#id_vtor_a_2max').val(100 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_21').attr('max', 40 - $(this).val());
			$('#id_vtor_a_2max').val(40 - $(this).val());
		}
	}
	if ($('#vtor_v_2 option:selected').text() == '3') {
		$('#d_vtor_a_21').attr('max', 300 - $(this).val());
		$('#id_vtor_a_2max').val(300 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1') {
			$('#d_vtor_a_21').attr('max', 200 - $(this).val());
			$('#id_vtor_a_2max').val(200 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_21').attr('max', 100 - $(this).val());
			$('#id_vtor_a_2max').val(100 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_21').attr('max', 40 - $(this).val());
			$('#id_vtor_a_2max').val(40 - $(this).val());
		}
	}
	}
  return false;
  });
	


  $('#tip').change(function(){	
	tip = this.options[this.selectedIndex].value; 
	  //alert(tip);
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
		//$("#bar_v").html('');
      }
    });
/*    $.ajax({
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
*/  return false;
  });

  $('#napr').change(function(){	
	napr = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	t = document.getElementById('tip');
	//alert(t);
	tip = t.options[t.selectedIndex].value;
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
/*	$.ajax({
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
*/  
  return false;
  });	

  $('#vtor_b_1').change(function(){	
	b_1 = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	data20 = '';
/*
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nagruz&column0=nagr&case=vtor_t_eq_"+v_1,
      success: function(data20){
        $("#d_vtor_a_1").html(seldata+data20);
      }
    });
*/
	if (gab == '1'){
	  if (b_1.indexOf('Р') > -1) {
		data20 = '<option value="10">10</option><option value="15">15</option><option value="20">20</option>';
	  }
	  else {
		data20 = '<option value="5">5</option><option value="10">10</option>';
	  }
	}
	if (gab == 'IV'){
	  if (b_1.indexOf('Р') > -1) {
		data20 = '<option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option><option value="30">30</option>';
	  }
	  else {
		data20 = '<option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option>';
	  }
	}
	$("#d_vtor_c_1").html(seldata+data20);  
  return false;
  });	
	
  $('[id^=d_vtor_a_]').change(function(){	
	if (this.id.indexOf('nt') == -1)  {
	  if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);}
  }
	return false;
  });	

  $('[id^=vtor_v_]').change(function(){	
	if (this.id.indexOf('nt') == -1)  {
	 idd = this.id; idd = idd.replace('vtor_v_', 'd_vtor_a_');	
	  if (this.selectedIndex > 0){
		  $('#'+this.id+'_nt').prop('disabled', false);
		  $('#'+idd+'_nt').prop('disabled', false);
	  }else{
		  $('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);
		  $('#'+idd+'_nt').prop('checked', false);$('#'+idd+'_nt').prop('disabled', true);
	  }
  }
	return false;
  });	

  $('[id^=vtor_a_]').change(function(){	
	if (this.id.indexOf('nt') == -1)  {
	  if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);}
  }
	return false;
  });	

  $('[id^=vtor_b_]').change(function(){	
	if (this.id.indexOf('nt') == -1)  {
	  if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);}
  }
	return false;
  });	

  $('[id^=d_vtor_c_]').change(function(){	
	if (this.id.indexOf('nt') == -1)  {
	  if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);}
  }
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
      data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      success: function(data2){
        $("#klim_kat").html(seldata+data2);
	    if (document.getElementById('rowvyv') && tip == 5 && gab == 'IV') {document.getElementById('rowvyv').style.display = 'none';}
	    if (document.getElementById('rowvyv') && tip == 6 && gab == 'IV') {document.getElementById('rowvyv').style.display = 'none';}
	    if (document.getElementById('rowvyv') && tip == 5 && gab == '1') {document.getElementById('rowvyv').style.display = 'table-row';}
	    if (document.getElementById('rowvyv') && tip == 6 && gab == '1') {document.getElementById('rowvyv').style.display = 'table-row';}
		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2rad.php",
	      data: "table=sectermref&column0=sec_term_id&column1=sec_term&case=tip_isp_id_eq_"+isp+"&mark=1",
	      success: function(data15){
			$("#var_v_v").html(data15);
			$('#var_v_v_nt').prop('disabled', false);

			    $("#sec_term_id_sec_term_1").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_2").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_3").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_4").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	  
		      }
		    });  
	      }
	    });  

	    $.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2var.php",
	      data: "table=nom_napr&column0=napr&case=id_tip_eq_"+tip+"_and_kl_napr_eq_"+napr+"_and_dflt_eq_1",
	      success: function(data4){
	        $("#def_n").html('<input id="def_np" type="text" value="'+data4+'" />');
			defn=document.getElementById("def_np").value;
			//alert(defn);
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=nom_napr&column0=napr&column1=extra_napr&case=id_tip_eq_"+tip+"_and_kl_napr_eq_"+napr+"&mark="+defn+"",
		      success: function(data5){
				//alert("2="+maxtok);
		        $("#per_n").html(seldata+data5);
				if (tip == 5 && napr == 6 && gab == 'IV') {
					$("#per_n").html(seldata+'<option value="6000" selected>6000/V3</option><option value="6300">6300/V3</option>');
					$("#vtor_p_0").html('<option value="10" selected>100/V3</option>');
					$("#vtor_p_1").html('<option value="10" selected>100/V3</option>');
					$("#vtor_p_3").html('<option value="">...</option><option value="10">100/3</option><option value="100">100</option>');
					$("#vtor_v_3").html('<option value="">...</option><option value="3">3</option><option value="4">3Р</option>');
					$("#d_vtor_a_32").html('<option value="">...</option><option value="100">100</option><option value="150">150</option><option value="200">200</option><option value="300">300</option>');
				}
				if (tip == 5 && napr == 10 && gab == 'IV') {
					$("#per_n").html(seldata+'<option value="10000" selected>10000/V3</option><option value="10500">10500/V3</option>');
					$("#vtor_p_0").html('<option value="10" selected>100/V3</option>');
					$("#vtor_p_1").html('<option value="10" selected>100/V3</option>');
					$("#vtor_p_3").html('<option value="">...</option><option value="10">100/3</option><option value="100">100</option>');
					$("#vtor_v_3").html('<option value="">...</option><option value="3">3</option><option value="4">3Р</option>');
					$("#d_vtor_a_32").html('<option value="">...</option><option value="100">100</option><option value="150">150</option><option value="200">200</option><option value="300">300</option>');
				}
				if (tip == 6 && napr == 6 && gab == '1') {
					$("#vtor_p_2").html('<option value="">...</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option>');
					$("#vtor_p_4").html('<option value="">...</option><option value="100">100</option><option value="110">110</option><option value="120">120</option><option value="127">127</option><option value="200">200</option><option value="220">220</option><option value="230">230</option>');
				}
				if (tip == 6 && napr == 6 && gab == 'IV') {
					$("#per_n").html(seldata+'<option value="6000" selected>6000</option>');
					$("#vtor_p_2").html('<option value="100" selected>100</option>');
					$("#vtor_p_4").html('<option value="100" selected>100</option>');
				}
				if (tip == 6 && napr == 10 && gab == 'IV') {
					$("#per_n").html(seldata+'<option value="10000" selected>10000</option>');
					$("#vtor_p_2").html('<option value="100" selected>100</option>');
					$("#vtor_p_4").html('<option value="100" selected>100</option>');
				}

	$.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2var.php",
      data: "table=tip_ispoln&column0=max_tok&case=id_eq_"+isp,
      success: function(data3){
		$("#max_t").html('<input id="max_tok" type="text" value="'+data3+'" />');
		maxtok=document.getElementById("max_tok").value;
		//alert("max="+maxtok); alert(document.getElementById("min_t"));
		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2var.php",
	      data: "table=tip_ispoln&column0=min_tok&case=id_eq_"+isp,
	      success: function(data4){
			
	        $("#min_t").html('<input id="min_tok" type="text" value="'+data4+'" />');
			mintok=document.getElementById("min_tok").value;
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=per_t&column0=tok&case=tok_lteq_"+maxtok+'_and_tok_gteq_'+mintok,
		      success: function(data5){
				//alert("2="+maxtok);
		        $("#per_t").html(seldata+data5);
				  
/*				$.ajax({
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
*/
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
/*      }
    });  
*/  return false;
  });	

  $('#per_t').change(function(){	
	per_t = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	if (gab == '1') {
	$.ajax({
	  type: "POST",
	  url: "/wp-content/themes/semicolon/res2var.php",
	  data: "table=tok_term&column0=max5&case=tok_eq_"+per_t,
	  success: function(data8){
	    $("#tok_term").html('<input id="t_term" type="text" value="'+data8+'" />');
	    tokterm=document.getElementById("t_term").value;
		//alert(document.getElementById("t_term"));
		$.ajax({
		  type: "POST",
		  url: "/wp-content/themes/semicolon/res2var.php",
		  //data: "table=tok_term&column0=stand&case=tok_eq_"+per_t,
		  data: "table=tok_term&column0=min5&case=tok_eq_"+per_t,
		  success: function(data9){
		    //alert(document.getElementById("tok_stand"));
		    //$("#tok_stand").html('<input id="t_stand" type="text" value="'+data9+'" />');
			//tokstand=document.getElementById("t_stand").value;  
	    	$("#tok_term0").html('<input id="t_term0" type="text" value="'+data9+'" />');
	    	tokterm0=document.getElementById("t_term0").value;

			//значение первичного тока вторичной обмотки, равное per_t
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=per_t&column0=tok&case=tok_lteq_"+per_t+"_and_tok_gteq_"+mintok+"&mark="+per_t+"",
		      success: function(data21){
                $("#d_vtor_p_1").html(seldata+data21);
			  }
			});	
/*
*/			  
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=tokterm&column0=tokterm5&case=tokterm5_lteq_"+tokterm+"_and_tokterm5_gteq_"+tokterm0+"",
		      success: function(data7){
		        //alert("stand="+tokstand);
		        $("#term_t").html(seldata+data7);
				if (per_t == 30) {$("#term_t").append( $('<option value="12">12.5</option>'));}  
				$('#term_t_nt').prop('disabled', false);

				}
		    });  
		  }
		});  
	  }
	});  
    }  
	if (gab == 'IV') {
	$.ajax({
	  type: "POST",
	  url: "/wp-content/themes/semicolon/res2var.php",
	  data: "table=tok_term&column0=max51&case=tok_eq_"+per_t,
	  success: function(data8){
	    $("#tok_term").html('<input id="t_term" type="text" value="'+data8+'" />');
	    tokterm=document.getElementById("t_term").value;
		//alert(document.getElementById("t_term"));
		$.ajax({
		  type: "POST",
		  url: "/wp-content/themes/semicolon/res2var.php",
		  //data: "table=tok_term&column0=stand&case=tok_eq_"+per_t,
		  data: "table=tok_term&column0=min51&case=tok_eq_"+per_t,
		  success: function(data9){
		    //alert(document.getElementById("tok_stand"));
		    //$("#tok_stand").html('<input id="t_stand" type="text" value="'+data9+'" />');
			//tokstand=document.getElementById("t_stand").value;  
	    	$("#tok_term0").html('<input id="t_term0" type="text" value="'+data9+'" />');
	    	tokterm0=document.getElementById("t_term0").value;

			//значение первичного тока вторичной обмотки, равное per_t
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=per_t&column0=tok&case=tok_lteq_"+per_t+"_and_tok_gteq_"+mintok+"&mark="+per_t+"",
		      success: function(data21){
                $("#d_vtor_p_1").html(seldata+data21);
			  }
			});	
/*
*/			  
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=tokterm&column0=tokterm&case=tokterm_lteq_"+tokterm+"_and_tokterm_gteq_"+tokterm0+"",
		      success: function(data7){
		        //alert("stand="+tokstand);
		        $("#term_t").html(seldata+data7);
				if (per_t == 30) {$("#term_t").append( $('<option value="12">12.5</option>'));}  
				if ($("#vtor_a_1 :last").text() == '15')  {
					$("#vtor_a_1").append( $('<option value="20">20</option>'));  
					$("#vtor_a_1").append( $('<option value="25">25</option>'));  
					$("#vtor_a_1").append( $('<option value="30">30</option>'));  
					$("#vtor_a_1").append( $('<option value="40">40</option>'));  
					$("#vtor_a_1").append( $('<option value="50">50</option>'));  
					$("#vtor_a_1").append( $('<option value="60">60</option>'));  
				}


				}
		    });  
		  }
		});  
	  }
	});  
    }  
	  
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
	  if (rowinner1 == '') {rowinner1 = document.getElementById("c01").rows[2].innerHTML;}
	  if (!perekl) {otp = true; $('#perek').prop('disabled', true);}
	  tab = document.getElementById(t);
	  t = t.substr(2,1)*1;
	  if (tab && !perekl && (obm[t-1]==0)) {
		var rowCount = tab.rows.length;
		rowinner0 = tab.rows[rowCount-2].innerHTML;
		var row = tab.insertRow(rowCount-2);
	    //if (rowinner1 != '') {rowinner1 = document.getElementById("a0"+t).rows[2].innerHTML;}
		vyv++;
		rowinner0 = rowinner0.replace('<p></p></td>', '<p>' + (rowCount-1) + '</p></td>');
        rowinner0 = rowinner0.replace('_0" class="inputbox"', '_' + (rowCount-1) + '" class="inputbox"');
		rowinner0 = rowinner0.replace('id="td_'+(t)+'"',        'id="td_'+(t)+'_'        + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_p_'+(t)+'"',    'id="d_vtor_p_'+(t)+'_'    + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_v_'+(t)+'"',    'id="d_vtor_v_'+(t)+'_'    + (rowCount-1) + '"');
		//rowinner0 = rowinner0.replace('id="id_vtor_a_'+(t)+'"', 'id="id_vtor_a_'+(t)+'_' + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_a_'+(t)+'"',  'id="vtor_a_'+(t)+'_'  + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_a_'+(t)+'_nt"','id="vtor_a_'+(t)+'_'  + (rowCount-1) + '_nt"');
		rowinner0 = rowinner0.replace('id="vtor_b_'+(t)+'"',    'id="vtor_b_'+(t)+'_'    + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="vtor_b_'+(t)+'_nt"','id="vtor_b_'+(t)+'_'  + (rowCount-1) + '_nt"');
		//rowinner0 = rowinner0.replace('id="id_vtor_c_'+(t)+'"', 'id="id_vtor_c_'+(t)+'_' + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_c_'+(t)+'"',  'id="d_vtor_c_'+(t)+'_'  + (rowCount-1) + '"');
		rowinner0 = rowinner0.replace('id="d_vtor_c_'+(t)+'_nt"','id="d_vtor_c_'+(t)+'_'  + (rowCount-1) + '_nt"');
		row.innerHTML = rowinner0;
		if ( t > 0 ){ obm[t-1]++; }
		di = document.getElementById("d_vtor_p_"+t);
		if (di.options[di.selectedIndex]){
		  d = di.options[di.selectedIndex].text;
		  dp = document.getElementById("d_vtor_p_"+t+"_"+(rowCount-1));
		  for(i=0;i<dp.options.length;i++){
			if (dp.options[i].text == d){dp.selectedIndex = i-1;}
		  }
		}
		di = document.getElementById("d_vtor_v_"+t);
		if (di.options[di.selectedIndex]){
		  d = di.options[di.selectedIndex].text;
		  dp = document.getElementById("d_vtor_v_"+t+"_"+(rowCount-1));
		  for(i=0;i<dp.options.length;i++){
			if (dp.options[i].text == d){dp.selectedIndex = i;}
		  }
		  //dp.disabled = true;
		  dp.style.visibility = 'hidden';	
		}
		di = document.getElementById("vtor_a_"+t);
		d = di.value;
		dp = document.getElementById("vtor_a_"+t+"_"+(rowCount-1));
		dp.value = d;
		di = document.getElementById("vtor_b_"+t);
		if (di.options[di.selectedIndex]){
		  d = di.options[di.selectedIndex].text;
		  dp = document.getElementById("vtor_b_"+t+"_"+(rowCount-1));
		  for(i=0;i<dp.options.length;i++){
			if (dp.options[i].text == d){dp.selectedIndex = i;}
		  }
		}
		di = document.getElementById("d_vtor_c_"+t);
		d = di.value;
		dp = document.getElementById("d_vtor_c_"+t+"_"+(rowCount-1));
		dp.value = d;
		vyvy();
  $('#vtor_b_'+(t)+'_' + (rowCount-1)).change(function(){	
	b_1 = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	data20 = '';
/*
	  $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nagruz&column0=nagr&case=vtor_t_eq_"+v_1,
      success: function(data20){
        $("#vtor_a_"+(t)+"_" + (rowCount-1)).html(seldata+data20);
      }
    });
*/
	if (b_1.indexOf('Р') > -1) {
		data20 = '<option value="10">10</option><option value="15">15</option><option value="20">20</option>';
	}
	else {
		data20 = '<option value="5">5</option><option value="10">10</option>';
	}
    $("#d_vtor_c_"+(t)+"_" + (rowCount-1)).html(seldata+data20);
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
	likes = false;
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
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text):'';

        //габарит
		d = document.getElementById('gab');
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'-';
		

		//типы выводов
		v = '';
		if ((tip == 5 && gab == '1') || (tip == 6 && gab == '1')) {
		if ($("#sec_term_id_sec_term_1").is(':checked')){ c += 'А'}; //русская А
        //if ($("#sec_term_id_sec_term_2").is(':checked')){ c += 'В'}; //русская В
        //if ($("#sec_term_id_sec_term_3").is(':checked')){ c += 'С'; v = '(выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
        //if ($("#sec_term_id_sec_term_4").is(':checked')){ c += 'D'; v = '(выводы '+document.getElementById('gib_vv').value+'м)'};
		if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 < 1)) { c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value*1000+'мм)'}; //русская С
        if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 >= 1)) { c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
		}

		//отпайки
		o = '';
		if (!perekl){
		  for (a = 1; a <= obm.length; a++ ){
			if (obm[a-1] > 0) { o = 'К';}
		  }
		}
		else { o = 'П';}
		c += o;
/*
*/
		//класс точности
		bez = ''; k0 = ''; k1 = ''; k2 = ''; n0 = ''; n1 = ''; n2 = ''; aa1 = ''; aa2 = '';
		if (tip == 5) {
		  if ($('#td_32').is(':checked')){ 
			k = document.getElementById('vtor_p_3'); 
			k2 = ':'+k.options[k.selectedIndex].text+'';
			n = document.getElementById('vtor_v_3');
			n2 = (n.selectedIndex>0)?(''+n.options[n.selectedIndex].text + '/'):'';
			aa = document.getElementById('d_vtor_a_32');
			aa2 = ''+aa.value+'/';
			
			//n2 = document.getElementById('vtor_v_3').value+'/';
		  }
		  else{
			bez += 'без доп. обмотки';
		  }
		}

		if (tip == 5) {
		  if ($('#td_12').is(':checked')){ 
			k = document.getElementById('vtor_p_1');
			k1 = ':'+k.options[k.selectedIndex].text+'';
			n = document.getElementById('vtor_v_1');
			n1 = (n.selectedIndex>0)?(''+n.options[n.selectedIndex].text + '/'):'';
			aa = document.getElementById('id_vtor_a_1');
			aa1 = ''+aa.value+'/';
		
			//n1 = document.getElementById('vtor_v_1').value+'/';
		  }
		  else{
			//bez += 'без обмотки а2-x2';
			bez += '';
		  }
		}

		if (tip == 6) {
		  if ($('#td_42').is(':checked')){ 
			k = document.getElementById('vtor_p_4');
			k1 = ':'+k.options[k.selectedIndex].text+'';
			n = document.getElementById('vtor_v_4');
			n1 = (n.selectedIndex>0)?(''+n.options[n.selectedIndex].text + '/'):'';
			aa = document.getElementById('id_vtor_a_4');
			aa1 = ''+aa.value+'/';
		
			//n1 = document.getElementById('vtor_v_1').value+'/';
		  }
		  else{
			//bez += 'без обмотки а2-x2';
			bez += '';
		  }
		}

		//ном.напряжение первичной обмотки
		d = document.getElementById('per_n');
		c += (d.selectedIndex>0)?('-' + d.options[d.selectedIndex].text + ''):'';

		if (tip == 5) {
			k = document.getElementById('vtor_p_0');
			k0 = ':'+k.options[k.selectedIndex].text;
			n = document.getElementById('vtor_v_0');
			n0 = (n.selectedIndex>0)?('-'+n.options[n.selectedIndex].text + '/'):'';
		}		

		if (tip == 6) {
			k = document.getElementById('vtor_p_2');
			k0 = ':'+k.options[k.selectedIndex].text;
			n = document.getElementById('vtor_v_2');
			n0 = (n.selectedIndex>0)?('-'+n.options[n.selectedIndex].text + '/'):'';
		}		

		c += k0 + k1 + k2 + '';
        
        c += n0 + n1 + n2 + '';

		bb0 = ''; bb1 = '';
		
		if (obm[0] > 0) {
			bbb = document.getElementById('vtor_b_1_1');
			bbb = ''+bbb.options[bbb.selectedIndex].text;
			bb = document.getElementById('vtor_b_1');
			bb = ''+bb.options[bb.selectedIndex].text;
			if (bb != bbb) {
				bb0 = bbb + '('; bb1 = ')';
			}
		}
		
		bb = document.getElementById('vtor_b_1');
		bb = ''+bb.options[bb.selectedIndex].text;
		c += bb0 + bb + bb1;
		if (bb.indexOf('Р') == -1 && bb !='') c += 'Fs';
		//alert(n0);

		bc0 = ''; bc1 = '';
		
		if (obm[0] > 0) {
			bcc = document.getElementById('d_vtor_c_1_1');
			bcc = ''+bcc.options[bcc.selectedIndex].text;
			bc = document.getElementById('d_vtor_c_1');
			bc = ''+bc.options[bc.selectedIndex].text;
			if (bc != bcc) {
				bc0 = bcc + '('; bc1 = ')';
			}
		}
		bc = document.getElementById('d_vtor_c_1');
		bc = ''+bc.options[bc.selectedIndex].text;
		c += bc0 + bc + bc1 + '-';

		//класс точности основной обмотки ТН
		if (tip == 5) {
			aa = document.getElementById('id_vtor_a_0');
		}
		if (tip == 6) {
			aa = document.getElementById('id_vtor_a_2');
		}
		aa0 = ''+aa.value+ '/';
		//классы точности обмоток ТН
		c += aa0 + aa1 + aa2;

		//ном.нагрузка ТТ
		kk0 = ''; kk1 = '';
		
		if (obm[0] > 0) {
			kkk = document.getElementById('vtor_a_1_1');
			kkk = ''+kkk.options[kkk.selectedIndex].text;
			k = document.getElementById('vtor_a_1');
			kk = ''+k.options[k.selectedIndex].text;
			if (kkk != kk) {
				kk0 = kkk + '('; kk1 = ')';
			}
		}
		k = document.getElementById('vtor_a_1');
		kk = ''+k.options[k.selectedIndex].text;
		c += kk0 + kk + kk1 + '-';

		//первич. ток вторичной обмотки ТТ
		kk0 = ''; kk1 = '';
		
		if (obm[0] > 0) {
			kkp = document.getElementById('d_vtor_p_1_1');
			kkp = ''+kkp.options[kkp.selectedIndex].text;
			kp = document.getElementById('d_vtor_p_1');
			kp = ''+kp.options[kp.selectedIndex].text;
			if (kp != kkp) {
				kk0 = kkp + '('; kk1 = ')';
			}
		}
		kp = document.getElementById('d_vtor_p_1');
		kp = ''+kp.options[kp.selectedIndex].text;
		c += kk0 + kp + kk1 + '/';

		//вторич. ток вторичной обмотки ТТ
		k = document.getElementById('d_vtor_v_1');
		kk = ''+k.options[k.selectedIndex].text;
		c += kk + ' ';

		//ток термическ. стойкости
		d = document.getElementById('term_t');
		c += (d.selectedIndex>0)?(''+d.options[d.selectedIndex].text+'кА'):'';

		//климатич.категория
		if (tip == 5){
			d = document.getElementById('klim_kat');
			c += (d.selectedIndex>0)?('  ' + d.options[d.selectedIndex].text + ''):'';
		}
		if (tip == 6){
			d = document.getElementById('klim_kat');
			c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text + ''):'';
		}

		//без обмотки
		if (bez != '') {c += ' ('+ bez +')';}
		
		//расшир.диапазон перв.тока
		d = document.getElementById('ras');
		c += (d.selectedIndex>0)?(' (расш.' + d.options[d.selectedIndex].text + '%)'):'';
		
		c += ''+v;

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
			sr.outerHTML = '<table id="search" style="max-width:100%;width:100%;"><tr><td colspan="5">Данная номенклатура не изготавливалась, для заказа необходим расчёт возможности изготовления</td></tr><tr><td width="10%" class="tdsmaltxt">Заказываемая конфигурация:</td><td id="newzakaz">...</td><td class="tdsmaltxt">Вы можете добавить примечание:</td><td><input type="text" id="newzakaztxt" class="inputbox1" style="width:450px;" /></td><td width="10%"><div class="tdbuttonbl" onclick="addnew(document.getElementById(_sform));" id="clcknew"  style="cursor:pointer; width:100%;margin:0px;height:36px;line-height:36px;">Добавить в заказ</div></td></tr></table>';
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
//		if ($('#gab_nt').prop('checked') || $('#var_v_v_nt').prop('checked') || $('#bar_v_nt').prop('checked') || $('#d_vtor_a_1_nt').prop('checked') || $('#d_vtor_a_1_1_nt').prop('checked') || $('#vtor_b_1_nt').prop('checked') || $('#vtor_b_1_1_nt').prop('checked') || $('#d_vtor_c_1_nt').prop('checked') || $('#d_vtor_c_1_1_nt').prop('checked') || $('#d_vtor_a_1_2_nt').prop('checked') || $('#vtor_b_1_2_nt').prop('checked') || $('#d_vtor_c_1_2_nt').prop('checked') || $('#d_vtor_a_2_nt').prop('checked') || $('#d_vtor_a_2_1_nt').prop('checked') || $('#vtor_b_2_nt').prop('checked') || $('#vtor_b_2_1_nt').prop('checked') || $('#d_vtor_c_2_nt').prop('checked') || $('#d_vtor_c_2_1_nt').prop('checked') || $('#d_vtor_a_2_2_nt').prop('checked') || $('#vtor_b_2_2_nt').prop('checked') || $('#d_vtor_c_2_2_nt').prop('checked')) {$('#like1').css('display','table-row'); $('#like2').css('display','table-row'); likesearch();}
		if ($('#var_v_v_nt').prop('checked') || $('#term_t_nt').prop('checked') || $('#vtor_v_2_nt').prop('checked') || $('#d_vtor_a_2_nt').prop('checked') || $('#vtor_v_4_nt').prop('checked') || $('#d_vtor_a_4_nt').prop('checked') || $('#vtor_v_0_nt').prop('checked') || $('#d_vtor_a_0_nt').prop('checked')|| $('#vtor_v_1_nt').prop('checked') || $('#d_vtor_a_1_nt').prop('checked') || $('#vtor_v_3_nt').prop('checked') || $('#d_vtor_a_3_nt').prop('checked') || $('#vtor_a_1_1_nt').prop('checked') || $('#vtor_b_1_1_nt').prop('checked') || $('#d_vtor_c_1_1_nt').prop('checked') || $('#vtor_a_1_nt').prop('checked') || $('#vtor_b_1_nt').prop('checked')|| $('#d_vtor_c_1_nt').prop('checked') || likes) 		{
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

		//напряжение
		d = document.getElementById('napr');
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text):'';

        //габарит
		d = document.getElementById('gab');
		c += (d.selectedIndex>0)?('-'+d.options[d.selectedIndex].text+''):'-';
		

		//типы выводов
		v = '';
		if ((tip == 5 && gab == '1') || (tip == 6 && gab == '1')) {
		if ($("#sec_term_id_sec_term_1").is(':checked')){ c += (!$('#var_v_v_nt').prop('checked'))?('А'):'%'}; //русская А
        //if ($("#sec_term_id_sec_term_2").is(':checked')){ c += 'В'}; //русская В
        //if ($("#sec_term_id_sec_term_3").is(':checked')){ c += 'С'; v = '(выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
        //if ($("#sec_term_id_sec_term_4").is(':checked')){ c += 'D'; v = '(выводы '+document.getElementById('gib_vv').value+'м)'};
		if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 < 1)) { c += (!$('#var_v_v_nt').prop('checked'))?('С'):'%'; v = (!$('#var_v_v_nt').prop('checked'))?(' (выводы '+document.getElementById('gib_vv').value*1000+'мм)'):' %'}; //русская С
        if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 >= 1)) { c += (!$('#var_v_v_nt').prop('checked'))?('С'):'%'; v = (!$('#var_v_v_nt').prop('checked'))?(' (выводы '+document.getElementById('gib_vv').value+'м)'):' %'}; //русская С
		}

		//отпайки
		o = '';
		if (!perekl){
		  for (a = 1; a <= obm.length; a++ ){
			if (obm[a-1] > 0) { o = 'К';}
		  }
		}
		else { o = 'П';}
		c += o;
/*
*/
		//класс точности
		bez = ''; k0 = ''; k1 = ''; k2 = ''; n0 = ''; n1 = ''; n2 = ''; aa1 = ''; aa2 = '';
		if (tip == 5) {
		  if ($('#td_32').is(':checked')){ 
			k = document.getElementById('vtor_p_3'); 
			k2 = ':'+k.options[k.selectedIndex].text+'';
			n = document.getElementById('vtor_v_3');
			n2 = (n.selectedIndex>0)?(n.options[n.selectedIndex].text):''; n2 = (!$('#vtor_v_3_nt').prop('checked'))?(n2):'%';
			n2 += (n.selectedIndex>0)?('/'):'';
			aa = document.getElementById('d_vtor_a_32');
			aa2 = aa.value;  aa2 = (!$('#d_vtor_a_3_nt').prop('checked'))?(aa2):'%';
			aa2 += '/';
			
			//n2 = document.getElementById('vtor_v_3').value+'/';
		  }
		  else{
			bez += 'без доп. обмотки';
		  }
		}

		if (tip == 5) {
		  if ($('#td_12').is(':checked')){ 
			k = document.getElementById('vtor_p_1');
			k1 = ':'+k.options[k.selectedIndex].text+'';
			n = document.getElementById('vtor_v_1');
			n1 = (n.selectedIndex>0)?(n.options[n.selectedIndex].text):''; n1 = (!$('#vtor_v_1_nt').prop('checked'))?(n1):'%';
			n1 += (n.selectedIndex>0)?('/'):'';
			aa = document.getElementById('id_vtor_a_1');
			aa1 = aa.value;  aa1 = (!$('#d_vtor_a_1_nt').prop('checked'))?(aa1):'%';
			aa1 += '/';
		
			//n1 = document.getElementById('vtor_v_1').value+'/';
		  }
		  else{
			//bez += 'без обмотки а2-x2';
			bez += '';
		  }
		}

		if (tip == 6) {
		  if ($('#td_42').is(':checked')){ 
			k = document.getElementById('vtor_p_4');
			k1 = ':'+k.options[k.selectedIndex].text+'';
			n = document.getElementById('vtor_v_4');
			n1 = (n.selectedIndex>0)?(n.options[n.selectedIndex].text):''; n1 = (!$('#vtor_v_4_nt').prop('checked'))?(n1):'%';
			n1 += (n.selectedIndex>0)?('/'):'';
			aa = document.getElementById('id_vtor_a_4');
			aa1 = aa.value; aa1 = (!$('#d_vtor_a_4_nt').prop('checked'))?(aa1):'%';
			aa1 += '/';
		
			//n1 = document.getElementById('vtor_v_1').value+'/';
		  }
		  else{
			//bez += 'без обмотки а2-x2';
			bez += '';
		  }
		}

		//ном.напряжение первичной обмотки
		d = document.getElementById('per_n');
		c += (d.selectedIndex>0)?('-' + d.options[d.selectedIndex].text + ''):'';

		if (tip == 5) {
			k = document.getElementById('vtor_p_0');
			k0 = ':'+k.options[k.selectedIndex].text;
			n = document.getElementById('vtor_v_0');
			n0 = (n.selectedIndex>0)?(n.options[n.selectedIndex].text):''; n0 = (!$('#vtor_v_0_nt').prop('checked'))?(n0):'%';
			n0 = (n.selectedIndex>0)?('-'+ n0 + '/'):'';
			
		}		

		if (tip == 6) {
			k = document.getElementById('vtor_p_2');
			k0 = ':'+k.options[k.selectedIndex].text;
			n = document.getElementById('vtor_v_2');
			n0 = (n.selectedIndex>0)?(n.options[n.selectedIndex].text):''; n0 = (!$('#vtor_v_2_nt').prop('checked'))?(n0):'%';
			n0 = (n.selectedIndex>0)?('-'+n0 + '/'):'';
		}		

		c += k0 + k1 + k2 + '';
        
        c += n0 + n1 + n2 + '';

		bb0 = ''; bb1 = '';
		
		bb = document.getElementById('vtor_b_1');
		bb_ = bb.options[bb.selectedIndex].text;

		if (obm[0] > 0) {
			bbb = document.getElementById('vtor_b_1_1');
			bbb = bbb.options[bbb.selectedIndex].text; bbb = (!$('#vtor_b_1_1_nt').prop('checked'))?(bbb):'%';
			bb = document.getElementById('vtor_b_1');
			bb_ = bb.options[bb.selectedIndex].text;
			if (bb_ != bbb) {
				bb0 = bbb + '('; bb1 = ')';
			}
		}
		
		bb = document.getElementById('vtor_b_1');
		bb = bb.options[bb.selectedIndex].text; bb = (!$('#vtor_b_1_nt').prop('checked'))?(bb):'%';
		c += bb0 + bb + bb1;
		if (bb_.indexOf('Р') == -1 && bb !='') c += 'Fs';
		//alert(n0);

		bc0 = ''; bc1 = '';
		
		if (obm[0] > 0) {
			bcc = document.getElementById('d_vtor_c_1_1');
			bcc = bcc.options[bcc.selectedIndex].text; bcc = (!$('#d_vtor_c_1_1_nt').prop('checked'))?(bcc):'%';
			bc = document.getElementById('d_vtor_c_1');
			bc_ = bc.options[bc.selectedIndex].text;
			if (bc_ != bcc) {
				bc0 = bcc + '('; bc1 = ')';
			}
		}
		bc = document.getElementById('d_vtor_c_1');
		bc = bc.options[bc.selectedIndex].text; bc = (!$('#d_vtor_c_1_nt').prop('checked'))?(bc):'%';
		c += bc0 + bc + bc1 + '-';

		//класс точности основной обмотки ТН
		if (tip == 5) {
			aa = document.getElementById('id_vtor_a_0');
			aa0 = aa.value; aa0 = (!$('#d_vtor_a_0_nt').prop('checked'))?(aa0):'%';
			aa0 += '/';
		}
		if (tip == 6) {
			aa = document.getElementById('id_vtor_a_2');
			aa0 = aa.value; aa0 = (!$('#d_vtor_a_2_nt').prop('checked'))?(aa0):'%';
			aa0 += '/';
		}
		//классы точности обмоток ТН
		c += aa0 + aa1 + aa2;

		//ном.нагрузка ТТ
		kk0 = ''; kk1 = '';
		
		if (obm[0] > 0) {
			kkk = document.getElementById('vtor_a_1_1');
			kkk = kkk.options[kkk.selectedIndex].text; kkk = (!$('#vtor_a_1_1_nt').prop('checked'))?(kkk):'%';
			k = document.getElementById('vtor_a_1');
			kk = k.options[k.selectedIndex].text;
			if (kkk != kk) {
				kk0 = kkk + '('; kk1 = ')';
			}
		}
		k = document.getElementById('vtor_a_1');
		kk = k.options[k.selectedIndex].text; kk = (!$('#vtor_a_1_nt').prop('checked'))?(kk):'%';
		c += kk0 + kk + kk1 + '-';

		//первич. ток вторичной обмотки ТТ
		kk0 = ''; kk1 = '';
		
		if (obm[0] > 0) {
			kkp = document.getElementById('d_vtor_p_1_1');
			kkp = ''+kkp.options[kkp.selectedIndex].text;
			kp = document.getElementById('d_vtor_p_1');
			kp = ''+kp.options[kp.selectedIndex].text;
			if (kp != kkp) {
				kk0 = kkp + '('; kk1 = ')';
			}
		}
		kp = document.getElementById('d_vtor_p_1');
		kp = ''+kp.options[kp.selectedIndex].text;
		c += kk0 + kp + kk1 + '/';

		//вторич. ток вторичной обмотки ТТ
		k = document.getElementById('d_vtor_v_1');
		kk = ''+k.options[k.selectedIndex].text;
		c += kk + ' ';

		//ток термическ. стойкости
		d = document.getElementById('term_t');
		d = (d.selectedIndex>0)?(d.options[d.selectedIndex].text):''; d = (!$('#term_t_nt').prop('checked'))?(d):'%';
		c += d; c += 'кА';

		//климатич.категория
		if (tip == 5){
			d = document.getElementById('klim_kat');
			c += (d.selectedIndex>0)?('  ' + d.options[d.selectedIndex].text + ''):'';
		}
		if (tip == 6){
			d = document.getElementById('klim_kat');
			c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text + ''):'';
		}

		//без обмотки
		if (bez != '') {c += ' ('+ bez +')';}
		
		//расшир.диапазон перв.тока
		d = document.getElementById('ras');
		c += (d.selectedIndex>0)?(' (расш.' + d.options[d.selectedIndex].text + '%)'):'';
		
		c += ''+v;

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
			srtext = '<table id="likesearch" style="max-width:100%;width:100%;"><tr><td colspan="4">Похожая номенклатура:</td></tr><tr><td>№</td><td style="text-align:center;">Конфигурация</td><td>Пояснение</td><td>Добавление</td></tr>';
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