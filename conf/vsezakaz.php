<?php
include("dbconfig.php");

global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';
$organ = ($current_user->org_name)?$current_user->org_name:'';
$innal = ($current_user->inn_name)?$current_user->inn_name:'';
$facen = ($current_user->first_name)?($current_user->first_name):'';
$facen .= ($current_user->last_name)?(' '.$current_user->last_name):'';
$phone = ($current_user->phone_name)?$current_user->phone_name:'';
$postn = ($current_user->post_name)?$current_user->post_name:'';

if ($login == 'ntz-volhov') $innal = '1111111111';
	
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

	if (isset($_REQUEST["objectt"]) && $_REQUEST["objectt"] != ""){
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

	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != ""){
	  	$number = 'number='.$_REQUEST["number"].',';
	}

	if (isset($_REQUEST["mail"]) && $_REQUEST["mail"] != ""){
	  	$mail = 'mail='.$_REQUEST["mail"].',';
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
	  //$org = 'org='.$org;
	}
	else{
		$org = $organ;
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
	  //$inn = $innal;
	}
	else{
		$inn = $innal;
	}		
?>
Ваша организация:<input type="text" value="<?php echo $org;?>" id="org0" />
Ваш ИНН:<input type="text" value="<?php echo $inn;?>" id="inn0" />
<div onclick="vse();" class="tdbuttonor" style="width:170px;height:50px;font-size:18px;display:none;">Передать</div>
<br>
<?php



//текущая сессия session_id передан в запросе
	if (isset($_REQUEST["sesid"]) && ($_REQUEST["sesid"] != "")){

		$sesid = 'session_id='.$_REQUEST["sesid"];

		$query = "SELECT inn FROM proba WHERE $sesid LIMIT 1";
		
		$result = mysql_query($query, $connection) or die(mysql_error());

		echo 'Найден ИНН по Вашим данным<br />';

		if (mysql_num_rows($result) > 0){

		  $_inn = mysql_result($result,0); $_inn = "'$_inn'";
		
		  if ($inn == $_inn){
			$text = zapoln($connection, $_inn, $table);
		  }

	  }
		else{
			$text = 'По Вашим регистрационным данным ничего не нашлось';
		}
		
	}
	else{
		
//новая сессия session_id передан в cookies
	  if ( isset($_COOKIE["session_id"]) && ($_COOKIE["session_id"] !="") || true){
			
		$sesid = $_COOKIE["session_id"];
		$sesid = str_replace("\'", "'", $sesid);
		  
		//$query = "SELECT inn FROM proba WHERE session_id = $sesid LIMIT 1";

		//$result = mysql_query($query, $connection) or die(mysql_error()); 
		  
		//echo 'Найден ИНН по Вашим данным<br />';

		//if (mysql_num_rows($result) > 0){
			
		  //$_inn = mysql_result($result, 0); $_inn = "'$_inn'"; $_inn = "'$innal'";
		
		  //if ($inn == $_inn){
			$text = zapoln($connection, $inn, $table);
		  //}
		//}  
		//else{
		//	$text = 'По Вашим регистрационным данным ничего не нашлось';
		//}
		
	  }
	}
		
	}

mysql_close($connection);	 
	
echo $text;
	
}

