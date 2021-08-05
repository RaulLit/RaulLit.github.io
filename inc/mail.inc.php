<?php
$to = "raul.aditya912@gmail.com";
$subject = "Mail from RaulLit.github.io";
$header = "From: raul.aditya912@gmail.com";

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$text = "From: " . $name . "\r\nEmail: " . $email . "\r\nMessage: " . $message;

mail($to, $subject, $text, $header);

header("Location: ../contact.html");
