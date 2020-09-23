var tip = '';
var isp = '';	
var napr = '';
var gab = '';
var klim_kat = '';
var per_t = '';	
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
	//alert(tip);

$('#klass').html('<p>'+t.options[t.selectedIndex].text+'</p>');

  $('.help').click(function(){	
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var height = $(window).height();
	var top = Math.ceil(scrollTop + (height - $('#msg').outerHeight())/2);
	var mes = '';  
	tag = this.childNodes[0].textContent; 
	for (i = 0; i < help.length; i++){
		if (help[i][0] == tag && (help[i][2] == 2 || help[i][2] == 3)) {mes = help[i][1];}
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

function id_vtor_any(id_obj, dr_obj, min_obj, max_obj, minv, maxv, dr_step, curv){
	dr_obj.attr('min',minv); min_obj.val(minv);
	dr_obj.attr('max',maxv); max_obj.val(maxv);
	dr_obj.attr('step',dr_step); id_obj.val(curv);
}

if (tip == 7 || tip == 8 || tip == 9 || tip == 10) {
	if (document.getElementById('rowvyv')) {document.getElementById('rowvyv').style.display = 'table-row';}
	if (tip == 7 || tip == 8) {
		document.getElementById('poni').style.display = 'none';
		document.getElementById('pon_i').style.display = 'none';
		if (gab == '06' || gab == '07') {
			document.getElementById('row-znol').style.display = 'none';
			//alert(1);
		}
		else {document.getElementById('row-znol').style.display = 'table-row';}
	}
	if (tip == 9 || tip == 10) {
		document.getElementById('poni').style.display = 'none';
		document.getElementById('pon_i').style.display = 'none';
	}
	if (document.getElementById('ntol1')) {document.getElementById('ntol1').style.display = 'none';}
	if (document.getElementById('nali1')) {document.getElementById('nali1').style.display = 'inline';}
	if (document.getElementById('nali2')) {document.getElementById('nali2').style.display = 'inline';}
	if (document.getElementById('ntol2')) {document.getElementById('ntol2').style.display = 'none';}
	if (document.getElementById('max_m')) {document.getElementById('max_m').style.display = 'inline-block';}
	if (document.getElementById('b00')) {document.getElementById('b00').style.display = 'none';}
	if (document.getElementById('c00')) {document.getElementById('c00').style.display = 'none';}
	if (document.getElementById('d00')) {document.getElementById('d00').style.display = 'none';}
	if (document.getElementById('c01')) {document.getElementById('c01').style.display = 'none';}
	$('#vtor_p_5').html('<option value="">...</option><option value="1">100/V3</option><option value="2">110/V3</option><option value="3">120/V3</option><option value="4">127/V3</option><option value="5">200/V3</option><option value="6">220/V3</option><option value="7">230/V3</option><option value="8">100</option><option value="9">110</option><option value="10">120</option><option value="11">127</option><option value="12">200</option><option value="13">220</option><option value="14">230</option>');
	$('#vtor_p_6').html('<option value="">...</option><option value="1">100/V3</option><option value="2">110/V3</option><option value="3">120/V3</option><option value="4">127/V3</option><option value="5">200/V3</option><option value="6">220/V3</option><option value="7">230/V3</option><option value="8">100</option><option value="9">110</option><option value="10">120</option><option value="11">127</option><option value="12">200</option><option value="13">220</option><option value="14">230</option>');
	$('#vtor_p_7').html('<option value="">...</option><option value="1">100/3</option><option value="2">110/3</option><option value="3">120/3</option><option value="4">127/3</option><option value="5">200/3</option><option value="6">220/3</option><option value="7">230/3</option><option value="8">100</option><option value="9">110</option><option value="10">120</option><option value="11">127</option><option value="12">200</option><option value="13">220</option><option value="14">230</option>');
	if (tip == 7 || tip == 8){document.getElementById('d00').style.display = 'table';}
	if (tip == 9 || tip == 10){document.getElementById('c00').style.display = 'table';}
  if (document.getElementById('td_42')){
	$('#vtor_p_4').prop('disabled', true);
	$('#vtor_v_4').prop('disabled', true);
	$('#id_vtor_a_4').prop('disabled', true);
	$('#d_vtor_a_4').prop('disabled', true);
	$('#d_vtor_a_41').prop('disabled', true);
	$('#vtor_bn_4').prop('disabled', true);
	  $('#td_42').change(function(){	
	   if ($(this).is(':checked')){
		$('#vtor_p_4').prop('disabled', false);
		$('#vtor_v_4').prop('disabled', false);
		$('#id_vtor_a_4').prop('disabled', false);
		$('#d_vtor_a_4').prop('disabled', false);
		$('#d_vtor_a_41').prop('disabled', false);
		$('#vtor_bn_4').prop('disabled', false);
	   }
	   else {
		$('#vtor_p_4').prop('disabled', true);
		$('#vtor_v_4').prop('disabled', true);
		$('#id_vtor_a_4').prop('disabled', true);
		$('#d_vtor_a_4').prop('disabled', true);
		$('#d_vtor_a_41').prop('disabled', true);
		$('#vtor_bn_4').prop('disabled', true);
	   }
       return false;
	  });
  }

  if (document.getElementById('td_62')){
	$('#vtor_p_6').prop('disabled', true);
	$('#vtor_v_6').prop('disabled', true);
	$('#id_vtor_a_6').prop('disabled', true);
	$('#d_vtor_a_61').prop('disabled', true);
	$('#vtor_bn_6').prop('disabled', true);
	  $('#td_62').change(function(){	
	   if ($(this).is(':checked')){
		$('#vtor_p_6').prop('disabled', false);
		$('#vtor_v_6').prop('disabled', false);
		$('#id_vtor_a_6').prop('disabled', false);
		$('#d_vtor_a_61').prop('disabled', false);
		$('#vtor_bn_6').prop('disabled', false);
	    max_m = $('#max_m option:selected').text()*1;  
		max_m = (max_m)>0?max_m:0;   
		max_d = $('#vtor_bn_7 option:selected').text()*1;   
		max_d = (max_d)>0?max_d:0;   
	    $('#vtor_bn_5').val((max_m - max_d)/2);
	    $('#vtor_bn_6').val((max_m - max_d)/2);
			    if (tip == 7 || tip == 8){
					if (napr == 6 || napr == 10){
						if (gab == '06' || gab == '07'){
							$('#max_m').html('<option value="250">250</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
						else {
							$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					if (napr == 20){
						if (gab == '00' || gab == '01' || gab == '02' || gab == '03' || gab == '06' || gab == '07'){
							$('#max_m').html('<option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					if (napr == 35){
						if (gab == '00' || gab == '01' || gab == '02' || gab == '03' || gab == 'IV'){
							$('#max_m').html('<option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					else {
						$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
						$('#max_m :contains('+max_m+')').attr("selected", true);
					}
				}
			    else if (tip == 9){
					if (gab == 'IV'){
						$('#max_m').html('<option value="">...</option><option value="630" selected>630</option>');
						$('#max_m :contains('+max_m+')').attr("selected", true);			
					}	
				}
			    else {
					$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
					$('#max_m :contains('+max_m+')').attr("selected", true);
				}
	    	$('#id_vtor_a_5').val($('#d_vtor_a_51').attr('min'));
	    	$('#d_vtor_a_51').val($('#d_vtor_a_51').attr('min'));
	   }
	   else {
		$('#vtor_p_5 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_p_6 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_p_6').prop('disabled', true);
		$('#vtor_v_5 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_v_6 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#id_vtor_a_5').val('');
	    $('#id_vtor_a_6').val('');
		$('#vtor_v_6').prop('disabled', true);
		$('#id_vtor_a_6').prop('disabled', true);
		$('#d_vtor_a_61').prop('disabled', true);
		$('#vtor_bn_6').prop('disabled', true);
	    max_m = $('#max_m option:selected').text()*1;  
		max_m = (max_m)>0?max_m:0;   
	    $('#vtor_bn_5').val('');
	    $('#vtor_bn_6').val('');
			    if (tip == 7 || tip == 8){
					if (napr == 6 || napr == 10){
						if (gab == '06' || gab == '07'){
							$('#max_m').html('<option value="">...</option><option value="250">250</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
						else {
							$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					else {
						$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
						$('#max_m :contains('+max_m+')').attr("selected", true);
					}
				}
			    else if (tip == 9){
					if (gab == 'IV'){
						$('#max_m').html('<option value="">...</option><option value="630" selected>630</option>');
						$('#max_m :contains('+max_m+')').attr("selected", true);			
					}	
				}
			    else {
					$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
					$('#max_m :contains('+max_m+')').attr("selected", true);					
				}
			max_d = $('#vtor_bn_7 option:selected').text()*1;   
			max_d = (max_d)>0?max_d:0;   
	    	$('#vtor_bn_5').val(max_m - max_d);
	    	$('#id_vtor_a_5').val($('#d_vtor_a_51').attr('min'));
	    	$('#d_vtor_a_51').val($('#d_vtor_a_51').attr('min'));
	   }
       return false;
	  });
  }

  if (document.getElementById('td_72')){
	$('#vtor_p_7').prop('disabled', true);
	$('#vtor_v_7').prop('disabled', true);
	$('#id_vtor_a_7').prop('disabled', true);
	$('#d_vtor_a_7').prop('disabled', true);
	$('#vtor_bn_7').prop('disabled', true);
	  $('#td_72').change(function(){	
	   if ($(this).is(':checked')){
		$('#vtor_p_7').prop('disabled', false);
		$('#vtor_v_7').prop('disabled', false);
		$('#id_vtor_a_7').prop('disabled', false);
		$('#d_vtor_a_7').prop('disabled', false);
		$('#d_vtor_a_71').prop('disabled', false);
		$('#vtor_bn_7').prop('disabled', false);
	   }
	   else {
		$('#vtor_p_7 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_v_7 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#d_vtor_a_7 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_bn_7 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_p_7').prop('disabled', true);
		$('#vtor_v_7').prop('disabled', true);
		$('#id_vtor_a_7').prop('disabled', true);
		$('#d_vtor_a_7').prop('disabled', true);
		$('#d_vtor_a_71').prop('disabled', true);
		$('#vtor_bn_7').prop('disabled', true);
	   		if ($('#td_62').is(':checked')){
	    		max_m = $('#max_m option:selected').text()*1;  
				max_m = (max_m)>0?max_m:0;   
				max_d = $('#vtor_bn_7 option:selected').text()*1;   
				max_d = (max_d)>0?max_d:0;   
	    		$('#vtor_bn_5').val((max_m - max_d)/2);
	    		$('#vtor_bn_6').val((max_m - max_d)/2);
			}
		   	else{
				max_d = $('#vtor_bn_7 option:selected').text()*1;   
				max_d = (max_d)>0?max_d:0;   
	    		$('#vtor_bn_5').val(max_m - max_d);
			}
	   }
       return false;
	  });
  }

  $('#max_m').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 7 || tip == 8) {
	  if (max_m == 250) {
		$('#td_62').prop('checked', false);
		$('#td_62').prop('disabled', true);
		$('#row-znol').css('display', 'none');
		$('#d_vtor_a_7').html('<option value="">...</option><option value="50">50</option><option value="75">75</option><option value="100">100</option>');
	  }
	  else {
		$('#td_62').prop('disabled', false);
		$('#td_42').prop('disabled', false);
		$('#row-znol').css('display', 'table-row');
		$('#d_vtor_a_7').html('<option value="">...</option><option value="30">30</option><option value="50">50</option><option value="75">75</option><option value="100">100</option><option value="150">150</option><option value="200">200</option><option value="300">300</option>');
	  }
	  max_d = $('#vtor_bn_7').val()*1;  
	  max_d = (max_d)>0?max_d:0;   
	  if ($('#td_62').is(':checked')){ 
		$('#vtor_bn_5').val((max_m - max_d)/2);
		$('#vtor_bn_6').val((max_m - max_d)/2);
	  }
	  else {
		$('#vtor_bn_5').val(max_m - max_d);
	  }  
	  if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
		if ($('#vtor_v_5 option:selected').text() == '0.2') {
			$('#d_vtor_a_51').attr('max',30);
			$('#d_vtor_a_51').attr('min',5);
		}
		if ($('#vtor_v_5 option:selected').text() == '0.5') {
			if (max_m == 400) $('#d_vtor_a_51').attr('max',75);
			if (max_m == 630) $('#d_vtor_a_51').attr('max',100);
			$('#d_vtor_a_51').attr('min',10);
		}
		if ($('#vtor_v_5 option:selected').text() == '1') {
			$('#d_vtor_a_51').attr('max',200);
			$('#d_vtor_a_51').attr('min',20);
		}
		if ($('#vtor_v_5 option:selected').text() == '3') {
			$('#d_vtor_a_51').attr('max',300);
			$('#d_vtor_a_51').attr('min',100);
		}
	  }
	  if (max_m == 400 && $('#td_62').is(':checked')) {
		if ($('#vtor_v_5 option:selected').text() == '0.2') {
			$('#d_vtor_a_51').attr('max',60);
			$('#d_vtor_a_51').attr('min',10);
		}
		if ($('#vtor_v_5 option:selected').text() == '0.5') {
			$('#d_vtor_a_51').attr('max',150);
			$('#d_vtor_a_51').attr('min',20);
		}
		if ($('#vtor_v_5 option:selected').text() == '1') {
			$('#d_vtor_a_51').attr('max',200);
			$('#d_vtor_a_51').attr('min',50);
		}
		if ($('#vtor_v_5 option:selected').text() == '3') {
			$('#d_vtor_a_51').attr('max',300);
			$('#d_vtor_a_51').attr('min',150);
		}
		$('#id_vtor_a_6').val($(this).attr('max') - $(this).val());  
	  }
	}
	if (tip == 9 || tip == 10) {
	  if ( max_m > 400) {
		$('#td_42').prop('checked', false);
		$('#td_42').prop('disabled', true);
	  }
	  else {
		$('#td_42').prop('disabled', false);
	  }
	  //max_d = $('#vtor_bn_4').val()*1;  
	  //max_d = (max_d)>0?max_d:0;   
	  if ($('#td_42').is(':checked')){ 
		$('#vtor_bn_3').val((max_m) /2);
		$('#vtor_bn_4').val((max_m) /2);
	  }
	  else {
		$('#vtor_bn_3').val(max_m);
	  }  
	  if ((max_m == 400 && !$('#td_42').is(':checked')) || (max_m == 630 && !$('#td_42').is(':checked'))) {
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			//$('#d_vtor_a_31').attr('max',30);
			//$('#d_vtor_a_31').attr('min',5);
		}
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			//if (max_m == 400) $('#d_vtor_a_31').attr('max',75);
			//if (max_m == 630) $('#d_vtor_a_31').attr('max',100);
			//$('#d_vtor_a_31').attr('min',10);
		}
		if ($('#vtor_v_3 option:selected').text() == '1') {
			//$('#d_vtor_a_31').attr('max',200);
			//$('#d_vtor_a_31').attr('min',20);
		}
		if ($('#vtor_v_3 option:selected').text() == '3') {
			//$('#d_vtor_a_31').attr('max',300);
			//$('#d_vtor_a_31').attr('min',100);
		}
	  }
	  if (max_m == 400 && $('#td_42').is(':checked')) {
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			//$('#d_vtor_a_31').attr('max',60);
			//$('#d_vtor_a_31').attr('min',10);
		}
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			//$('#d_vtor_a_31').attr('max',150);
			//$('#d_vtor_a_31').attr('min',20);
		}
		if ($('#vtor_v_3 option:selected').text() == '1') {
			//$('#d_vtor_a_31').attr('max',200);
			//$('#d_vtor_a_31').attr('min',50);
		}
		if ($('#vtor_v_3 option:selected').text() == '3') {
			//$('#d_vtor_a_31').attr('max',300);
			//$('#d_vtor_a_31').attr('min',150);
		}
		//$('#id_vtor_a_4').val($(this).attr('max') - $(this).val());  
	  }
	}
  return false;
  });

  $('#d_vtor_a_7').change(function(){
	if (gab == '06' || gab == '07'){
	  	if ($('#d_vtor_a_7 option:selected').text()*1 <= 300) {
			$('#vtor_bn_7').html('<option value="">...</option><option value="100">100</option>');
			$('#vtor_bn_7 :contains(100)').attr("selected", true);
	  	}
	}  
	else{
	  	if ($('#d_vtor_a_7 option:selected').text()*1 <= 100) {
			$('#vtor_bn_7').html('<option value="">...</option><option value="100">100</option><option value="200">200</option><option value="300">300</option>');
			$('#vtor_bn_7 :contains(100)').attr("selected", true);
	  	}
		if ($('#d_vtor_a_7 option:selected').text()*1 > 100 && $('#d_vtor_a_7 option:selected').text()*1 <= 200) {
			$('#vtor_bn_7').html('<option value="">...</option><option value="100">100</option><option value="200">200</option><option value="300">300</option>');
			$('#vtor_bn_7 :contains(200)').attr("selected", true);
	  	}
		if ($('#d_vtor_a_7 option:selected').text()*1 > 200 && $('#d_vtor_a_7 option:selected').text()*1 <= 300) {
			$('#vtor_bn_7').html('<option value="">...</option><option value="100">100</option><option value="200">200</option><option value="300">300</option>');
			$('#vtor_bn_7 :contains(300)').attr("selected", true);
		}
	}  
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	max_d = $('#vtor_bn_7').val()*1;  
	max_d = (max_d)>0?max_d:0;   
	if ($('#td_62').is(':checked')){ 
		$('#vtor_bn_5').val((max_m - max_d)/2);
		$('#vtor_bn_6').val((max_m - max_d)/2);
	}
	else {
		$('#vtor_bn_5').val(max_m - max_d);
	}  
  return false;
  });

  $('#vtor_bn_7').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	max_d = $(this).val()*1;  
	max_d = (max_d)>0?max_d:0;   
	if ($('#td_62').is(':checked')){ 
		$('#vtor_bn_5').val((max_m - max_d)/2);
		$('#vtor_bn_6').val((max_m - max_d)/2);
	}
	else {
		$('#vtor_bn_5').val(max_m - max_d);
	}  
  return false;
  });

  $('#d_vtor_a_51').change(function(){
	$('#id_vtor_a_5').val($(this).val());  
	if ($('#td_62').is(':checked'))  {
	  if ($('#vtor_v_6 option:selected').text() == '0.2') {
		//$('#d_vtor_a_61').attr('max', 40 - $(this).val());
		//$('#id_vtor_a_6max').val(40 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
			$('#d_vtor_a_61').attr('max', 60 - $(this).val());
			$('#id_vtor_a_6max').val(60 - $(this).val());
		}
		if (napr == 35) {
			$('#d_vtor_a_61').attr('max', 100 - $(this).val());
			$('#id_vtor_a_6max').val(100 - $(this).val());
		}
	  }
	  if ($('#vtor_v_6 option:selected').text() == '0.5') {
		$('#d_vtor_a_61').attr('max', 100 - $(this).val());
		$('#id_vtor_a_6max').val(100 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, (75 - $(this).val()), 5, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (150 - $(this).val()), 5, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
			$('#d_vtor_a_61').attr('max', 150 - $(this).val());
			$('#id_vtor_a_6max').val(150 - $(this).val());
		}
		if (napr == 35) {
			$('#d_vtor_a_61').attr('max', 200 - $(this).val());
			$('#id_vtor_a_6max').val(200 - $(this).val());
		}
		if ($('#vtor_v_5 option:selected').text() == '0.2') {
			$('#d_vtor_a_61').attr('max', 40 - $(this).val());
			$('#id_vtor_a_6max').val(40 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_61').attr('max', 60 - $(this).val());
				$('#id_vtor_a_6max').val(60 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_61').attr('max', 100 - $(this).val());
				$('#id_vtor_a_6max').val(100 - $(this).val());
			}
		}
	  }
	  if ($('#vtor_v_6 option:selected').text() == '1') {
		$('#d_vtor_a_61').attr('max', 200 - $(this).val());
		$('#id_vtor_a_6max').val(200 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, (150 - $(this).val()), 10, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, (250 - $(this).val()), 5, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
			$('#d_vtor_a_61').attr('max', 250 - $(this).val());
			$('#id_vtor_a_6max').val(250 - $(this).val());
		}
		if (napr == 35) {
			$('#d_vtor_a_61').attr('max', 300 - $(this).val());
			$('#id_vtor_a_6max').val(300 - $(this).val());
		}
		if ($('#vtor_v_5 option:selected').text() == '0.5') {
			$('#d_vtor_a_61').attr('max', 100 - $(this).val());
			$('#id_vtor_a_6max').val(100 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, (75 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (150 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_61').attr('max', 150 - $(this).val());
				$('#id_vtor_a_6max').val(150 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_61').attr('max', 200 - $(this).val());
				$('#id_vtor_a_6max').val(200 - $(this).val());
			}
		}
		if ($('#vtor_v_5 option:selected').text() == '0.2') {
			$('#d_vtor_a_61').attr('max', 40 - $(this).val());
			$('#id_vtor_a_6max').val(40 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_61').attr('max', 60 - $(this).val());
				$('#id_vtor_a_6max').val(60 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_61').attr('max', 100 - $(this).val());
				$('#id_vtor_a_6max').val(100 - $(this).val());
			}
		}
	  }
	  if ($('#vtor_v_6 option:selected').text() == '3') {
		$('#d_vtor_a_61').attr('max', 300 - $(this).val());
		$('#id_vtor_a_6max').val(300 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 75, (300 - $(this).val()), 25, $('#id_vtor_a_6').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 75, (300 - $(this).val()), 5, $('#id_vtor_a_6').val());
			}	
		}
		if ($('#vtor_v_5 option:selected').text() == '1') {
			$('#d_vtor_a_61').attr('max', 200 - $(this).val());
			$('#id_vtor_a_6max').val(200 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, (150 - $(this).val()), 10, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, (250 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_61').attr('max', 250 - $(this).val());
				$('#id_vtor_a_6max').val(250 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_61').attr('max', 300 - $(this).val());
				$('#id_vtor_a_6max').val(300 - $(this).val());
			}
		}
		if ($('#vtor_v_5 option:selected').text() == '0.5') {
			$('#d_vtor_a_61').attr('max', 100 - $(this).val());
			$('#id_vtor_a_6max').val(100 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, (75 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (150 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_61').attr('max', 150 - $(this).val());
				$('#id_vtor_a_6max').val(150 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_61').attr('max', 200 - $(this).val());
				$('#id_vtor_a_6max').val(200 - $(this).val());
			}
		}
		if ($('#vtor_v_5 option:selected').text() == '0.2') {
			$('#d_vtor_a_61').attr('max', 40 - $(this).val());
			$('#id_vtor_a_6max').val(40 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_6').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_61').attr('max', 60 - $(this).val());
				$('#id_vtor_a_6max').val(60 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_61').attr('max', 100 - $(this).val());
				$('#id_vtor_a_6max').val(100 - $(this).val());
			}
		}
	  }
	}
  return false;
  });

  $('#d_vtor_a_61').change(function(){
	$('#id_vtor_a_6').val($(this).val());
	if ($('#vtor_v_5 option:selected').text() == '0.2') {
		$('#d_vtor_a_51').attr('max', 40 - $(this).val());
		$('#id_vtor_a_5max').val(40 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
			$('#d_vtor_a_51').attr('max', 60 - $(this).val());
			$('#id_vtor_a_5max').val(60 - $(this).val());
		}
		if (napr == 35) {
			$('#d_vtor_a_51').attr('max', 100 - $(this).val());
			$('#id_vtor_a_5max').val(100 - $(this).val());
		}
	}
	if ($('#vtor_v_5 option:selected').text() == '0.5') {
		$('#d_vtor_a_51').attr('max', 100 - $(this).val());
		$('#id_vtor_a_5max').val(100 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, (75 - $(this).val()), 5, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (150 - $(this).val()), 5, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
			$('#d_vtor_a_51').attr('max', 150 - $(this).val());
			$('#id_vtor_a_5max').val(150 - $(this).val());
		}
		if (napr == 35) {
			$('#d_vtor_a_51').attr('max', 200 - $(this).val());
			$('#id_vtor_a_5max').val(200 - $(this).val());
		}
		if ($('#vtor_v_6 option:selected').text() == '0.2') {
			$('#d_vtor_a_51').attr('max', 40 - $(this).val());
			$('#id_vtor_a_5max').val(40 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_51').attr('max', 60 - $(this).val());
				$('#id_vtor_a_5max').val(60 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 100 - $(this).val());
				$('#id_vtor_a_5max').val(100 - $(this).val());
			}
		}
	}
	if ($('#vtor_v_5 option:selected').text() == '1') {
		$('#d_vtor_a_51').attr('max', 200 - $(this).val());
		$('#id_vtor_a_5max').val(200 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, (150 - $(this).val()), 10, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, (250 - $(this).val()), 5, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
			$('#d_vtor_a_51').attr('max', 250 - $(this).val());
			$('#id_vtor_a_5max').val(250 - $(this).val());
		}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 300 - $(this).val());
				$('#id_vtor_a_5max').val(300 - $(this).val());
			}
		if ($('#vtor_v_6 option:selected').text() == '0.5') {
			$('#d_vtor_a_51').attr('max', 100 - $(this).val());
			$('#id_vtor_a_5max').val(100 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, (75 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (150 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_51').attr('max', 150 - $(this).val());
				$('#id_vtor_a_5max').val(150 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 200 - $(this).val());
				$('#id_vtor_a_5max').val(200 - $(this).val());
			}
		}
		if ($('#vtor_v_6 option:selected').text() == '0.2') {
			$('#d_vtor_a_51').attr('max', 40 - $(this).val());
			$('#id_vtor_a_5max').val(40 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_51').attr('max', 60 - $(this).val());
				$('#id_vtor_a_5max').val(60 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 100 - $(this).val());
				$('#id_vtor_a_5max').val(100 - $(this).val());
			}
		}
	}
	if ($('#vtor_v_5 option:selected').text() == '3') {
		$('#d_vtor_a_51').attr('max', 300 - $(this).val());
		$('#id_vtor_a_5max').val(300 - $(this).val());
		if (napr == 6 || napr == 10) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 75, (300 - $(this).val()), 25, $('#id_vtor_a_5').val());
			}	
		}
		if (napr == 15 || napr == 20) {
			if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 75, (300 - $(this).val()), 5, $('#id_vtor_a_5').val());
			}	
		}
		if ($('#vtor_v_6 option:selected').text() == '1') {
			$('#d_vtor_a_51').attr('max', 200 - $(this).val());
			$('#id_vtor_a_5max').val(200 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
				id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, (150 - $(this).val()), 10, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, (250 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_51').attr('max', 250 - $(this).val());
				$('#id_vtor_a_5max').val(250 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 300 - $(this).val());
				$('#id_vtor_a_5max').val(300 - $(this).val());
			}
		}
		if ($('#vtor_v_6 option:selected').text() == '0.5') {
			$('#d_vtor_a_51').attr('max', 100 - $(this).val());
			$('#id_vtor_a_5max').val(100 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, (75 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (150 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_51').attr('max', 150 - $(this).val());
				$('#id_vtor_a_5max').val(150 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 200 - $(this).val());
				$('#id_vtor_a_5max').val(200 - $(this).val());
			}
		}
		if ($('#vtor_v_6 option:selected').text() == '0.2') {
			$('#d_vtor_a_51').attr('max', 40 - $(this).val());
			$('#id_vtor_a_5max').val(40 - $(this).val());
			if (napr == 6 || napr == 10) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (30 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 15 || napr == 20) {
				if (gab == '11' || gab == '12') {
					id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, (60 - $(this).val()), 5, $('#id_vtor_a_5').val());
				}	
			}
			if (napr == 20 || (napr == 6 && gab == '02') || (napr == 6 && gab == '03') || (napr == 10 && gab == '02') || (napr == 10 && gab == '03')) {
				$('#d_vtor_a_51').attr('max', 60 - $(this).val());
				$('#id_vtor_a_5max').val(60 - $(this).val());
			}
			if (napr == 35) {
				$('#d_vtor_a_51').attr('max', 100 - $(this).val());
				$('#id_vtor_a_5max').val(100 - $(this).val());
			}
		}
	}
  return false;
  });
	
  $('#d_vtor_a_31').change(function(){
	$('#id_vtor_a_3').val($(this).val());  
	if (gab == 'IV' && $('#td_42').is(':checked')){
		ch = $('#td_42').is(':checked'); 
		sl1 = $('#vtor_v_3 option:selected').text();
		sl2 = (ch)?$('#vtor_v_4 option:selected').text():0; 
		gr=group_np[tip][napr][gab];
		$('#d_vtor_a_41').attr('max',(nom_power[gr][sl1][sl2]['min'] + nom_power[gr][sl1][sl2]['max']) - $(this).val()); 
		$('#id_vtor_a_4max').val((nom_power[gr][sl1][sl2]['min'] + nom_power[gr][sl1][sl2]['max']) - $(this).val());  
	}  
	if ((napr == 6 && gab == '00')|| (napr == 10 && gab == '00')){
	if ($('#td_42').is(':checked'))  {
	  if ($('#vtor_v_4 option:selected').text() == '0.2') {
		$('#d_vtor_a_41').attr('max', 40 - $(this).val());
		$('#id_vtor_a_4max').val(40 - $(this).val());
	  }
	  if ($('#vtor_v_4 option:selected').text() == '0.5') {
		$('#d_vtor_a_41').attr('max', 100 - $(this).val());
		$('#id_vtor_a_4max').val(100 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 40 - $(this).val());
			$('#id_vtor_a_4max').val(40 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '1') {
		$('#d_vtor_a_41').attr('max', 200 - $(this).val());
		$('#id_vtor_a_4max').val(200 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 100 - $(this).val());
			$('#id_vtor_a_4max').val(100 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 40 - $(this).val());
			$('#id_vtor_a_4max').val(40 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '3') {
		$('#d_vtor_a_41').attr('max', 300 - $(this).val)
		$('#id_vtor_a_4max').val(300 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1') {
			$('#d_vtor_a_41').attr('max', 200 - $(this).val());
			$('#id_vtor_a_4max').val(200 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 100 - $(this).val());
			$('#id_vtor_a_4max').val(100 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 40 - $(this).val());
			$('#id_vtor_a_4max').val(40 - $(this).val());
		}
	  }
	}
	}
	if ((napr == 6 && gab == '02')|| (napr == 10 && gab == '02')){
	if ($('#td_42').is(':checked'))  {
	  if ($('#vtor_v_4 option:selected').text() == '0.2') {
		$('#d_vtor_a_41').attr('max', 50 - $(this).val());
		$('#id_vtor_a_4max').val(50 - $(this).val());
	  }
	  if ($('#vtor_v_4 option:selected').text() == '0.5') {
		$('#d_vtor_a_41').attr('max', 150 - $(this).val());
		$('#id_vtor_a_4max').val(150 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 50 - $(this).val());
			$('#id_vtor_a_4max').val(50 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '1') {
		$('#d_vtor_a_41').attr('max', 250 - $(this).val());
		$('#id_vtor_a_4max').val(250 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 150 - $(this).val());
			$('#id_vtor_a_4max').val(150 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 50 - $(this).val());
			$('#id_vtor_a_4max').val(50 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '3') {
		$('#d_vtor_a_41').attr('max', 400 - $(this).val());
		$('#id_vtor_a_4max').val(400 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1') {
			$('#d_vtor_a_41').attr('max', 250 - $(this).val());
			$('#id_vtor_a_4max').val(250 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 150 - $(this).val());
			$('#id_vtor_a_4max').val(150 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 50 - $(this).val());
			$('#id_vtor_a_4max').val(50 - $(this).val());
		}
	  }
	}
	}
	if (napr == 20){
	if ($('#td_42').is(':checked'))  {
	  if ($('#vtor_v_4 option:selected').text() == '0.2') {
		$('#d_vtor_a_41').attr('max', 60 - $(this).val());
		$('#id_vtor_a_4max').val(60 - $(this).val());
	  }
	  if ($('#vtor_v_4 option:selected').text() == '0.5') {
		$('#d_vtor_a_41').attr('max', 150 - $(this).val());
		$('#id_vtor_a_4max').val(150 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 60 - $(this).val());
			$('#id_vtor_a_4max').val(60 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '1') {
		$('#d_vtor_a_41').attr('max', 250 - $(this).val());
		$('#id_vtor_a_4max').val(250 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 150 - $(this).val());
			$('#id_vtor_a_4max').val(150 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 60 - $(this).val());
			$('#id_vtor_a_4max').val(60 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '3') {
		$('#d_vtor_a_41').attr('max', 400 - $(this).val());
		$('#id_vtor_a_4max').val(400 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1') {
			$('#d_vtor_a_41').attr('max', 250 - $(this).val());
			$('#id_vtor_a_4max').val(250 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 150 - $(this).val());
			$('#id_vtor_a_4max').val(150 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 60 - $(this).val());
			$('#id_vtor_a_4max').val(60 - $(this).val());
		}
	  }
	}
	}
	if (napr == 35){
	if ($('#td_42').is(':checked'))  {
	  if ($('#vtor_v_4 option:selected').text() == '0.2') {
		$('#d_vtor_a_41').attr('max', 75 - $(this).val());
		$('#id_vtor_a_4max').val(75 - $(this).val());
	  }
	  if ($('#vtor_v_4 option:selected').text() == '0.5') {
		$('#d_vtor_a_41').attr('max', 200 - $(this).val());
		$('#id_vtor_a_4max').val(200 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 75 - $(this).val());
			$('#id_vtor_a_4max').val(75 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '1') {
		$('#d_vtor_a_41').attr('max', 400 - $(this).val());
		$('#id_vtor_a_4max').val(400 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 200 - $(this).val());
			$('#id_vtor_a_4max').val(200 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 75 - $(this).val());
			$('#id_vtor_a_4max').val(75 - $(this).val());
		}
	  }
	  if ($('#vtor_v_4 option:selected').text() == '3') {
		$('#d_vtor_a_41').attr('max', 600 - $(this).val());
		$('#id_vtor_a_4max').val(600 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1') {
			$('#d_vtor_a_41').attr('max', 400 - $(this).val());
			$('#id_vtor_a_4max').val(400 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.5') {
			$('#d_vtor_a_41').attr('max', 200 - $(this).val());
			$('#id_vtor_a_4max').val(200 - $(this).val());
		}
		if ($('#vtor_v_3 option:selected').text() == '0.2') {
			$('#d_vtor_a_41').attr('max', 75 - $(this).val());
			$('#id_vtor_a_4max').val(75 - $(this).val());
		}
	  }
	}
	}
  return false;
  });

  $('#d_vtor_a_41').change(function(){
	$('#id_vtor_a_4').val($(this).val());  
	if (gab == 'IV'){
		ch = $('#td_42').is(':checked'); 
		sl1 = $('#vtor_v_3 option:selected').text();
		sl2 = (ch)?$('#vtor_v_4 option:selected').text():0; 
		gr=group_np[tip][napr][gab];
		$('#d_vtor_a_31').attr('max',(nom_power[gr][sl1][sl2]['min'] + nom_power[gr][sl1][sl2]['max']) - $(this).val()); 
		$('#id_vtor_a_3max').val((nom_power[gr][sl1][sl2]['min'] + nom_power[gr][sl1][sl2]['max']) - $(this).val());  
	}  
	if ((napr == 6 && gab == '00')|| (napr == 10 && gab == '00')){
	if ($('#vtor_v_3 option:selected').text() == '0.2') {
		$('#d_vtor_a_31').attr('max', 40 - $(this).val());
		$('#id_vtor_a_3max').val(40 - $(this).val());
	}
	if ($('#vtor_v_3 option:selected').text() == '0.5') {
		$('#d_vtor_a_31').attr('max', 100 - $(this).val());
		$('#id_vtor_a_3max').val(100 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 40 - $(this).val());
			$('#id_vtor_a_3max').val(40 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '1') {
		$('#d_vtor_a_31').attr('max', 200 - $(this).val());
		$('#id_vtor_a_3max').val(200 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 100 - $(this).val());
			$('#id_vtor_a_3max').val(100 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 40 - $(this).val());
			$('#id_vtor_a_3max').val(40 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '3') {
		$('#d_vtor_a_31').attr('max', 300 - $(this).val());
		$('#id_vtor_a_3max').val(300 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1') {
			$('#d_vtor_a_31').attr('max', 200 - $(this).val());
			$('#id_vtor_a_3max').val(200 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 100 - $(this).val());
			$('#id_vtor_a_3max').val(100 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 40 - $(this).val());
			$('#id_vtor_a_3max').val(40 - $(this).val());
		}
	}
	}
	if ((napr == 6 && gab == '02')|| (napr == 10 && gab == '02')){
	if ($('#vtor_v_3 option:selected').text() == '0.2') {
		$('#d_vtor_a_31').attr('max', 50 - $(this).val());
		$('#id_vtor_a_3max').val(50 - $(this).val());
	}
	if ($('#vtor_v_3 option:selected').text() == '0.5') {
		$('#d_vtor_a_31').attr('max', 150 - $(this).val());
		$('#id_vtor_a_3max').val(150 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 50 - $(this).val());
			$('#id_vtor_a_3max').val(50 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '1') {
		$('#d_vtor_a_31').attr('max', 250 - $(this).val());
		$('#id_vtor_a_3max').val(250 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 150 - $(this).val());
			$('#id_vtor_a_3max').val(150 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 50 - $(this).val());
			$('#id_vtor_a_3max').val(50 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '3') {
		$('#d_vtor_a_31').attr('max', 400 - $(this).val());
		$('#id_vtor_a_3max').val(400 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1') {
			$('#d_vtor_a_31').attr('max', 250 - $(this).val());
			$('#id_vtor_a_3max').val(250 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 150 - $(this).val());
			$('#id_vtor_a_3max').val(150 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 50 - $(this).val());
			$('#id_vtor_a_3max').val(50 - $(this).val());
		}
	}
	}
	if (napr == 20){
	if ($('#vtor_v_3 option:selected').text() == '0.2') {
		$('#d_vtor_a_31').attr('max', 60 - $(this).val());
		$('#id_vtor_a_3max').val(60 - $(this).val());
	}
	if ($('#vtor_v_3 option:selected').text() == '0.5') {
		$('#d_vtor_a_31').attr('max', 150 - $(this).val());
		$('#id_vtor_a_3max').val(150 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 60 - $(this).val());
			$('#id_vtor_a_3max').val(60 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '1') {
		$('#d_vtor_a_31').attr('max', 250 - $(this).val());
		$('#id_vtor_a_3max').val(250 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 150 - $(this).val());
			$('#id_vtor_a_3max').val(150 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 60 - $(this).val());
			$('#id_vtor_a_3max').val(60 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '3') {
		$('#d_vtor_a_31').attr('max', 400 - $(this).val());
		$('#id_vtor_a_3max').val(400 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1') {
			$('#d_vtor_a_31').attr('max', 250 - $(this).val());
			$('#id_vtor_a_3max').val(250 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 150 - $(this).val());
			$('#id_vtor_a_3max').val(150 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 60 - $(this).val());
			$('#id_vtor_a_3max').val(60 - $(this).val());
		}
	}
	}
	if (napr == 35){
	if ($('#vtor_v_3 option:selected').text() == '0.2') {
		$('#d_vtor_a_31').attr('max', 75 - $(this).val());
		$('#id_vtor_a_3max').val(75 - $(this).val());
	}
	if ($('#vtor_v_3 option:selected').text() == '0.5') {
		$('#d_vtor_a_31').attr('max', 200 - $(this).val());
		$('#id_vtor_a_3max').val(200 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 75 - $(this).val());
			$('#id_vtor_a_3max').val(75 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '1') {
		$('#d_vtor_a_31').attr('max', 400 - $(this).val());
		$('#id_vtor_a_3max').val(400 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 200 - $(this).val());
			$('#id_vtor_a_3max').val(200 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 75 - $(this).val());
			$('#id_vtor_a_3max').val(75 - $(this).val());
		}
	}
	if ($('#vtor_v_3 option:selected').text() == '3') {
		$('#d_vtor_a_31').attr('max', 600 - $(this).val());
		$('#id_vtor_a_3max').val(600 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1') {
			$('#d_vtor_a_31').attr('max', 400 - $(this).val());
			$('#id_vtor_a_3max').val(400 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.5') {
			$('#d_vtor_a_31').attr('max', 200 - $(this).val());
			$('#id_vtor_a_3max').val(200 - $(this).val());
		}
		if ($('#vtor_v_4 option:selected').text() == '0.2') {
			$('#d_vtor_a_31').attr('max', 75 - $(this).val());
			$('#id_vtor_a_3max').val(75 - $(this).val());
		}
	}
	}
  return false;
  });
	
	
  $('#vtor_v_5').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 7 || tip == 8){
		if (napr == 6 || napr == 10){
			if (gab == '11' || gab == '12'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 30, 5, 5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 75, 5, 10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 20, 150, 10, 20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 100, 300, 25, 100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) { /////
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 65, 5, 10);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, 65, 5, 10);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 125, 10, 25);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 125, 10, 25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 65, 5, 10);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, 65, 5, 10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 75, 225, 25, 75);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 75, 225, 25, 75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 125, 10, 25);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 125, 10, 25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 65, 5, 10);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, 65, 5, 10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
				}	/////
			}
			if (gab == '06' || gab == '07'){
				if (max_m == 250 && !$('#td_62').is(':checked')) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 25, 5, 10);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 20, 50, 5, 20);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 50, 150, 10, 50);
					}
				}
			}
			if (gab == '02' || gab == '03'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',60); $('#id_vtor_a_5max').val(60);
						$('#id_vtor_a_5').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',150); $('#id_vtor_a_5max').val(150);
						$('#id_vtor_a_5').val(10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',20); $('#id_vtor_a_5min').val(20);
						$('#d_vtor_a_51').attr('max',250); $('#id_vtor_a_5max').val(250);
						$('#id_vtor_a_5').val(20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',100); $('#id_vtor_a_5min').val(100);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					$('#id_vtor_a_6').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
				}
			}
			if (gab == '00' || gab == '01' || gab == '05'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5); 
						$('#d_vtor_a_51').attr('max',40); $('#id_vtor_a_5max').val(40);
						$('#id_vtor_a_5').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',100); $('#id_vtor_a_5max').val(100);
						$('#id_vtor_a_5').val(10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',20); $('#id_vtor_a_5min').val(20);
						$('#d_vtor_a_51').attr('max',200); $('#id_vtor_a_5max').val(200);
						$('#id_vtor_a_5').val(20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',100); $('#id_vtor_a_5min').val(100);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',90); $('#id_vtor_a_5max').val(90);
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',90); $('#id_vtor_a_6max').val(90);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',175); $('#id_vtor_a_5max').val(175);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',175); $('#id_vtor_a_6max').val(175);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',90); $('#id_vtor_a_5max').val(90);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',90); $('#id_vtor_a_6max').val(90);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',175); $('#id_vtor_a_5max').val(175);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',175); $('#id_vtor_a_6max').val(175);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',90); $('#id_vtor_a_5max').val(90);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',90); $('#id_vtor_a_6max').val(90);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
				$('#id_vtor_a_6').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
				}
			}
		}
		if (napr == 15 || napr == 20){
			if (gab == '11' || gab == '12'){
				if ((max_m == 630 && !$('#td_62').is(':checked'))) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 60, 5, 5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 150, 5, 10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 20, 250, 10, 20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 100, 300, 25, 100);
					}
				}
				if ((max_m == 630 && $('#td_62').is(':checked'))) { /////
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 145, 5, 5);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 145, 5, 5);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 225, 10, 25);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 225, 10, 25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 145, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 145, 5, 5);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 75, 225, 25, 75);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 75, 225, 25, 75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 225, 10, 25);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 225, 10, 25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 145, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 145, 5, 5);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
						}
					}
				}	/////
			}
			if (gab == '00' || gab == '01' || gab == '02' || gab == '03' || gab == '06' || gab == '07'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',60); $('#id_vtor_a_5max').val(60);
						$('#id_vtor_a_5').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',150); $('#id_vtor_a_5max').val(150);
						$('#id_vtor_a_5').val(10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',20); $('#id_vtor_a_5min').val(20);
						$('#d_vtor_a_51').attr('max',250); $('#id_vtor_a_5max').val(250);
						$('#id_vtor_a_5').val(20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',100); $('#id_vtor_a_5min').val(100);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					$('#id_vtor_a_6').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
				}
			}
		}
		if (napr == 35){
			if (gab == '00' || gab == '01' || gab == '02' || gab == '03' || gab == 'IV'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',100); $('#id_vtor_a_5max').val(100);
						$('#id_vtor_a_5').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',200); $('#id_vtor_a_5max').val(200);
						$('#id_vtor_a_5').val(10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',20); $('#id_vtor_a_5min').val(20);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',100); $('#id_vtor_a_5min').val(100);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					$('#id_vtor_a_6').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
				}
			}	
		}
	}	
	return false;
  });

  $('#vtor_v_6').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 7 || tip == 8){
		if (napr == 6 || napr == 10){
			if (gab == '11' || gab == '12'){
				if (max_m == 400 || max_m == 630) {
					if ($('#vtor_v_6 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
					}
					if ($('#vtor_v_6 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 65, 5, 10);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, 65, 5, 10);
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 125, 10, 25);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 125, 10, 25);
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 65, 5, 10);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, 65, 5, 10);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '3') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 75, 225, 25, 75);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 75, 225, 25, 75);
						if ($('#vtor_v_5 option:selected').text() == '1') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 125, 10, 25);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 125, 10, 25);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 10, 65, 5, 10);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 10, 65, 5, 10);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
				}
			}
			if (gab == '06' || gab == '07'){
				if (max_m == 250) {
					if ($('#vtor_v_6 option:selected').text() == '0.2') {
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',25); $('#id_vtor_a_6max').val(25);
						$('#id_vtor_a_6').val(10);
					}
					if ($('#vtor_v_6 option:selected').text() == '0.5') {
						$('#d_vtor_a_61').attr('min',20);
						$('#d_vtor_a_61').attr('max',50);
					}
					if ($('#vtor_v_6 option:selected').text() == '1') {
						$('#d_vtor_a_61').attr('min',50);
						$('#d_vtor_a_61').attr('max',150);
					}
					if ($('#vtor_v_6 option:selected').text() == '3') {
						$('#d_vtor_a_61').attr('min',100);
						$('#d_vtor_a_61').attr('max',150);
					}
				}
			}
			if (gab == '02' || gab == '03'){
				if (max_m == 400) {
					if ($('#vtor_v_6 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_6 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',175); $('#id_vtor_a_5max').val(175);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',175); $('#id_vtor_a_6max').val(175);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_5 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',175); $('#id_vtor_a_5max').val(175);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',175); $('#id_vtor_a_6max').val(175);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
				}
			}
			if (gab == '00' || gab == '01' || gab == '05'){
				if (max_m == 400) {
					if ($('#vtor_v_6 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_6 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',90); $('#id_vtor_a_5max').val(90);
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',90); $('#id_vtor_a_6max').val(90);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',175); $('#id_vtor_a_5max').val(175);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',175); $('#id_vtor_a_6max').val(175);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',90); $('#id_vtor_a_5max').val(90);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',90); $('#id_vtor_a_6max').val(90);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_5 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',175); $('#id_vtor_a_5max').val(175);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',175); $('#id_vtor_a_6max').val(175);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',90); $('#id_vtor_a_5max').val(90);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',90); $('#id_vtor_a_6max').val(90);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',35); $('#id_vtor_a_5max').val(35);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',35); $('#id_vtor_a_6max').val(35);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
				}
			}
		}
		if (napr == 20){
			if (gab == '11' || gab == '12'){
				if (max_m == 630) {
					if ($('#vtor_v_6 option:selected').text() == '0.2') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
					}
					if ($('#vtor_v_6 option:selected').text() == '0.5') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 145, 5, 5);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 145, 5, 5);
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 25, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 25, 5, 5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '1') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 225, 10, 25);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 225, 10, 25);
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 145, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 145, 5, 5);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
						}
					}
					if ($('#vtor_v_6 option:selected').text() == '3') {
						id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 75, 225, 25, 75);
						id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 75, 225, 25, 75);
						if ($('#vtor_v_5 option:selected').text() == '1') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 25, 225, 10, 25);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 25, 225, 10, 25);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.5') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 145, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 145, 5, 5);
						}
						if ($('#vtor_v_5 option:selected').text() == '0.2') {
							id_vtor_any($('#id_vtor_a_5'), $('#d_vtor_a_51'), $('#id_vtor_a_5min'), $('#id_vtor_a_5max'), 5, 55, 5, 5);
							id_vtor_any($('#id_vtor_a_6'), $('#d_vtor_a_61'), $('#id_vtor_a_6min'), $('#id_vtor_a_6max'), 5, 55, 5, 5);
						}
					}
				}
			}
			if (gab == '00' || gab == '01' || gab == '02' || gab == '03' || gab == '06' || gab == '07'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',60); $('#id_vtor_a_5max').val(60);
						$('#id_vtor_a_5').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',150); $('#id_vtor_a_5max').val(150);
						$('#id_vtor_a_5').val(10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',20); $('#id_vtor_a_5min').val(20);
						$('#d_vtor_a_51').attr('max',250); $('#id_vtor_a_5max').val(250);
						$('#id_vtor_a_5').val(20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',100); $('#id_vtor_a_5min').val(100);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					$('#id_vtor_a_6').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
				}
			}
		}
		if (napr == 35){
			if (gab == '00' || gab == '01' || gab == '02' || gab == '03' || gab == 'IV'){
				if ((max_m == 400 && !$('#td_62').is(':checked')) || (max_m == 630 && !$('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',100); $('#id_vtor_a_5max').val(100);
						$('#id_vtor_a_5').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',200); $('#id_vtor_a_5max').val(200);
						$('#id_vtor_a_5').val(10);
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',20); $('#id_vtor_a_5min').val(20);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(20);
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',100); $('#id_vtor_a_5min').val(100);
						$('#d_vtor_a_51').attr('max',300); $('#id_vtor_a_5max').val(300);
						$('#id_vtor_a_5').val(100);
					}
				}
				if ((max_m == 400 && $('#td_62').is(':checked')) || (max_m == 630 && $('#td_62').is(':checked'))) {
					if ($('#vtor_v_5 option:selected').text() == '0.2') {
						$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
						$('#d_vtor_a_51').attr('max',95); $('#id_vtor_a_5max').val(95);
						$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
						$('#d_vtor_a_61').attr('max',95); $('#id_vtor_a_6max').val(95);
						$('#id_vtor_a_5').val(5);
						$('#id_vtor_a_6').val(5);
					}
					if ($('#vtor_v_5 option:selected').text() == '0.5') {
						$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
						$('#d_vtor_a_51').attr('max',190); $('#id_vtor_a_5max').val(190);
						$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
						$('#d_vtor_a_61').attr('max',190); $('#id_vtor_a_6max').val(190);
						$('#id_vtor_a_5').val(10);
						$('#id_vtor_a_6').val(10);
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '1') {
						$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
						$('#d_vtor_a_51').attr('max',275); $('#id_vtor_a_5max').val(275);
						$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
						$('#d_vtor_a_61').attr('max',275); $('#id_vtor_a_6max').val(275);
						$('#id_vtor_a_5').val(25);
						$('#id_vtor_a_6').val(25);
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',140); $('#id_vtor_a_5max').val(140);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',140); $('#id_vtor_a_6max').val(140);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',55); $('#id_vtor_a_5max').val(55);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',55); $('#id_vtor_a_6max').val(55);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					if ($('#vtor_v_5 option:selected').text() == '3') {
						$('#d_vtor_a_51').attr('min',75); $('#id_vtor_a_5min').val(75);
						$('#d_vtor_a_51').attr('max',225); $('#id_vtor_a_5max').val(225);
						$('#d_vtor_a_61').attr('min',75); $('#id_vtor_a_6min').val(75);
						$('#d_vtor_a_61').attr('max',225); $('#id_vtor_a_6max').val(225);
						$('#id_vtor_a_5').val(75);
						$('#id_vtor_a_6').val(75);
						if ($('#vtor_v_6 option:selected').text() == '1') {
							$('#d_vtor_a_51').attr('min',25); $('#id_vtor_a_5min').val(25);
							$('#d_vtor_a_51').attr('max',275); $('#id_vtor_a_5max').val(275);
							$('#d_vtor_a_61').attr('min',25); $('#id_vtor_a_6min').val(25);
							$('#d_vtor_a_61').attr('max',275); $('#id_vtor_a_6max').val(275);
							$('#id_vtor_a_5').val(25);
							$('#id_vtor_a_6').val(25);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.5') {
							$('#d_vtor_a_51').attr('min',10); $('#id_vtor_a_5min').val(10);
							$('#d_vtor_a_51').attr('max',190); $('#id_vtor_a_5max').val(190);
							$('#d_vtor_a_61').attr('min',10); $('#id_vtor_a_6min').val(10);
							$('#d_vtor_a_61').attr('max',190); $('#id_vtor_a_6max').val(190);
							$('#id_vtor_a_5').val(10);
							$('#id_vtor_a_6').val(10);
						}
						if ($('#vtor_v_6 option:selected').text() == '0.2') {
							$('#d_vtor_a_51').attr('min',5); $('#id_vtor_a_5min').val(5);
							$('#d_vtor_a_51').attr('max',95); $('#id_vtor_a_5max').val(95);
							$('#d_vtor_a_61').attr('min',5); $('#id_vtor_a_6min').val(5);
							$('#d_vtor_a_61').attr('max',95); $('#id_vtor_a_6max').val(95);
							$('#id_vtor_a_5').val(5);
							$('#id_vtor_a_6').val(5);
						}
					}
					$('#id_vtor_a_6').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
				}
			}
		}
	}	
	//$('#id_vtor_a_5').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_61').attr('min'));  
	return false;
  });

  $('#vtor_v_4').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0;   
	if (tip == 9 || tip == 10){
		if (napr == 6 || napr == 10){
				 if (gab == '00' || gab == '01'){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',90); $('#id_vtor_a_3max').val(90);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',175); $('#id_vtor_a_3max').val(175);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',90); $('#id_vtor_a_3max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',175); $('#id_vtor_a_3max').val(175);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',90); $('#id_vtor_a_3max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				  }
				  if (gab == '02'){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',325); $('#id_vtor_a_3max').val(325);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',325); $('#id_vtor_a_4max').val(325);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				 }
			}
				  if (napr == 20){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',325); $('#id_vtor_a_3max').val(325);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',325); $('#id_vtor_a_4max').val(325);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				 }
				  if (napr == 35){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',190); $('#id_vtor_a_3max').val(190);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',190); $('#id_vtor_a_4max').val(190);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',375); $('#id_vtor_a_3max').val(375);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',375); $('#id_vtor_a_4max').val(375);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',190); $('#id_vtor_a_3max').val(190);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',190); $('#id_vtor_a_4max').val(190);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',525); $('#id_vtor_a_3max').val(525);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',525); $('#id_vtor_a_4max').val(525);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',375); $('#id_vtor_a_3max').val(375);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',375); $('#id_vtor_a_4max').val(375);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',190); $('#id_vtor_a_3max').val(190);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',190); $('#id_vtor_a_4max').val(190);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				 }
			//$('#id_vtor_a_4').val($(this).attr('max') - ($(this).val()>0)?$(this).val():$('#d_vtor_a_41').attr('min'));  
		}
	if (tip == 9){
		if (gab == 'IV') {
			ch = $('#td_42').is(':checked'); 
			sl1 = $('#vtor_v_3 option:selected').text();
			sl2 = (ch)?$('#vtor_v_4 option:selected').text():0; 
			if (ch){
				gr=group_np[tip][napr][gab];
				$('#d_vtor_a_31').attr('min',nom_power[gr][sl1][sl2]['min']); 
				$('#id_vtor_a_3min').val(nom_power[gr][sl1][sl2]['min']);
				$('#d_vtor_a_31').attr('max',nom_power[gr][sl1][sl2]['max']); 
				$('#id_vtor_a_3max').val(nom_power[gr][sl1][sl2]['max']);  
				$('#id_vtor_a_3').val(nom_power[gr][sl1][sl2]['min']);
				$('#d_vtor_a_41').attr('min',nom_power[gr][sl1][sl2]['min']); 
				$('#id_vtor_a_4min').val(nom_power[gr][sl1][sl2]['min']);
				$('#d_vtor_a_41').attr('max',nom_power[gr][sl1][sl2]['max']); 
				$('#id_vtor_a_4max').val(nom_power[gr][sl1][sl2]['max']);
				$('#id_vtor_a_4').val(nom_power[gr][sl1][sl2]['min']);
			}
		}
	}  
	
	return false;
  });

var group_np = [];
group_np[9]=[];
group_np[9][3]=[];
group_np[9][3]['IV']='N3';
group_np[9][6]=[];
group_np[9][6]['IV']='N3';
group_np[9][10]=[];
group_np[9][10]['IV']='N3';
group_np[9][15]=[];
group_np[9][15]['IV']='N15';
group_np[9][20]=[];
group_np[9][20]['IV']='N15';
group_np[9][27]=[];
group_np[9][27]['IV']='N27';
group_np[9][35]=[];
group_np[9][35]['IV']='N35';
	
var nom_power = [];
nom_power['N3']=[];
nom_power['N3']['0.2']=[];
nom_power['N3']['0.2'][0]=[];
nom_power['N3']['0.2'][0]['min']=5;nom_power['N3']['0.2'][0]['max']=40;
nom_power['N3']['0.2']['0.2']=[];
nom_power['N3']['0.2']['0.2']['min']=5;nom_power['N3']['0.2']['0.2']['max']=35;
nom_power['N3']['0.2']['0.5']=[];
nom_power['N3']['0.2']['0.5']['min']=5;nom_power['N3']['0.2']['0.5']['max']=35;
nom_power['N3']['0.2']['1']=[];
nom_power['N3']['0.2']['1']['min']=5;nom_power['N3']['0.2']['1']['max']=35;
nom_power['N3']['0.2']['3']=[];
nom_power['N3']['0.2']['3']['min']=5;nom_power['N3']['0.2']['3']['max']=35;
nom_power['N3']['0.5']=[];
nom_power['N3']['0.5'][0]=[];
nom_power['N3']['0.5'][0]['min']=10;nom_power['N3']['0.5'][0]['max']=100;
nom_power['N3']['0.5']['0.2']=[];
nom_power['N3']['0.5']['0.2']['min']=5;nom_power['N3']['0.5']['0.2']['max']=35;
nom_power['N3']['0.5']['0.5']=[];
nom_power['N3']['0.5']['0.5']['min']=10;nom_power['N3']['0.5']['0.5']['max']=90;
nom_power['N3']['0.5']['1']=[];
nom_power['N3']['0.5']['1']['min']=10;nom_power['N3']['0.5']['1']['max']=90;
nom_power['N3']['0.5']['3']=[];
nom_power['N3']['0.5']['3']['min']=10;nom_power['N3']['0.5']['3']['max']=90;
nom_power['N3']['1']=[];
nom_power['N3']['1'][0]=[];
nom_power['N3']['1'][0]['min']=20;nom_power['N3']['1'][0]['max']=200;
nom_power['N3']['1']['0.2']=[];
nom_power['N3']['1']['0.2']['min']=5;nom_power['N3']['1']['0.2']['max']=35;
nom_power['N3']['1']['0.5']=[];
nom_power['N3']['1']['0.5']['min']=10;nom_power['N3']['1']['0.5']['max']=90;
nom_power['N3']['1']['1']=[];
nom_power['N3']['1']['1']['min']=25;nom_power['N3']['1']['1']['max']=175;
nom_power['N3']['1']['3']=[];
nom_power['N3']['1']['3']['min']=25;nom_power['N3']['1']['3']['max']=175;
nom_power['N3']['3']=[];
nom_power['N3']['3'][0]=[];
nom_power['N3']['3'][0]['min']=100;nom_power['N3']['3'][0]['max']=300;
nom_power['N3']['3']['0.2']=[];
nom_power['N3']['3']['0.2']['min']=5;nom_power['N3']['3']['0.2']['max']=35;
nom_power['N3']['3']['0.5']=[];
nom_power['N3']['3']['0.5']['min']=10;nom_power['N3']['3']['0.5']['max']=90;
nom_power['N3']['3']['1']=[];
nom_power['N3']['3']['1']['min']=25;nom_power['N3']['3']['1']['max']=175;
nom_power['N3']['3']['3']=[];
nom_power['N3']['3']['3']['min']=75;nom_power['N3']['3']['3']['max']=225;
nom_power['N35']=[];	
nom_power['N35']['0.2']=[];
nom_power['N35']['0.2'][0]=[];
nom_power['N35']['0.2'][0]['min']=5;nom_power['N35']['0.2'][0]['max']=60;
nom_power['N35']['0.2']['0.2']=[];
nom_power['N35']['0.2']['0.2']['min']=5;nom_power['N35']['0.2']['0.2']['max']=55;
nom_power['N35']['0.2']['0.5']=[];
nom_power['N35']['0.2']['0.5']['min']=5;nom_power['N35']['0.2']['0.5']['max']=55;
nom_power['N35']['0.2']['1']=[];
nom_power['N35']['0.2']['1']['min']=5;nom_power['N35']['0.2']['1']['max']=55;
nom_power['N35']['0.2']['3']=[];
nom_power['N35']['0.2']['3']['min']=5;nom_power['N35']['0.2']['3']['max']=55;
nom_power['N35']['0.5']=[];
nom_power['N35']['0.5'][0]=[];
nom_power['N35']['0.5'][0]['min']=10;nom_power['N35']['0.5'][0]['max']=150;	
nom_power['N35']['0.5']['0.2']=[];
nom_power['N35']['0.5']['0.2']['min']=5;nom_power['N35']['0.5']['0.2']['max']=55;
nom_power['N35']['0.5']['0.5']=[];
nom_power['N35']['0.5']['0.5']['min']=10;nom_power['N35']['0.5']['0.5']['max']=140;
nom_power['N35']['0.5']['1']=[];
nom_power['N35']['0.5']['1']['min']=10;nom_power['N35']['0.5']['1']['max']=140;
nom_power['N35']['0.5']['3']=[];
nom_power['N35']['0.5']['3']['min']=10;nom_power['N35']['0.5']['3']['max']=140;
nom_power['N35']['1']=[];
nom_power['N35']['1'][0]=[];
nom_power['N35']['1'][0]['min']=20;nom_power['N35']['1'][0]['max']=300;
nom_power['N35']['1']['0.2']=[];
nom_power['N35']['1']['0.2']['min']=5;nom_power['N35']['1']['0.2']['max']=55;
nom_power['N35']['1']['0.5']=[];
nom_power['N35']['1']['0.5']['min']=10;nom_power['N35']['1']['0.5']['max']=140;
nom_power['N35']['1']['1']=[];
nom_power['N35']['1']['1']['min']=25;nom_power['N35']['1']['1']['max']=175;
nom_power['N35']['1']['3']=[];
nom_power['N35']['1']['3']['min']=25;nom_power['N35']['1']['3']['max']=275;
nom_power['N35']['3']=[];
nom_power['N35']['3'][0]=[];
nom_power['N35']['3'][0]['min']=100;nom_power['N35']['3'][0]['max']=400;
nom_power['N35']['3']['0.2']=[];
nom_power['N35']['3']['0.2']['min']=5;nom_power['N35']['3']['0.2']['max']=55;
nom_power['N35']['3']['0.5']=[];
nom_power['N35']['3']['0.5']['min']=10;nom_power['N35']['3']['0.5']['max']=140;
nom_power['N35']['3']['1']=[];
nom_power['N35']['3']['1']['min']=25;nom_power['N35']['3']['1']['max']=275;
nom_power['N35']['3']['3']=[];
nom_power['N35']['3']['3']['min']=75;nom_power['N35']['3']['3']['max']=325;
nom_power['N15']=[];
nom_power['N15']['0.2']=[];
nom_power['N15']['0.2'][0]=[];
nom_power['N15']['0.2'][0]['min']=5;nom_power['N15']['0.2'][0]['max']=60;
nom_power['N15']['0.2']['0.2']=[];
nom_power['N15']['0.2']['0.2']['min']=5;nom_power['N15']['0.2']['0.2']['max']=55;
nom_power['N15']['0.2']['0.5']=[];
nom_power['N15']['0.2']['0.5']['min']=5;nom_power['N15']['0.2']['0.5']['max']=55;
nom_power['N15']['0.2']['1']=[];
nom_power['N15']['0.2']['1']['min']=5;nom_power['N15']['0.2']['1']['max']=55;
nom_power['N15']['0.2']['3']=[];
nom_power['N15']['0.2']['3']['min']=5;nom_power['N15']['0.2']['3']['max']=55;
nom_power['N15']['0.5']=[];
nom_power['N15']['0.5'][0]=[];
nom_power['N15']['0.5'][0]['min']=10;nom_power['N15']['0.5'][0]['max']=150;	
nom_power['N15']['0.5']['0.2']=[];
nom_power['N15']['0.5']['0.2']['min']=5;nom_power['N15']['0.5']['0.2']['max']=55;
nom_power['N15']['0.5']['0.5']=[];
nom_power['N15']['0.5']['0.5']['min']=10;nom_power['N15']['0.5']['0.5']['max']=140;
nom_power['N15']['0.5']['1']=[];
nom_power['N15']['0.5']['1']['min']=10;nom_power['N15']['0.5']['1']['max']=140;
nom_power['N15']['0.5']['3']=[];
nom_power['N15']['0.5']['3']['min']=10;nom_power['N15']['0.5']['3']['max']=140;
nom_power['N15']['1']=[];
nom_power['N15']['1'][0]=[];
nom_power['N15']['1'][0]['min']=20;nom_power['N15']['1'][0]['max']=250;
nom_power['N15']['1']['0.2']=[];
nom_power['N15']['1']['0.2']['min']=5;nom_power['N15']['1']['0.2']['max']=55;
nom_power['N15']['1']['0.5']=[];
nom_power['N15']['1']['0.5']['min']=10;nom_power['N15']['1']['0.5']['max']=140;
nom_power['N15']['1']['1']=[];
nom_power['N15']['1']['1']['min']=25;nom_power['N15']['1']['1']['max']=225;
nom_power['N15']['1']['3']=[];
nom_power['N15']['1']['3']['min']=25;nom_power['N15']['1']['3']['max']=225;
nom_power['N15']['3']=[];
nom_power['N15']['3'][0]=[];
nom_power['N15']['3'][0]['min']=100;nom_power['N15']['3'][0]['max']=400;
nom_power['N15']['3']['0.2']=[];
nom_power['N15']['3']['0.2']['min']=5;nom_power['N15']['3']['0.2']['max']=55;
nom_power['N15']['3']['0.5']=[];
nom_power['N15']['3']['0.5']['min']=10;nom_power['N15']['3']['0.5']['max']=140;
nom_power['N15']['3']['1']=[];
nom_power['N15']['3']['1']['min']=25;nom_power['N15']['3']['1']['max']=225;
nom_power['N15']['3']['3']=[];
nom_power['N15']['3']['3']['min']=75;nom_power['N15']['3']['3']['max']=325;
nom_power['N27']=[];
nom_power['N27']['0.2']=[];
nom_power['N27']['0.2'][0]=[];
nom_power['N27']['0.2'][0]['min']=5;nom_power['N27']['0.2'][0]['max']=60;
nom_power['N27']['0.2']['0.2']=[];
nom_power['N27']['0.2']['0.2']['min']=5;nom_power['N27']['0.2']['0.2']['max']=55;
nom_power['N27']['0.2']['0.5']=[];
nom_power['N27']['0.2']['0.5']['min']=5;nom_power['N27']['0.2']['0.5']['max']=55;
nom_power['N27']['0.2']['1']=[];
nom_power['N27']['0.2']['1']['min']=5;nom_power['N27']['0.2']['1']['max']=55;
nom_power['N27']['0.2']['3']=[];
nom_power['N27']['0.2']['3']['min']=5;nom_power['N27']['0.2']['3']['max']=55;
nom_power['N27']['0.5']=[];
nom_power['N27']['0.5'][0]=[];
nom_power['N27']['0.5'][0]['min']=10;nom_power['N27']['0.5'][0]['max']=150;	
nom_power['N27']['0.5']['0.2']=[];
nom_power['N27']['0.5']['0.2']['min']=5;nom_power['N27']['0.5']['0.2']['max']=55;
nom_power['N27']['0.5']['0.5']=[];
nom_power['N27']['0.5']['0.5']['min']=10;nom_power['N27']['0.5']['0.5']['max']=140;
nom_power['N27']['0.5']['1']=[];
nom_power['N27']['0.5']['1']['min']=10;nom_power['N27']['0.5']['1']['max']=140;
nom_power['N27']['0.5']['3']=[];
nom_power['N27']['0.5']['3']['min']=10;nom_power['N27']['0.5']['3']['max']=140;
nom_power['N27']['1']=[];
nom_power['N27']['1'][0]=[];
nom_power['N27']['1'][0]['min']=20;nom_power['N27']['1'][0]['max']=300;
nom_power['N27']['1']['0.2']=[];
nom_power['N27']['1']['0.2']['min']=5;nom_power['N27']['1']['0.2']['max']=55;
nom_power['N27']['1']['0.5']=[];
nom_power['N27']['1']['0.5']['min']=10;nom_power['N27']['1']['0.5']['max']=140;
nom_power['N27']['1']['1']=[];
nom_power['N27']['1']['1']['min']=25;nom_power['N27']['1']['1']['max']=275;
nom_power['N27']['1']['3']=[];
nom_power['N27']['1']['3']['min']=25;nom_power['N27']['1']['3']['max']=275;
nom_power['N27']['3']=[];
nom_power['N27']['3'][0]=[];
nom_power['N27']['3'][0]['min']=100;nom_power['N27']['3'][0]['max']=400;
nom_power['N27']['3']['0.2']=[];
nom_power['N27']['3']['0.2']['min']=5;nom_power['N27']['3']['0.2']['max']=55;
nom_power['N27']['3']['0.5']=[];
nom_power['N27']['3']['0.5']['min']=10;nom_power['N27']['3']['0.5']['max']=140;
nom_power['N27']['3']['1']=[];
nom_power['N27']['3']['1']['min']=25;nom_power['N27']['3']['1']['max']=275;
nom_power['N27']['3']['3']=[];
nom_power['N27']['3']['3']['min']=75;nom_power['N27']['3']['3']['max']=325;


  $('#vtor_v_3').change(function(){
	max_m = $('#max_m option:selected').text()*1;  
	max_m = (max_m)>0?max_m:0; 
	if (tip == 9 || tip == 10){
		if (napr == 6 || napr == 10){
			if (gab == '00' || gab == '01'){
				if ((max_m == 400 && !$('#td_42').is(':checked')) || (max_m == 630 && !$('#td_42').is(':checked'))) {
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',40); $('#id_vtor_a_3max').val(40);
						$('#id_vtor_a_3').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',100); $('#id_vtor_a_3max').val(100);
						$('#id_vtor_a_3').val(10);
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',20); $('#id_vtor_a_3min').val(20);
						$('#d_vtor_a_31').attr('max',200); $('#id_vtor_a_3max').val(200);
						$('#id_vtor_a_3').val(20);
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',100); $('#id_vtor_a_3min').val(100);
						$('#d_vtor_a_31').attr('max',300); $('#id_vtor_a_3max').val(300);
						$('#id_vtor_a_3').val(100);
					}
				}
			}
			if (gab == '02'){
				if ((max_m == 400 && !$('#td_42').is(':checked')) || (max_m == 630 && !$('#td_42').is(':checked'))) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',50); $('#id_vtor_a_3max').val(50);
						$('#id_vtor_a_3').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',150); $('#id_vtor_a_3max').val(150);
						$('#id_vtor_a_3').val(10);
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',20); $('#id_vtor_a_3min').val(20);
						$('#d_vtor_a_31').attr('max',250); $('#id_vtor_a_3max').val(250);
						$('#id_vtor_a_3').val(20);
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',100); $('#id_vtor_a_3min').val(100);
						$('#d_vtor_a_31').attr('max',400); $('#id_vtor_a_3max').val(400);
						$('#id_vtor_a_3').val(100);
					}
				}
			}
				if ((max_m == 400 && $('#td_42').is(':checked')) || (max_m == 630 && $('#td_42').is(':checked'))) {
				  if (gab == '00' || gab == '01'){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',90); $('#id_vtor_a_3max').val(90);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',175); $('#id_vtor_a_3max').val(175);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',90); $('#id_vtor_a_3max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',175); $('#id_vtor_a_3max').val(175);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',175); $('#id_vtor_a_4max').val(175);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',90); $('#id_vtor_a_3max').val(90);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',90); $('#id_vtor_a_4max').val(90);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',35); $('#id_vtor_a_3max').val(35);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',35); $('#id_vtor_a_4max').val(35);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				  }
				  if (gab == '02'){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',325); $('#id_vtor_a_3max').val(325);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',325); $('#id_vtor_a_4max').val(325);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',45); $('#id_vtor_a_3max').val(45);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',45); $('#id_vtor_a_4max').val(45);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				  }
				}
 
		}
		if (napr == 20){
			if (gab == '00' || gab == '01' || gab == '02'){
				if ((max_m == 400 && !$('#td_42').is(':checked')) || (max_m == 630 && !$('#td_42').is(':checked'))) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',50); $('#id_vtor_a_3max').val(50);
						$('#id_vtor_a_3').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',150); $('#id_vtor_a_3max').val(150);
						$('#id_vtor_a_3').val(10);
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',20); $('#id_vtor_a_3min').val(20);
						$('#d_vtor_a_31').attr('max',250); $('#id_vtor_a_3max').val(250);
						$('#id_vtor_a_3').val(20);
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',100); $('#id_vtor_a_3min').val(100);
						$('#d_vtor_a_31').attr('max',400); $('#id_vtor_a_3max').val(400);
						$('#id_vtor_a_3').val(100);
					}
				}
			}
			if ((max_m == 400 && $('#td_42').is(':checked')) || (max_m == 630 && $('#td_42').is(':checked'))) {
				 if (gab == '00' || gab == '01' || gab == '02'){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',325); $('#id_vtor_a_3max').val(325);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',325); $('#id_vtor_a_4max').val(325);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',225); $('#id_vtor_a_3max').val(225);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',225); $('#id_vtor_a_4max').val(225);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',140); $('#id_vtor_a_3max').val(140);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',140); $('#id_vtor_a_4max').val(140);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',55); $('#id_vtor_a_3max').val(55);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',55); $('#id_vtor_a_4max').val(55);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				 }
			}
 
		}
		if (napr == 35){
			if (gab == '00' || gab == '01'){
				if ((max_m == 400 && !$('#td_42').is(':checked')) || (max_m == 630 && !$('#td_42').is(':checked'))) {
					//$('#td_62').prop('disabled', true);
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',75); $('#id_vtor_a_3max').val(75);
						$('#id_vtor_a_3').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',200); $('#id_vtor_a_3max').val(200);
						$('#id_vtor_a_3').val(10);
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',20); $('#id_vtor_a_3min').val(20);
						$('#d_vtor_a_31').attr('max',400); $('#id_vtor_a_3max').val(400);
						$('#id_vtor_a_3').val(20);
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',100); $('#id_vtor_a_3min').val(100);
						$('#d_vtor_a_31').attr('max',600); $('#id_vtor_a_3max').val(600);
						$('#id_vtor_a_3').val(100);
					}
				}
			}
			if ((max_m == 400 && $('#td_42').is(':checked')) || (max_m == 630 && $('#td_42').is(':checked'))) {
				 if (gab == '00' || gab == '01'){
					if ($('#vtor_v_3 option:selected').text() == '0.2') {
						$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
						$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
						$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
						$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
						$('#id_vtor_a_3').val(5);
						$('#id_vtor_a_4').val(5);
					}
					if ($('#vtor_v_3 option:selected').text() == '0.5') {
						$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
						$('#d_vtor_a_31').attr('max',190); $('#id_vtor_a_3max').val(190);
						$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
						$('#d_vtor_a_41').attr('max',190); $('#id_vtor_a_4max').val(190);
						$('#id_vtor_a_3').val(10);
						$('#id_vtor_a_4').val(10);
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '1') {
						$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
						$('#d_vtor_a_31').attr('max',375); $('#id_vtor_a_3max').val(375);
						$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
						$('#d_vtor_a_41').attr('max',375); $('#id_vtor_a_4max').val(375);
						$('#id_vtor_a_3').val(25);
						$('#id_vtor_a_4').val(25);
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',190); $('#id_vtor_a_3max').val(190);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',190); $('#id_vtor_a_4max').val(190);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
					if ($('#vtor_v_3 option:selected').text() == '3') {
						$('#d_vtor_a_31').attr('min',75); $('#id_vtor_a_3min').val(75);
						$('#d_vtor_a_31').attr('max',525); $('#id_vtor_a_3max').val(525);
						$('#d_vtor_a_41').attr('min',75); $('#id_vtor_a_4min').val(75);
						$('#d_vtor_a_41').attr('max',525); $('#id_vtor_a_4max').val(525);
						$('#id_vtor_a_3').val(75);
						$('#id_vtor_a_4').val(75);
						if ($('#vtor_v_4 option:selected').text() == '1') {
							$('#d_vtor_a_31').attr('min',25); $('#id_vtor_a_3min').val(25);
							$('#d_vtor_a_31').attr('max',375); $('#id_vtor_a_3max').val(375);
							$('#d_vtor_a_41').attr('min',25); $('#id_vtor_a_4min').val(25);
							$('#d_vtor_a_41').attr('max',375); $('#id_vtor_a_4max').val(375);
							$('#id_vtor_a_3').val(25);
							$('#id_vtor_a_4').val(25);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.5') {
							$('#d_vtor_a_31').attr('min',10); $('#id_vtor_a_3min').val(10);
							$('#d_vtor_a_31').attr('max',190); $('#id_vtor_a_3max').val(190);
							$('#d_vtor_a_41').attr('min',10); $('#id_vtor_a_4min').val(10);
							$('#d_vtor_a_41').attr('max',190); $('#id_vtor_a_4max').val(190);
							$('#id_vtor_a_3').val(10);
							$('#id_vtor_a_4').val(10);
						}
						if ($('#vtor_v_4 option:selected').text() == '0.2') {
							$('#d_vtor_a_31').attr('min',5); $('#id_vtor_a_3min').val(5);
							$('#d_vtor_a_31').attr('max',70); $('#id_vtor_a_3max').val(70);
							$('#d_vtor_a_41').attr('min',5); $('#id_vtor_a_4min').val(5);
							$('#d_vtor_a_41').attr('max',70); $('#id_vtor_a_4max').val(70);
							$('#id_vtor_a_3').val(5);
							$('#id_vtor_a_4').val(5);
						}
					}
				 }
			}
		}
	}	
	if (tip == 9){
		if (gab == 'IV') {
			ch = $('#td_42').is(':checked'); 
			sl1 = $('#vtor_v_3 option:selected').text();
			sl2 = (ch)?$('#vtor_v_4 option:selected').text():0; 
			gr=group_np[tip][napr][gab];
			$('#d_vtor_a_31').attr('min',nom_power[gr][sl1][sl2]['min']); 
			$('#id_vtor_a_3min').val(nom_power[gr][sl1][sl2]['min']);
			$('#d_vtor_a_31').attr('max',nom_power[gr][sl1][sl2]['max']); 
			$('#id_vtor_a_3max').val(nom_power[gr][sl1][sl2]['max']);  
			$('#id_vtor_a_3').val(nom_power[gr][sl1][sl2]['min']);
			if (ch){
				$('#d_vtor_a_41').attr('min',nom_power[gr][sl1][sl2]['min']); 
				$('#id_vtor_a_4min').val(nom_power[gr][sl1][sl2]['min']);
				$('#d_vtor_a_41').attr('max',nom_power[gr][sl1][sl2]['max']); 
				$('#id_vtor_a_4max').val(nom_power[gr][sl1][sl2]['max']);
				$('#id_vtor_a_4').val(nom_power[gr][sl1][sl2]['min']);
			}
		}
	}  
	return false;
  });

	
}
//tip = t.options[t.selectedIndex].value;
if (tip == 4) {
	//alert(tip);
	if (document.getElementById('rowvyv')) {document.getElementById('rowvyv').style.display = 'none';}
	if (document.getElementById('ntol1')) {document.getElementById('ntol1').style.display = 'none';}
	if (document.getElementById('nali1')) {document.getElementById('nali1').style.display = 'inline';}
	if (document.getElementById('nali2')) {document.getElementById('nali2').style.display = 'none';}
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
	$('#d_vtor_a_01').prop('disabled', true);
	$('#vtor_b_0').prop('disabled', true);
  }
  if (document.getElementById('td_12')){
	$('#vtor_p_1').prop('disabled', true);
	$('#vtor_v_1').prop('disabled', true);
	$('#id_vtor_a_1').prop('disabled', true);
	$('#d_vtor_a_1').prop('disabled', true);
	$('#d_vtor_a_11').prop('disabled', true);
	$('#vtor_b_1').prop('disabled', true);
  }
}
//$(document).ready(function(){
//	
//});


  $('#td_02').change(function(){	
	kl_nali0 = ($('#vtor_v_0').prop('selectedIndex') > -1)?$('#vtor_v_0 option:selected').prop('value'):5;
	kl_nali1 = ($('#vtor_v_1').prop('selectedIndex') > -1)?$('#vtor_v_1 option:selected').prop('value'):5;
	flag1 = false;
	if ($('#td_02').is(':checked') && !$('#td_12').is(':checked')){flag1 = true;}
	if ($('#td_12').is(':checked') && !$('#td_02').is(':checked')){flag1 = true;}
	if ($(this).is(':checked')){
		$('#vtor_p_0').prop('disabled', false);
		$('#vtor_v_0').prop('disabled', false);
		$('#id_vtor_a_0').prop('disabled', false);
		$('#d_vtor_a_0').prop('disabled', false);
		$('#d_vtor_a_01').prop('disabled', false);
		$('#vtor_b_0').prop('disabled', false);
		$('#id_vtor_a_0').val('');
		$('#vtor_v_0 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#d_vtor_a_01').prop('max', 30);
		$('#id_vtor_a_0max').prop('value',30);
	}
	else {
		$('#vtor_p_0').prop('disabled', true);
		$('#vtor_v_0').prop('disabled', true);
		$('#id_vtor_a_0').prop('disabled', true);
		$('#d_vtor_a_0').prop('disabled', true);
		$('#d_vtor_a_01').prop('disabled', true);
		$('#vtor_b_0').prop('disabled', true);
		$('#id_vtor_a_0').val('');
		$('#vtor_v_0 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#d_vtor_a_01').prop('max', 30);
		$('#id_vtor_a_0max').prop('value',30);
	if (napr == 6 || napr == 10){
	  if (kl_nali1 == 1 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',60);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',60);
	  }
	  if (kl_nali1 == 2 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',210);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',210);
	  }
	  if (kl_nali1 == 3 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',450);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',450);
	  }
	  if (kl_nali1 == 4 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',900);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',900);
	  }
	}		
	if (napr == 35){
	  if (kl_nali1 == 1 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',75);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',75);
	  }
	  if (kl_nali1 == 2 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',225);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',225);
	  }
	  if (kl_nali1 == 3 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',450);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',450);
	  }
	  if (kl_nali1 == 4 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',900);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',900);
	  }
	}	
	}
  return false;
  });
	  
  $('#td_12').change(function(){	
	kl_nali0 = ($('#vtor_v_0').prop('selectedIndex') > -1)?$('#vtor_v_0 option:selected').prop('value'):5;
	kl_nali1 = ($('#vtor_v_1').prop('selectedIndex') > -1)?$('#vtor_v_1 option:selected').prop('value'):5;
	flag1 = false;
	if ($('#td_02').is(':checked') && !$('#td_12').is(':checked')){flag1 = true;}
	if ($('#td_12').is(':checked') && !$('#td_02').is(':checked')){flag1 = true;}
	if ($(this).is(':checked')){
		$('#vtor_p_1').prop('disabled', false);
		$('#vtor_v_1').prop('disabled', false);
		$('#id_vtor_a_1').prop('disabled', false);
		$('#d_vtor_a_1').prop('disabled', false);
		$('#d_vtor_a_11').prop('disabled', false);
		$('#vtor_b_1').prop('disabled', false);
		$('#id_vtor_a_1').val('');
		$('#vtor_v_1 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#d_vtor_a_11').prop('max', 30);
		$('#id_vtor_a_1max').prop('value',30);
	}
	else {
		$('#vtor_p_1').prop('disabled', true);
		$('#vtor_v_1').prop('disabled', true);
		$('#id_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_11').prop('disabled', true);
		$('#vtor_b_1').prop('disabled', true);
		$('#id_vtor_a_1').val('');
		$('#vtor_v_1 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#d_vtor_a_11').prop('max', 30);
		$('#id_vtor_a_1max').prop('value',30);
	if (napr == 6 || napr == 10){
	  if (kl_nali0 == 1 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',60);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',60);
	  }
	  if (kl_nali0 == 2 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',210);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',210);
	  }
	  if (kl_nali0 == 3 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',450);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',450);
	  }
	  if (kl_nali0 == 4 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',900);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',900);
	  }
	}		
	if (napr == 35){
	  if (kl_nali0 == 1 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',75);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',75);
	  }
	  if (kl_nali0 == 2 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',225);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',225);
	  }
	  if (kl_nali0 == 3 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',450);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',450);
	  }
	  if (kl_nali0 == 4 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',900);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',900);
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
		$('#d_vtor_a_3').prop('disabled', false);
		$('#vtor_bn_3').prop('disabled', false);
	}
	else {
		$('#vtor_p_3').prop('disabled', true);
		$('#vtor_v_3').prop('disabled', true);
		$('#id_vtor_a_3').prop('disabled', true);
		$('#d_vtor_a_3').prop('disabled', true);
		$('#vtor_bn_3').prop('disabled', true);
	}
  return false;
  });

  $('#td_42').change(function(){	
	if ($(this).is(':checked')){
		$('#vtor_p_4').prop('disabled', false);
		$('#vtor_v_4').prop('disabled', false);
		$('#id_vtor_a_4').prop('disabled', false);
		$('#d_vtor_a_41').prop('disabled', false);
		$('#vtor_bn_4').prop('disabled', false);
	    max_m = $('#max_m option:selected').text()*1;  
		max_m = (max_m)>0?max_m:0;   
		//max_d = $('#vtor_bn_7 option:selected').text()*1;   
		//max_d = (max_d)>0?max_d:0;   
	    $('#vtor_bn_3').val((max_m)/2);
	    $('#vtor_bn_4').val((max_m)/2);
			    if (tip == 9 || tip == 10){
					if (napr == 6 || napr == 10){
						if (gab == '00' || gab == '01' || gab == '02'){
							$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
						else {
							$('#max_m').html('<option value="">...</option><option value="400">400</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					if (napr == 20){
						if (gab == '00'){
							//$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m').html('<option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
						else {
							$('#max_m').html('<option value="">...</option><option value="400">400</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					if (napr == 35){
						if (gab == '00' || gab == '01'){
							//$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m').html('<option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
						else {
							$('#max_m').html('<option value="">...</option><option value="400">400</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
				}
	    	$('#id_vtor_a_3').val($('#d_vtor_a_31').attr('min'));
	    	$('#d_vtor_a_31').val($('#d_vtor_a_31').attr('min'));
	}
	else {
		$('#vtor_p_3 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_p_4 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_p_4').prop('disabled', true);
		$('#vtor_v_3 option:selected').each(function(){
  			this.selected=false;
		});   
		$('#vtor_v_4 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#id_vtor_a_3').val('');
	    $('#id_vtor_a_4').val('');
		$('#vtor_v_4').prop('disabled', true);
		$('#id_vtor_a_4').prop('disabled', true);
		$('#d_vtor_a_41').prop('disabled', true);
		$('#vtor_bn_4').prop('disabled', true);
	    max_m = $('#max_m option:selected').text()*1;  
		max_m = (max_m)>0?max_m:0;   
	    $('#vtor_bn_3').val('');
	    $('#vtor_bn_4').val('');
			    if (tip == 9 || tip == 10){
					if (napr == 6 || napr == 10){
						if (gab == '00' || gab == '01' || gab == '02'){
							$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					if (napr == 20) {
						if (gab == '00'){
							//$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m').html('<option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
					if (napr == 35) {
						if (gab == '00' || gab == '01'){
							//$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#max_m').html('<option value="630">630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);
						}
					}
				}
			//max_d = $('#vtor_bn_4 option:selected').text()*1;   
			//max_d = (max_d)>0?max_d:0;   
	    	$('#vtor_bn_3').val(max_m);
	    	$('#id_vtor_a_3').val($('#d_vtor_a_31').attr('min'));
	    	$('#d_vtor_a_31').val($('#d_vtor_a_31').attr('min'));
/*		$('#vtor_p_4').prop('disabled', true);
		$('#vtor_v_4').prop('disabled', true);
		$('#id_vtor_a_4').prop('disabled', true);
		$('#d_vtor_a_4').prop('disabled', true);
		$('#vtor_bn_4').prop('disabled', true);
*/	}
  return false;
  });

  $('#d_vtor_a_01').change(function(){	
	kl_nali0 = ($('#vtor_v_0').prop('selectedIndex') > -1)?$('#vtor_v_0 option:selected').prop('value'):5;
	kl_nali1 = ($('#vtor_v_1').prop('selectedIndex') > -1)?$('#vtor_v_1 option:selected').prop('value'):5;
	  $('#id_vtor_a_0').val($(this).val());
	  if (napr == 6 || napr == 10){
	    if (kl_nali0 > 1 && kl_nali1 == 1 && flag2) {
	      $('#d_vtor_a_11').prop('max', 90 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',90 - $(this).val());
	    }
	    if (kl_nali0 >= 2 && kl_nali1 == 2 && flag2) {
	      $('#d_vtor_a_11').prop('max', 210 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',210 - $(this).val());
	    }
	    if (kl_nali0 >= 3 && kl_nali1 == 3 && flag2) {
	      $('#d_vtor_a_11').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',450 - $(this).val());
	    }
	    if (kl_nali0 == 4 && kl_nali1 == 4 && flag2) {
	      $('#d_vtor_a_11').prop('max', 900 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',900 - $(this).val());
	    }
	    if (kl_nali0 == 1 && kl_nali1 > 1 && flag2) {
	      $('#d_vtor_a_11').prop('max', 90 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',90 - $(this).val());
	    }
	    if (kl_nali0 == 2 && kl_nali1 >= 2 && flag2) {
	      $('#d_vtor_a_11').prop('max', 210 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',210 - $(this).val());
	    }
	    if (kl_nali0 == 3 && kl_nali1 >= 3 && flag2) {
	      $('#d_vtor_a_11').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',450 - $(this).val());
	    }
	  }
	  if (napr == 35){
	    if (kl_nali0 == 1 && kl_nali1 == 1 && flag2) {
	      $('#d_vtor_a_11').prop('max', 75 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',75 - $(this).val());
	    }
	    if (kl_nali0 > 1 && kl_nali1 == 1 && flag2) {
	      $('#d_vtor_a_11').prop('max', 120 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',120 - $(this).val());
	    }
	    if (kl_nali0 >= 2 && kl_nali1 == 2 && flag2) {
	      $('#d_vtor_a_11').prop('max', 240 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',240 - $(this).val());
	    }
	    if (kl_nali0 >= 3 && kl_nali1 == 3 && flag2) {
	      $('#d_vtor_a_11').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',450 - $(this).val());
	    }
	    if (kl_nali0 == 4 && kl_nali1 == 4 && flag2) {
	      $('#d_vtor_a_11').prop('max', 900 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',900 - $(this).val());
	    }
	    if (kl_nali0 == 1 && kl_nali1 > 1 && flag2) {
	      $('#d_vtor_a_11').prop('max', 120 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',120 - $(this).val());
	    }
	    if (kl_nali0 == 2 && kl_nali1 >= 2 && flag2) {
	      $('#d_vtor_a_11').prop('max', 240 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',240 - $(this).val());
	    }
	    if (kl_nali0 == 3 && kl_nali1 >= 3 && flag2) {
	      $('#d_vtor_a_11').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_1max').prop('value',450 - $(this).val());
	    }
	  }
	  return false;
  });
	  
  $('#d_vtor_a_11').change(function(){	
	kl_nali0 = ($('#vtor_v_0').prop('selectedIndex') > -1)?$('#vtor_v_0 option:selected').prop('value'):5;
	kl_nali1 = ($('#vtor_v_1').prop('selectedIndex') > -1)?$('#vtor_v_1 option:selected').prop('value'):5;
	  $('#id_vtor_a_1').val($(this).val());
	  if (napr == 6 || napr == 10){
	    if (kl_nali0 > 1 && kl_nali1 == 1 && flag2) {
	      $('#d_vtor_a_01').prop('max', 90 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',90 - $(this).val());
	    }
	    if (kl_nali0 >= 2 && kl_nali1 == 2 && flag2) {
	      $('#d_vtor_a_01').prop('max', 210 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',210 - $(this).val());
	    }
	    if (kl_nali0 >= 3 && kl_nali1 == 3 && flag2) {
	      $('#d_vtor_a_01').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',450 - $(this).val());
	    }
	    if (kl_nali0 == 4 && kl_nali1 == 4 && flag2) {
	      $('#d_vtor_a_01').prop('max', 900 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',900 - $(this).val());
	    }
	    if (kl_nali0 == 1 && kl_nali1 > 1 && flag2) {
	      $('#d_vtor_a_01').prop('max', 90 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',90 - $(this).val());
	    }
	    if (kl_nali0 == 2 && kl_nali1 >= 2 && flag2) {
	      $('#d_vtor_a_01').prop('max', 210 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',210 - $(this).val());
	    }
	    if (kl_nali0 == 3 && kl_nali1 >= 3 && flag2) {
	      $('#d_vtor_a_01').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',450 - $(this).val());
	    }
	  }
	  if (napr == 35){
	    if (kl_nali0 == 1 && kl_nali1 == 1 && flag2) {
	      $('#d_vtor_a_01').prop('max', 75 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',75 - $(this).val());
	    }
	    if (kl_nali0 > 1 && kl_nali1 == 1 && flag2) {
	      $('#d_vtor_a_01').prop('max', 120 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',120 - $(this).val());
	    }
	    if (kl_nali0 >= 2 && kl_nali1 == 2 && flag2) {
	      $('#d_vtor_a_01').prop('max', 240 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',240 - $(this).val());
	    }
	    if (kl_nali0 >= 3 && kl_nali1 == 3 && flag2) {
	      $('#d_vtor_a_01').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',450 - $(this).val());
	    }
	    if (kl_nali0 == 4 && kl_nali1 == 4 && flag2) {
	      $('#d_vtor_a_01').prop('max', 900 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',900 - $(this).val());
	    }
	    if (kl_nali0 == 1 && kl_nali1 > 1 && flag2) {
	      $('#d_vtor_a_01').prop('max', 120 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',120 - $(this).val());
	    }
	    if (kl_nali0 == 2 && kl_nali1 >= 2 && flag2) {
	      $('#d_vtor_a_01').prop('max', 240 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',240 - $(this).val());
	    }
	    if (kl_nali0 == 3 && kl_nali1 >= 3 && flag2) {
	      $('#d_vtor_a_01').prop('max', 450 - $(this).val());
		  $('#id_vtor_a_0max').prop('value',450 - $(this).val());
	    }
	  }
	  return false;
  });
	  

  $('#vtor_v_0').change(function(){	
	kl_nali0 = this.options[this.selectedIndex].value;
	kl_nali1 = ($('#vtor_v_1').prop('selectedIndex') > -1)?$('#vtor_v_1 option:selected').prop('value'):5;
	seldata = '<option value="">...</option>';
	flag1 = false;
	flag2 = false;
	if ($('#td_02').is(':checked') && !$('#td_12').is(':checked')){flag1 = true;}
	if ($('#td_12').is(':checked') && !$('#td_02').is(':checked')){flag1 = true;}
	if ($('#td_02').is(':checked') && $('#td_12').is(':checked')){flag2 = true;}
	$('#id_vtor_a_0').prop('value',30);
	if (napr == 6 || napr == 10){
	  if (kl_nali0 == 1 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',60);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',60);
	  }
	  if (kl_nali0 == 2 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option><option value="4">75</option><option value="5">90</option><option value="6">105</option><option value="7">120</option><option value="8">135</option><option value="9">150</option><option value="10">165</option><option value="11">180</option><option value="12">195</option><option value="13">210</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',210);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',210);
	  }
	  if (kl_nali0 == 3 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',450);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',450);
	  }
	  if (kl_nali0 == 4 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',900);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',900);
	  }
	  if (kl_nali0 == 1 && kl_nali1 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',30);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',30); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',30);
	  }
	  if (kl_nali0 == 1 && kl_nali1 > 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',60);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',60);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',60); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',60);
	  }
	  if (kl_nali0 > 1 && kl_nali1 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',60);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',60);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',60); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',60);
	  }
	  if (kl_nali0 == 2 && kl_nali1 >= 2 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',180);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',180);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',180); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',180);
	  }
	  if (kl_nali0 >= 2 && kl_nali1 == 2 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',180);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',180);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',180); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',180);
	  }
	  if (kl_nali0 == 3 && kl_nali1 >= 3 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option>';
		//$("#id_vtor_a_1").prop('value', '30');
		//$("#id_vtor_a_0").prop('value', '30');
		//$("#d_vtor_a_1").html(seldata);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
	  }
	  if (kl_nali0 >= 3 && kl_nali1 == 3 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option>';
		//$("#id_vtor_a_1").prop('value', '30');
		//$("#id_vtor_a_0").prop('value', '30');
		//$("#d_vtor_a_1").html(seldata);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
	  }
	  if (kl_nali0 == 4 && kl_nali1 == 4 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		//$("#d_vtor_a_1").html(seldata);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',870);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',870);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',870); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',870);
	  }
    }	
	if (napr == 35){
	  if (kl_nali0 == 1 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',75);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',75);
	  }
	  if (kl_nali0 == 2 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option><option value="4">75</option><option value="5">90</option><option value="6">105</option><option value="7">120</option><option value="8">135</option><option value="9">150</option><option value="10">165</option><option value="11">180</option><option value="12">195</option><option value="13">210</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',225);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',225);
	  }
	  if (kl_nali0 == 3 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',450);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',450);
	  }
	  if (kl_nali0 == 4 && flag1) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',900);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',900);
	  }
	  if (kl_nali0 == 1 && kl_nali1 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',45);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',45);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',45); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',45);
	  }
	  if (kl_nali0 == 1 && kl_nali1 > 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',90);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',90);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',90); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',90);
	  }
	  if (kl_nali0 > 1 && kl_nali1 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',90);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',90);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',90); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',90);
	  }
	  if (kl_nali0 == 2 && kl_nali1 >= 2 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',210);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',210);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',210); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',210);
	  }
	  if (kl_nali0 >= 2 && kl_nali1 == 2 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',210);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',210);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',210); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',210);
	  }
	  if (kl_nali0 == 3 && kl_nali1 >= 3 && flag2) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
	  }
	  if (kl_nali0 >= 3 && kl_nali1 == 3 && flag2) {
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
	  }
	  if (kl_nali0 == 4 && kl_nali1 == 4 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		//$("#d_vtor_a_1").html(seldata);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',870);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',870);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',870); $('#id_vtor_a_1').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',870);
	  }
    }	
	//$("#d_vtor_a_0").html(seldata);
  return false;
  });
	  
  $('#vtor_v_1').change(function(){	
	kl_nali1 = this.options[this.selectedIndex].value;
	kl_nali0 = ($('#vtor_v_0').prop('selectedIndex') > -1)?$('#vtor_v_0 option:selected').prop('value'):5;
	seldata = '<option value="">...</option>';
	flag1 = false;
	flag2 = false;
	if ($('#td_02').is(':checked') && !$('#td_12').is(':checked')){flag1 = true;}
	if ($('#td_12').is(':checked') && !$('#td_02').is(':checked')){flag1 = true;}
	if ($('#td_02').is(':checked') && $('#td_12').is(':checked')){flag2 = true;}
	$('#id_vtor_a_1').prop('value',30);  
	if (napr == 6 || napr == 10){
	  if (kl_nali1 == 1 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',60);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',60);
	  }
	  if (kl_nali1 == 2 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option><option value="4">75</option><option value="5">90</option><option value="6">105</option><option value="7">120</option><option value="8">135</option><option value="9">150</option><option value="10">165</option><option value="11">180</option><option value="12">195</option><option value="13">210</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',210);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',210);
	  }
	  if (kl_nali1 == 3 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',450);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',450);
	  }
	  if (kl_nali1 == 4 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',900);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',900);
	  }
	  if (kl_nali1 == 1 && kl_nali0 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',30);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',30);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',30); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',30);
	  }
	  if (kl_nali1 == 1 && kl_nali0 > 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',60);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',60);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',60); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',60);
	  }
	  if (kl_nali1 > 1 && kl_nali0 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',60);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',60);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',60); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',60);
	  }
	  if (kl_nali1 == 2 && kl_nali0 >= 2 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',180);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',180);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',180); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',180);
	  }
	  if (kl_nali1 >= 2 && kl_nali0 == 2 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',180);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',180);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',180); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',180);
	  }
	  if (kl_nali1 == 3 && kl_nali0 >= 3 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
	  }
	  if (kl_nali1 >= 3 && kl_nali0 == 3 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
	  }
	  if (kl_nali1 == 4 && kl_nali0 == 4 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		//$("#d_vtor_a_1").html(seldata);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',870);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',870);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',870); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',870);
	  }
    }	
	if (napr == 35){
	  if (kl_nali1 == 1 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',75);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',75);
	  }
	  if (kl_nali1 == 2 && flag1) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="2">45</option><option value="3">60</option><option value="4">75</option><option value="5">90</option><option value="6">105</option><option value="7">120</option><option value="8">135</option><option value="9">150</option><option value="10">165</option><option value="11">180</option><option value="12">195</option><option value="13">210</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',225);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',225);
	  }
	  if (kl_nali1 == 3 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',450);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',450);
	  }
	  if (kl_nali1 == 4 && flag1) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',900);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',900);
	  }
	  if (kl_nali1 == 1 && kl_nali0 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option>';
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',45);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',45);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',45); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',45);
	  }
	  if (kl_nali1 == 1 && kl_nali0 > 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',90); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',90);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',90);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',90);
	  }
	  if (kl_nali1 > 1 && kl_nali0 == 1 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',90); $('#id_vtor_a_0').prop('value',30);
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',90);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',90);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',90);
	  }
	  if (kl_nali1 == 2 && kl_nali0 >= 2 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',210);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',210);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',210); $('#id_vtor_a_0').prop('value',30);	
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',210);
	  }
	  if (kl_nali1 >= 2 && kl_nali0 == 2 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',210);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',210);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',210); $('#id_vtor_a_0').prop('value',30);	
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',210);
	  }
	  if (kl_nali1 == 3 && kl_nali0 >= 3 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420); $('#id_vtor_a_0').prop('value',30);	
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
	  }
	  if (kl_nali1 >= 3 && kl_nali0 == 3 && flag2) {
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',420);
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',420);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',420); $('#id_vtor_a_0').prop('value',30);	
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',420);
	  }
	  if (kl_nali1 == 4 && kl_nali0 == 4 && flag2) {
		//seldata = '<option value="">...</option><option value="1">30</option><option value="1">45</option><option value="1">60</option><option value="1">75</option><option value="1">90</option><option value="1">105</option>';
		//$("#d_vtor_a_1").html(seldata);
		$('#id_vtor_a_1min').prop('value',30); $('#id_vtor_a_1max').prop('value',870); 
		$('#d_vtor_a_11').prop('min',30); $('#d_vtor_a_11').prop('max',870);
		$('#id_vtor_a_0min').prop('value',30); $('#id_vtor_a_0max').prop('value',870); $('#id_vtor_a_0').prop('value',30);	
		$('#d_vtor_a_01').prop('min',30); $('#d_vtor_a_01').prop('max',870);
	  }
    }	
	//$("#d_vtor_a_1").html(seldata);
  return false;
  });
	  
  $('#tip').change(function(){	
	tip = this.options[this.selectedIndex].value; 
	if (tip == 4 || tip == 7 || tip == 8 || tip == 9 || tip == 10){
	seldata = '<option value="">...</option>';
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
	}
  return false;
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
				$("#gib_v").css("display", "none");
			    $("#var_v_v").html('');
		//$("#bar_v").html('');
      }
    });
  return false;
  });	
	
  $('#gab').change(function(){	
	gab = this.options[this.selectedIndex].text; 
	isp = this.options[this.selectedIndex].value; 
	if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);}
	seldata = '<option value="">...</option>';
		if (gab == '06' || gab == '07') {
			document.getElementById('row-znol').style.display = 'none';
			//alert(1);
		}
		else {document.getElementById('row-znol').style.display = 'table-row';}
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=klimkatref&column0=klim_kat&case=tip_isp_id_eq_"+isp,
      success: function(data2){
        $("#klim_kat").html(seldata+data2);
		$("#gib_v").css("display", "none");
		$("#gib_vv").val("");
		  $.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2rad.php",
	      data: "table=sectermref&column0=sec_term_id&column1=sec_term&case=tip_isp_id_eq_"+isp+"&mark=1",
	      success: function(data15){
			if ((tip == 7 || tip == 8 ) && (napr == 6 || napr == 10) && (gab == '00' || gab == '01' || gab == '05' || gab == '06' || gab == '07' || gab == '11' || gab == '12'))
			{
			    $("#var_v_v").html(data15);
				$('#var_v_v_nt').prop('disabled', false);
			}
			else if ((tip == 9 || tip == 10) && (napr == 6 || napr == 10) && (gab == '00' || gab == '02')) {
			    $("#var_v_v").html(data15);
				$('#var_v_v_nt').prop('disabled', false);
			}
			else if ((tip == 7 || tip == 8) && (napr == 15 || napr == 20) && (gab == '11' || gab == '12')) {
			    $("#var_v_v").html(data15);
				$('#var_v_v_nt').prop('disabled', false);
			}
			else {
				$("#gib_v").css("display", "none");
			    $("#var_v_v").html('');
				$('#var_v_v_nt').prop('disabled', true);
			}
			
			if (tip == 7 && napr == 35 && gab == 'IV'){document.getElementById('max_m').innerHTML = '<option value="630">630</option>'; }
				$("#sec_term_id_sec_term_1").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_2").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_3").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_4").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	 
			    if (tip == 7 || tip == 8){
					if (napr == 6 || napr == 10){
						if (gab == '06' || gab == '07'){
							$('#max_m').html('<option value="250">250</option>');
							$('#vtor_v_5').html('<option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option>');
						}
						else {
							$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
							$('#vtor_v_5').html('<option value="">...</option><option value="1">0.2</option><option value="2">0.5</option><option value="3">1</option><option value="4">3</option>');
						}
					}
					if (tip == 7 && napr == 35){
						if (gab == 'IV'){
							$('#max_m').html('<option value="630">630</option>');
						}
					}	
					if (napr == 20 || napr == 35) {
						$('#max_m').html('<option value="630">630</option>');
					}
				}
			    if (tip == 9 || tip == 10){
					if (napr == 6 || napr == 10){
						if (gab == '00' || gab == '02'){
							$('#max_m').html('<option value="">...</option><option value="400">400</option><option value="630">630</option>');
						}
						else {
							$('#max_m').html('<option value="">...</option>');
						}
					}
					if (napr == 20) {
						if (gab == '00'){
							$('#max_m').html('<option value="630" selected>630</option>');
						}
					}
					if (napr == 35) {
						if (gab == '00' || gab == '01'){
							$('#max_m').html('<option value="630" selected>630</option>');
						}
					}
				}
			    if (tip == 9){
					if (napr == 3 || napr == 6 || napr == 10) {
						if (gab == 'IV'){
							$('#max_m').html('<option value="">...</option><option value="400" selected>400</option><option value="630" >630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);			
						}
					}
					if (napr == 15 || napr == 20) {
						if (gab == 'IV'){
							$('#max_m').html('<option value="">...</option><option value="630" selected>630</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);			
						}
					}
					if (napr == 35 || napr == 27) {
						if (gab == 'IV'){
							$('#max_m').html('<option value="">...</option><option value="630" selected>630</option><option value="1000" >1000</option>');
							$('#max_m :contains('+max_m+')').attr("selected", true);			
						}
					}
				}
		      }
		    });  
	      }
	    });  
