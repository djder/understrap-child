$ = window.jQuery;

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
