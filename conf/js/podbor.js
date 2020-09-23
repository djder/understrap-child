$ = window.jQuery;
var configdata = new Array();
var data;
var prim;
var data2;
var now = new Date();
var mon = (now.getMonth()*1+1)+'';
var sp100 = '                                                                                                    ';
var help = new Array();
	help[0] = new Array();
	help[0][0] ='Тип';help[0][1] = 'Обобщенная характеристика, определяющая назначение (трансформатор тока, напряжения, комбинированный, силовой, нулевой последовательности) и конструктивные особенности трансформатора';help[0][2]=3;
	help[1] = new Array();
	help[1][0] ='Класс напряжения, кВ';help[1][1] = 'Номинальное междуфазное напряжение электроустановки, для работы в которой предназначен трансформатор. Класс напряжения определяет уровень изоляции оборудования';help[1][2]=3;
	help[2] = new Array();
	help[2][0] ='Климатическое исполнение';help[2][1] = 'Условия окружающей среды, для работы в которой предназначен трансформатор. Буквенная часть обозначает климатическую зону, цифровая часть означает категорию размещения по ГОСТ 15150-69';help[2][2]=3;
	help[3] = new Array();
	help[3][0] ='Вариант выполнения выводов';help[3][1] = 'Конструктивный вариант вида и расположения выводов вторичных обмоток. В зависимости от типа и конструктивного исполнения трансформатора могут быть доступны не все варианты';help[3][2]=3;
	help[4] = new Array();
	help[4][0] ='Исполнение';help[4][1] = 'Определяет форму корпуса, габаритные, установочные и присоединительные размеры, массу, вид и расположение контактных выводов первичной обмотки. Первая цифра обозначает конструктивные особенности, вторая – вариант по длине корпуса';help[4][2]=1;
	help[5] = new Array();
	help[5][0] ='Длина гибких выводов, м';help[5][1] = 'Для варианта выполнения вторичных выводов из гибкого провода длина вывода выбирается из диапазона 0,1 – 10 м';help[5][2]=1;
	help[6] = new Array();
	help[6][0] ='Наличие барьеров';help[6][1] = 'Изолирующие барьеры, расположенные в верхней части трансформатора, увеличивают изоляционное расстояние между рядом расположенными токоведущими частями разных фаз. Конструктивно барьеры могут быть выполнены только на некоторых типоисполнениях';help[6][2]=1;
	help[7] = new Array();
	help[7][0] ='Номинальный первичный ток, А';help[7][1] = 'Номинальное значение тока, протекающего по первичной обмотке, при котором предусмотрена длительная и надежная работа трансформатора тока и вторичных цепей';help[7][2]=1;
	help[8] = new Array();
	help[8][0] ='Ток терм.стойкости, кА';help[8][1] = 'Максимальное значение тока, протекающего по первичной обмотке в момент короткого замыкания, которое может выдержать трансформатор в течении нормированного промежутка времени без повреждений, нарушающих его работоспособность';help[8][2]=1;
	help[9] = new Array();
	help[9][0] ='Время протекания, с';help[9][1] = 'Максимально допустимое время, в течении которого трансформатор может выдержать воздействие тока термической стойкости';help[9][2]=1;
	help[10] = new Array();
	help[10][0] ='Расширенный диапазон первичного тока, %';help[10][1] = 'Максимальное значение тока в процентах от номинального первичного тока, при котором трансформатор работает длительное время и при этом обеспечивается заявленный класс точности вторичных обмоток для измерения. По умолчанию трансформаторы изготавливаются с диапазоном до 120%';help[10][2]=1;
	help[11] = new Array();
	help[11][0] ='Переключение по первичному току';help[11][1] = 'Возможность изменять коэффициент трансформации вдвое на всех вторичных обмотках одновременно путем параллельного или последовательного соединения секций первичной обмотки. Доступно только для некоторых типоисполнений и значений номинального первичного тока';help[11][2]=1;
	help[12] = new Array();
	help[12][0] ='№ Обмотки';help[12][1] = 'Порядковый номер обмотки в трансформаторе. Максимально возможное количество обмоток зависит от типоисполнения трансформатора, исполнения вторичных выводов и количества отпаек';help[12][2]=1;
	help[13] = new Array();
	help[13][0] ='Выводы';help[13][1] = 'Обозначение выводов вторичной обмотки. Первая цифра обозначает порядковый номер вторичной обмотки, вторая – порядковый номер вывода вторичной обмотки';help[13][2]=1;
	help[14] = new Array();
	help[14][0] ='Первичный ток, А';help[14][1] = 'Условное значение тока, по которому определяется коэффициент трансформации вторичной обмотки. По умолчанию коэффициент трансформации равен отношению номинального первичного тока трансформатора к номинальному вторичному току обмотки';help[14][2]=1;
	help[15] = new Array();
	help[15][0] ='Вторичный ток, А';help[15][1] = 'Номинальное значение тока во вторичной обмотке. Стандартизованные значения – 1 или 5 А';help[15][2]=1;
	help[16] = new Array();
	help[16][0] ='Нагрузка, ВА';help[16][1] = 'Суммарное сопротивление нагрузки от проводов, контактов, приборов во вторичной цепи, выраженное в В∙А (при заданном коэффициенте мощности), при котором гарантируется заявленный класс точности и номинальный коэффициент безопасности или номинальная предельная кратность';help[16][2]=1;
	help[17] = new Array();
	help[17][0] ='Класс точности';help[17][1] = 'Определяет диапазон предельно допустимых токовой и угловой погрешностей вторичной обмотки. Значения погрешностей установлены в стандартах';help[17][2]=1;
	help[18] = new Array();
	help[18][0] ='Коэф. безоп./ Кратность';help[18][1] = '<b>Для измерительных обмоток:</b> Минимальное отношение первичного тока, при котором полная погрешность составляет не менее 10% при номинальной вторичной нагрузке, к номинальному первичному току трансформатора. <b>Для защитных обмоток:</b> Гарантируемая предельная кратность первичного тока, при котором полная погрешность при номинальной вторичной нагрузке не превышает значения, для заданного класса точности';help[18][2]=1;
	help[19] = new Array();
	help[19][0] ='Исполнение';help[19][1] = 'Определяет форму корпуса, габаритные, установочные, присоединительные размеры и массу трансформатора';help[19][2]=2;
	help[20] = new Array();
	help[20][0] ='Номинальная частота, Гц';help[20][1] = 'Частота сети, на которую рассчитан трансформатор, указанная на паспортной табличке';help[20][2]=2;
	help[21] = new Array();
	help[21][0] ='Номинальное напряжение первичной обмотки (ВН), В';help[21][1] = 'Напряжение, приложенное к первичной обмотке трансформатора в номинальном режиме работы и подлежащее трансформации';help[21][2]=2;
	help[22] = new Array();
	help[22][0] ='Класс точности';help[22][1] = 'Определяет диапазон предельно допустимых погрешностей по амплитуде и углу напряжения во вторичной обмотке. Значения погрешностей установлены в стандартах';help[22][2]=2;
	help[23] = new Array();
	help[23][0] ='Номинальная трехфазная мощность, ВА';help[23][1] = 'Полная трехфазная мощность, которую трансформатор отдает во вторичную цепь при номинальном вторичном напряжении с обеспечением соответствующих классов точности';help[23][2]=2;
	help[24] = new Array();
	help[24][0] ='Основная (а';help[24][1] = 'Обмотка, предназначенная для подключения приборов учета и измерения и вспомогательных нужд (в пределах установленной номинальной мощности)';help[24][2]=2;
	help[25] = new Array();
	help[25][0] ='Дополнительная (а';help[25][1] = 'Обмотка, предназначенная исключительнодля контроля изоляции сети';help[25][2]=2;
	help[26] = new Array();
	help[26][0] ='Номинальное напряжение, В';help[26][1] = 'Напряжение на зажимах вторичной обмотки трансформатора при приложении номинального напряжения к его первичной обмотке, пониженное на коэффициент трансформации';help[26][2]=2;

var sesid = '';
var number = '';
var inn = '';

var manager = '';
var objectt = '';
var count = '';
var adednew = false;

var tdbuttongn = 'tdbuttongn';
var aded = 'Добавлено';
var address = '';
var mail = '';
var phone = '';
var prim = '';
var delrow = '';

