<?php
    require_once('../Conexion.php');

    $sql= "SELECT Id_Proveedor, Nombre FROM proveedor";
    //$sql = "INSERT INTO clientes (Nombre, Teléfono, Edad, Sexo, Email) VALUES ('$usuario', '$Telefono', '$Edad','$Sexo','$Correo')";
    $consulta ="";
if ($resultado = mysqli_query($conn, $sql)) {
    while ($fila = $resultado->fetch_row()) {
        $consulta = $consulta. ' <option value="'.$fila[0].' - '.$fila[1].'">';
    }
   echo ($consulta);
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 