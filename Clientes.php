<?php
    require_once('Conexion.php');
    $usuario=$_POST['Nombre'];
    $Edad=$_POST['Edad'];
    $Telefono=$_POST['Telefono'];
    $Sexo=$_POST['Sexo'];
    $Correo=$_POST['Email'];
  

    $sql = "INSERT INTO clientes (Nombre, Teléfono, Edad, Sexo, Email) VALUES ('$usuario', '$Telefono', '$Edad','$Sexo','$Correo')";
if (mysqli_query($conn, $sql)) {
    echo ("Correcto");
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 
    