/* 
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
*/		$.ajax({
	      type: "POST",
	      url: "/wp-content/themes/semicolon/res2var.php",
	      data: "table=nom_napr&column0=napr&case=kl_napr_eq_"+napr+'_and_dflt_eq_1',
	      success: function(data4){
	        $("#def_n").html('<input id="def_np" type="text" value="'+data4+'" />');
			defn=document.getElementById("def_np").value;
			//alert("2="+mintok);
			$.ajax({
		      type: "POST",
		      url: "/wp-content/themes/semicolon/res2sel.php",
		      data: "table=nom_napr&column0=napr&column1=extra_napr&case=kl_napr_eq_"+napr+'_and_id_tip_eq_'+tip+'&mark='+defn,
		      success: function(data5){
				//alert("2="+maxtok);
		        $("#per_n").html(seldata+data5);
		        if (tip == 7 && napr == 35 && gab == 'IV') {
	$('#vtor_p_5').html('<option value="1">100/V3</option>');
	$('#vtor_p_6').html('<option value="1">100/V3</option>');
	$('#vtor_p_7').html('<option value="">...</option><option value="1">100/3</option><option value="2">100</option>');
	$('#d_vtor_a_7').html('<option value="">...</option><option value="100">100</option><option value="150">150</option><option value="200">200</option>');
	}

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
*/		      }
		    });  
	      }
	    });  
