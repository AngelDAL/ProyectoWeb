var formulario = document.getElementById("Formulario");
var respuesta = document.getElementById("Respuesta");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Enviado");
    var datos = new FormData(formulario);

    fetch('Clientes.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.text())
        .then(data => {
            console.log(data)

            if (data == "Correcto") {
                respuesta.className = "alert alert-success";
                respuesta.innerHTML = `
                 <h4 class="alert-heading">Usuario registrado!</h4>
                 <p>Se ha mandado un correo a tu usuario para verificar cualquier tipo de dato, puedes tener muchos descuentos y promociones aplicables con las citas que hagas y los puntos que ahorres</p>
                  <hr>
                <p class="mb-0">Muchas gracias por ser cliente de la estetica</p>
                `;
    
            }
            else{
                respuesta.className = "alert alert-danger";
                respuesta.innerHTML = `
                 <h4 class="alert-heading">Algo salio mal :(</h4>
                 <p> Ha sucesido un error, puede que le haya entrado cabello a la maquina y se haya estropeado
                 <hr>
                <p class="mb-0">Vuelva a intertar por favor</p>
                `;
    
            }


        })

})