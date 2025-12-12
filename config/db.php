<?php

$dsn = "mysql:host=localhost;dbname=shoe_store;charset=utf8";
$user = "adam";
$pwd  = "adam";

try {
    $db = new PDO($dsn, $user, $pwd);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die(json_encode([
        "status"  => "error",
        "message" => "Database connection failed"
    ]));
}