function addzakaz(proba) {
	getdata(tip, proba);
	org = document.getElementById('org').value;
	//manager = document.getElementById('manager').value;
	objectt = document.getElementById('objectt').value;
	count = document.getElementById('count').value;
	srt = document.getElementById('srt'+proba);
	nomen_id = document.getElementById('id'+proba);
	nomenid = nomen_id.value;
	inn = document.getElementById('inn').value;
	prim = '';
	number = $('#nomzakaz').attr('value');
	
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/addzakaz.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=proba&name='"+encodeURIComponent(srt.innerText)+"'&count="+count+"&manager=''&objectt='"+encodeURIComponent(objectt)+"'&sesid="+sesid+"&address=''&mail=''&phone=''&status=12&prim='"+encodeURIComponent(prim)+"'&number=''&able=1&time=1&coast=1&address='"+encodeURIComponent(address)+"'&inn='"+encodeURIComponent(inn)+"'&nomenid="+nomenid+"&org='"+encodeURIComponent(org)+"'&config='"+data+"'",
      success: function(data20){
        //$("#d_vtor_a_"+(t)+"_" + (rowCount-1)).html(seldata+data20);
        sesid = data20;
		
		$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=org&case=session_id_eq_'"+sesid+"'",
      		success: function(data21){
        	  $('#org_z').val(data21);
	        }
	    });
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=object&case=session_id_eq_'"+sesid+"'",
      		success: function(data22){
        	  $('#objectt_z').val(data22);
	        }
	    });
		head = '<tr><td colspan="6"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Наименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2tab.php",
      		data: "table=proba&column0=name&column1=count&column2=prim&number='"+encodeURIComponent(number)+"'&case=session_id_eq_'"+sesid+"'",
      		success: function(data23){
        	  $('#zakaz').html(head+data23);
	        }
	    });
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=inn&case=session_id_eq_'"+sesid+"'",
      		success: function(data28){
        	  $('#inn_z').val(data28);
			  inn = data28;	
	        }
	    });
		if (number && (number !='')){
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&number='"+number+"'&case=session_id_eq_'"+sesid+"'_or_number_eq_'"+number+"'",
      		success: function(data29){
        	  $('#sumzak').text(' '+number+' ('+data29+')');
        	  $('#sumzak_').text(' '+number+' ('+data29+')');
	        }
	    });
		}
		else{
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&case=session_id_eq_'"+sesid+"'",
      		success: function(data29){
        	  $('#sumzak').text(' "Новый" ('+data29+')');
        	  $('#sumzak_').text(' "Новый" ('+data29+')');
	        }
	    });
		}
      }
    });
    $('#safenew').attr('class', 'tdbuttongr');
	//document.getElementById('safenew').outerHTML = '<div id="safenew" class="tdbuttonbl" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить заказ</b></div>';

    $('#newfind').attr('class', 'tdbuttonbl');
    $('#newfind').click(function() {
        novy();
    });
	//document.getElementById('newfind').outerHTML = '<div id="newfind" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';

    $('#newobject').attr('class', 'tdbuttonbl');
    $('#newobject').click(function() {
        newobject(sesid);
    });
	//document.getElementById('newobject').outerHTML = '<div id="newobject" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';

    $('#newclearzak').attr('class', 'tdbuttongr');
	//document.getElementById('newclearzak').outerHTML = '<div id="newclearzak" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';

    $('#safezakaz').attr('class', 'tdbuttongr');
	//document.getElementById('safezakaz').outerHTML = '<div id="safezakaz" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить и отправить</b></div>';

    $('#sendnew').attr('class', 'tdbuttongr');
	//document.getElementById('sendnew').outerHTML = '<div id="sendnew" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';

    $('#safenew_').attr('class', 'tdbuttongr');
	//document.getElementById('safenew_').outerHTML = '<div id="safenew_" class="tdbuttongr" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить заказ</b></div>';

    $('#newfind_').attr('class', 'tdbuttonbl');
    $('#newfind_').click(function() {
        novy();
    });
	//document.getElementById('newfind_').outerHTML = '<div id="newfind_" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';

    $('#newobject_').attr('class', 'tdbuttonbl');
    $('#newobject_').click(function() {
        newobject(sesid);
    });
	//document.getElementById('newobject_').outerHTML = '<div id="newobject_" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';

    $('#newclearzak_').attr('class', 'tdbuttongr');
	//document.getElementById('newclearzak_').outerHTML = '<div id="newclearzak_" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';

    $('#safezakaz_').attr('class', 'tdbuttongr');
	//document.getElementById('safezakaz_').outerHTML = '<div id="safezakaz_" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохраненить и отправить</b></div>';

    $('#sendnew_').attr('class', 'tdbuttongr');
	//document.getElementById('sendnew_').outerHTML = '<div id="sendnew_" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';
	return false;
}

function addnew(proba) {
	getdata(tip, -1);
	pref = 'sform';
	zpref = 'newzakaztxt';
	if (proba.value.substr(0,4) == 'like'){
	  pref = 'likesform';
	  zpref = 'likezakaztxt';
	}
	if (!adednew && document.getElementById(pref).value !=''){
	org = document.getElementById('org').value;
	objectt = document.getElementById('objectt').value;
	count = document.getElementById('count').value;
	prim = document.getElementById(zpref).value;
	inn = document.getElementById('inn').value;
	number = $('#nomzakaz').attr('value');
	//alert("table=proba&name='"+encodeURIComponent(proba.value)+"'&count="+count+"&org='"+encodeURIComponent(org)+"'&objectt='"+encodeURIComponent(objectt)+"'&sesid="+sesid+"&address='"+encodeURIComponent(address)+"'&inn='"+encodeURIComponent(inn)+"'&mail='"+encodeURIComponent(mail)+"'&phone=''&status=1&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&able=1&time=1&coast=1&inn='"+inn+"'");
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/addzakaz.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=proba&name='"+encodeURIComponent(proba.value)+"'&count="+count+"&org='"+encodeURIComponent(org)+"'&objectt='"+encodeURIComponent(objectt)+"'&sesid="+sesid+"&address='"+encodeURIComponent(address)+"'&inn='"+encodeURIComponent(inn)+"'&mail='"+encodeURIComponent(mail)+"'&phone=''&status=1&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&able=1&time=1&coast=1&inn='"+inn+"'&config='"+data+"'",
      success: function(data24){
        //$("#d_vtor_a_"+(t)+"_" + (rowCount-1)).html(seldata+data20);
        sesid = data24;
        adednew = true;
		$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=org&case=session_id_eq_'"+sesid+"'",
      		success: function(data25){
        	  $('#org_z').val(data25);
	        }
	    });
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=object&case=session_id_eq_'"+sesid+"'",
      		success: function(data26){
        	  $('#objectt_z').val(data26);
	        }
	    });
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=inn&case=session_id_eq_'"+sesid+"'",
      		success: function(data28){
        	  $('#inn_z').val(data28);
				inn = data28;
	        }
	    });
		head = '<tr><td colspan="6"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Наименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2tab.php",
      		data: "table=proba&column0=name&column1=count&column2=prim&number='"+encodeURIComponent(number)+"'&case=session_id_eq_'"+sesid+"'",
      		success: function(data27){
				//alert(document.getElementById('clicknew'));
			  document.getElementById('clcknew').className = 'tdbuttongn';
			  document.getElementById('clcknew').innerText = 'Добавлено';
        	  $('#zakaz').html(head+data27);
	        }
	    });
		if (number && (number !='')){
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&number='"+number+"'&case=session_id_eq_'"+sesid+"'_or_number_eq_'"+number+"'",
      		success: function(data29){
        	  $('#sumzak').text(' '+number+' ('+data29+')');
        	  $('#sumzak_').text(' '+number+' ('+data29+')');
	        }
	    });
		}else{
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&case=session_id_eq_'"+sesid+"'",
      		success: function(data29){
        	  $('#sumzak').text(' "Новый" ('+data29+')');
        	  $('#sumzak_').text(' "Новый" ('+data29+')');
	        }
	    });
		}  
      }
    });
    $('#safenew').attr('class', 'tdbuttongr');
    $('#safenew').click(function() {
        return false;
    });
	//document.getElementById('safenew').outerHTML = '<div id="safenew" class="tdbuttonbl" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить заказ</b></div>';

    $('#newfind').attr('class', 'tdbuttonbl');
    $('#newfind').click(function() {
        novy();
    });
	//document.getElementById('newfind').outerHTML = '<div id="newfind" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';

    $('#newobject').attr('class', 'tdbuttonbl');
    $('#newobject').click(function() {
        newobject(sesid);
    });
	//document.getElementById('newobject').outerHTML = '<div id="newobject" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';

    $('#newclearzak').attr('class', 'tdbuttongr');
    $('#newclearzak').click(function() {
        return false;
    });
	//document.getElementById('newclearzak').outerHTML = '<div id="newclearzak" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';

    $('#safezakaz').attr('class', 'tdbuttongr');
    $('#safezakaz').click(function() {
        return false;
    });
	//document.getElementById('safezakaz').outerHTML = '<div id="safezakaz" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить и отправить</b></div>';

    $('#sendnew').attr('class', 'tdbuttongr');
    $('#sendnew').click(function() {
        return false;
    });
	//document.getElementById('sendnew').outerHTML = '<div id="sendnew" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';

    $('#safenew_').attr('class', 'tdbuttongr');
    $('#safenew_').click(function() {
        return false;
    });
	//document.getElementById('safenew_').outerHTML = '<div id="safenew_" class="tdbuttongr" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить заказ</b></div>';

    $('#newfind_').attr('class', 'tdbuttonbl');
    $('#newfind_').click(function() {
        novy();
    });
	//document.getElementById('newfind_').outerHTML = '<div id="newfind_" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';

    $('#newobject_').attr('class', 'tdbuttonbl');
    $('#newobject_').click(function() {
        newobject(sesid);
    });
	//document.getElementById('newobject_').outerHTML = '<div id="newobject_" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';

    $('#newclearzak_').attr('class', 'tdbuttongr');
    $('#newclearzak_').click(function() {
        return false;
    });
	//document.getElementById('newclearzak_').outerHTML = '<div id="newclearzak_" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';

    $('#safezakaz_').attr('class', 'tdbuttongr');
    $('#safezakaz_').click(function() {
        return false;
    });
	//document.getElementById('safezakaz_').outerHTML = '<div id="safezakaz_" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохраненить и отправить</b></div>';

    $('#sendnew_').attr('class', 'tdbuttongr');
    $('#sendnew_').click(function() {
        return false;
    });
	//document.getElementById('sendnew_').outerHTML = '<div id="sendnew_" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';
  }
  return false;
}

