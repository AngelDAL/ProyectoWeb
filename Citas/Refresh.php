<?php
    require_once('../Conexion.php');

    //$sql= "SELECT * FROM citas";
    $sql="SELECT citas.Id_Cita, citas.Fecha, Hora, clientes.Nombre, servicios.Nombre, estilista.Nombre
    FROM (((citas
    INNER JOIN clientes ON citas.Id_Cliente = clientes.Id_Cliente)
    INNER JOIN estilista ON citas.Id_Estilista = estilista.Id_Estilista)
    INNER JOIN servicios ON citas.Id_Servicio = servicios.Id_Servicio)";

    
    //$sql = "INSERT INTO clientes (Nombre, Teléfono, Edad, Sexo, Email) VALUES ('$usuario', '$Telefono', '$Edad','$Sexo','$Correo')";
    $consulta ="";
if ($resultado = mysqli_query($conn, $sql)) {
    
    while ($fila = $resultado->fetch_row()) {
        
        $consulta= $consulta."<tr>";
        $consulta = $consulta. ' <td align="center" class="table-success">'.$fila[0]."</td> <td>". $fila[1]."</td>". " <td>".$fila[2]."</td>". " <td>".$fila[3]."</td> <td>".$fila[4]."</td> <td>".$fila[5].'</td> <td><button type="button" class="btn btn-danger" onClick="Borrar(this)" id="BotonBorrar" value="'.$fila[0].'">Eliminar</button>';
        $consulta= $consulta."</tr>";
    }
   echo ($consulta);
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 