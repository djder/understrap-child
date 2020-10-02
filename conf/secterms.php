<?php
include "dbconfig.php";

if ( isset($_GET["q"]) && $_GET["q"] != "") {
	$id = $_GET["q"];
} else {
	printf("Некорректный запрос");
	exit();
}

$connection = new mysqli(DBSERV, DBUSER, DBPASS, DBNAME);
// проверка соединения
if ( $connection->connect_errno ) {
	printf("Не удалось подключиться: %s\n", $connection->connect_error);
	exit();
}

// установка набор символов
if (!$connection->set_charset("utf8")) {
	printf("Ошибка при загрузке набора символов utf8: %s\n", $connection->error);
	exit();
}

// создание запроса
if ($stmt = $connection->prepare(
	"SELECT sec_term_id AS id, sec_term AS title, name, flex ".
	"FROM sectermref ".
	"LEFT JOIN sec_term ".
	"ON sectermref.sec_term_id = sec_term.id ".
	"WHERE tip_isp_id=?")) {

	$stmt->bind_param("s", $id);
	$stmt->execute();

    $meta = $stmt->result_metadata();
    while ($field = $meta->fetch_field())
    {
        $params[] = &$row[$field->name];
    }

    call_user_func_array(array($stmt, 'bind_result'), $params);

    while ($stmt->fetch()) {
        foreach($row as $key => $val)
        {
            $c[$key] = $val;
        }
        $result[] = $c;
    } 

	$stmt->close();
}

$connection->close();
echo json_encode($result); 
?>