function delzakaz(nid, nsesid){
  number = $('#nomzakaz').attr('value');
  $.ajax({
    type: "POST",
    url: "/wp-content/themes/semicolon/res2var.php",
    data: "table=proba&column0=name&case=id_eq_"+nid+"_and_session_id_eq_'"+nsesid+"'",
    success: function(data27){
	delrow = data27;

	if (confirm('Вы действительно хотите удалить запись '+delrow)){
	  $.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/delzakaz.php",
      	data: "table=proba&case=id_eq_"+nid+"_and_session_id_eq_'"+nsesid+"'",
      	success: function(data28){

		  head = '<tr><td colspan="7"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Нименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
    	  $.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2tab.php",
      		data: "table=proba&column0=name&column1=count&column2=prim&case=session_id_eq_'"+nsesid+"'",
      		success: function(data29){
				//alert(document.getElementById('clicknew'));
			  	//document.getElementById('clcknew').className = 'tdbuttongn';
			  	//document.getElementById('clcknew').innerText = 'Добавлено';
			  	if (data29 != '') { 
        	  		$('#zakaz').html(head+data29);
				}
				else{
                    $('#safenew').attr('class', 'tdbuttongr');
	                //document.getElementById('safenew').outerHTML = '<div id="safenew" class="tdbuttonbl" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить заказ</b></div>';

                    $('#newfind').attr('class', 'tdbuttonbl');
                    $('#newfind').click(function() {
                        novy();
                    });
	                //document.getElementById('newfind').outerHTML = '<div id="newfind" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';

                    $('#newobject').attr('class', 'tdbuttonbl');
                    $('#newobject').click(function() {
                        newobject(sesid);
                    });
	                //document.getElementById('newobject').outerHTML = '<div id="newobject" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';

                    $('#newclearzak').attr('class', 'tdbuttongr');
	                //document.getElementById('newclearzak').outerHTML = '<div id="newclearzak" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';

                    $('#safezakaz').attr('class', 'tdbuttongr');
	                //document.getElementById('safezakaz').outerHTML = '<div id="safezakaz" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить и отправить</b></div>';

                    $('#sendnew').attr('class', 'tdbuttongr');
	                //document.getElementById('sendnew').outerHTML = '<div id="sendnew" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';

                    $('#safenew_').attr('class', 'tdbuttongr');
	                //document.getElementById('safenew_').outerHTML = '<div id="safenew_" class="tdbuttongr" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить заказ</b></div>';

                    $('#newfind_').attr('class', 'tdbuttonbl');
                    $('#newfind_').click(function() {
                        novy();
                    });
	                //document.getElementById('newfind_').outerHTML = '<div id="newfind_" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';

                    $('#newobject_').attr('class', 'tdbuttonbl');
                    $('#newobject_').click(function() {
                        newobject(sesid);
                    });
	                //document.getElementById('newobject_').outerHTML = '<div id="newobject_" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';

                    $('#newclearzak_').attr('class', 'tdbuttongr');
	                //document.getElementById('newclearzak_').outerHTML = '<div id="newclearzak_" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';

                    $('#safezakaz_').attr('class', 'tdbuttongr');
	                //document.getElementById('safezakaz_').outerHTML = '<div id="safezakaz_" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохраненить и отправить</b></div>';

                    $('#sendnew_').attr('class', 'tdbuttongr');
	                //document.getElementById('sendnew_').outerHTML = '<div id="sendnew_" class="tdbuttongr" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';

					//$('#zakaz').html(data29);
					$('#zakaz').html('');
				}
	        }
		  });
		if (number && (number !='')){
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&number='"+number+"'&case=session_id_eq_'"+sesid+"'_or_number_eq_'"+number+"'",
      		success: function(data29){
        	  $('#sumzak').text(' '+number+' ('+data29+')');
        	  $('#sumzak_').text(' '+number+' ('+data29+')');
	        }
	    });
		}else{
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&case=session_id_eq_'"+sesid+"'",
      		success: function(data29){
        	  $('#sumzak').text(' "Новый" ('+data29+')');
        	  $('#sumzak_').text(' "Новый" ('+data29+')');
	        }
	    });
		}  
	    }
	  });
	}
    }
  });

}

function sendzakaz(nsesid){
	manager = document.getElementById('manager_z').value;
	objectt = document.getElementById('objectt_z').value;
	address = document.getElementById('address').value;
	mail = document.getElementById('mail').value;
	phone = document.getElementById('phone').value;
	org = document.getElementById('org_z').value;
	inn = document.getElementById('inn_z').value;
	man_name = document.getElementById('man_name').value;
	man_email = document.getElementById('man_email').value;
	//alert("table=proba&manager='"+encodeURIComponent(manager)+"'&objectt='"+encodeURIComponent(objectt)+"'&sesid='"+nsesid+"'&address='"+encodeURIComponent(address)+"'&mail='"+encodeURIComponent(mail)+"'&phone='"+encodeURIComponent(phone)+"'&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&inn='"+inn+"'&org='"+encodeURIComponent(org)+"'&man_name='"+encodeURIComponent(man_name)+"'&man_email='"+encodeURIComponent(man_email)+"'&case=session_id_eq_'"+nsesid+"'");
    $.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/sendzakaz.php",
      	data: "table=proba&manager='"+encodeURIComponent(manager)+"'&objectt='"+encodeURIComponent(objectt)+"'&sesid='"+nsesid+"'&address='"+encodeURIComponent(address)+"'&mail='"+encodeURIComponent(mail)+"'&phone='"+encodeURIComponent(phone)+"'&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&inn='"+inn+"'&org='"+encodeURIComponent(org)+"'&man_name='"+encodeURIComponent(man_name)+"'&man_email='"+encodeURIComponent(man_email)+"'&case=session_id_eq_'"+nsesid+"'",
      	success: function(data29){
            $('#safenew').attr('class', 'tdbuttongr');
            $('#safenew').click(function() {
                return false;
            });

            $('#newfind').attr('class', 'tdbuttongr');
            $('#newfind').click(function() {
                return false;
            });

            $('#newobject').attr('class', 'tdbuttongr');
            $('#newobject').click(function() {
                return false;
            });

            $('#newclearzak').attr('class', 'tdbuttonbl');
            $('#newclearzak').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz').attr('class', 'tdbuttongn');
            $('#safezakaz').html('<b>Сохранено и отправлено</b>');
            $('#safezakaz').click(function() {
                return false;
            });

            $('#sendnew').attr('class', 'tdbuttongr');
            $('#sendnew').html('<b>Заказ отправлен</b>');
            $('#sendnew').click(function() {
                return false;
            });

            $('#safenew_').attr('class', 'tdbuttongr');
            $('#safenew_').click(function() {
                return false;
            });

            $('#newfind_').attr('class', 'tdbuttongr');
            $('#newfind_').click(function() {
                return false;
            });

            $('#newobject_').attr('class', 'tdbuttongr');
            $('#newobject_').click(function() {
                return false;
            });

            $('#newclearzak_').attr('class', 'tdbuttonbl');
            $('#newclearzak_').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz_').attr('class', 'tdbuttongn');
            $('#safezakaz_').html('<b>Сохранено и отправлено</b>');
            $('#safezakaz_').click(function() {
                return false;
            });

            $('#sendnew_').attr('class', 'tdbuttongr');
            $('#sendnew_').html('<b>Заказ отправлен</b>');
            $('#sendnew_').click(function() {
                return false;
            });

    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2var.php",
      		data: "table=proba&column0=number&case=session_id_eq_'"+nsesid+"'",
      		success: function(data28){
        		$('#nomzakaz').val(data28);
        		$('#nomzakaz_').val(data28);
				number = data28;  
    			$.ajax({
      				type: "POST",
      				url: "/wp-content/themes/semicolon/cnt2var.php",
      				data: "table=proba&number='"+number+"'&case=session_id_eq_'"+sesid+"'_or_number_eq_'"+number+"'",
      				success: function(data29){
        	  			$('#sumzak').text(' '+number+' ('+data29+')');
        	  			$('#sumzak_').text(' '+number+' ('+data29+')');
	        		}
	    		});
	  		}
		});
	  }
	});	
	//alert(nsesid);
}

