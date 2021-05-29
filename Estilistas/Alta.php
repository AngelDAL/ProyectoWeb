<?php
    require_once('../Conexion.php');
    $usuario=$_POST['Nombre'];
    $Telefono=$_POST['Telefono'];
    $Correo=$_POST['Email'];
  

    $sql = "INSERT INTO estilista (Nombre, Telefono, Email) VALUES ('$usuario', '$Telefono', '$Correo')";
if (mysqli_query($conn, $sql)) {
    echo ("Correcto");
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 
    