<?php
include("dbconfig.php");

global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';
	
if (isset($_REQUEST['table']) && $_REQUEST['table'] != ""){
	$connection = mysql_connect(DBSERV, DBUSER, DBPASS);
    if (!$connection) { 
      echo "Ошибка подключения к базе данных. Код ошибки: ".mysqli_connect_error(); 
      exit; 
    } 

    mysql_select_db(DBNAME) or die(mysql_error());  

    $query = "SET names UTF8";
    $result = mysql_query($query) or die(mysql_error());
	
	$query = "show tables";
	$result = mysql_query($query, $connection) or die(mysql_error());
    
	$table = "";
	for ($x = 0; $x < mysql_num_rows($result); $x++){
		if ($_REQUEST['table'] == mysql_result($result, $x, 0))
			$table = mysql_result($result, $x, 0);
	}
	if ($table != ""){
		
		$name = "";
		$objectt = "";
		$manager = "";
		$address = "";
		$mail = "";
		$phone = "";
		$prim = "";

		$case = "1 = 1";
		
	  if (isset($_REQUEST['case']) && $_REQUEST['case'] != ""){
		  $case = $_REQUEST['case'];
		  $case = str_replace("exit", "", $case);
		  $case = str_replace("quit", "", $case);
		  $case = str_replace(";", "", $case);
		  $case = str_replace("drop", "", $case);
		  $case = str_replace("delete", "", $case);
		  $case = str_replace("alter", "", $case);
		  $case = str_replace("_lteq_", "<=", $case);
		  $case = str_replace("_gteq_", ">=", $case);
		  $case = str_replace("_eq_", "=", $case);
		  $case = str_replace("_lt_", "<", $case);
		  $case = str_replace("_gt_", ">", $case);
		  $case = str_replace("_and_", " AND ", $case);
		  $case = str_replace("_or_", " OR ", $case);
		  $case = str_replace("_not_", " NOT ", $case);
	  }	  

	if (isset($_REQUEST["manager"]) && $_REQUEST["manager"] != ""){
	  $manager = $_REQUEST["manager"];
	  $manager = str_replace("exit", "", $manager);
	  $manager = str_replace("quit", "", $manager);
	  $manager = str_replace(";", "", $manager);
	  $manager = str_replace("drop", "", $manager);
	  $manager = str_replace("delete", "", $manager);
	  $manager = str_replace("alter", "", $manager);
	  $manager = str_replace("_eq_", "=", $manager);
	  $manager = str_replace("__", " ", $manager);
	  $manager = 'manager='.$manager.',';
	}

/*	if (isset($_REQUEST["objectt"]) && $_REQUEST["objectt"] != ""){
	  $objectt = $_REQUEST["objectt"];
	  $objectt = str_replace("exit", "", $objectt);
	  $objectt = str_replace("quit", "", $objectt);
	  $objectt = str_replace(";", "", $objectt);
	  $objectt = str_replace("drop", "", $objectt);
	  $objectt = str_replace("delete", "", $objectt);
	  $objectt = str_replace("alter", "", $objectt);
	  $objectt = str_replace("_eq_", "=", $objectt);
	  $objectt = str_replace("__", " ", $objectt);
	  $objectt = 'object='.$objectt.',';
	}
*/
	if (isset($_REQUEST["address"]) && $_REQUEST["address"] != ""){
	  $address = $_REQUEST["address"];
	  $address = str_replace("exit", "", $address);
	  $address = str_replace("quit", "", $address);
	  $address = str_replace(";", "", $address);
	  $address = str_replace("drop", "", $address);
	  $address = str_replace("delete", "", $address);
	  $address = str_replace("alter", "", $address);
	  $address = str_replace("_eq_", "=", $address);
	  $address = str_replace("__", " ", $address);
	  $address = 'address='.$address.',';
	}
	if (isset($_REQUEST["mail"]) && $_REQUEST["mail"] != ""){
	  $mail = $_REQUEST["mail"];
	  $mail = str_replace("exit", "", $mail);
	  $mail = str_replace("quit", "", $mail);
	  $mail = str_replace(";", "", $mail);
	  $mail = str_replace("drop", "", $mail);
	  $mail = str_replace("delete", "", $mail);
	  $mail = str_replace("alter", "", $mail);
	  $mail = str_replace("_eq_", "=", $mail);
	  $mail = str_replace("__", " ", $mail);
	  $mail = 'mail='.$mail.',';
	}
	if (isset($_REQUEST["phone"]) && $_REQUEST["phone"] != ""){
	  $phone = $_REQUEST["phone"];
	  $phone = str_replace("exit", "", $phone);
	  $phone = str_replace("quit", "", $phone);
	  $phone = str_replace(";", "", $phone);
	  $phone = str_replace("drop", "", $phone);
	  $phone = str_replace("delete", "", $phone);
	  $phone = str_replace("alter", "", $phone);
	  $phone = str_replace("_eq_", "=", $phone);
	  $phone = str_replace("__", " ", $phone);
	  $phone = 'phone='.$phone.',';
	}
	if (isset($_REQUEST["inn"]) && $_REQUEST["inn"] != ""){
	  $inn = $_REQUEST["inn"];
	  $inn = str_replace("exit", "", $inn);
	  $inn = str_replace("quit", "", $inn);
	  $inn = str_replace(";", "", $inn);
	  $inn = str_replace("drop", "", $inn);
	  $inn = str_replace("delete", "", $inn);
	  $inn = str_replace("alter", "", $inn);
	  $inn = str_replace("_eq_", "=", $inn);
	  $inn = str_replace("__", " ", $inn);
	  $inn = 'inn='.$inn.',';
	}

//	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != ""){
//	  	$number = 'number='.$_REQUEST["number"].',';
//	}

	if (isset($_REQUEST["sesid"]) && $_REQUEST["sesid"] != ""){
		$sesid = 'session_id='.$_REQUEST["sesid"].',';
	}	  
	if (isset($_REQUEST["mail"]) && $_REQUEST["mail"] != ""){
	  	$mail = 'mail='.$_REQUEST["mail"].',';
	}

		$man_name = "";
	if (isset($_REQUEST["man_name"]) && $_REQUEST["man_name"] != ""){
	  	$man_name = str_replace("'","",$_REQUEST["man_name"]);
	}

		$man_email = "";
	if (isset($_REQUEST["man_email"]) && $_REQUEST["man_email"] != ""){
	  	$man_email = str_replace("'", "", $_REQUEST["man_email"]);
	}

	if (isset($_REQUEST["org"]) && $_REQUEST["org"] != ""){
	  $org = $_REQUEST["org"];
	  $org = str_replace("exit", "", $org);
	  $org = str_replace("quit", "", $org);
	  $org = str_replace(";", "", $org);
	  $org = str_replace("drop", "", $org);
	  $org = str_replace("delete", "", $org);
	  $org = str_replace("alter", "", $org);
	  $org = str_replace("_eq_", "=", $org);
	  $org = str_replace("__", " ", $org);
	  $org = 'org='.$org;
	}

	setcookie("session_id", htmlspecialchars($_REQUEST["sesid"]), time()+60*60*24*1100, "/", "ntz-volhov.r-host.ru", 1);

	$query = "SELECT max(id)+1 FROM vsezakaz"; 
	
	$result = mysql_query($query, $connection) or die(mysql_error());
		
	$last = mysql_result($result, 0, 0);
		

	$query = "SELECT CONCAT('V', LPAD(MONTH(CURDATE()), 2, '0') , RIGHT(YEAR(CURDATE()), 2), LPAD(CONCAT($last),6,'0'))";

	$result = mysql_query($query, $connection) or die(mysql_error());
		
	$number = mysql_result($result, 0, 0);
		
	$query = "INSERT INTO vsezakaz VALUES (NULL, '$number', 'Заказ отправлен', CURDATE(), CURDATE(), 1, 0)";

	//echo '<h3>'.$query.'</h3>';
	$result = mysql_query($query, $connection) or die(mysql_error());
		

	$number = "number='".$number."',";
		
	$query = "UPDATE $table SET $manager $objectt $address $mail $phone $sesid $number $inn $org WHERE $case";
		
	//echo '<h3>'.$query.'</h3>';
	
	$result = mysql_query($query, $connection) or die(mysql_error());
		
//	$query = "SELECT t1.name,t1.count,t1.prim,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.manager,t1.object,t1.address,t1.mail,t1.phone,t1.inn t3.naimen FROM $table t1 LEFT JOIN status_prep t2 ON t1.status = t2.id LEFT JOIN nomenklatura t3 ON t1.name = t3.naimenovanie WHERE $case";			  

	$query = "SELECT t1.name,t1.count,t1.prim,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.manager,t1.object,t1.address,t1.mail,t1.phone,t1.inn, t3.naimen,t1.org,t1.number,t1.date_in,t1.id FROM $table t1 LEFT JOIN status_prep t2 ON t1.status = t2.id LEFT JOIN nomenklatura t3 ON t1.nomenid = t3.id WHERE $case";			  
	//echo $query;

	$result = mysql_query($query, $connection) or die(mysql_error());

		//$rov = mysql_fetch_array($result, MYSQL_NUM);
		$n = 0;
	  	$colors = array('red', 'orange', 'yellow', 'orange', 'orange', 'yellow', 'yellow', 'olive', 'olive', 'green', 'green', 'darkgreen');

		$text = '<table style="border-collapse:collapse;border:1px solid gray;" border="1px">';
		$text .= '<tr><td style="text-align:right;">Заказ:</td><td colspan="3">'.mysql_result($result, $n, 18).'</td><td style="text-align:right;">Дата:</td><td colspan="3">'.mysql_result($result, $n, 19).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Заказчик:</td><td colspan="7">'.mysql_result($result, $n, 17).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">ИНН:</td><td colspan="7">'.mysql_result($result, $n, 15).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Адрес:</td><td colspan="7">'.mysql_result($result, $n, 12).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Ф.И.О сотрудника:</td><td colspan="7">'.mysql_result($result, $n, 10).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">E-mail сотрудника:</td><td colspan="7">'.mysql_result($result, $n, 13).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Тел.:</td><td colspan="7">'.mysql_result($result, $n, 14).'</td></tr>';
		if ($man_name != '') {$text .= '<tr><td style="background:lightgray;text-align:right;">Ведущий менеджер:</td><td colspan="7">'.$man_name.'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">E-mail менеджера:</td><td colspan="7">'.$man_email.'</td></tr>';					 }
		$text .= '<tr><td style="background:lightgray;text-align:center;">Объект</td><td style="background:lightgray;text-align:center;">Заказываемая конфигурация</td><td style="background:lightgray;text-align:center;">Кол-во</td><td style="background:lightgray;text-align:center;">Комментарий</td><td style="background:lightgray;text-align:center;">Статус заказа</td><td style="background:lightgray;text-align:center;">Наличие в справочнике</td><td style="background:lightgray;text-align:center;">Тип запроса</td><td style="background:lightgray;text-align:center;">Опросный лист в pdf</td></tr>';

	for ($n = 0; $n < mysql_num_rows($result); $n++){
			
        $text .= '<tr>';
		$selab = '';
		$col = $colors[mysql_result($result, $n, 4)-1];
		//$selab = (mysql_result($result, $n, 5) == 1)?'checked disabled':' disabled';
		//$selab .= ($row[4] == 1)?' disabled':'';
		$selab = (mysql_result($result, $n, 4) == 12)?' disabled':$selab;
		$selab = (mysql_result($result, $n, 5) == 1)?'Возможность':'';
		//$seltm = (mysql_result($result, $n, 6) == 1)?'checked disabled':' disabled';  
		$seltm = (mysql_result($result, $n, 6) == 1)?'Сроки':'';  
		//$selct = (mysql_result($result, $n, 7) == 1)?'checked disabled':' disabled';
		$selct = (mysql_result($result, $n, 7) == 1)?'Стоимость':'';

		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 11)).'</td>';
		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 0)).'</td>';
		$text .= '<td>'.mysql_result($result, $n, 1).'</td>';
		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 2)).'</td>';
		$text .= '<td><p style="color:'.$col.'">'.mysql_result($result, $n, 3).'</p></td>';
		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 16)).'</td>';
		$text .= '<td class="tdsmaltxt"><p class="check">'.$selab.'<p class="check">'.$seltm.'<p class="check">'.$selct.'</td>';
		$text .= '<td><b><a href="https://intzv.ru/crtpdf/?table=proba&case=id_eq_'.mysql_result($result, $n, 20).'">Открыть</a></b> ';
		$text .= 'Продублировано: <b><a href="https://intzv.ru/crtpdf/?table=proba&case=id_eq_'.mysql_result($result, $n, 20).'">Открыть</a></b></td>';
        $text .='</tr>';
	}

      $text .= '</table>';
	  $text .= '<br />';
	  $text .= '<a href="https://intzv.ru">Невский трансформаторный завод "Волхов"</a>';
	  //$text = urlencode($text);
	}
mysql_close($connection);	 
	
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: <ntz-volhov@intzv.ru>\r\n"; 

//echo $text;
if ($man_email != '') { $man_email.=', ';}
	
if (mail($man_email.'svcsvc@gmail.com, vav@ntzv.ru', 'Заказ', $text, $headers)){
//if (mail('svcsvc@gmail.com', 'Заказ', $text, $headers)){
	echo $man_email.'success';
}
else{
		echo 'problem with send mail';
}
	
}	
	




?>