function safezakaz(nid, nsesid){
//	общие поля
//поля по оборудованию
	putdata(nid);
	namec = $("#srt-"+nid).text(); <?php //if ($login == 'test') {echo "alert('namec= '+namec);" ;} ?>
	data = configdata[namec][0];
	prim = '';
	prim +='<tr><td align="right">Количество</td><td>'+$("#count-"+nid).val()+'</td></tr>';
	prim +='<tr><td align="right">Примечание</td><td>'+$("#prim-"+nid).val()+'</td></tr>';
	data2 = configdata[namec][2];
	data = encodeURIComponent(data + prim + data2); 
	
	count = document.getElementById('count-'+nid).value;
	prim = document.getElementById('prim-'+nid).value;
	able = ($('#able-'+nid).prop('checked'))?1:0;
	time = ($('#time-'+nid).prop('checked'))?1:0;
	coast = ($('#coast-'+nid).prop('checked'))?1:0;
	phone = '';
	num = $('#nomzakaz').val();
	
	head = '<tr><td colspan="7"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Нименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
//alert("table=proba&id="+nid+"&count="+count+"&sesid='"+nsesid+"'&address='"+encodeURIComponent(address)+"'&mail='"+encodeURIComponent(mail)+"'&phone='"+encodeURIComponent(phone)+"'&status="+status+"&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&able="+able+"&time="+time+"&coast="+coast+"&inn='"+inn+"'&case=session_id_eq_'"+nsesid+"'");

	$.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/safezakaz.php",
      	data: "table=proba&id="+nid+"&count="+count+"&sesid='"+nsesid+"'&address='"+encodeURIComponent(address)+"'&mail='"+encodeURIComponent(mail)+"'&phone='"+encodeURIComponent(phone)+"'&status="+status+"&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&able="+able+"&time="+time+"&coast="+coast+"&inn='"+inn+"'&case=session_id_eq_'"+nsesid+"'&config='"+data+"'",
      	success: function(data29){
			  //document.getElementById('safezakaz').outerHTML = '<div id="safezakaz" class="tdbuttongn" onclick="alert();" style="width:200px;height:50px;line-height:48px;font-size:16px;"><b>Заказ отправлен</b></div>';
          $('#zakaz').html(head+data29);
			//alert($('.proundgn').length)
		  if ($('.proundgn').length == 0) {

            $('#safenew').attr('class', 'tdbuttonbl');
            $('#safenew').html('<b>Сохранить заказ</b>');
            $('#safenew').click(function() {
               safenew(sesid);
            });

            $('#newfind').attr('class', 'tdbuttonbl');
            $('#newfind').click(function() {
                novy(sesid);
            });

            $('#newobject').attr('class', 'tdbuttonbl');
            $('#newobject').click(function() {
                newobject(sesid);
            });

            $('#newclearzak').attr('class', 'tdbuttongr');
            $('#newclearzak').click(function() {
                return false;
            });

            $('#safezakaz').attr('class', 'tdbuttonbl');
            $('#safezakaz').html('<b>Сохранить и отправить</b>');
            $('#safezakaz').click(function() {
                sendzakaz(sesid);
            });

            $('#sendnew').attr('class', 'tdbuttongr');
            $('#sendnew').html('<b>Отправить заказ</b>');
            $('#sendnew').click(function() {
                return false;
            });

            $('#safenew_').attr('class', 'tdbuttonbl');
            $('#safenew_').html('<b>Сохранить заказ</b>');
            $('#safenew_').click(function() {
                safenew(sesid);
            });

            $('#newfind_').attr('class', 'tdbuttonbl');
            $('#newfind_').click(function() {
                novy(sesid);
            });

            $('#newobject_').attr('class', 'tdbuttonbl');
            $('#newobject_').click(function() {
                newobject(sesid);
            });

            $('#newclearzak_').attr('class', 'tdbuttongr');
            $('#newclearzak_').click(function() {
                return false;
            });

            $('#safezakaz_').attr('class', 'tdbuttonbl');
            $('#safezakaz_').html('<b>Сохранить и отправить</b>');
            $('#safezakaz_').click(function() {
                sendzakaz(sesid);
            });

            $('#sendnew_').attr('class', 'tdbuttongr');
            $('#sendnew_').html('<b>Отправить заказ</b>');
            $('#sendnew_').click(function() {
                return false;
            });
		  }
	    }
	});		
					
}

function safenew(nsesid){
	manager = document.getElementById('manager_z').value;
	objectt = document.getElementById('objectt_z').value;
	address = document.getElementById('address').value;
	mail = document.getElementById('mail').value;
	phone = document.getElementById('phone').value;
	org = document.getElementById('org_z').value;
	inn = document.getElementById('inn').value;
	//alert("table=proba&manager='"+encodeURIComponent(manager)+"'&objectt='"+encodeURIComponent(objectt)+"'&sesid='"+nsesid+"'&address='"+encodeURIComponent(address)+"'&mail='"+encodeURIComponent(mail)+"'&phone='"+encodeURIComponent(phone)+"'&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&inn='"+encodeURIComponent(inn)+"'&org='"+encodeURIComponent(org)+"'&case=session_id_eq_'"+nsesid+"'&config='"+data+"'");
    $.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/safenew.php",
      	data: "table=proba&manager='"+encodeURIComponent(manager)+"'&objectt='"+encodeURIComponent(objectt)+"'&sesid='"+nsesid+"'&address='"+encodeURIComponent(address)+"'&mail='"+encodeURIComponent(mail)+"'&phone='"+encodeURIComponent(phone)+"'&prim='"+encodeURIComponent(prim)+"'&number='"+encodeURIComponent(number)+"'&inn='"+encodeURIComponent(inn)+"'&org='"+encodeURIComponent(org)+"'&case=session_id_eq_'"+nsesid+"'",
        success: function(data29){
    	$.ajax({
     	  type: "POST",
      	  url: "/wp-content/themes/semicolon/res2var.php",
      	  data: "table=proba&column0=number&case=session_id_eq_'"+nsesid+"'",
      	  success: function(data28){
		  //alert("table=proba&column0=number&case=session_id_eq_'"+nsesid+"'");
		  number = data28;
		  //alert(number);
          $('#nomzakaz').val(data28);
          $('#nomzakaz_').val(data28);

            $('#safenew').attr('class', 'tdbuttongn');
            $('#safenew').html('<b>Заказ сохранён</b>');
            $('#safenew').click(function() {
               return false;
            });

            $('#newfind').attr('class', 'tdbuttonbl');
            $('#newfind').click(function() {
                novy(sesid);
            });

            $('#newobject').attr('class', 'tdbuttonbl');
            $('#newobject').click(function() {
                newobject(sesid);
            });

            $('#newclearzak').attr('class', 'tdbuttonbl');
            $('#newclearzak').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz').attr('class', 'tdbuttongr');
            $('#safezakaz').html('<b>Сохранить и отправить</b>');
            $('#safezakaz').click(function() {
                return false;
            });

            $('#sendnew').attr('class', 'tdbuttonbl');
            $('#sendnew').html('<b>Отправить заказ</b>');
            $('#sendnew').click(function() {
                sendnew(sesid);
            });

            $('#safenew_').attr('class', 'tdbuttongn');
            $('#safenew_').html('<b>Заказ сохранён</b>');
            $('#safenew_').click(function() {
                return false;
            });

            $('#newfind_').attr('class', 'tdbuttonbl');
            $('#newfind_').click(function() {
                novy(sesid);
            });

            $('#newobject_').attr('class', 'tdbuttonbl');
            $('#newobject_').click(function() {
                newobject(sesid);
            });

            $('#newclearzak_').attr('class', 'tdbuttonbl');
            $('#newclearzak_').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz_').attr('class', 'tdbuttongr');
            $('#safezakaz_').html('<b>Сохранить и отправить</b>');
            $('#safezakaz_').click(function() {
                return false;
            });

            $('#sendnew_').attr('class', 'tdbuttonbl');
            $('#sendnew_').html('<b>Отправить заказ</b>');
            $('#sendnew_').click(function() {
                sendnew(sesid);
            });
		  	//document.getElementById('safenew').outerHTML = '<div id="safenew" class="tdbuttongn" style="width:160px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказ сохранён</b></div>';
		  	//document.getElementById('newfind').outerHTML = '<div id="newfind" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый поиск</b></div>';
			//document.getElementById('newobject').outerHTML = '<div id="newobject" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';
			//document.getElementById('newclearzak').outerHTML = '<div id="newclearzak" class="tdbuttonbl" onclick="newclearzak(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';
		  	//document.getElementById('safezakaz').outerHTML = '<div id="safezakaz" class="tdbuttongr" style="width:130px;height:50px;line-height:48px;font-size:18px;display:inline-block;"><b>Сохранить и заказать</b></div>';
		  	//document.getElementById('sendnew').outerHTML = '<div id="sendnew" class="tdbuttonbl" onclick="sendnew(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';

		  	//document.getElementById('safenew_').outerHTML = '<div id="safenew_" class="tdbuttongn" style="width:160px;height:50px;line-height:24px;font-size:16px;display:inline-block;"><b>Заказ сохранён</b></div>';
		  	//document.getElementById('newfind_').outerHTML = '<div id="newfind_" class="tdbuttonbl" onclick="novy();" style="width:120px;height:50px;line-height:24px;font-size:16px;display:inline-block;"><b>Новый поиск</b></div>';
			//document.getElementById('newobject_').outerHTML = '<div id="newobject_" class="tdbuttonbl" onclick="newobject(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый объект</b></div>';
			//document.getElementById('newclearzak_').outerHTML = '<div id="newclearzak_" class="tdbuttonbl" onclick="newclearzak(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Новый заказ</b></div>';
		  	//document.getElementById('safezakaz_').outerHTML = '<div id="safezakaz_" class="tdbuttongr" style="width:130px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Сохранить и заказать</b></div>';
		  	//document.getElementById('sendnew_').outerHTML = '<div id="sendnew_" class="tdbuttonbl" onclick="sendnew(sesid);" style="width:120px;height:50px;line-height:24px;font-size:18px;display:inline-block;"><b>Заказать</b></div>';
		$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&number='"+number+"'&case=session_id_eq_'"+sesid+"'_or_number_eq_'"+number+"'",
      		success: function(data29){
        	  $('#sumzak').text(' '+number+' ('+data29+')');
        	  $('#sumzak_').text(' '+number+' ('+data29+')');
	        }
	    });
	      }
		});
	    }
	});					
}

function novy(){
	$('#org').focus();
	$('#org').blur();
     $.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/txzn.php?sesid='"+sesid+"'",
       data: "tabl="+0,
	   dataType: "html",
	   async: false,	 
       success: function(datatml){
         $("#tabl").html("");
         $("#tabl").html(datatml);
		 $('#tip :first').attr("selected", "selected");
       }
     });
	$('#vkl1').attr('checked', true);
	$('#vkl10').attr('checked', true);
}

function nave(){
	$('#org').focus();
	$('#org').blur();
}

function noob(){
	$('#org').focus();
	$('#org').blur();
     $.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/txzn.php?sesid='"+sesid+"'",
       data: "tabl="+tipn,
	   dataType: "html",
	   async: false,	 
       success: function(datatml){
         $("#tabl").html("");
         $("#tabl").html(datatml);
		 $('#tip :first').attr("selected", "selected");
		 $('#objectt').focus();
		 $('#objectt').val('');
       }
     });
}


