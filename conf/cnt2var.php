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
	$ljoin = "";
	$on = "";
	if (isset($_REQUEST['ljoin']) && $_REQUEST['ljoin'] != ""){
	  for ($x = 0; $x < mysql_num_rows($result); $x++){
		if ($_REQUEST['ljoin'] == mysql_result($result, $x, 0))
			$ljoin = mysql_result($result, $x, 0);
	  }
	  if (isset($_REQUEST['on']) && $_REQUEST['on'] != ""){
		  $on = $_REQUEST['on'];
		  $on = str_replace("exit", "", $on);
		  $on = str_replace("quit", "", $on);
		  $on = str_replace(";", "", $on);
		  $on = str_replace("drop", "", $on);
		  $on = str_replace("delete", "", $on);
		  $on = str_replace("alter", "", $on);
		  $on = str_replace("_eq_", "=", $on);
		  $on = str_replace("__", " ", $on);
	  }	  
	  $ljoin = "LEFT JOIN ".$ljoin." ON ".$on;
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
	  }	  
	  $query = "SELECT count(*) FROM $table $ljoin WHERE $case";
	  if (isset($_REQUEST['number']) && $_REQUEST['number'] != "" && $_REQUEST['number'] != "''"){
		  $number = $_REQUEST['number'];
	  	$query = "SELECT count(*) FROM $table $ljoin WHERE number=$number";
	  }	  
//echo $query;		
	  $result = mysql_query($query, $connection) or die(mysql_error());
          
	while ($row = mysql_fetch_array($result, MYSQL_NUM)){
            $n = count($row);
            echo $row[0];
    }


	}
mysql_close($connection);	 	
}

?>