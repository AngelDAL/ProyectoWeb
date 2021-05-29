var formulario = document.getElementById("Formulario");
//var formulario2 = document.getElementById("Formulario2");
var respuesta = document.getElementById("Respuesta");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log("Enviado");
    var datos = new FormData(formulario);

    fetch('Alta.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.text())
        .then(data => {
            //console.log(data)
            formulario.reset()
            if (data == "Correcto") {
                respuesta.className = "alert alert-success";
                respuesta.innerHTML = `
                 <h4 class="alert-heading">Usuario registrado!</h4>
                 <p>Se ha mandado un correo a tu usuario para verificar cualquier tipo de dato, puedes tener muchos descuentos y promociones aplicables con las citas que hagas y los puntos que ahorres</p>
                  <hr>
                <p class="mb-0">Muchas gracias por ser cliente de la estetica</p>
                `;
            }
            else {
                respuesta.className = "alert alert-danger";
                respuesta.innerHTML = `
                 <h4 class="alert-heading">Algo salio mal :(</h4>
                 <p> Ha sucesido un error, puede que le haya entrado cabello a la maquina y se haya estropeado
                 <hr>
                <p class="mb-0">Vuelva a intertar por favor</p>
                `;
            }
            
            Actualizar();
        })
        
});


BuscarCliente.addEventListener("keyup", function (e) {
    var texto = document.getElementById("BuscarCliente");
    //console.log(texto.value);
    var buscar = new FormData(BuscarForm);
    fetch('Buscar.php', {
        method: 'POST',
        body: buscar
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("Contenido").innerHTML = data;
        })
});

function Borrar (ele){
    //console.log(ele.value);
    var confirmar = confirm("¿Desea eliminar este usuario?");
    if(confirmar){
       // console.log("Borrado wuachin xd");
        var eliminar = new FormData();
        eliminar.append('eliminar',ele.value);
        fetch('Eliminar.php', {
            method: 'POST',
            body: eliminar
        })
            .then(res => res.text())
            .then(data => {
                //console.log(data);
                Actualizar();
            })
    }else{
        //console.log("No borrado maquinola");
    }
}

function Actualizar (){
    fetch('Actualizar.php', {
        method: 'POST'
    })
        .then(res => res.text())
        .then(data => {
            //console.log(data);
            document.getElementById("Contenido").innerHTML = data;
        })
}