function edzakaz(number){
	head = '<tr><td colspan="7"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Нименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
	//alert("table=proba&column0=name&column1=count&column2=prim&case=number_eq_'"+number+"'");
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2var.php",
      data: "table=proba&column0=inn&case=session_id_eq_'"+sesid+"'",
      success: function(data28){
		//alert("table=proba&column0=number&case=session_id_eq_'"+nsesid+"'");
		inn = data28;
		//alert(number);
        //$('#nomzakaz').html('<b>№ '+data28+'</b>');
	  }
	});

	$('#vkl3').attr('checked', true);
	$('#vkl30').attr('checked', true);
        $('#nomzakaz').val(number);
        $('#nomzakaz_').val(number);
    	  $.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2tab.php",
      		data: "table=proba&column0=name&column1=count&column2=prim&case=number_eq_'"+number+"'",
      		success: function(data29){
				//alert(document.getElementById('clicknew'));
			  	//document.getElementById('clcknew').className = 'tdbuttongn';
			  	//document.getElementById('clcknew').innerText = 'Добавлено';
			  	if (data29 != '') {
        	  		$('#zakaz').html(head+data29);
				}
				else{
					$('#zakaz').html(data29);
				}
	        }
		  });
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/cnt2var.php",
      		data: "table=proba&number='"+number+"'&case=session_id_eq_'"+sesid+"'_or_number_eq_'"+number+"'",
      		success: function(data29){
        	  $('#sumzak').text(' '+number+' ('+data29+')');
        	  $('#sumzak_').text(' '+number+' ('+data29+')');
	        }
	    });
    	$.ajax({
     	  type: "POST",
      	  url: "/wp-content/themes/semicolon/res2var.php",
      	  data: "table=vsezakaz&column0=status&case=number_eq_'"+number+"'",
      	  success: function(data28){
		  	//alert("table=proba&column0=number&case=session_id_eq_'"+nsesid+"'");
		  	stat = data28;
		  	//alert(number);
		  	if (stat == 0){

            $('#safenew').attr('class', 'tdbuttongn');
            $('#safenew').html('<b>Заказ сохранён</b>');
            $('#safenew').click(function() {
               return false;
            });

            $('#newfind').attr('class', 'tdbuttonbl');
            $('#newfind').click(function() {
                novy(sesid);
            });

            $('#newobject').attr('class', 'tdbuttonbl');
            $('#newobject').click(function() {
                newobject(sesid);
            });

            $('#newclearzak').attr('class', 'tdbuttonbl');
            $('#newclearzak').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz').attr('class', 'tdbuttongr');
            $('#safezakaz').html('<b>Сохранить и отправить</b>');
            $('#safezakaz').click(function() {
                return false;
            });

            $('#sendnew').attr('class', 'tdbuttonbl');
            $('#sendnew').html('<b>Отправить заказ</b>');
            $('#sendnew').click(function() {
                sendnew(sesid);
            });

            $('#safenew_').attr('class', 'tdbuttongn');
            $('#safenew_').html('<b>Заказ сохранён</b>');
            $('#safenew_').click(function() {
                return false;
            });

            $('#newfind_').attr('class', 'tdbuttonbl');
            $('#newfind_').click(function() {
                novy(sesid);
            });

            $('#newobject_').attr('class', 'tdbuttonbl');
            $('#newobject_').click(function() {
                newobject(sesid);
            });

            $('#newclearzak_').attr('class', 'tdbuttonbl');
            $('#newclearzak_').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz_').attr('class', 'tdbuttongr');
            $('#safezakaz_').html('<b>Сохранить и отправить</b>');
            $('#safezakaz_').click(function() {
                return false;
            });

            $('#sendnew_').attr('class', 'tdbuttonbl');
            $('#sendnew_').html('<b>Отправить заказ</b>');
            $('#sendnew_').click(function() {
                sendnew(sesid);
            });
			}
		  	if (stat == 1){

            $('#safenew').attr('class', 'tdbuttongn');
            $('#safenew').html('<b>Заказ сохранён</b>');
            $('#safenew').click(function() {
               return false;
            });

            $('#newfind').attr('class', 'tdbuttongr');
            $('#newfind').click(function() {
                return false;
            });

            $('#newobject').attr('class', 'tdbuttongr');
            $('#newobject').click(function() {
                return false;
            });

            $('#newclearzak').attr('class', 'tdbuttonbl');
            $('#newclearzak').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz').attr('class', 'tdbuttongr');
            $('#safezakaz').html('<b>Сохранить и отправить</b>');
            $('#safezakaz').click(function() {
                return false;
            });

            $('#sendnew').attr('class', 'tdbuttongn');
            $('#sendnew').html('<b>Заказ отправлен</b>');
            $('#sendnew').click(function() {
                return false;
            });

            $('#safenew_').attr('class', 'tdbuttongn');
            $('#safenew_').html('<b>Заказ сохранён</b>');
            $('#safenew_').click(function() {
                return false;
            });

            $('#newfind_').attr('class', 'tdbuttongr');
            $('#newfind_').click(function() {
                return false;
            });

            $('#newobject_').attr('class', 'tdbuttongr');
            $('#newobject_').click(function() {
                return false;
            });

            $('#newclearzak_').attr('class', 'tdbuttonbl');
            $('#newclearzak_').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz_').attr('class', 'tdbuttongr');
            $('#safezakaz_').html('<b>Сохранить и отправить</b>');
            $('#safezakaz_').click(function() {
                return false;
            });

            $('#sendnew_').attr('class', 'tdbuttongn');
            $('#sendnew_').html('<b>Заказ отправлен</b>');
            $('#sendnew_').click(function() {
                return false;
            });
			}
	      }
		});
}
	
function vse(){
/*  if (document.getElementById('inn0') && ($('#inn0').val() != "") && ($('#inn0').val() != "''")){
  inn0 = $('#inn0').val();
	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/vsezakaz.php",
      		data: "table=proba&inn='"+inn0+"'",
      		success: function(data27){
			  //alert("table=proba&inn='"+inn0+"'");
        	  $('#vsezakazy').html(data27);
	        }
	    });
  }
  else{
	if(inn && (inn != "") && (inn != "''")){
		$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/vsezakaz.php",
      		data: "table=proba&inn='"+inn+"'&sesid='"+sesid+"'",
      		success: function(data27){
			  //alert("table=proba&inn='"+inn+"'&sesid='"+sesid+"'");
        	  $('#vsezakazy').html(data27);
	        }
	    });
	   }  
  }
*/
	inn0 = $('#inn0').val();
	org0 = $('#org0').val();
	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/vsezakaz.php",
      		data: "table=proba&inn="+inn0+"&org="+org0+"",
      		success: function(data27){
			  //alert("table=proba&inn='"+inn0+"'");
        	  $('#vsezakazy').html(data27);
	        }
	    });
	return false;	
}

function deletezakaz(number){
	if (confirm('Вы действительно хотите удалить данные о Заказе '+number+' целиком ?')){
		//alert("table=proba&number='"+number+"'");
	  $.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/deletezakaz.php",
      	data: "table=proba&number='"+number+"'",
      	success: function(data28){

		  head = '<tr><td colspan="7"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Нименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
    	  $.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2tab.php",
      		data: "table=proba&column0=name&column1=count&column2=prim&case=session_id_eq_'"+sesid+"'",
      		success: function(data29){
				//alert(document.getElementById('clicknew'));
			  	//document.getElementById('clcknew').className = 'tdbuttongn';
			  	//document.getElementById('clcknew').innerText = 'Добавлено';
			  	if (data29 != '') {
        	  		$('#zakaz').html(head+data29);
				}
				else{
					$('#zakaz').html(data29);
				}
	        }
		  });
	    }
	  });
	}
  if (document.getElementById('inn0')){
  inn0 = $('#inn0').val();
	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/vsezakaz.php",
      		data: "table=proba&inn="+inn0+"",
      		success: function(data27){
			  //alert(document.getElementById('vsezakazy'));
        	  $('#vsezakazy').html(data27);
	        }
	    });
  }
  else{
	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/vsezakaz.php",
      		data: "table=proba&sesid='"+sesid+"'",
      		success: function(data27){
			  //alert(document.getElementById('vsezakazy'));
        	  $('#vsezakazy').html(data27);
	        }
	    });
  }
}
	
