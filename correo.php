<?php
  
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'vendor/autoload.php';
  $mail = new PHPMailer(true);

  $mail->IsHTML(true);
  //$mail->IsSMTP(true);

  // Gmail

  /* Variables para el uso de Mailtrap 

  /* Variables necesarias para el envío de correos por GMAIL */
//   $mail->SMTPAuth = true; // enable SMTP authentication
//   $mail->SMTPSecure = "ssl"; // sets the prefix to the server
//   $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
//   $mail->Port = 465; // set the SMTP port for the GMAIL server
//   $mail->Username = "dentariosmx@gmail.com"; // GMAIL username
//   $mail->Password = "piwdqjmtrvtpkfbb"; // GMAIL password

$mail->isSMTP();
$mail->Host = 'sandbox.smtp.mailtrap.io';
$mail->SMTPAuth = true;
$mail->Port = 2525;
$mail->Username = '486c0a562c4fba';
$mail->Password = '151b659b71a3e6';
  // Verificamos la clave secreta 
 
    
    //Guardamos los datos escritos por el usuario
    $nombre = $_POST['nombre'];
    $emailUser = $_POST['email'];
    $tel = $_POST['tel'];
    $direccion = $_POST['direccion'];
    $textarea = $_POST['textarea'];
    //Estructura del correo
    $mail->From = $correo;
    $mail->FromName = $nombre;
    $email_template = 'mail_template.html';
    $email = 'linoulises.maldonadomich@gmail.com'; //linoulises.maldonadomich@gmail.com
    $f_name = 'Dr. Lino';

    $message = file_get_contents($email_template);
    $message = str_replace('%nombre%', $nombre, $message);
    $message = str_replace('%email%', $emailUser, $message);
    $message = str_replace('%tel%', $tel, $message);
    $message = str_replace('%direccion%', $direccion, $message);
    $message = str_replace('%textarea%', $textarea, $message);


    $mail->MsgHTML($message);
    $mail->Subject = $subject;
    $mail->AddAddress($email, $f_name);
    $mail->send();
    
    // Send mail   
    if (!$mail) {
      echo 'Email not sent an error was encountered: ' . $mail->ErrorInfo;
    } else {
      header('Location:index.php');
    }

?>
