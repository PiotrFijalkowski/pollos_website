<?php
// Set headers to allow cross-origin requests (useful if frontend/backend are on different subdomains)
// In production on the same domain, this is less critical but good practice.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit();
}

// Get POST data
// Since we are sending FormData, we can access using $_POST
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Wszystkie pola są wymagane."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Nieprawidłowy adres email."]);
    exit();
}

// Email configuration
$to = "kontakt@pollos.pl";
$subject = "Nowa wiadomość ze strony Pollos: $name";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_content = "Otrzymano nową wiadomość z formularza kontaktowego:\n\n";
$email_content .= "Imię i nazwisko: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Wiadomość:\n$message\n";

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Wiadomość została wysłana."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Błąd wysyłania wiadomości. Spróbuj ponownie później."]);
}
?>
