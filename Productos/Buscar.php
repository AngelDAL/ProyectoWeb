<?php
    require_once('../Conexion.php');

    $usuario=$_POST['Buscar'];

    //$sql= "SELECT * FROM citas";
    $sql="SELECT productos.Id_Producto, proveedor.Nombre, productos.Nombre, productos.Descripcion, productos.Tipo, productos.Precio, productos.Cantidad, productos.CantidadMinima 
    FROM (productos
    INNER JOIN proveedor ON productos.Id_Proveedor = proveedor.Id_Proveedor) WHERE productos.Nombre LIKE '$usuario%'";

    
    //$sql = "INSERT INTO clientes (Nombre, Teléfono, Edad, Sexo, Email) VALUES ('$usuario', '$Telefono', '$Edad','$Sexo','$Correo')";
    $consulta ="";
if ($resultado = mysqli_query($conn, $sql)) {
    
    while ($fila = $resultado->fetch_row()) {
        
        $consulta= $consulta."<tr>";
        $consulta = $consulta. ' <td align="center" class="table-dark">'.$fila[0]."</td> <td>". $fila[1]."</td>". " <td>".$fila[2]."</td>". " <td>".$fila[3]."</td> <td>".$fila[4]."</td> <td>".$fila[5]."</td> <td>".$fila[6]."</td> <td>".$fila[7].'</td>  <td class="table-light"><button type="button" class="btn btn-danger" onClick="Borrar(this)" id="BotonBorrar" value="'.$fila[0].'">Eliminar</button>';
        $consulta= $consulta."</tr>";
    }
   echo ($consulta);
} else { 
      echo ( "Error: " . $sql . "<br>" . mysqli_error($conn));
}
mysqli_close($conn); 