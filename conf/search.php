<?php
include "dbconfig.php";

if ( isset($_GET["q"]) && $_GET["q"] != "") {
	$s = "%" . $_GET["q"];
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
if ($stmt = $connection->prepare("SELECT id,naimenovanie FROM nomenklatura WHERE naimenovanie LIKE ?")) {

    $stmt->bind_param("s", $s);

    $stmt->execute();

    $stmt->bind_result($id, $name);

    while ($stmt->fetch()) {
        printf ("<tr><td>%s</td><td>%s</td>\n", $id, $name);
    }

    $stmt->close();
}

$connection->close();