var formulario = document.getElementById("Formulario");
var formularioP = document.getElementById("FomrularioProducto");
var ServicioSelect = document.getElementById("ServicioSelect");
//var formulario2 = document.getElementById("Formulario2");
var BuscarServicio = document.getElementById("BuscarServicio");
var respuesta = document.getElementById("Respuesta");


ServicioSelect.addEventListener("focus", function (e) {
  
    var buscar = new FormData(BuscarServicio);
    fetch('Buscar.php', {
        method: 'POST',
        body: buscar
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("SS").innerHTML = data;
        })
});


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log("Enviado");
    var datos = new FormData(formulario);
    datos.append('Servicio', ServicioSelect.value);

    fetch('Alta.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.text())
        .then(data => {
            console.log(data)
            formulario.reset()
            if (data == "Correcto") {
                respuesta.className = "alert alert-success";
                respuesta.innerHTML = `
                 <h4 class="alert-heading">Servicio registrado!</h4>
                 <p>Se ha dado de alta este servicio, ahora los clientes pueden verlo disponible para ser solicitado</p>
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
    fetch('BuscarTabla.php', {
        method: 'POST',
        body: buscar
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("Contenido").innerHTML = data;
        })
});

function Borrar(ele) {
    //console.log(ele.value);
    var confirmar = confirm("??Desea eliminar este Servicio?");
    if (confirmar) {
        // console.log("Borrado wuachin xd");
        var eliminar = new FormData();
        eliminar.append('eliminar', ele.value);
        fetch('Eliminar.php', {
            method: 'POST',
            body: eliminar
        })
            .then(res => res.text())
            .then(data => {
                //console.log(data);
                Actualizar();
            })
    } else {
        //console.log("No borrado maquinola");
    }
}

function Actualizar() {
    fetch('Refresh.php', {
        method: 'POST'
    })
        .then(res => res.text())
        .then(data => {
            //console.log(data);
            document.getElementById("Contenido").innerHTML = data;
        })
}