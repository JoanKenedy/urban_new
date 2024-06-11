<?php

$destinatario = 'citasorthodentic@gmail.com';
// este es al correo al que se enviara la información ontenida del formulario

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['tel'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde la página clinicadentalorthodentic.com ";
$mensajeCompleto = $nombre . "\n" . $email . "\n" . $telefono . "\n" . $mensaje ;

mail($destinatario, $header, $mensajeCompleto );

echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>";
?>