function sendnew(nsesid){
	num = $('#nomzakaz').val();
	number = strRight(11,num);
	man_name = document.getElementById('man_name').value;
	man_email = document.getElementById('man_email').value;
	//alert(number);
	org = document.getElementById('org_z').value;
/*	if(nsesid != ''){
		case0 = "session_id_eq_'"+nsesid+"'";
	}
	else{
		case0 = "number_eq_'"+number+"'";
	}	
*/	
	case0 = "number_eq_'"+number+"'";
	//alert("table=proba&number='"+encodeURIComponent(number)+"'&inn='"+inn+"'&org='"+encodeURIComponent(org)+"'&man_name='"+encodeURIComponent(man_name)+"'&man_email='"+encodeURIComponent(man_email)+"'&case="+case0+"");
    $.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/sendnew.php",
      	data: "table=proba&number='"+encodeURIComponent(number)+"'&inn='"+inn+"'&org='"+encodeURIComponent(org)+"'&man_name='"+encodeURIComponent(man_name)+"'&man_email='"+encodeURIComponent(man_email)+"'&case="+case0+"",
      	success: function(data29){

            $('#safenew').attr('class', 'tdbuttongr');
            $('#safenew').html('<b>Сохранить заказ</b>');
            $('#safenew').click(function() {
               return false;
            });

            $('#newfind').attr('class', 'tdbuttongr');
            $('#newfind').click(function() {
                return false;
            });

            $('#newobject').attr('class', 'tdbuttongr');
            $('#newobject').click(function() {
                return false;
            });

            $('#newclearzak').attr('class', 'tdbuttonbl');
            $('#newclearzak').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz').attr('class', 'tdbuttongr');
            $('#safezakaz').html('<b>Сохранить и отправить</b>');
            $('#safezakaz').click(function() {
                return false;
            });

            $('#sendnew').attr('class', 'tdbuttongn');
            $('#sendnew').html('<b>Заказ отправлен</b>');
            $('#sendnew').click(function() {
                return false;
            });

            $('#safenew_').attr('class', 'tdbuttongr');
            $('#safenew_').html('<b>Сохранить заказ</b>');
            $('#safenew_').click(function() {
                return false;
            });

            $('#newfind_').attr('class', 'tdbuttongr');
            $('#newfind_').click(function() {
                return false;
            });

            $('#newobject_').attr('class', 'tdbuttongr');
            $('#newobject_').click(function() {
                return false;
            });

            $('#newclearzak_').attr('class', 'tdbuttonbl');
            $('#newclearzak_').click(function() {
                newclearzak(sesid);
            });

            $('#safezakaz_').attr('class', 'tdbuttongr');
            $('#safezakaz_').html('<b>Сохранить и отправить</b>');
            $('#safezakaz_').click(function() {
                return false;
            });

            $('#sendnew_').attr('class', 'tdbuttongn');
            $('#sendnew_').html('<b>Заказ отправлен</b>');
            $('#sendnew_').click(function() {
                return false;
            });

		}
	});					
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2var.php",
      data: "table=proba&column0=number&case=session_id_eq_'"+nsesid+"'",
      success: function(data28){
        $('#nomzakaz').val(data28);
        $('#nomzakaz_').val(data28);
	  }
	});
        $('#nomzakaz').val(number);
        $('#nomzakaz_').val(number);
}

function strRight(n,str){
   return str.substring(str.length-n,str.length);
}	
	
function newobject(sesid){
	$('#org').focus();
	$('#org').blur();
     $.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/txzn.php?sesid='"+sesid+"'",
       data: "tabl="+0,
	   dataType: "html",
	   async: false,	 
       success: function(datatml){
         $("#tabl").html("");
         $("#tabl").html(datatml);
		 $('#tip :first').attr("selected", "selected");
		 $('#objectt').focus();
		 $('#objectt').val('');
       }
     });
	$('#vkl1').attr('checked', true);
	$('#vkl10').attr('checked', true);
	$('#objectt').focus();
}

function newclearzak(sesid){
	sesid = '';
	number = '';
    $('#nomzakaz').val('');
    $('#nomzakaz_').val('');
	$('#org').focus();
	$('#org').blur();
     $.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/txzn.php?sesid='"+sesid+"'",
       data: "tabl="+0,
	   dataType: "html",
	   async: false,	 
       success: function(datatml){
         $("#tabl").html("");
         $("#tabl").html(datatml);
		 $('#tip :first').attr("selected", "selected");
		 $('#objectt').focus();
		 $('#objectt').val('');
       }
     });
	$('#vkl1').attr('checked', true);
	$('#vkl10').attr('checked', true);
    $('#sumzak').text('');
    $('#sumzak_').text('');
	head = '<tr><td colspan="6"><p><b>Подбираемое оборудование</b></p></td></tr><tr><td><p>Нименование продукции</p></td><td><p>Кол-во</p></td><td><p>Примечание</p></td><td><p>Возможность изготовления</p></td><td><p>Тип запроса</p></td><td><p>Подтверждение</p></td><td><p>Удаление</p></td></tr>';
    	$.ajax({
      		type: "POST",
      		url: "/wp-content/themes/semicolon/res2tab.php",
      		data: "table=proba&column0=name&column1=count&column2=prim&number=''&case=session_id_eq_''",
      		success: function(data27){
        	  $('#zakaz').html(head+data27);
	        }
	    });
}	

function addgroup(){
	groupname = $("#groupname").val();
	$.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/addgroup.php",
       data: "groupname='"+groupname+"'",
	   dataType: "html",
	   async: false,	 
       success: function(datatm){
         $("#mangroups").html(datatm);
       }
     });
}

function delgroup(number_id){
  conf = confirm("Удалить запись?");
  if (conf)  {
    //alert("number_id="+number_id);
	$.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/delgroup.php",
       data: "number_id="+number_id+"",
	   dataType: "html",
	   async: false,	 
       success: function(datatml){
         $("#mangroups").html(datatml);
       }
     });
  }
}
	
function selgroup(number_id){
	$('#group_id').val(number_id);
	$.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/selgroup.php",
       data: "group_id="+number_id+"",
	   dataType: "html",
	   async: false,	 
       success: function(datatms){
         $("#selmangroup").html(datatms);
       }
     });
}
	
var userarray;
userarray = new Array();	

<?php
	
$args = array(
	'blog_id'      => $GLOBALS['blog_id'],
	'role'         => '',
	'role__in'     => array(),
	'role__not_in' => array(),
	'meta_key'     => '',
	'meta_value'   => '',
	'meta_compare' => '',
	'meta_query'   => array(),
	'include'      => array(),
	'exclude'      => array(),
	'orderby'      => 'login',
	'order'        => 'ASC',
	'offset'       => '',
	'search'       => '',
	'search_columns' => array(),
	'number'       => '',
	'paged'        => 1,
	'count_total'  => false,
	'fields'       => 'all',
	'who'          => '',
	'has_published_posts' => null,
	'date_query'   => array() // смотрите WP_Date_Query
);
$users = get_users( $args );
$k = 0;	
//echo 'function userarrayadd(){ ';
foreach( $users as $user1 ){
	$user_id = ($user1->user_login)?$user1->ID:'';
	$user_login = ($user1->user_login)?$user1->user_login:'';
	$user_email = ($user1->user_email)?$user1->user_email:'';
	$user_first_name = ($user1->first_name)?$user1->first_name:'';
	$user_last_name = ($user1->last_name)?$user1->last_name:'';
	$user_org = ($user1->org_name)?$user1->org_name:'';
//	echo 'userarray['.$k.']= new Array("user_id"=>'.$user_id.',';
//	echo '"user_first_name"=>"'.$user_first_name.'",';
//	echo '"user_last_name"=>"'.$user_last_name.'",';
//	echo '"user_email"=>"'.$user_email.'");';
	echo 'userarray['.$k.']= new Array('.$user_id.',';
	echo '"'.$user_first_name.'",';
	echo '"'.$user_last_name.'",';
	echo '"'.$user_email.'");';
	echo "\n";
	$k++;
}
//echo ' }';	

?>	
	
function getuser(user_id){
	//alert(userarray.length);
	for (k=0; k<userarray.length;k++){
		if (userarray[k][0] == user_id){
			//alert(userarray[k][1]);
			$('#selfirstname').val(userarray[k][1]);
			$('#sellastname').val(userarray[k][2]);
			$('#selemail1').val(userarray[k][3]);
		}
	}	
}

