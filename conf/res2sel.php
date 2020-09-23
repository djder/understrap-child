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
	$mark = "";
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
	if (isset($_REQUEST['mark']) && $_REQUEST['mark'] != ""){
	  $mark = $_REQUEST['mark'];
	  $mark = str_replace("exit", "", $mark);
	  $mark = str_replace("quit", "", $mark);
	  $mark = str_replace(";", "", $mark);
	  $mark = str_replace("drop", "", $mark);
	  $mark = str_replace("delete", "", $mark);
	  $mark = str_replace("alter", "", $mark);
	  $mark = str_replace("_eq_", "=", $mark);
	  $mark = str_replace("__", " ", $mark);
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
	  $query = "SELECT DISTINCT * FROM $table $ljoin WHERE $case LIMIT 1";
	  //echo '<h1>query='.$query.'</h1>';

/*      if (isset($_REQUEST['column0']) && $_REQUEST['column0'] == "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT * FROM $table WHERE $case";
	  } */
	  if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && isset($_REQUEST['column1']) && $_REQUEST['column1'] != "") {
		  $column0 = $_REQUEST['column0']; 
		  $column1 = $_REQUEST['column1'];
		  $query = "SELECT DISTINCT $column0,$column1 FROM $table $ljoin WHERE $case";
		  //echo '<h1>query 01='.$query.'</h1>';
	      $result = mysql_query($query, $connection) or die(mysql_error());

	      //echo '<select>';

          while ($row = mysql_fetch_array($result, MYSQL_NUM)){
            $n = count($row);
            echo '<option value="'.$row[0].'"';
			if ($mark == $row[0]) echo ' selected';
			echo '>';
            echo $row[1];
            echo '</option>';
          }
	      //echo '</select>';
	  }
      else{
        if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && $_REQUEST['column0'] != "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT DISTINCT $column0 FROM $table $ljoin WHERE $case";
	      $result = mysql_query($query, $connection) or die(mysql_error());

		  //echo '<select placeholder="строка">';
		  //echo '<h1>query='.$query.'</h1>';

          while ($row = mysql_fetch_array($result, MYSQL_NUM)){
            $n = count($row);
            echo '<option';
			if ($mark == $row[0]) echo ' selected';
			echo '>';
            echo $row[0];
            echo '</option>';
          }
	      //echo '</select>';
	    }
	  }

	}
mysql_close($connection);	 	
}

?>