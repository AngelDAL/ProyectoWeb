<?php
    require_once('../Conexion.php');
    $id = $_POST['eliminar'];
    $sql = "DELETE FROM citas WHERE Id_Cita=$id";
   // $sql = "INSERT INTO clientes (Nombre, Teléfono, Edad, Sexo, Email) VALUES ('$usuario', '$Telefono', '$Edad','$Sexo','$Correo')";
if (mysqli_query($conn, $sql)) {
    echo ("Eliminado");
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 
    