/*      }
    });  
*/  return false;
  });	


  $('#per_n').change(function(){	
	per_n = this.options[this.selectedIndex].text; 
	seldata = '<option value="">...</option>';
	$('#vtor_p_5').html('<option value="">...</option><option value="1">100/V3</option><option value="2">110/V3</option><option value="3">120/V3</option><option value="4">127/V3</option><option value="5">200/V3</option><option value="6">220/V3</option><option value="7">230/V3</option><option value="8">100</option><option value="9">110</option><option value="10">120</option><option value="11">127</option><option value="12">200</option><option value="13">220</option><option value="14">230</option>');
	$('#vtor_p_6').html('<option value="">...</option><option value="1">100/V3</option><option value="2">110/V3</option><option value="3">120/V3</option><option value="4">127/V3</option><option value="5">200/V3</option><option value="6">220/V3</option><option value="7">230/V3</option><option value="8">100</option><option value="9">110</option><option value="10">120</option><option value="11">127</option><option value="12">200</option><option value="13">220</option><option value="14">230</option>');
	$('#vtor_p_7').html('<option value="">...</option><option value="1">100/3</option><option value="2">110/3</option><option value="3">120/3</option><option value="4">127/3</option><option value="5">200/3</option><option value="6">220/3</option><option value="7">230/3</option><option value="8">100</option><option value="9">110</option><option value="10">120</option><option value="11">127</option><option value="12">200</option><option value="13">220</option><option value="14">230</option>');
	$('#d_vtor_a_7').html('<option value="">...</option><option value="30">30</option><option value="50">50</option><option value="75">75</option><option value="100">100</option><option value="150">150</option><option value="200">200</option><option value="300">300</option>');
if (tip == 7 && napr == 35 && gab == 'IV' && per_n == '27000/V3') { 
	$('#vtor_p_5').html('<option value="1">100/V3</option>');
	$('#vtor_p_6').html('<option value="1">100/V3</option>');
	$('#vtor_p_7').html('<option value="">...</option><option value="1">100/3</option><option value="2">100</option>');
	$('#d_vtor_a_7').html('<option value="">...</option><option value="100">100</option><option value="150">150</option><option value="200">200</option>');
	}
if (tip == 7 && napr == 35 && gab == 'IV' && per_n == '35000/V3') {
	$('#vtor_p_5').html('<option value="1">100/V3</option>');
	$('#vtor_p_6').html('<option value="1">100/V3</option>');
	$('#vtor_p_7').html('<option value="">...</option><option value="1">100/3</option><option value="2">100</option>');
	$('#d_vtor_a_7').html('<option value="">...</option><option value="100">100</option><option value="150">150</option><option value="200">200</option>');
	}
if (tip == 7 && napr == 35 && gab == 'IV' && per_n == '27500'){
	$('#vtor_p_5').html('<option value="1">100</option>');
	$('#vtor_p_6').html('<option value="1">100</option>');
	$('#vtor_p_7').html('<option value="1">127</option>');
	$('#d_vtor_a_7').html('<option value="">...</option><option value="100">100</option><option value="150">150</option><option value="200">200</option>');
	}
  }
)  

