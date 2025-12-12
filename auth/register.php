<?php
header("Content-Type: application/json");
include "../config/db.php";

if (
    !isset($_POST['name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['password'])
) {
    echo json_encode(["status" => "error", "message" => "Missing fields"]);
    exit;
}

$name     = trim($_POST["name"]);
$email    = trim($_POST["email"]);
$password = trim($_POST["password"]);

if ($name === "" || $email === "" || $password === "") {
    echo json_encode(["status" => "error", "message" => "Fields cannot be empty"]);
    exit;
}

// Check if email already exists
$stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);

if ($stmt->rowCount() > 0) {
    echo json_encode(["status" => "error", "message" => "Email already exists"]);
    exit;
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $db->prepare("
        INSERT INTO users (name, email, password, role)
        VALUES (?, ?, ?, 'user')
    ");
    $stmt->execute([$name, $email, $hashedPassword]);

    echo json_encode(["status" => "success"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Database error"]);
}
