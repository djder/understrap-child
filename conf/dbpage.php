<div id="myform">
<table>
	<tr>
		<td>
Выберите производителя:<br/>
<select id="zavod2" class="inputbox1">
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
<select id="typ2" class="inputbox1">

</select>

		</td>
	</tr>
</table>
</div>
<div id="dbcontent2" style="min-height:300px; min-width:100%;">
	&nbsp;
</div>
<script language="javascript" type="text/javascript">
var zavod2 = '';
var typ2 = '';
	
$ = window.jQuery;	
$(document).ready(function(){
  $('#zavod2').change(function(){	
	zavod2 = this.options[this.selectedIndex].value; 
	  //alert(zavod);
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2sel.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=analogs&column0=id&column1=oboznach&case=dopolneq"+zavod2,
      success: function(data){
        $("#typ2").html(data);
      }
    });
  return false;
  });

  $('#typ2').change(function(){	
	typ2 = this.options[this.selectedIndex].text; 
	//alert(typ);  
	tabheader = '<table><tr><th>Завод</th><th>Обозначение</th><th>Наш аналог</th><th>Вариант</th><th>Характеристики</th><th>Габариты</th><th>Масса</th></tr>'; 
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/semicolon/res2tab.php",
      //data: "table="+ encodeURIComponent("analogs") + '&column0='+ encodeURIComponent("*") + '&case='+ encodeURIComponent("zavodeq'СЭЩ'"),
      data: "table=analogs&column0=zavod&column1=oboznach,analog,variant,harakter,gabarit,massa&case=oboznacheq'"+typ2+"'",
      success: function(data){
        $("#dbcontent2").html(tabheader+data+'</table>');
      }
    });
  return false;
  });	
	
});

/*	
function loadText(url){
  var txt;
  if (window.XMLHttpRequest) {xhttp=new XMLHttpRequest();}
  else {xhttp=new ActiveXObject("Microsoft.XMLHTTP");}
  xhttp.open("GET",url,true);
  xhttp.setRequestHeader("Content-Type", "text/html");
  xhttp.onreadystatechange = function() {
	alert(xhttp.status)  
    if (xhttp.readyState == 4) { 
	  if (xhttp.status == 200) {
	    txt = xhttp.responseText; 
		return txt;
	  }
	}
  }
  xhttp.send(null);
  return xhttp.statusText;
}
loadText("/wp-content/themes/semicolon/res2tab.php?table=zavod");
*/
</script>

<div id="sidebar">
<?
           global $post;
           $custom  = get_post_custom($post->ID);
           $link    = $custom["_sidebar"][0];
        if($link != ''){
            echo '<ul id="widgets">';
                if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar($link) ) :
                endif;
            echo '</ul>';
        }
?>
</div>