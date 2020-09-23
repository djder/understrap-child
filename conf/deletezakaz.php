<?php
include("dbconfig.php");

if (isset($_REQUEST['table']) && $_REQUEST['table'] != ""){
	$connection = mysql_connect(DBSERV, DBUSER, DBPASS);
    if (!$connection) { 
      echo "Ошибка подключения к базе данных. Код ошибки: ".mysqli_connect_error(); 
      exit; 
    } 

    mysql_select_db(DBNAME) or die(mysql_error());  

    $query = "SET names UTF8";
    $result = mysql_query($query, $connection) or die(mysql_error());
	 
	$query = "show tables";
	$result = mysql_query($query, $connection) or die(mysql_error());

	$table = "";
	for ($x = 0; $x < mysql_num_rows($result); $x++){
		if ($_REQUEST['table'] == mysql_result($result, $x, 0))
			$table = mysql_result($result, $x, 0);
	}
	
	if ($table != ""){
		
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
		  $case = urldecode($case);
		  $case = str_replace("_lk_", " LIKE '%", $case);
		  if (strpos($case, "LIKE '%")>1) $case = $case."%'";
	  }	  

	//$query = "DELETE FROM $table WHERE $case";

	if (isset($_REQUEST['number']) && $_REQUEST['number'] != "" ){
		$number = $_REQUEST["number"];
		//$name = str_replace("exit", "", $name);
		//$name = str_replace("quit", "", $name);
		//$name = str_replace(";", "", $name);
		//$name = str_replace("drop", "", $name);
		//$name = str_replace("delete", "", $name);
		//$name = str_replace("alter", "", $name);
		//$name = str_replace("_eq_", "=", $name);
		//$name = str_replace("__", " ", $name);
		if (isset($_REQUEST["sesid"]) && $_REQUEST["sesid"] != ""){
			$sesid = $_REQUEST["sesid"];

			//if ($sesid == "") {
				//$sesid = hash("md5", $manager.microtime());
			//}
		  
		  //$query = "DELETE FROM $table WHERE id = $id AND sesid = '$sesid'";
		  //echo '<h1>query='.$query.'</h1>';
		}
	}	  

		$query = "SELECT inn FROM $table WHERE number=$number LIMIT 1";

//echo $query.'<br />';
	    $result = mysql_query($query, $connection) or die(mysql_error());
		
		$inn = mysql_result($result, 0, 0);
		

		$query = "SELECT session_id FROM $table WHERE inn=$inn ORDER BY id DESC LIMIT 1";
//echo $query.'<br />';
	    $result = mysql_query($query, $connection) or die(mysql_error());
		
		$sesid = "'".mysql_result($result, 0, 0)."'";

		if ($sesid != "''") {setcookie("session_id", htmlspecialchars($sesid), time()+60*60*24*1100, "/", "intzv.ru", 1);}


		$query = "DELETE FROM $table WHERE number=$number";

//echo $query;
	    $result = mysql_query($query, $connection) or die(mysql_error());

	  }
	}
mysql_close($connection);	 	

?>
