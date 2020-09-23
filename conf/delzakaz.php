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

	$query = "DELETE FROM $table WHERE $case";

	if (isset($_REQUEST['id']) && $_REQUEST['id'] != "" ){
		$id = $_REQUEST["id"];
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
		  
		  $query = "DELETE FROM $table WHERE id = $id AND sesid = '$sesid'";
		  //echo '<h1>query='.$query.'</h1>';
		}
	}	  


	      $result = mysql_query($query, $connection) or die(mysql_error());

		  //echo $sesid;

	  }
	}
mysql_close($connection);	 	

?>
