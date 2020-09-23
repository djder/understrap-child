var tip = '15';
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


if (tip == 15 || tip == 16) {
  if (document.getElementById('td_12')){
	$('#vtor_p_1').prop('disabled', true);
	$('#vtor_v_1').prop('disabled', true);
	$('#id_vtor_a_1').prop('disabled', true);
	$('#d_vtor_a_1').prop('disabled', true);
	$('#d_vtor_a_11').prop('disabled', true);
	$('#vtor_bn_1').prop('disabled', true);
	  $('#td_12').change(function(){	
	   if ($(this).is(':checked')){
		$('#vtor_p_1').prop('disabled', false);
		$('#vtor_v_1').prop('disabled', false);
		$('#id_vtor_a_1').prop('disabled', false);
		$('#d_vtor_a_1').prop('disabled', false);
		$('#d_vtor_a_11').prop('disabled', false);
		$('#vtor_bn_1').prop('disabled', false);
	   }
	   else {
		$('#vtor_p_1').prop('disabled', true);
		$('#vtor_v_1').prop('disabled', true);
		$('#id_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_11').prop('disabled', true);
		$('#vtor_bn_1').prop('disabled', true);
	   }
       return false;
	  });
  }
  if (document.getElementById('td_22')){
	$('#vtor_p_2').prop('disabled', true);
	$('#vtor_v_2').prop('disabled', true);
	$('#id_vtor_a_2').prop('disabled', true);
	$('#d_vtor_a_2').prop('disabled', true);
	$('#d_vtor_a_21').prop('disabled', true);
	$('#vtor_bn_2').prop('disabled', true);
	  $('#td_22').change(function(){	
	   if ($(this).is(':checked')){
		$('#vtor_p_2').prop('disabled', false);
		$('#vtor_v_2').prop('disabled', false);
		$('#id_vtor_a_2').prop('disabled', false);
		$('#d_vtor_a_2').prop('disabled', false);
		$('#d_vtor_a_21').prop('disabled', false);
		$('#vtor_bn_2').prop('disabled', false);
	   }
	   else {
		$('#vtor_p_2').prop('disabled', true);
		$('#vtor_v_2').prop('disabled', true);
		$('#id_vtor_a_2').prop('disabled', true);
		$('#d_vtor_a_2').prop('disabled', true);
		$('#d_vtor_a_21').prop('disabled', true);
		$('#vtor_bn_2').prop('disabled', true);
	   }
       return false;
	  });
  }


  $('#max_m').change(function(){

	  return false;
  });



  $('#d_vtor_a_31').change(function(){
	$('#id_vtor_a_3').val($(this).val());  
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
	  if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '3.0') {
		$('#d_vtor_a_41').attr('max', 300 - $(this).val());
		$('#id_vtor_a_4max').val(300 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '3.0') {
		$('#d_vtor_a_41').attr('max', 400 - $(this).val());
		$('#id_vtor_a_4max').val(400 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '3.0') {
		$('#d_vtor_a_41').attr('max', 400 - $(this).val());
		$('#id_vtor_a_4max').val(400 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	  if ($('#vtor_v_4 option:selected').text() == '3.0') {
		$('#d_vtor_a_41').attr('max', 600 - $(this).val());
		$('#id_vtor_a_4max').val(600 - $(this).val());
		if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '3.0') {
		$('#d_vtor_a_31').attr('max', 300 - $(this).val());
		$('#id_vtor_a_3max').val(300 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '3.0') {
		$('#d_vtor_a_31').attr('max', 400 - $(this).val());
		$('#id_vtor_a_3max').val(400 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '3.0') {
		$('#d_vtor_a_31').attr('max', 400 - $(this).val());
		$('#id_vtor_a_3max').val(400 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '1.0') {
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
	if ($('#vtor_v_3 option:selected').text() == '3.0') {
		$('#d_vtor_a_31').attr('max', 600 - $(this).val());
		$('#id_vtor_a_3max').val(600 - $(this).val());
		if ($('#vtor_v_4 option:selected').text() == '1.0') {
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
	
	
}

  $('#td_02').change(function(){	
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
	    $('#d_vtor_a_01').prop('max', 0);
		$('#id_vtor_a_0max').prop('value',0);
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
		$('#vtor_b_1').prop('disabled', false);
		//$('#id_vtor_a_1').val(0);
		$('#vtor_v_1 option:selected').each(function(){
  			this.selected=false;
		});   
	}
	else {
		$('#vtor_p_1').prop('disabled', true);
		$('#vtor_v_1').prop('disabled', true);
		$('#id_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_1').prop('disabled', true);
		$('#d_vtor_a_11').prop('disabled', true);
		$('#vtor_b_1').prop('disabled', true);
		$('#id_vtor_a_1').val(0);
		$('#vtor_v_1 option:selected').each(function(){
  			this.selected=false;
		});   
	    $('#d_vtor_a_11').prop('max', 0);
		$('#id_vtor_a_1max').prop('value',0);
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


  $('#d_vtor_a_01').change(function(){	
	$('#id_vtor_a_0').val($(this).val());  
	if (gab == '00' || gab == '01' || gab == '03'){
	if ($('#td_12').is(':checked'))  {
	  if ($('#vtor_v_1 option:selected').text() == '0.2') {
		$('#d_vtor_a_11').attr('max', 120 - $(this).val());
		$('#id_vtor_a_1max').val(120 - $(this).val());
	  }
	  if ($('#vtor_v_1 option:selected').text() == '0.5') {
		$('#d_vtor_a_11').attr('max', 300 - $(this).val());
		$('#id_vtor_a_1max').val(300 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 120 - $(this).val());
			$('#id_vtor_a_1max').val(120 - $(this).val());
		}
	  }
	  if ($('#vtor_v_1 option:selected').text() == '1') {
		$('#d_vtor_a_11').attr('max', 600 - $(this).val());
		$('#id_vtor_a_1max').val(600 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '0.5') {
			$('#d_vtor_a_11').attr('max', 300 - $(this).val());
			$('#id_vtor_a_1max').val(300 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 120 - $(this).val());
			$('#id_vtor_a_1max').val(120 - $(this).val());
		}
	  }
	  if ($('#vtor_v_1 option:selected').text() == '3') {
		$('#d_vtor_a_11').attr('max', 900 - $(this).val());
		$('#id_vtor_a_1max').val(900 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '1') {
			$('#d_vtor_a_11').attr('max', 600 - $(this).val());
			$('#id_vtor_a_1max').val(600 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.5') {
			$('#d_vtor_a_11').attr('max', 300 - $(this).val());
			$('#id_vtor_a_1max').val(300 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 120 - $(this).val());
			$('#id_vtor_a_1max').val(120 - $(this).val());
		}
	  }
	}
	}
	if (gab == '02' || gab == '04'){
	if ($('#td_12').is(':checked'))  {
	  if ($('#vtor_v_1 option:selected').text() == '0.2') {
		$('#d_vtor_a_11').attr('max', 180 - $(this).val());
		$('#id_vtor_a_1max').val(180 - $(this).val());
	  }
	  if ($('#vtor_v_1 option:selected').text() == '0.5') {
		$('#d_vtor_a_11').attr('max', 450 - $(this).val());
		$('#id_vtor_a_1max').val(450 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 180 - $(this).val());
			$('#id_vtor_a_1max').val(180 - $(this).val());
		}
	  }
	  if ($('#vtor_v_1 option:selected').text() == '1') {
		$('#d_vtor_a_11').attr('max', 750 - $(this).val());
		$('#id_vtor_a_1max').val(750 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '0.5') {
			$('#d_vtor_a_11').attr('max', 450 - $(this).val());
			$('#id_vtor_a_1max').val(450 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 180 - $(this).val());
			$('#id_vtor_a_1max').val(180 - $(this).val());
		}
	  }
	  if ($('#vtor_v_1 option:selected').text() == '3') {
		$('#d_vtor_a_11').attr('max', 900 - $(this).val());
		$('#id_vtor_a_1max').val(900 - $(this).val());
		if ($('#vtor_v_0 option:selected').text() == '1') {
			$('#d_vtor_a_11').attr('max', 750 - $(this).val());
			$('#id_vtor_a_1max').val(750 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.5') {
			$('#d_vtor_a_11').attr('max', 450 - $(this).val());
			$('#id_vtor_a_1max').val(450 - $(this).val());
		}
		if ($('#vtor_v_0 option:selected').text() == '0.2') {
			$('#d_vtor_a_11').attr('max', 180 - $(this).val());
			$('#id_vtor_a_1max').val(180 - $(this).val());
		}
	  }
	}
	}
	  return false;
  });
	  
  $('#d_vtor_a_11').change(function(){	
	$('#id_vtor_a_1').val($(this).val());  
	if (gab == '00' || gab == '01' || gab == '03'){
	if ($('#td_12').is(':checked'))  {
	  if ($('#vtor_v_0 option:selected').text() == '0.2') {
		$('#d_vtor_a_01').attr('max', 120 - $(this).val());
		$('#id_vtor_a_0max').val(120 - $(this).val());
	  }
	  if ($('#vtor_v_0 option:selected').text() == '0.5') {
		$('#d_vtor_a_01').attr('max', 300 - $(this).val());
		$('#id_vtor_a_0max').val(300 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 120 - $(this).val());
			$('#id_vtor_a_0max').val(120 - $(this).val());
		}
	  }
	  if ($('#vtor_v_0 option:selected').text() == '1') {
		$('#d_vtor_a_01').attr('max', 600 - $(this).val());
		$('#id_vtor_a_0max').val(600 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '0.5') {
			$('#d_vtor_a_01').attr('max', 300 - $(this).val());
			$('#id_vtor_a_0max').val(300 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 120 - $(this).val());
			$('#id_vtor_a_0max').val(120 - $(this).val());
		}
	  }
	  if ($('#vtor_v_0 option:selected').text() == '3') {
		$('#d_vtor_a_01').attr('max', 900 - $(this).val());
		$('#id_vtor_a_0max').val(900 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '1') {
			$('#d_vtor_a_01').attr('max', 600 - $(this).val());
			$('#id_vtor_a_0max').val(600 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.5') {
			$('#d_vtor_a_01').attr('max', 300 - $(this).val());
			$('#id_vtor_a_0max').val(300 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 120 - $(this).val());
			$('#id_vtor_a_0max').val(120 - $(this).val());
		}
	  }
	}
	}
	if (gab == '02' || gab == '04'){
	if ($('#td_12').is(':checked'))  {
	  if ($('#vtor_v_0 option:selected').text() == '0.2') {
		$('#d_vtor_a_01').attr('max', 180 - $(this).val());
		$('#id_vtor_a_0max').val(180 - $(this).val());
	  }
	  if ($('#vtor_v_0 option:selected').text() == '0.5') {
		$('#d_vtor_a_01').attr('max', 450 - $(this).val());
		$('#id_vtor_a_0max').val(450 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 180 - $(this).val());
			$('#id_vtor_a_0max').val(180 - $(this).val());
		}
	  }
	  if ($('#vtor_v_0 option:selected').text() == '1') {
		$('#d_vtor_a_01').attr('max', 750 - $(this).val());
		$('#id_vtor_a_0max').val(750 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '0.5') {
			$('#d_vtor_a_01').attr('max', 450 - $(this).val());
			$('#id_vtor_a_0max').val(450 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 180 - $(this).val());
			$('#id_vtor_a_0max').val(180 - $(this).val());
		}
	  }
	  if ($('#vtor_v_0 option:selected').text() == '3') {
		$('#d_vtor_a_01').attr('max', 900 - $(this).val());
		$('#id_vtor_a_0max').val(900 - $(this).val());
		if ($('#vtor_v_1 option:selected').text() == '1') {
			$('#d_vtor_a_01').attr('max', 750 - $(this).val());
			$('#id_vtor_a_0max').val(750 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.5') {
			$('#d_vtor_a_01').attr('max', 450 - $(this).val());
			$('#id_vtor_a_0max').val(450 - $(this).val());
		}
		if ($('#vtor_v_1 option:selected').text() == '0.2') {
			$('#d_vtor_a_01').attr('max', 180 - $(this).val());
			$('#id_vtor_a_0max').val(180 - $(this).val());
		}
	  }
	}
	}

	  return false;
  });
	  

  $('#vtor_v_0').change(function(){	
	if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('disabled', true);}
	if (this.selectedIndex > 0){$('#id_vtor_a_0_nt').prop('disabled', false);}else{$('#id_vtor_a_0_nt').prop('disabled', true);}
		if (gab == '00' || gab == '01' || gab == '03'){
			if ((!$('#td_12').is(':checked'))) {
				if ($('#vtor_v_0 option:selected').text() == '0.2') {
					$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
					$('#d_vtor_a_01').attr('max',120); $('#id_vtor_a_0max').val(120);
					$('#id_vtor_a_0').val(15);
				}
				if ($('#vtor_v_0 option:selected').text() == '0.5') {
					$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
					$('#d_vtor_a_01').attr('max',300); $('#id_vtor_a_0max').val(300);
					$('#id_vtor_a_0').val(30);
				}
				if ($('#vtor_v_0 option:selected').text() == '1') {
					$('#d_vtor_a_01').attr('min',60); $('#id_vtor_a_0min').val(60);
					$('#d_vtor_a_01').attr('max',600); $('#id_vtor_a_0max').val(600);
					$('#id_vtor_a_0').val(60);
				}
				if ($('#vtor_v_0 option:selected').text() == '3') {
					$('#d_vtor_a_01').attr('min',300); $('#id_vtor_a_0min').val(300);
					$('#d_vtor_a_01').attr('max',900); $('#id_vtor_a_0max').val(900);
					$('#id_vtor_a_0').val(300);
				}
			}
		}
		if (gab == '02' || gab == '04'){
			if ((!$('#td_12').is(':checked'))) {
				if ($('#vtor_v_0 option:selected').text() == '0.2') {
					$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
					$('#d_vtor_a_01').attr('max',180); $('#id_vtor_a_0max').val(180);
					$('#id_vtor_a_0').val(15);
				}
				if ($('#vtor_v_0 option:selected').text() == '0.5') {
					$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
					$('#d_vtor_a_01').attr('max',450); $('#id_vtor_a_0max').val(450);
					$('#id_vtor_a_0').val(30);
				}
				if ($('#vtor_v_0 option:selected').text() == '1') {
					$('#d_vtor_a_01').attr('min',60); $('#id_vtor_a_0min').val(60);
					$('#d_vtor_a_01').attr('max',750); $('#id_vtor_a_0max').val(750);
					$('#id_vtor_a_0').val(60);
				}
				if ($('#vtor_v_0 option:selected').text() == '3') {
					$('#d_vtor_a_01').attr('min',300); $('#id_vtor_a_0min').val(300);
					$('#d_vtor_a_01').attr('max',900); $('#id_vtor_a_0max').val(900);
					$('#id_vtor_a_0').val(300);
				}
			}
		}
		if (gab == '05' || gab == '06' || gab == '07'){
				if ($('#vtor_v_0 option:selected').text() == '0.2') {
					$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
					$('#d_vtor_a_01').attr('max',75); $('#id_vtor_a_0max').val(75);
					$('#id_vtor_a_0').val(30);
				}
				if ($('#vtor_v_0 option:selected').text() == '0.5') {
					$('#d_vtor_a_01').attr('min',60); $('#id_vtor_a_0min').val(60);
					$('#d_vtor_a_01').attr('max',150); $('#id_vtor_a_0max').val(150);
					$('#id_vtor_a_0').val(60);
				}
				if ($('#vtor_v_0 option:selected').text() == '1') {
					$('#d_vtor_a_01').attr('min',150); $('#id_vtor_a_0min').val(150);
					$('#d_vtor_a_01').attr('max',450); $('#id_vtor_a_0max').val(450);
					$('#id_vtor_a_0').val(150);
				}			
		}
				if (($('#td_12').is(':checked'))) {
				  if (gab == '00' || gab == '01' || gab == '03'){
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
						$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
						$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
						$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
						$('#id_vtor_a_0').val(15);
						$('#id_vtor_a_1').val(15);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
						$('#d_vtor_a_01').attr('max',270); $('#id_vtor_a_0max').val(270);
						$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
						$('#d_vtor_a_11').attr('max',270); $('#id_vtor_a_1max').val(270);
						$('#id_vtor_a_0').val(30);
						$('#id_vtor_a_1').val(30);
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
						$('#d_vtor_a_01').attr('max',525); $('#id_vtor_a_0max').val(525);
						$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
						$('#d_vtor_a_11').attr('max',525); $('#id_vtor_a_1max').val(525);
						$('#id_vtor_a_0').val(75);
						$('#id_vtor_a_1').val(75);
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',270); $('#id_vtor_a_0max').val(270);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',270); $('#id_vtor_a_1max').val(270);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',225); $('#id_vtor_a_0min').val(225);
						$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
						$('#d_vtor_a_11').attr('min',225); $('#id_vtor_a_1min').val(225);
						$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
						$('#id_vtor_a_0').val(225);
						$('#id_vtor_a_1').val(225);
						if ($('#vtor_v_1 option:selected').text() == '1.0') {
							$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
							$('#d_vtor_a_01').attr('max',525); $('#id_vtor_a_0max').val(525);
							$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
							$('#d_vtor_a_11').attr('max',525); $('#id_vtor_a_1max').val(525);
							$('#id_vtor_a_0').val(75);
							$('#id_vtor_a_1').val(75);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',270); $('#id_vtor_a_0max').val(270);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',270); $('#id_vtor_a_1max').val(270);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
				  }
				  if (gab == '02' || gab == '04'){
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
						$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
						$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
						$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
						$('#id_vtor_a_0').val(15);
						$('#id_vtor_a_1').val(15);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
						$('#d_vtor_a_01').attr('max',420); $('#id_vtor_a_0max').val(420);
						$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
						$('#d_vtor_a_11').attr('max',420); $('#id_vtor_a_1max').val(420);
						$('#id_vtor_a_0').val(30);
						$('#id_vtor_a_1').val(30);
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
						$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
						$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
						$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
						$('#id_vtor_a_0').val(75);
						$('#id_vtor_a_1').val(75);
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',420); $('#id_vtor_a_0max').val(420);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',420); $('#id_vtor_a_1max').val(420);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',225); $('#id_vtor_a_0min').val(225);
						$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
						$('#d_vtor_a_11').attr('min',225); $('#id_vtor_a_1min').val(225);
						$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
						$('#id_vtor_a_0').val(225);
						$('#id_vtor_a_1').val(225);
						if ($('#vtor_v_1 option:selected').text() == '1') {
							$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
							$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
							$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
							$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
							$('#id_vtor_a_0').val(75);
							$('#id_vtor_a_1').val(75);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',420); $('#id_vtor_a_0max').val(420);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',420); $('#id_vtor_a_1max').val(420);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
				  }
				}

	  return false;
  });
	  
  $('#vtor_v_1').change(function(){	
	if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('disabled', true);}
	if (this.selectedIndex > 0){$('#id_vtor_a_1_nt').prop('disabled', false);}else{$('#id_vtor_a_1_nt').prop('disabled', true);}
				  if (gab == '00' || gab == '01' || gab == '03'){
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
						$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
						$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
						$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
						$('#id_vtor_a_0').val(15);
						$('#id_vtor_a_1').val(15);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
						$('#d_vtor_a_01').attr('max',270); $('#id_vtor_a_0max').val(270);
						$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
						$('#d_vtor_a_11').attr('max',270); $('#id_vtor_a_1max').val(270);
						$('#id_vtor_a_0').val(30);
						$('#id_vtor_a_1').val(30);
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
						$('#d_vtor_a_01').attr('max',525); $('#id_vtor_a_0max').val(525);
						$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
						$('#d_vtor_a_11').attr('max',525); $('#id_vtor_a_1max').val(525);
						$('#id_vtor_a_0').val(75);
						$('#id_vtor_a_1').val(75);
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',270); $('#id_vtor_a_0max').val(270);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',270); $('#id_vtor_a_1max').val(270);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',225); $('#id_vtor_a_0min').val(225);
						$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
						$('#d_vtor_a_11').attr('min',225); $('#id_vtor_a_1min').val(225);
						$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
						$('#id_vtor_a_0').val(225);
						$('#id_vtor_a_1').val(225);
						if ($('#vtor_v_1 option:selected').text() == '1') {
							$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
							$('#d_vtor_a_01').attr('max',525); $('#id_vtor_a_0max').val(525);
							$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
							$('#d_vtor_a_11').attr('max',525); $('#id_vtor_a_1max').val(525);
							$('#id_vtor_a_0').val(75);
							$('#id_vtor_a_1').val(75);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',270); $('#id_vtor_a_0max').val(270);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',270); $('#id_vtor_a_1max').val(270);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',105); $('#id_vtor_a_0max').val(105);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',105); $('#id_vtor_a_1max').val(105);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
				  }
				  if (gab == '02' || gab == '04'){
					if ($('#vtor_v_0 option:selected').text() == '0.2') {
						$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
						$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
						$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
						$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
						$('#id_vtor_a_0').val(15);
						$('#id_vtor_a_1').val(15);
					}
					if ($('#vtor_v_0 option:selected').text() == '0.5') {
						$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
						$('#d_vtor_a_01').attr('max',420); $('#id_vtor_a_0max').val(420);
						$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
						$('#d_vtor_a_11').attr('max',420); $('#id_vtor_a_1max').val(420);
						$('#id_vtor_a_0').val(30);
						$('#id_vtor_a_1').val(30);
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '1') {
						$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
						$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
						$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
						$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
						$('#id_vtor_a_0').val(75);
						$('#id_vtor_a_1').val(75);
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',420); $('#id_vtor_a_0max').val(420);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',420); $('#id_vtor_a_1max').val(420);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
					if ($('#vtor_v_0 option:selected').text() == '3') {
						$('#d_vtor_a_01').attr('min',225); $('#id_vtor_a_0min').val(225);
						$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
						$('#d_vtor_a_11').attr('min',225); $('#id_vtor_a_1min').val(225);
						$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
						$('#id_vtor_a_0').val(225);
						$('#id_vtor_a_1').val(225);
						if ($('#vtor_v_1 option:selected').text() == '1.0') {
							$('#d_vtor_a_01').attr('min',75); $('#id_vtor_a_0min').val(75);
							$('#d_vtor_a_01').attr('max',675); $('#id_vtor_a_0max').val(675);
							$('#d_vtor_a_11').attr('min',75); $('#id_vtor_a_1min').val(75);
							$('#d_vtor_a_11').attr('max',675); $('#id_vtor_a_1max').val(675);
							$('#id_vtor_a_0').val(75);
							$('#id_vtor_a_1').val(75);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.5') {
							$('#d_vtor_a_01').attr('min',30); $('#id_vtor_a_0min').val(30);
							$('#d_vtor_a_01').attr('max',420); $('#id_vtor_a_0max').val(420);
							$('#d_vtor_a_11').attr('min',30); $('#id_vtor_a_1min').val(30);
							$('#d_vtor_a_11').attr('max',420); $('#id_vtor_a_1max').val(420);
							$('#id_vtor_a_0').val(30);
							$('#id_vtor_a_1').val(30);
						}
						if ($('#vtor_v_1 option:selected').text() == '0.2') {
							$('#d_vtor_a_01').attr('min',15); $('#id_vtor_a_0min').val(15);
							$('#d_vtor_a_01').attr('max',165); $('#id_vtor_a_0max').val(165);
							$('#d_vtor_a_11').attr('min',15); $('#id_vtor_a_1min').val(15);
							$('#d_vtor_a_11').attr('max',165); $('#id_vtor_a_1max').val(165);
							$('#id_vtor_a_0').val(15);
							$('#id_vtor_a_1').val(15);
						}
					}
				  }

	  return false;
  });
	  
  $('#vtor_v_2').change(function(){	
	if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('disabled', true);}
	  return false;
  });

  $('#d_vtor_a_2').change(function(){	
	if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('disabled', true);}
	  return false;
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
		//$("#bar_v").html('');
      }
    });
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
	if (this.selectedIndex > 0){$('#'+this.id+'_nt').prop('disabled', false);}else{$('#'+this.id+'_nt').prop('disabled', true);}
	seldata = '<option value="">...</option>';
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
	      data: "table=sectermref&column0=sec_term_id&column1=sec_term&case=tip_isp_id_eq_"+isp,
	      success: function(data15){

/*	    //    $("#var_v_v").html('<input id="var_vv" type="text" value="'+data15+'" />');
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
*/				$("#sec_term_id_sec_term_1").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_2").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_3").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	  
				$("#sec_term_id_sec_term_4").click(function(){ if ($(this).is(':checked')){$("#gib_v").css("display", "inline-block")} else {$("#gib_v").css("display", "none")} });	 
			    if (tip == 15 || tip == 16){
					if (napr == 6 || napr == 10){
						if (gab == '00' || gab == '01' || gab == '03' || gab == '02' || gab == '04'){
							$('#max_m').html('<option value="">...</option><option value="1200">1200</option><option value="1890">1890</option>');
							if ($('#vtor_v_0 :last').text() == '1') $('#vtor_v_0 :last').append($('<option value="3">3</option>'));
							if ($('#row05')) $('#row05').css("display", "table-row");
							$('#d_vtor_a_2').html('<option value="">...</option><option value="300">300</option><option value="400">400</option><option value="450">450</option><option value="600">600</option><option value="900">900</option>');
						}
						if (gab == '05' || gab == '06' || gab == '07'){
							$('#max_m').html('<option value="750">750</option>');
							if ($('#vtor_v_0 :last').text() == '3') $('#vtor_v_0 :last').remove();
							if ($('#row05')) $('#row05').css("display", "none");
							$('#d_vtor_a_2').html('<option value="300">300</option>');
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
		      }
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
  })  


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
			//if ($("#sec_term_id_sec_term_3").is(':checked')){ c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
		}

		
		if (tip == 15 || tip == 16) {
		  bez = ''; k0 = ''; k1 = ''; k2 = ''; n0 = ''; n1 = ''; n2 = '';
		  //напряжение перв.обмотки
		  d = document.getElementById('per_n');
		  d = d.options[d.selectedIndex].text;
			
		  c += '-' + d;

			d = document.getElementById('vtor_p_0');
			d = ':' + d.options[d.selectedIndex].text + '';
			c += d;
			
			if ($('#td_12').is(':checked')){ 
				d = document.getElementById('vtor_p_1');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			if ($('#td_22').is(':checked')){ 
				d = document.getElementById('vtor_p_2');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
		  if ($('#td_22').is(':checked')){ 
			k = document.getElementById('vtor_v_2');
			k2 = '/'+k.options[k.selectedIndex].text;
			n2 = '/'+document.getElementById('d_vtor_a_2').value;
		  }
		  else{
			bez += 'без доп. обмотки';
		  }
		  if ($('#td_12').is(':checked')){ 
			k = document.getElementById('vtor_v_1');
			k1 = '/'+k.options[k.selectedIndex].text;
			n1 = '/'+document.getElementById('id_vtor_a_1').value;
		  }
		  k = document.getElementById('vtor_v_0');
		  k0 = '-'+k.options[k.selectedIndex].text+'';
		  n0 = '-'+document.getElementById('id_vtor_a_0').value+'';
			c += '' + k0 + k1 + k2 + '';
			c += n0 + n1 + n2 + '';
		}

	
		//климатич.категория
		d = document.getElementById('klim_kat');
		if ( tip == 15 || tip == 16) {
			c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text + ''):'';
			if (bez != '') {c += ' ('+ bez +')';}
		}

		if (tip == 15 || tip == 16) {
			pref = 'Трехфазная группа ';
		}
		else { 
			pref='Трансформатор ';
		}
		sform = c; 
		i.value = pref+c;
		
		
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

		if ($('#gab_nt').prop('checked') || $('#vtor_v_0_nt').prop('checked') || $('#id_vtor_a_0_nt').prop('checked') || $('#vtor_v_1_nt').prop('checked') || $('#id_vtor_a_1_nt').prop('checked') || $('#vtor_v_2_nt').prop('checked') || $('#d_vtor_a_2_nt').prop('checked')) {$('#like1').css('display','table-row'); $('#like2').css('display','table-row'); likesearch();}
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
		    if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 < 1)) { c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value*1000+'мм)'}; //русская С
        if ($("#sec_term_id_sec_term_3").is(':checked') && (document.getElementById('gib_vv').value*1 >= 1)) { c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
			//if ($("#sec_term_id_sec_term_3").is(':checked')){ c += 'С'; v = ' (выводы '+document.getElementById('gib_vv').value+'м)'}; //русская С
		}

		
		if (tip == 15 || tip == 16) {
		  bez = ''; k0 = ''; k1 = ''; k2 = ''; n0 = ''; n1 = ''; n2 = '';
		  //напряжение перв.обмотки
		  d = document.getElementById('per_n');
		  d = d.options[d.selectedIndex].text;
			
		  c += '-' + d;

			d = document.getElementById('vtor_p_0');
			d = ':' + d.options[d.selectedIndex].text + '';
			c += d;
			
			if ($('#td_12').is(':checked')){ 
				d = document.getElementById('vtor_p_1');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
			if ($('#td_22').is(':checked')){ 
				d = document.getElementById('vtor_p_2');
				d = ':' + d.options[d.selectedIndex].text + '';
				c += d;
			}
		  if ($('#td_22').is(':checked')){ 
			k = document.getElementById('vtor_v_2');
			k2 = (!$('#vtor_v_2_nt').prop('checked'))?('/'+k.options[k.selectedIndex].text):'/%';
			n2 = (!$('#d_vtor_a_2_nt').prop('checked'))?('/'+document.getElementById('d_vtor_a_2').value):'/%';
		  }
		  else{
			bez += 'без доп. обмотки';
		  }
		  if ($('#td_12').is(':checked')){ 
			k = document.getElementById('vtor_v_1');
			k1 = (!$('#vtor_v_1_nt').prop('checked'))?('/'+k.options[k.selectedIndex].text):'/%';
			n1 = (!$('#id_vtor_a_1_nt').prop('checked'))?('/'+document.getElementById('id_vtor_a_1').value):'/%';
		  }
		  k = document.getElementById('vtor_v_0');
		  k0 = (!$('#vtor_v_0_nt').prop('checked'))?('-'+k.options[k.selectedIndex].text):'-%';
		  n0 = (!$('#id_vtor_a_0_nt').prop('checked'))?('-'+document.getElementById('id_vtor_a_0').value):'-%';
			c += '' + k0 + k1 + k2 + '';
			c += n0 + n1 + n2 + '';
		}

	
		//климатич.категория
		d = document.getElementById('klim_kat');
		if ( tip == 15 || tip == 16) {
			c += (d.selectedIndex>0)?(' ' + d.options[d.selectedIndex].text + ''):'';
			if (bez != '') {c += ' ('+ bez +')';}
		}

		if (tip == 15 || tip == 16) {
			pref = 'Трехфазная группа ';
		}
		else { 
			pref='Трансформатор ';
		}
		likesform = c; 
		i.value = pref+c;
		//s.innerHTML = '<option>'+c+'</option>';
	//seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+likesform,
      //data: "table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+encodeURIComponent(sform)+"",
      success: function(data21){
		//data = "/wp-content/themes/semicolon/res2sel.php?table=nomenklatura&column0=id&column1=naimenovanie&case=naimenovanie_lk_"+sform;  
			org = document.getElementById('org').value;
			objectt = document.getElementById('objectt').value;
			count = document.getElementById('count').value;
		    adednew = false;
		if (data21 == '') {
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

