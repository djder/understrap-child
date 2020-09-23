<?php
include("dbconfig.php");

//require_once('../../../wp-load.php');

//require_once(ABSPATH.'wp-includes/pluggable.php');

//$user       = get_userdata(1);
//$username   = $user->user_login;
//$first_name = $user->first_name;
//$last_name  = $user->last_name;

////$current_user = wp_get_current_user();

//global $current_user;

//echo 'Username: ' . $current_user->user_login . '<br />';
//echo 'User email: ' . $current_user->user_email . '<br />';
//echo 'User first name: ' . $current_user->user_firstname . '<br />';

//$firstname = $current_user->user_firstname;

//echo 'User last name: ' . $current_user->user_lastname . '<br />';

//$lastname = $current_user->user_lastname;

//echo 'User display name: ' . $current_user->display_name . '<br />';
//echo 'User ID: ' . $current_user->ID;
//$current_user = wp_get_current_user();
//			echo $current_user->ID;

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
	$name = "";
	$objectt = "";
	$manager = "''";
	$address = "";
	$mail = "";
	$phone = "";
	$prim = "";
	$inn = "";
	$config = "''";
	
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
	  $query = "INSERT INTO $table VALUES (NULL, '', 0, '', '', '', '', '', '', CURDATE(), ADDDATE(CURDATE(), INTERVAL 10 DAY), 0, '', '', 0, 0, 0, '', 0, '')";

  if (isset($_REQUEST['name']) && $_REQUEST['name'] != "" && isset($_REQUEST['org']) && $_REQUEST['org'] != "") {
	if (isset($_REQUEST["name"]) && $_REQUEST["name"] != ""){
		$name = $_REQUEST["name"];
		$name = str_replace("exit", "", $name);
		$name = str_replace("quit", "", $name);
		$name = str_replace(";", "", $name);
		$name = str_replace("drop", "", $name);
		$name = str_replace("delete", "", $name);
		$name = str_replace("alter", "", $name);
		$name = str_replace("_eq_", "=", $name);
		$name = str_replace("__", " ", $name);
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
	}

		$count = $_REQUEST["count"]; 

		$sesid = $_REQUEST["sesid"];

		$status = $_REQUEST["status"];

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
	}
	if (isset($_REQUEST["prim"]) && $_REQUEST["prim"] != ""){
	  $prim = $_REQUEST["prim"];
	  $prim = str_replace("exit", "", $prim);
	  $prim = str_replace("quit", "", $prim);
	  $prim = str_replace(";", "", $prim);
	  $prim = str_replace("drop", "", $prim);
	  $prim = str_replace("delete", "", $prim);
	  $prim = str_replace("alter", "", $prim);
	  $prim = str_replace("_eq_", "=", $prim);
	  $prim = str_replace("__", " ", $prim);
	}
	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != ""){
	  $number = $_REQUEST["number"];
	}
	if (isset($_REQUEST["inn"]) && $_REQUEST["inn"] != ""){
	  $inn = $_REQUEST["inn"];
	}
	if (isset($_REQUEST["org"]) && $_REQUEST["org"] != ""){
	  $org = $_REQUEST["org"];
	}
		$nomenid = 0;
	  	$able = $_REQUEST["able"];
		$time = $_REQUEST["time"];
		$coast = $_REQUEST["coast"];

	if (isset($_REQUEST["nomenid"]) && $_REQUEST["nomenid"] != ""){
	  $nomenid = $_REQUEST["nomenid"];
	}
	if (isset($_REQUEST["config"]) && $_REQUEST["config"] != ""){
	  $config = $_REQUEST["config"];
	}
		  		  
//		if ($firstname != '' || $lastname != '') {$manager = $firstname.' '.$lastname;}

//if ( 0 !== $current_user->ID ) {
//	echo kama_user_role( $current_user->ID ) . '<br>';
//	echo date( 'd:m:Y', $current_user->user_registered ) . '<br>';
//}
			
		if (($sesid == "") || (strlen($sesid) != 32)) {
			  $sesid = hash("md5", $org.microtime());
		  }
		  
		  $query = "INSERT INTO $table VALUES (NULL, $name, $count, '$sesid', $manager, $objectt, $address, $mail, $phone, CURDATE(), CURDATE(), $status, $prim, $number, $able, $time, $coast, $inn, $nomenid, $org, $config)";
		  //echo '<h1>query='.$query.'</h1>';
	      $result = mysql_query($query, $connection) or die(mysql_error());

		  echo $sesid;

	  }
	}
mysql_close($connection);	 	
}

?>
