var formulario = document.getElementById("Formulario");
var formularioP = document.getElementById("FomrularioProducto");
var ServicioSelect = document.getElementById("ServicioSelect");
//var formulario2 = document.getElementById("Formulario2");
var BuscarServicio = document.getElementById("BuscarServicio");
var BuscarCliente = document.getElementById("BuscarCliente");
var BuscarEstilista = document.getElementById("BuscarEstilista");
var respuesta = document.getElementById("Respuesta");



ServicioSelect.addEventListener("focus", function (e) {
  
    var buscar = new FormData(BuscarServicio);
    fetch('BuscarS.php', {
        method: 'POST',
        body: buscar
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("SS").innerHTML = data;
        })
});

ClienteSelect.addEventListener("focus", function (e) {
  
    var buscar = new FormData(BuscarCliente);
    fetch('BuscarC.php', {
        method: 'POST',
        body: buscar
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("CC").innerHTML = data;
        })
});

EstilistaSelect.addEventListener("focus", function (e) {
  
    var buscar = new FormData(BuscarEstilista);
    fetch('BuscarE.php', {
        method: 'POST',
        body: buscar
    })
        .then(res => res.text())
        .then(data => {
           document.getElementById("EE").innerHTML = data;
        })
});




formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log("Enviado");
    var datos = new FormData(formulario);
    datos.append('Servicio', ServicioSelect.value);
    datos.append('Cliente', ClienteSelect.value);
    datos.append('Estilista', EstilistaSelect.value);
    

    fetch('Alta.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.text())
        .then(data => {
            //console.log(data)
            formulario.reset()
            BuscarCliente.reset()
            BuscarEstilista.reset()
            BuscarServicio.reset()
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


Buscar.addEventListener("keyup", function (e) {
    var texto = document.getElementById("Buscar");
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

function Borrar(ele) {
    //console.log(ele.value);
    var confirmar = confirm("¿Desea eliminar este Servicio?");
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