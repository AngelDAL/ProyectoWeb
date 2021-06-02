<?php
    require_once('../Conexion.php');
    $Servicio=$_POST['Servicio'];
    $Cliente=$_POST['Cliente'];
    $Estilista=$_POST['Estilista'];
    $Dia=$_POST['Dia'];
    $Hora=$_POST['Hora'];

    
    $Date= explode("/",$Dia);
    $Fecha= $Date[2]."-".$Date[0]."-".$Date[1];
    $SepararS= explode(" - ",$Servicio);
    $SepararC= explode(" - ",$Cliente);
    $SepararE= explode(" - ",$Estilista);
    
  

    $sql = "INSERT INTO citas (Fecha, Hora, Id_Cliente, Id_Servicio, Id_Estilista) VALUES ('$Fecha', '$Hora', '$SepararC[0]','$SepararS[0]','$SepararE[0]')";
if (mysqli_query($conn, $sql)) {
    echo ("Correcto");
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 