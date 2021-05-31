<?php
    require_once('../Conexion.php');
    $usuario=$_POST['Nombre'];
    $Descripcion=$_POST['Descripcion'];
    $Precio=$_POST['Precio'];
    $Tiempo=$_POST['Tiempo'];
    $Servicio=$_POST['Servicio'];

    $SepararInfo= explode(" - ",$Servicio);
  

    $sql = "INSERT INTO servicios (Nombre, Descripcion, Precio, Tiempo, Id_Producto) VALUES ('$usuario', '$Descripcion', '$Precio','$Tiempo','$SepararInfo[0]')";
if (mysqli_query($conn, $sql)) {
    echo ("Correcto");
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 
    