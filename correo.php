<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$mail = new PHPMailer(true);

$mail->IsHTML(true);

// Gmail
$mail = new PHPMailer();
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
//variables para el uso de Mailtrap 
$mail->Host = 'sandbox.smtp.mailtrap.io';
$mail->SMTPAuth = true;
$mail->Port = 2525;
$mail->Username = '486c0a562c4fba';
$mail->Password = '151b659b71a3e6';
// Recoge y limpia los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['tel'];
$direccion = $_POST['direccion'];
$mensaje = $_POST['mensaje'];
$subject = 'Hola, Solicito información  ';

//Estructura del correo


$mail->FromName = $nombre;
$email_template = 'mail_template.html';
$emaildoc = 'urbansonriefashion@gmail.com';
//linoulises.maldonadomich@gmail.com
$f_name = 'Dr Urban';

$message = file_get_contents($email_template);
$message = str_replace('%nombre%', $nombre, $message);
$message = str_replace('%email%', $email, $message);
$message = str_replace('%tel%', $telefono, $message);
$message = str_replace('%direccion%', $direccion, $message);
$message = str_replace('%mensaje%', $mensaje, $message);


$mail->MsgHTML($message);
$mail->Subject = $subject;
$mail->AddAddress($emaildoc, $f_name);
$mail->send();

// $destinatario = 'citasorthodentic@gmail.com';
// Enviar el correo
echo "<script>setTimeout(\"location.href='index.html'\")</script>";