function addmanager(){
	selfirstname = $('#selfirstname').val();
	selmiddlename = $('#selmiddlename').val();
	sellastname = $('#sellastname').val();
	selemail1 = $('#selemail1').val();
	selemail2 = $('#selemail2').val();
	group_id = $('#group_id').val();
	man_id = $('#man_id').val();
	//alert("selfirstname='"+selfirstname+"'&selmiddlename='"+selmiddlename+"'&sellastname='"+sellastname+"'&selemail1='"+selemail1+"'&selemail2='"+selemail2+"'&group_id="+group_id+"&man_id="+man_id);
	$.ajax({
       type: "POST",
       url: "/wp-content/themes/semicolon/addmanagers.php",
//       url: "/wp-content/themes/semicolon/_page-1074.php",
       data: "selfirstname='"+selfirstname+"'&selmiddlename='"+selmiddlename+"'&sellastname='"+sellastname+"'&selemail1='"+selemail1+"'&selemail2='"+selemail2+"'&group_id="+group_id+"&man_id="+man_id,
	   dataType: "html",
	   async: false,	 
       success: function(datatm){
         $("#selmangroup").html(datatm);
       }
     });
}


	
function createpdf(types){
	getdata(types, -2);
//	win = window.open('crtpdf.php?data='+data, 'PDF');
//	function autoLogIn(un, pw) {
    var form1 = document.createElement("form");
    var element1 = document.createElement("textarea"); 
//    var element2 = document.createElement("input");  

    form1.method = "POST";
    form1.action = "/crtpdf/";   
    form1.target = "_blank";  
	form1.style.display = "none";

    element1.value = data;
    element1.name = "data";
    form1.appendChild(element1);  

//    element2.value=pw;
//    element2.name="pw";
//    form.appendChild(element2);

    document.body.appendChild(form1);
	
    form1.submit();

<?php	
	if ($login == 'ntz-volhov') { include("pdf_tpl.inc");
?>
/*
-------------------------	
	data1 = '';
	prim = '';
	data2 = '';
	ttol = ''; ttol1 = '';
	data1 +='<IMG WIDTH="40" HEIGHT="40" SRC="https://intzv.ru/wp-content/themes/semicolon/ntz-volhov1.png">';
	data1 +='<table>';
	data1 +='<tr><td WIDTH="70px" ALIGN="CENTER" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td ALIGN="RIGHT" WIDTH="70mm"  HEIGHT="4mm"><font size="10" color="#000000">Организация-заказчик:</font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" ALIGN="CENTER" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td ALIGN="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000"><b>'+$("#org").val()+'</b></font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" ALIGN="CENTER" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td ALIGN="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000">ИНН</font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td align="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000"><b>'+$("#inn").val()+'</b></font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td align="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000">Объект</font></td></tr>';
	data1 +='<tr><td WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td WIDTH="50mm" HEIGHT="4mm"><font size="10" color="#ffffff">.</font></td><td align="RIGHT" WIDTH="70mm" HEIGHT="4mm"><font size="10" color="#000000"><b>'+$("#objectt").val()+'</b></font></td></tr>';
	data1 +='<tr><td WIDTH="190mm" HEIGHT="8mm" ALIGN="CENTER" BORDER="B" BORDERCOLOR="#304090" BORDERWIDTH="0.1mm"><font size="14" color="#304090"><b>ОПРОСНЫЙ ЛИСТ</b></font></td></tr>';
	data1 +='<tr>';
	data1 +='</tr>';
	//data +='<tr><td width="100mm" BORDER="R" BORDERCOLOR="#000" BORDERWIDTH="0.1mm"><font size="10" color="#000"><b>Общие характеристики</b></font></td><td width="80mm" BORDER="R" BORDERCOLOR="#000" BORDERWIDTH="0.1mm">*</td></tr>';
	data1 +='<tr>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Тип</font></td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Класс напряж., кВ</td>';
	data1 +='<td WIDTH="24mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Исполнение</td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Климатич. исполн.</td>';
	data1 +='</tr>';
	data1 +='<tr>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#tip option:selected").text()+'</td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#napr option:selected").text()+'</td>';
	data1 +='<td WIDTH="24mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#gab option:selected").text()+($('#gab_nt').prop('checked')?' неточно':'')+'</td>';
	data1 +='<td WIDTH="30mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#klim_kat option:selected").text()+'</td>';
	data1 +='</tr>';
	data1 +='<tr>';
	//data1 +='<td WIDTH="38mm" align="CENTER"><font size="10" color="#ffffff">.</font></td>';
	//data1 +='<td WIDTH="32mm" align="CENTER"><font size="10" color="#ffffff">.</font></td>';
	//data1 +='<td WIDTH="38mm" align="CENTER"><font size="10" color="#ffffff">.</font></td>';
	//data1 +='<td WIDTH="38mm" align="CENTER"><font size="10" color="#000000">'+($('#gab_nt').prop('checked')?'неточно':'')+'.</font></td>';
	//data1 +='<td WIDTH="44mm" align="CENTER"><font size="10" color="#ffffff">.</font></td>';
	data1 +='</tr>';
	data1 +='<tr>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Вариант вып. выводов</font></td>';
	data1 +='<td WIDTH="46mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Длина гибких выводов, м</font></td>';
	data1 +='<td WIDTH="38mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Наличие барьеров</font></td>';
	data1 +='</tr>';
	data1 +='<tr>';

	//data2 +='';
	//data2 +='</table>';
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_1').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">А '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_2').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">В '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_3').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">С '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_4').prop('checked'))){
	    data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">D '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</font></td>';
    }
	data1 +='<td WIDTH="46mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">';
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#gib_v').css('display') == 'inline-block')){
	    data1 +=(($('#gib_vv').val()!='')?$('#gib_vv').val():'0');
    }
	data1 +='.</font></td>';
	data1 +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">';
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#bar_v').css('display') == 'block') && ($('#bar_vv').prop('checked'))){
	    data1 +='ДА '+($('#bar_v_nt').prop('checked')?'неточно':'');
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#bar_v').css('display') == 'block') && (!$('#bar_vv').prop('checked'))){
	    data1 +='НЕТ '+($('#bar_v_nt').prop('checked')?'неточно':'');
    }
	data1 +='.</font></td></tr>';
	data1 +='<tr></tr>';
	ttol +='<tr></tr>';
	
	ttol +='<tr></tr>';
	ttol +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
    ttol +='<tr>';
	ttol +='<td WIDTH="52mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Номинальный первичный ток, А</font></td>';
    ttol +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Ток терм.стойкости, кА</font></td>';
    ttol +='<td WIDTH="34mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Время протекания, с</font></td>';
    ttol +='<td WIDTH="68mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Расширенный диапазон  первичного тока, %</font></td>';
	ttol +='</tr>';
    ttol +='<tr>';
	ttol +='<td WIDTH="52mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#per_t option:selected").text()+'</font></td>';
    ttol +='<td WIDTH="38mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#term_t option:selected").text()+' '+($('#term_t_nt').prop('checked')?'неточно':'')+'</font></td>';
    ttol +='<td WIDTH="34mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#vrem_prot").val()+'</font></td>';
    ttol +='<td WIDTH="68mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#ras option:selected").text()+'</font></td>';
	ttol +='</tr>';
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#perek').prop('checked'))){
	    ttol +='<tr>';
		ttol +='<td WIDTH="60mm" align="CENTER"><font size="10" color="#000000">Переключение по первичному току</font></td></tr><tr>';
	    ttol +='<td WIDTH="60mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Номинальный ток переключения, А</td>';  
		ttol +='<td WIDTH="74mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Ток термической стойкости переключения, кА</td>';
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
	ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">№ Обмотки</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">№ Отпайки</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Выводы</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Перв.ток,А</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Втор.ток,А</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Нагр.,ВА</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Кл.точн.</td><td WIDTH="35mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">Коэф.безоп./Кратн.</td></tr>';
	if (types == 1 || types == 2 || types == 3 || types == 20){
		for (a = 1; a <= obm.length; a++ ){
			//нагрузка
			//ttol1 +='<tr>';
			ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LTR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">'+$("#tdd_"+(a-1)+" p").text()+'</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vyv_"+a+"_0").val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_p_"+a+" option:selected").text()+'</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_v_"+a+" option:selected").text()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_a_"+a).val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_b_"+a+" option:selected").text()+'</td><td WIDTH="35mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_c_"+a).val()+'</td></tr>';
			ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LBR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_a_"+a+"_nt").prop("checked")?"неточно":".")+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#vtor_b_"+a+"_nt").prop("checked")?"неточно":".")+'</td><td WIDTH="35mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_c_"+a+"_nt").prop("checked")?"неточно":".")+'</td></tr>';
			
			//ttol1 +='<td>'+$("#tdd_"+(a-1)+" p").text()+'</td><td> '+$("#vyv_"+a+"_0").val()+$("#vtor_p_"+a+" option:selected").text()+'</td><td>'+$("#vtor_v_"+a+" option:selected").text()+$("#id_vtor_a_"+a).val()+'</td><td>'+$("#vtor_b_"+a+" option:selected").text()+$("#id_vtor_c_"+a).val()+'</td>';
			//ttol1 +='</tr>';
			//ttol1 +='<tr>';
			//ttol1 +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#d_vtor_a_'+a+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_nt').prop('checked')?'неточно':'             ')+'.</td>';
			//ttol1 +='</tr>';
			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//нагрузка
					//ttol1 +='<tr>';
					ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LTR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#td_"+a+"_"+b+" p").text()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vyv_"+a+"_"+b).val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_p_"+a+"_"+b+" option:selected").text()+'</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_v_"+a+"_"+b+" option:selected").text()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_a_"+a+"_"+b).val()+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#vtor_b_"+a+"_"+b+" option:selected").text()+'</td><td WIDTH="35mm" ALIGN="CENTER" BORDER="TR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#id_vtor_c_"+a+"_"+b).val()+'</td></tr>';
					//ttol1 +='<td>'+$("#td_"+a+"_"+b+" p").text()+'</td><td> '+$("#vyv_"+a+"_"+b).val()+$("#vtor_p_"+a+"_"+b+" option:selected").text()+'</td><td>'+$("#vtor_v_"+a+"_"+b+" option:selected").text()+$("#id_vtor_a_"+a+"_"+b).val()+'</td><td>'+$("#vtor_b_"+a+"_"+b+" option:selected").text()+$("#id_vtor_c_"+a+"_"+b).val()+'</td>';
					//ttol1 +='</tr>';
					//ttol1 +='<tr>';
					ttol1 +='<tr><td WIDTH="22mm" ALIGN="CENTER" BORDER="LBR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">.</font></td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="24mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">.</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_a_"+a+"_"+b+"_nt").prop("checked")?"неточно":".")+'</td><td WIDTH="22mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#vtor_b_"+a+"_"+b+"_nt").prop("checked")?"неточно":".")+'</td><td WIDTH="35mm" ALIGN="CENTER" BORDER="BR" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+($("#d_vtor_c_"+a+"_"+b+"_nt").prop("checked")?"неточно":".")+'</td></tr>';
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
	prim +='<td WIDTH="158mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Примечание</font></td>';
	prim +='<td WIDTH="32mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm"><font size="10" color="#000000">Количество</font></td>';
	prim +='</tr>';
	prim +='<tr>';
	prim +='<td WIDTH="158mm" ALIGN="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#newzakaztxt").val()+'.</td>';
	prim +='<td WIDTH="32mm" align="CENTER" BORDER="1" BORDERCOLOR="#000000" BORDERWIDTH="0.1mm">'+$("#count").val()+'</td>';
	prim +='</tr>';
	prim += '<tr><td> </td><td> </td></tr>';
	prim +='</table>';
	
	data2 += '<table>';
	data2 += '<tr><td>______________________</td><td> <?php echo $first_name.' '.$last_name ; ?> </td></tr>';
	data2 += '<tr><td>       подпись        </td><td> </td></tr>';
	data2 += '<tr><td> </td><td> </td></tr>';
	data2 += '<tr><td>Дата печати '+now.getDate()+'.'+((mon.length==1)?('0'+mon):mon)+'.'+now.getFullYear()+'</td><td> </td></tr>';
	data2 += '</table>';

	if (types == 1 || types == 2 || types == 3 || types == 20){
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
-----------------------------
*/
	//var onedata = new Array();alert(1);

	//onedata[0] = data;
	//onedata[1] = prim;
	//onedata[2] = data2;
	
	//if (srt == -1){
	//	configdata[$('#newzakaz').text()] = onedata;
	//}
	//if (srt >= 0){
	//	configdata[$('#srt'+srt).text()] = onedata;
	//}
	
	//data = encodeURIComponent(data + prim + data2);
	//datanew = encodeURIComponent(data1 + prim + data2);
	datanew = encodeURIComponent(data1 + data3 + prim + data2);		
	
	var form2 = document.createElement("form");
    var element2 = document.createElement("textarea"); 
//    var element2 = document.createElement("input");  

    form2.method = "POST";
    form2.action = "/wp-content/themes/semicolon/crtpdf.php";   
    form2.target = "_blank";  
	form2.style.display = "none";

    element2.value = datanew;
    element2.name = "data";
    form2.appendChild(element2);  

//    element2.value=pw;
//    element2.name="pw";
//    form.appendChild(element2);

    document.body.appendChild(form2);
	
    form2.submit();
	
<?php		 
	}
?>		
		
//}
/*
	$.ajax({
      	type: "POST",
      	url: "/wp-content/themes/semicolon/crtpdf.php",
      	data: "data="+encodeURIComponent($('#config').html())+"",
      	success: function(datapdf){

		}
	});	
*/	
}

