<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$mail = $_POST['email'];
$mensaje =$nombre. ", ".$apellido. "\r\n". $_POST['mensaje'];

$to = "arielsilvainfo@gmail.com";


$sumadre = mail($to,$mail,$mensaje);
if($sumadre) {

} else {
	echo "error";
}