<?php
    require_once('../Conexion.php');
    $Proveedor=$_POST['Proveedor'];
    $Nombre=$_POST['Nombre'];
    $Descripcion=$_POST['Descripcion'];
    $Tipo=$_POST['Tipo'];
    $Precio=$_POST['Precio'];
    $CantidadActual=$_POST['CantidadActual'];
    $CantidadMinima=$_POST['CantidadMinima'];
    
    $SepararS= explode(" - ",$Proveedor);
    
  

    $sql = "INSERT INTO productos (Id_Proveedor, Nombre, Descripcion, Tipo, Precio, Cantidad, CantidadMinima) VALUES ('$SepararS[0]', '$Nombre', '$Descripcion', '$Tipo',  '$Precio', '$CantidadActual', '$CantidadMinima')";
if (mysqli_query($conn, $sql)) {
    echo ("Correcto");
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 