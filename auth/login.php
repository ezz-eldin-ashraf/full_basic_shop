<?php
header("Content-Type: application/json");
include "../config/session.php";
include "../config/db.php";

if (
    !isset($_POST['email']) ||
    !isset($_POST['password'])
) {
    echo json_encode(["status" => "error", "message" => "Missing fields"]);
    exit;
}

$email = trim($_POST['email']);
$password = trim($_POST['password']);

if ($email === "" || $password === "") {
    echo json_encode(["status" => "error", "message" => "Fields cannot be empty"]);
    exit;
}

// Check if user exists
$stmt = $db->prepare("SELECT id, name, email, password, role FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user) {
    echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
    exit;
}

// Verify password
if (!password_verify($password, $user['password'])) {
    echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
    exit;
}

// SUCCESS → Create session
$_SESSION["user_id"] = $user["id"];
$_SESSION["user_name"] = $user["name"];
$_SESSION["user_role"] = $user["role"];

echo json_encode([
    "status" => "success",
    "message" => "Logged in",
    "user" => [
        "id" => $user["id"],
        "name" => $user["name"],
        "email" => $user["email"],
        "role" => $user["role"]
    ]
]);