function zapoln($connection, $_inn, $table){
	
			$query = "SELECT t1.number, count(t1.number), t2.prim FROM proba t1 LEFT JOIN vsezakaz t2 ON t1.number = t2.number WHERE t1.inn = $_inn AND t2.prim IS NOT NULL GROUP BY 1";

			$result0 = mysql_query($query, $connection) or die(mysql_error());
			
			echo 'Найдено Заказов: '.mysql_num_rows($result0).' по Вашему ИНН<br />&nbsp;<br />';
			  
	  	    $colors = array('red', 'orange', 'yellow', 'orange', 'orange', 'yellow', 'yellow', 'olive', 'olive', 'green', 'green', 'darkgreen');
			  
			$text = '';
			$text .= '<ul style="list-style-type:none;max-width:100%;">';

			for ($m = 0; $m < mysql_num_rows($result0); $m++){
			
			  $num = mysql_result($result0, $m, 0);
				
				
			  $stat = mysql_result($result0, $m, 2);
				
			  $stat = ($stat == '')?'Статус неизвестен':$stat;
				
		      $query = "SELECT t1.name,t1.count,t1.prim,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.manager,t1.object,t1.address,t1.mail,t1.phone,t1.inn, t3.naimen, t1.org, t1.number, t1.date_in,t1.id FROM proba t1 LEFT JOIN status_prep t2 ON t1.status = t2.id LEFT JOIN nomenklatura t3 ON t1.nomenid = t3.id WHERE inn = $_inn AND number='$num'";			  
	

		      $result = mysql_query($query, $connection) or die(mysql_error());

		      //$rov = mysql_fetch_array($result, MYSQL_NUM);
		      $n = 0;
			  $num = ($num == '')?'Номер не присвоен':$num;

			  $text .= '<li style="max-width:100%;"><input id="zap'.$m.'" type="checkbox" style="display:none;" onchange="(this.checked)?$(\'#tap'.$m.'\').css(\'display\', \'block\'):$(\'#tap'.$m.'\').css(\'display\', \'none\');" /><label for="zap'.$m.'">Заказ: '.mysql_result($result0, $m, 0).'....... Статус заказа: '.$stat.'</label>';
			  
		      $text .= '<table id="tap'.$m.'" style="display:none;border-collapse:collapse;border:1px solid gray;max-width:100%;font-size:12px;line-height:16px;" border="1px">';
		      $text .= '<tr><td colspan="3" style="text-align:center;font-size:24px;">Заказ № '.mysql_result($result0, $m, 0).'</td><td colspan="2" style="text-align:center;font-size:24px;">от '.mysql_result($result, $n, 19).'</td><td style="text-align:center;font-size:24px;">Позиций '.mysql_result($result0, $m, 1).'</td><td class="tdbuttongn" onclick="edzakaz(\''.$num.'\');"> Открыть </td><td class="tdbuttonrd" onclick="deletezakaz(\''.$num.'\');"> Удалить </td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:right;line-height:16px;">Организация-заказчик:</td><td colspan="7">'.mysql_result($result, $n, 17).'</td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:right;line-height:16px;">ИНН:</td><td colspan="7">'.mysql_result($result, $n, 15).'</td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:right;line-height:16px;">Адрес:</td><td colspan="7">'.mysql_result($result, $n, 12).'</td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:right;line-height:16px;">Ф.И.О сотрудника:</td><td colspan="7">'.mysql_result($result, $n, 10).'</td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:right;line-height:16px;">E-mail:</td><td colspan="7">'.mysql_result($result, $n, 13).'</td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:right;line-height:16px;">Тел.:</td><td colspan="7">'.mysql_result($result, $n, 14).'</td></tr>';
		      $text .= '<tr><td style="background:lightgray;text-align:center;line-height:16px;">Объект</td><td style="background:lightgray;text-align:center;line-height:16px;">Заказываемая конфигурация</td><td style="background:lightgray;text-align:center;line-height:16px;">Кол-во</td><td style="background:lightgray;text-align:center;line-height:16px;">Комментарий</td><td style="background:lightgray;text-align:center;line-height:16px;">Статус заказа</td><td style="background:lightgray;text-align:center;line-height:16px;">Наличие в справочнике</td><td style="background:lightgray;text-align:center;line-height:16px;">Тип запроса</td><td style="background:lightgray;text-align:center;line-height:16px;">Опросный лист в pdf</td></tr>';

		      for ($n = 0; $n < mysql_num_rows($result); $n++){
				if (mysql_result($result0, $m, 0) == mysql_result($result, $n, 18)){
        	      $text .= '<tr>';
			      $selab = '';
			      $col = $colors[mysql_result($result, $n, 4)-1];
			      //$selab = ($row[5] == 1)?'checked disabled':' disabled';
			      //$selab .= ($row[4] == 1)?' disabled':'';
			      //$selab = (mysql_result($result, $n, 4) == 12)?' disabled':$selab;
			      //$seltm = (mysql_result($result, $n, 6) == 1)?'checked disabled':' disabled';  
			      //$selct = (mysql_result($result, $n, 7) == 1)?'checked disabled':' disabled';

				  $selab = (mysql_result($result, $n, 5) == 1)?'<p style="line-height:16px;margin:0;" class="check">Возможность</p>':'';
			      $seltm = (mysql_result($result, $n, 6) == 1)?'<p style="line-height:16px;margin:0;" class="check">Сроки</p>':'';  
			      $selct = (mysql_result($result, $n, 7) == 1)?'<p style="line-height:16px;margin:0;" class="check">Стоимость</p>':'';

			      $text .= '<td style="line-height:16px;">'.htmlspecialchars(mysql_result($result, $n, 11)).'</td>';
			      $text .= '<td style="line-height:16px;">'.htmlspecialchars(mysql_result($result, $n, 0)).'</td>';
			      $text .= '<td style="line-height:16px;">'.mysql_result($result, $n, 1).'</td>';
			      $text .= '<td style="line-height:16px;">'.htmlspecialchars(mysql_result($result, $n, 2)).'</td>';
			      $text .= '<td style="line-height:16px;"><p style="line-height:16px;color:'.$col.'">'.mysql_result($result, $n, 3).'</p></td>';
			      $text .= '<td style="line-height:16px;">'.htmlspecialchars(mysql_result($result, $n, 16)).'</td>';
			      $text .= '<td style="line-height:16px;" class="tdsmaltxt">'.$selab.' '.$seltm.' '.$selct.'</td>';
		$text .= '<td><b><a href="https://intzv.ru/crtpdf/?table=proba&case=id_eq_'.mysql_result($result, $n, 20).'" target="_blank">Открыть</a></b> ';
		$text .= 'Продублировано: <b><a href="https://intzv.ru/crtpdf/?table=proba&case=id_eq_'.mysql_result($result, $n, 20).'" target="_blank">Открыть</a></b></td>';
        	      $text .='</tr>';
				}
		      }

      	      $text .= '</table><br>&nbsp;<br>';
			  $text .= '</li>';
			}
		$text .= '</ul>';	  
	return $text;
}

?>