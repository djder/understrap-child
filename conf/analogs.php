<div id="myform">
<table style="max-width:100%;">
	<tr>
		<td>
Выберите производителя:<br/>
<select id="zavod" class="inputbox1">
<option value="">...</option>	
<?php
$_REQUEST['table']='zavod';
$_REQUEST['column0']='id';
$_REQUEST['column1']='name';
	
include("res2sel.php");
?>
</select>
		</td>
		<td>
Выберите типоисполнение:<br/>
<select id="typ" class="inputbox2">

</select>

		</td>
	</tr>
</table>
</div>
<div id="dbcontent" style="min-height:300px; min-width:100%;">
	&nbsp;
</div>
<script language="javascript" type="text/javascript">
var zavod = '';
var typ = '';
	
$ = window.jQuery;	
$(document).ready(function(){
  $('#zavod').change(function(){	
	zavod = this.options[this.selectedIndex].value; 
	seldata = '<option value="">...</option>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=analogs&column0=id&column1=oboznach&case=dopoln_eq_"+zavod,
      success: function(data){
        $("#typ").html(seldata+data);
      }
    });
  return false;
  });

  $('#typ').change(function(){	
	typ = this.options[this.selectedIndex].text; 
	tabheader = '<table style="max-width:100%;"><tr><th>Производитель</th><th>Обозначение</th><th>Наш аналог</th><th>Вариант</th><th>Характеристики</th><th>Габариты</th><th>Примечание</th></tr>';
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2taba.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=analogs&column0=zavod&column1=oboznach,analog,variant,harakter,gabarit,massa&case=oboznach_eq_'"+typ+"'",
      success: function(htmldata){
		  //alert("table=analogs&column0=zavod&column1=oboznach,analog,variant,harakter,gabarit,massa&case=oboznach_eq_'"+typ+"'");
        $("#dbcontent").html(tabheader+htmldata+'</table>');
      }
    });
  return false;
  });	
	
});

</script>