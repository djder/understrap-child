$ = window.jQuery;
confUrl = "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/";
templateUrl = confUrl;
ajaxUrl = confUrl;
ajaxSearchUrl = ajaxUrl + "search.php";
jsUrl = confUrl + "js/";

product = {
	caption: '',
	complInfo: [],
	reset() {
		this.caption = '';
		complInfo = [];
	},
	getFullCaption() {
		complCaption = '';

		complInfo.forEach(function (item, index) {
			complCaption += ' (' + item + ')';
			}
		);

		return this.caption + complCaption;
	},
	// Получение значения параметра из элемента
	getParamValue(id) {
		if (id == null || id == '')  { return };

		element = $('#' + id);
		
		if (element == null) { return };

		// определение типа элемента
		switch( element.prop('nodeName') ) {
			case 'SELECT':
				value = element.prop('selectedIndex') > 0 ? $('#' + id + ' option:selected').text() : '';
				break;
			case 'DIV':	
				value = $('#' + id + ' input:checked').text();
				break;
			case 'INPUT':	
				value = $('#' + id).text();
				break;
			default: value = '';
		}
		return value;
	},
	// Добавление строки в наименование
	addStr(value, before = '', after = '') {
		if (value == null || value == '')  { return };

		this.caption += before + value + after;
	},
	// Добавление строки в дополнительное обозначение
	addInfoStr(value, before = '', after = '') {
		if (value == null || value == '')  { return };

		this.complInfo.push(before + value + after);
	},

	// Добавление параметра выбранного элемента в наименование
	addParam(id, before = '', after = '') {
		if ( id == null || id == '' )  { return };

		this.addStr( this.getParamValue(id), before, after );
	},

	// Добавление параметра выбранного элемента в дополнительное обозначение
	addInfoParam(id, before = '', after = '') {
		if (id == null || id == '')  { return };

		this.addInfoStr( this.getParamValue(id), before, after);
	}
}

$(function() {
	// Установка параметров ajax запросов по умолчанию
	$.ajaxSetup({
		async: false,
		dataType: "html"
	});

	product.resetCaption;
});

// Обработка изменения значения типа трансформатора
//
$('#tip').change(function() {
	tiptabl = this.options[this.selectedIndex].text;
	tipn = this.options[this.selectedIndex].value;

	if (tiptabl == 'ТОЛ' || tiptabl == 'ТПЛ' || tiptabl == 'ТШЛ' || tiptabl == 'ТШП') {
		//ses = (sesid)?("?sesid='"+sesid+"'"):"";  
		ses = "";
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/tol.php" + ses,
			data: "tabl=" + tipn,
			dataType: "html",
			async: false,
			success: function(datatol) {
				$("#tabl").html("");
				$("#tabl").html(datatol);
			}
		});

		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/js/tol.js",
			dataType: "script",
			async: false,
			cache: false
		});
	}

	if (tiptabl == 'НАЛИ' || tiptabl == 'ЗНОЛ' || tiptabl == 'ЗНОЛП' || tiptabl == 'НОЛ' || tiptabl == 'НОЛП') {
		ses = (sesid) ? ("?sesid='" + sesid + "'") : "";
		$.ajax({
			type: "POST",
			rl: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/nali.php" + ses,
			data: "tabl=" + tipn,
			dataType: "html",
			async: false,
			success: function(datanal) {
				$("#tabl").html("");
				$("#tabl").html(datanal);
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/js/nali.js",
			dataType: "script",
			async: false,
			cache: false
		});
	}

	if (tiptabl == 'ЗНТОЛП' || tiptabl == 'НТОЛП') {
		ses = (sesid) ? ("?sesid='" + sesid + "'") : "";
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/ntol.php" + ses,
			data: "tabl=" + tipn,
			dataType: "html",
			async: false,
			success: function(datantl) {
				$("#tabl").html("");
				$("#tabl").html(datantl);
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/UnderStrap-ntzv-1/conf/js/ntol.js",
			dataType: "script",
			async: false,
			cache: false
		});
	}

	if (tiptabl == 'ТЗЛК' || tiptabl == 'ТЗЛКР') {
		ses = (sesid) ? ("?sesid='" + sesid + "'") : "";
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/semicolon/conf/tzlk.php" + ses,
			data: "tabl=" + tipn,
			dataType: "html",
			async: false,
			success: function(datatzl) {
				$("#tabl").html("");
				$("#tabl").html(datatzl);
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/semicolon/conf/js/tzlk.js",
			dataType: "script",
			async: false,
			cache: false
		});
	}

	if (tiptabl == 'ОЛ' || tiptabl == 'ОЛС' || tiptabl == 'ОЛСП') {
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/semicolon/conf/ols.php",
			data: "tabl=" + tipn,
			dataType: "html",
			async: false,
			success: function(datatml) {
				$("#tabl").html("");
				$("#tabl").html(datatml);
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/semicolon/conf/js/ols.js",
			dataType: "script",
			async: false,
			cache: false
		});
	}

	if (tiptabl == '3хЗНОЛ' || tiptabl == '3хЗНОЛП') {
		ses = (sesid) ? ("?sesid='" + sesid + "'") : "";
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/semicolon/conf/txzn.php" + ses,
			data: "tabl=" + tipn,
			dataType: "html",
			async: false,
			success: function(datatml) {
				$("#tabl").html("");
				$("#tabl").html(datatml);
			}
		});
		$.ajax({
			type: "POST",
			url: "/intzv/wp-content/themes/semicolon/conf/js/txzn.js",
			dataType: "script",
			async: false,
			cache: false
		});
	}


	return false;
});

$('#nav').html('');