<?php
    require_once('Conexion.php');

    $usuario=$_POST['Buscar'];
    $sql= "SELECT * FROM clientes WHERE Nombre LIKE '$usuario%'";
    //$sql = "INSERT INTO clientes (Nombre, Teléfono, Edad, Sexo, Email) VALUES ('$usuario', '$Telefono', '$Edad','$Sexo','$Correo')";
    $consulta ="";
if ($resultado = mysqli_query($conn, $sql)) {
    while ($fila = $resultado->fetch_row()) {
        $consulta= $consulta."<tr>";
        $consulta = $consulta. " <td>".$fila[0]."</td> <td>". $fila[1]."</td>". " <td>".$fila[2]."</td>". " <td>".$fila[3]."</td> <td>".$fila[4]."</td> <td>".$fila[5]."</td>";
        $consulta= $consulta."</tr>";
    }
   echo ($consulta);
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 
    