$('[id^=d_vtor_a_]').change(function(){	
	if (this.id.indexOf('nt') == -1)  {
	  if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('checked', false);$('#'+this.id+'_nt').prop('disabled', true);}
  }
	return false;
});	

$('[id^=vtor_v_]').change(function(){	
	  idd = this.id;
	  idd = idd.replace('vtor_v_', 'd_vtor_a_');
	if (this.id.indexOf('nt') == -1)  {
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
		c += (d.selectedIndex>1)?('-'+d.options[d.selectedIndex].text+''):'';

        //пониженая индукция и тип выводов
        if ( tip == 7 || tip == 8 || tip == 9 || tip == 10) {
			d = document.getElementById('pon_in');
			if ($('#pon_in').is(':checked') || $("#sec_term_id_sec_term_3").is(':checked')) { c += '-';}
			c += ($('#pon_in').is(':checked'))?('И'):'';
		    if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 < 1)) { c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value*1000+'мм)'}; //русская С
        	if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 >= 1)) { c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
		    if ($("#sec_term_id_sec_term_5").is(':checked') && (document.getElementById('gib_vv').value*1 < 1)) { c += 'Е'}; //русская Е
			//if ($("#sec_term_id_sec_term_3").is(':checked')){ c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
		}

		//класс точности
		if (tip == 4) {
		bez = ''; k0 = ''; k1 = ''; k2 = ''; n0 = ''; n1 = ''; n2 = '';
		if ($('#td_02').is(':checked')){ 
			k = document.getElementById('vtor_v_0');
			k0 = k.options[k.selectedIndex].text+'/';
			n0 = document.getElementById('id_vtor_a_0').value+'/';
		}
		else{
			bez += 'без обмотки а1-в1-с1-о1';
		}
		if ($('#td_12').is(':checked')){ 
			k = document.getElementById('vtor_v_1');
			k1 = k.options[k.selectedIndex].text+'/';
			n1 = document.getElementById('id_vtor_a_1').value+'/';
		}
		else{
			bez += 'без обмотки а2-в2-с2-о2';
		}
		
		k = document.getElementById('vtor_v_2');
		k2 = k.options[k.selectedIndex].text;
		n2 = document.getElementById('id_vtor_a_2').value;
		}

		if ( tip == 4) {
			c += '-' + k0 + k1 + k2 + '-';
			c += n0 + n1 + n2 + ' ';
		}	

		if ( tip == 7 || tip == 8){
			d = document.getElementById('per_n');
			d = d.options[d.selectedIndex].text;
			
			c += '-' + d;

			d = document.getElementById('vtor_p_5');
			d = ':' + d.options[d.selectedIndex].text + '';
			c += d;
			
			if ($('#td_62').is(':checked')){ 
				d = document.getElementById('vtor_p_6');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			if ($('#td_72').is(':checked')){ 
				d = document.getElementById('vtor_p_7');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			d = document.getElementById('vtor_v_5');
			d = '-' + d.options[d.selectedIndex].text+'';
			c += d;
			
			if ($('#td_62').is(':checked')){ 
				d = document.getElementById('vtor_v_6');
				d = '/' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			if ($('#td_72').is(':checked')){ 
				d = document.getElementById('vtor_v_7');
				d = '/' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			d = document.getElementById('id_vtor_a_5');
			d = '-' + d.value + '';
			c += d;
			
			if ($('#td_62').is(':checked')){ 
				d = document.getElementById('id_vtor_a_6');
				d = '/' + d.value + '';
				c += d;
			}
			if ($('#td_72').is(':checked')){ 
				d = document.getElementById('id_vtor_a_7');
				d = '/' + d.value + '';
				c += d;
			}
		}

		if ( tip == 9 || tip == 10){
			d = document.getElementById('per_n');
			d = d.options[d.selectedIndex].text;
			
			c += '-' + d;

			d = document.getElementById('vtor_p_3');
			d = ':' + d.options[d.selectedIndex].text + '';
			c += d;
			
			if ($('#td_42').is(':checked')){ 
				d = document.getElementById('vtor_p_4');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			d = document.getElementById('vtor_v_3');
			d = '-' + d.options[d.selectedIndex].text+'';
			c += d;
			
			if ($('#td_42').is(':checked')){ 
				d = document.getElementById('vtor_v_4');
				d = '/' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			d = document.getElementById('id_vtor_a_3');
			d = '-' + d.value + '';
			c += d;
			
			if ($('#td_42').is(':checked')){ 
				d = document.getElementById('id_vtor_a_4');
				d = '/' + d.value + '';
				c += d;
			}
		}
		
		//климатич.категория
		d = document.getElementById('klim_kat');
		if ( tip == 4) {c += (d.selectedIndex>0)?(d.options[d.selectedIndex].text + ', '):'';}
		if ( tip == 7 || tip == 8 || tip == 9 || tip == 10) {c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text + ''):'';}

		if ( tip == 4) {
			d = document.getElementById('per_n');
			c += (d.selectedIndex>0)?('U1=' + d.options[d.selectedIndex].text + 'В'):'';
			//без обмотки
			if (bez != '') {c += ' ('+ bez +')';}
		}
		
		if ( tip == 7 || tip == 8 || tip == 9 || tip == 10) {
			if (( tip == 7 || tip == 8) && (!$('#td_72').is(':checked'))){ 
				c += ' (без доп.обмотки)';
			}
			c += ''+v;
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

		if ($('#gab_nt').prop('checked') || $('#var_v_v_nt').prop('checked') || $('#bar_v_nt').prop('checked') || $('#d_vtor_a_0_nt').prop('checked') || $('#vtor_v_0_nt').prop('checked') || $('#d_vtor_a_1_nt').prop('checked') || $('#vtor_v_1_nt').prop('checked') || $('#d_vtor_a_2_nt').prop('checked') || $('#vtor_v_2_nt').prop('checked') || $('#d_vtor_a_3_nt').prop('checked') || $('#vtor_v_3_nt').prop('checked') || $('#d_vtor_a_4_nt').prop('checked') || $('#vtor_v_4_nt').prop('checked') || $('#d_vtor_a_5_nt').prop('checked') || $('#vtor_v_5_nt').prop('checked') || $('#d_vtor_a_6_nt').prop('checked') || $('#vtor_v_6_nt').prop('checked') || $('#d_vtor_a_7_nt').prop('checked') || $('#vtor_v_7_nt').prop('checked')) 
		{$('#like1').css('display','table-row'); $('#like2').css('display','table-row'); likesearch();}
//		if ($('#gab_nt').prop('checked') || $('#var_v_v_nt').prop('checked') || $('#bar_v_nt').prop('checked') || likes) //		{
//			$('#like1').css('display','table-row'); $('#like2').css('display','table-row'); likesearch();
//		}
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
		if (d.selectedIndex>1) {
			c += (!$('#gab_nt').prop('checked'))?('-'+d.options[d.selectedIndex].text+''):'%';
		}
		else{
			c += (!$('#gab_nt').prop('checked'))?(''):'%';
		}

        //пониженая индукция и тип выводов
        if ( tip == 7 || tip == 8 || tip == 9 || tip == 10) {
			d = document.getElementById('pon_in');
			if ($('#pon_in').is(':checked') || $("#sec_term_id_sec_term_3").is(':checked')) { c += '-';}
			c += ($('#pon_in').is(':checked'))?('И'):'';
			if ($("#sec_term_id_sec_term_1").is(':checked')){ c += (!$('#var_v_v_nt').prop('checked'))?(''):'%'}; //русская А
			if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 < 1)) { c += (!$('#var_v_v_nt').prop('checked'))?('С'):'%'; v = (!$('#var_v_v_nt').prop('checked'))?(' (выводы '+document.getElementById('gib_vv').value*1000+'мм)'):' %'}; //русская С
        	if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 >= 1)) { c += (!$('#var_v_v_nt').prop('checked'))?('С'):'%'; v = (!$('#var_v_v_nt').prop('checked'))?(' (выводы '+document.getElementById('gib_vv').value+'м)'):' %'}; //русская С
			if ($("#sec_term_id_sec_term_5").is(':checked')) { c += (!$('#var_v_v_nt').prop('checked'))?('Е'):'%' } //русская Е
		}
	
		//класс точности
		if (tip == 4) {
		bez = ''; k0 = ''; k1 = ''; k2 = ''; n0 = ''; n1 = ''; n2 = '';
		if ($('#td_02').is(':checked')){ 
			k = document.getElementById('vtor_v_0');
			k0 = k.options[k.selectedIndex].text; k0 = (!$('#vtor_v_0_nt').prop('checked'))?(k0):'%';
			k0 += '/';
			n0 = document.getElementById('id_vtor_a_0').value; n0 = (!$('#d_vtor_a_0_nt').prop('checked'))?(n0):'%';
			n0 += '/';
		}
		else{
			bez += 'без обмотки а1-в1-с1-о1';
		}
		if ($('#td_12').is(':checked')){ 
			k = document.getElementById('vtor_v_1');
			k1 = k.options[k.selectedIndex].text; k1 = (!$('#vtor_v_1_nt').prop('checked'))?(k1):'%';
			k1 += '/';
			n1 = document.getElementById('id_vtor_a_1').value; n1 = (!$('#d_vtor_a_1_nt').prop('checked'))?(n1):'%';
			n1 += '/';
		}
		else{
			bez += 'без обмотки а2-в2-с2-о2';
		}
		
		k = document.getElementById('vtor_v_2');
		k2 = k.options[k.selectedIndex].text; k2 = (!$('#vtor_v_2_nt').prop('checked'))?(k2):'%';
		n2 = document.getElementById('id_vtor_a_2').value; n2 = (!$('#d_vtor_a_2_nt').prop('checked'))?(n2):'%';
		}

		if ( tip == 4) {
			c += '-' + k0 + k1 + k2 + '-';
			c += n0 + n1 + n2 + ' ';
		}	

		if ( tip == 7 || tip == 8){
			d = document.getElementById('per_n');
			d = d.options[d.selectedIndex].text;
			
			c += '-' + d;

			d = document.getElementById('vtor_p_5');
			d = ':' + d.options[d.selectedIndex].text + '';
			c += d;
			
			if ($('#td_62').is(':checked')){ 
				d = document.getElementById('vtor_p_6');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			if ($('#td_72').is(':checked')){ 
				d = document.getElementById('vtor_p_7');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			d = document.getElementById('vtor_v_5');
			d = d.options[d.selectedIndex].text; d = (!$('#vtor_v_5_nt').prop('checked'))?(d):'%';
			d = '-' + d +'';
			c += d;
			
			if ($('#td_62').is(':checked')){ 
				d = document.getElementById('vtor_v_6');
				d = d.options[d.selectedIndex].text;  d = (!$('#vtor_v_6_nt').prop('checked'))?(d):'%';
				d = '/' + d + '';
				c += d;
			}
			if ($('#td_72').is(':checked')){ 
				d = document.getElementById('vtor_v_7');
				d = d.options[d.selectedIndex].text; d = (!$('#vtor_v_7_nt').prop('checked'))?(d):'%';
				d = '/' + d + '';
				c += d;
			}
			d = document.getElementById('id_vtor_a_5');
			d = d.value; d = (!$('#d_vtor_a_5_nt').prop('checked'))?(d):'%';
			d = '-' + d + '';
			c += d;
			
			if ($('#td_62').is(':checked')){ 
				d = document.getElementById('id_vtor_a_6');
				d = d.value; d = (!$('#d_vtor_a_6_nt').prop('checked'))?(d):'%';
				d = '/' + d + '';
				c += d;
			}
			if ($('#td_72').is(':checked')){ 
				d = document.getElementById('id_vtor_a_7');
				d = d.value; d = (!$('#d_vtor_a_7_nt').prop('checked'))?(d):'%';
				d = '/' + d + '';
				c += d;
			}
		}

		if ( tip == 9 || tip == 10){
			d = document.getElementById('per_n');
			d = d.options[d.selectedIndex].text;
			
			c += '-' + d;

			d = document.getElementById('vtor_p_3');
			d = ':' + d.options[d.selectedIndex].text + '';
			c += d;
			
			if ($('#td_42').is(':checked')){ 
				d = document.getElementById('vtor_p_4');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			d = document.getElementById('vtor_v_3');
			d = d.options[d.selectedIndex].text; d = (!$('#vtor_v_3_nt').prop('checked'))?(d):'%';
			d = '-' + d +'';
			c += d;
			
			if ($('#td_42').is(':checked')){ 
				d = document.getElementById('vtor_v_4');
				d = d.options[d.selectedIndex].text; d = (!$('#vtor_v_4_nt').prop('checked'))?(d):'%';
				d = '/' + d + '';
				c += d;
			}
			d = document.getElementById('id_vtor_a_3');
			d = d.value; d = (!$('#d_vtor_a_3_nt').prop('checked'))?(d):'%';
			d = '-' + d + '';
			c += d;
			
			if ($('#td_42').is(':checked')){ 
				d = document.getElementById('id_vtor_a_4');
				d = d.value; d = (!$('#d_vtor_a_4_nt').prop('checked'))?(d):'%';
				d = '/' + d + '';
				c += d;
			}
		}
		
		//климатич.категория
		d = document.getElementById('klim_kat');
		if ( tip == 4) {c += (d.selectedIndex>0)?(d.options[d.selectedIndex].text + ', '):'';}
		if ( tip == 7 || tip == 8 || tip == 9 || tip == 10) {c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text + ''):'';}

		if ( tip == 4) {
			d = document.getElementById('per_n');
			c += (d.selectedIndex>0)?('U1=' + d.options[d.selectedIndex].text + 'В'):'';
			//без обмотки
			if (bez != '') {c += ' ('+ bez +')';}
		}
		
		if ( tip == 7 || tip == 8 || tip == 9 || tip == 10) {
			if (( tip == 7 || tip == 8) && (!$('#td_72').is(':checked'))){ 
				c += ' (без доп.обмотки)';
			}
			c += ''+v;
		}

		i.value = c;
		//s.innerHTML = '<option>'+c+'</option>';
	sform = i.value; 
	if (tip == 7 || tip == 8 || tip == 9 || tip == 10) {sform = '%р '+sform;}
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