function getdata(types, srt){
	data = '';
	prim = '';
	data2 = '';
	data +='<table>';
	data +='<tr><td><font size="7"><b>'+sp100.substr(0, 100)+'ОПРОСНЫЙ ЛИСТ'+sp100.substr(0, 50)+'</b></font></td><td></td></tr><tr><td>_____________________________________________________________________________________________________________</td><td></td></tr>';
	data +='<tr><td width="100mm" border="R"><b>Общие характеристики</b></td><td> </td></tr>';
	data +='<tr><td align="right">Организация-заказчик</td><td width="550px">'+$("#org").val()+'</td></tr>';
	data +='<tr><td align="right">ИНН</td><td>'+$("#inn").val()+'</td><td></td></tr>';
	data +='<tr><td align="right">Объект</td><td>'+$("#objectt").val()+'</td></tr>';
	data +='<tr><td align="right">Тип</td><td>'+$("#tip option:selected").text()+'</td></tr>';
	prim +='<tr><td align="right">Количество</td><td>'+$("#count").val()+'</td></tr>';
	prim +='<tr><td align="right">Примечание</td><td>'+$("#newzakaztxt").val()+'</td></tr>';
	data2 +='</table>';

    ttol = '<table>';
    ttol +='<tr><td>Класс напряжения, кВ</td><td>'+$("#napr option:selected").text()+'</td></tr>';
	ttol +='<tr><td>Исполнение</td><td>'+$("#gab option:selected").text()+' '+($('#gab_nt').prop('checked')?'неточно':'')+'</td></tr>';
	ttol +='<tr><td>Климатическое <br />исполнение</td><td>'+$("#klim_kat option:selected").text()+'</td></tr>';
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_1').prop('checked'))){
	    ttol +='<tr><td>Вариант выполнения <br />выводов</td><td>А '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_2').prop('checked'))){
	    ttol +='<tr><td>Вариант выполнения <br />выводов</td><td>В '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_3').prop('checked'))){
	    ttol +='<tr><td>Вариант выполнения <br />выводов</td><td>С '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#var_v_v').css('display') == 'inline-block') && ($('#sec_term_id_sec_term_4').prop('checked'))){
	    ttol +='<tr><td>Вариант выполнения <br />выводов</td><td>D '+($('#var_v_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#gib_v').css('display') == 'inline-block')){
	    ttol +='<tr><td>Длина гибких <br />выводов, м </td><td>'+(($('#gib_vv').val()!='')?$('#gib_vv').val():'0')+'</td></tr>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#bar_v').css('display') == 'block') && ($('#bar_vv').prop('checked'))){
	    ttol +='<tr><td>Наличие <br />барьеров </td><td>ДА '+($('#bar_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#bar_v').css('display') == 'block') && (!$('#bar_vv').prop('checked'))){
	    ttol +='<tr><td>Наличие <br />барьеров </td><td>НЕТ '+($('#bar_v_nt').prop('checked')?'неточно':'')+'</td></tr>';
    }
	ttol +='<tr><td> </td><td> </td></tr>';
	ttol +='<tr><td><b>Первичная обмотка</b></td><td> </td></tr>';
    ttol +='<tr><td>Номинальный<br />первичный ток, А</td><td>'+$("#per_t option:selected").text()+'</td></tr>';
    ttol +='<tr><td>Ток <br />терм.стойкости, кА</td><td>'+$("#term_t option:selected").text()+' '+($('#term_t_nt').prop('checked')?'неточно':'')+'</td></tr>';
    ttol +='<tr><td>Время протекания, с</td><td>'+$("#vrem_prot").val()+'</td></tr>';
    ttol +='<tr><td>Расширенный диапазон <br />первичного тока, %</td><td>'+$("#ras option:selected").text()+'</td></tr>';
	if ((types == 1 || types == 2 || types == 3 || types == 20) && ($('#perek').prop('checked'))){
	    ttol +='<tr><td>Переключение <br />по первичному току</td><td> </td></tr>';
	    ttol +='<tr><td>Номинальный ток <br />переключения, А </td><td>'+$('#tokperek').val()+'</td></tr>';  
		ttol +='<tr><td>Ток термической <br />стойкости <br />переключения, кА</td><td>'+$("#per_term option:selected").text()+'</td></tr>';
    }
	ttol +='<tr><td> </td><td> </td></tr>';
	ttol +='</table>';
	
	ttol1 = '<table>'; 
	ttol1 +='<tr><td><b>'+$("#countvyv").text()+'</b></td><td> </td><td> </td><td> </td></tr>';
	ttol1 +='<tr><td>№ Обмотки | № Отпайки |</td><td> Выводы | Перв.ток,А |</td><td> Втор.ток,А |  Нагр.,ВА  |</td><td> Кл.точн. | Коэф.безоп./Кратн.</td></tr>';
	if (types == 1 || types == 2 || types == 3 || types == 20){
		for (a = 1; a <= obm.length; a++ ){
			//нагрузка
			ttol1 +='<tr>';
			ttol1 +='<td>'+sp100.substr(0, 8)+$("#tdd_"+(a-1)+" p").text()+sp100.substr(0, 25)+'</td><td> '+$("#vyv_"+a+"_0").val()+sp100.substr(0, 8)+$("#vtor_p_"+a+" option:selected").text()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#vtor_v_"+a+" option:selected").text()+sp100.substr(0, 22)+$("#id_vtor_a_"+a).val()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#vtor_b_"+a+" option:selected").text()+sp100.substr(0, 17)+$("#id_vtor_c_"+a).val()+'</td>';
			ttol1 +='</tr>';
			ttol1 +='<tr>';
			ttol1 +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#d_vtor_a_'+a+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_nt').prop('checked')?'неточно':'             ')+'.</td>';
			ttol1 +='</tr>';
			if (obm[a-1] > 0) {
			    for (b = 1; b <= obm[a-1]; b++){
					//нагрузка
					ttol1 +='<tr>';
					ttol1 +='<td>'+sp100.substr(0, 25)+$("#td_"+a+"_"+b+" p").text()+sp100.substr(0, 8)+'</td><td> '+$("#vyv_"+a+"_"+b).val()+sp100.substr(0, 8)+$("#vtor_p_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#vtor_v_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 22)+$("#id_vtor_a_"+a+"_"+b).val()+sp100.substr(0, 8)+'</td><td>'+sp100.substr(0, 8)+$("#vtor_b_"+a+"_"+b+" option:selected").text()+sp100.substr(0, 17)+$("#id_vtor_c_"+a+"_"+b).val()+'</td>';
					ttol1 +='</tr>';
					ttol1 +='<tr>';
					ttol1 +='<td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 34)+'.</td><td>'+sp100.substr(0, 22)+($('#d_vtor_a_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+' .</td><td> '+($('#vtor_b_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+'   '+($('#d_vtor_c_'+a+'_'+b+'_nt').prop('checked')?'неточно':'             ')+' </td>';
					ttol1 +='</tr>';
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
	conf += '<tr><td> </td><td> </td></tr>';
	conf += '<tr><td>______________________</td><td> <?php echo $first_name.' '.$last_name ; ?> </td></tr>';
	conf += '<tr><td>       подпись        </td><td> </td></tr>';
	conf += '<tr><td> </td><td> </td></tr>';
	conf += '<tr><td>Дата печати '+now.getDate()+'.'+((mon.length==1)?('0'+mon):mon)+'.'+now.getFullYear()+'</td><td> </td></tr>';
	conf += '</table>';

	if (types == 1 || types == 2 || types == 3 || types == 20){
		data2 += ttol + ttol1 + conf;
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

	var onedata = new Array();
	onedata[0] = data;
	onedata[1] = prim;
	onedata[2] = data2;
	
	if (srt == -1){
		configdata[$('#newzakaz').text()] = onedata;
	}
	if (srt >= 0){
		configdata[$('#srt'+srt).text()] = onedata;
	}
	data = encodeURIComponent(data + prim + data2);
	
}

function putdata(idc){
	namec = $("#srt-"+idc).text();
	data = configdata[namec][0];
	prim = '';
	////prim +='<tr><td align="right">Количество</td><td>'+$("#count-"+idc).val()+'</td>';
	////prim +='<td align="right">Примечание</td><td>'+$("#prim-"+idc).val()+'</td></tr>';
	prim +='<tr><td align="right">Количество</td><td>'+$("#count-"+idc).val()+'</td></tr>';
	prim +='<tr><td align="right">Примечание</td><td>'+$("#prim-"+idc).val()+'</td></tr>';
	data2 = configdata[namec][2];
	data = encodeURIComponent(data + prim + data2); 
}