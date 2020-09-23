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
    $result = mysql_query($query) or die(mysql_error());
	
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
	  }	  
	  $query = "SELECT * FROM $table WHERE $case LIMIT 1";
      if (isset($_REQUEST['column0']) && $_REQUEST['column0'] == "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT * FROM $table WHERE $case";
	  }
      if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && $_REQUEST['column0'] != "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT $column0 FROM $table WHERE $case";
	  }

	  if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && isset($_REQUEST['column1']) && $_REQUEST['column1'] != "") {
		  $column0 = $_REQUEST['column0']; 
		  $column1 = $_REQUEST['column1'];
		  $query = "SELECT $column0,$column1 FROM $table WHERE $case";
		  //if (isset($_REQUEST['column2']) && $_REQUEST['column2'] != "") {
		  	//$column2 = $_REQUEST['column2'];
		  	//$query = "SELECT t1.$column0,t1.$column1,t1.$column2,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.inn FROM $table t1 LEFT JOIN status_prep t2 ON t1.status = t2.id WHERE $case";			  
		  //}
	  }

	  $result = mysql_query($query, $connection) or die(mysql_error());

	  //$colors = array('red', 'orange', 'yellow', 'orange', 'orange', 'yellow', 'yellow', 'olive', 'olive', 'green', 'green', 'darkgreen');

      while ($row = mysql_fetch_array($result, MYSQL_NUM)){
        echo '<tr>';
		for ($x = 0; $x < count($row);$x++){
   			echo "<td>".$row[$x]."</td>";
  		}
        echo "</tr>";
      }
      //echo '</table';
	}
mysql_close($connection);	 
}

?>