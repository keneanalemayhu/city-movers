<?php
header('Content-Type: application/json');

// Get POST data safely
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

// Simple validation
if (!$name || !$email || !$message) {
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields.'
    ]);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email address.'
    ]);
    exit;
}

// Prepare email
$to = "info@citymoverset.com";
$subject = "Contact Form Submission from $name";
$body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

// Prevent header injection
$headers = "From: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";
$headers .= "Reply-To: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, something went wrong. Please try again later.'
    ]);
}
