//Servicios
var array1 = [];

var url = "https://localhost:44343/";


//Si el ID, que se envía es -1, traerá toda la información, por el momento se visualizará en la consola.
fetch(`${url}api/Usuarios/Obtener?ID=-1`)
    .then(response => response.json())
    .then(data => console.log(data));

function servicioCrear(dataUser,response) {
    $.ajax({
        url:"https://localhost:44343/api/Usuarios/Insertar",
    
        data: dataUser,
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            swal.fire('Proceso exitoso', 'Usuario guardado con éxito', 'success');
            response(data);
        },
        error: function (httpReq, status, exception) {
            alert(status + " " + exception);
        }
    });
}

const btnGuardar = document.querySelector("#Guardar");
btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    //Aqui poner las validaciones a los input
    if ($("#txtNombre").val() == "" || $("#txtContraseña").val() == "" || $("#txtCorreo").val() == "") {
        swal.fire('Proceso no exitoso', 'Los campos no pueden estar vacíos.', 'error');
    } else {
        CrearUsuario();
    }
})

async function CrearUsuario() {
    var dataJson = JSON.stringify({
        "id": $("#hfIDCliente").val(),
        "Nombre": $("#txtNombre").val(),
        "Contraseña": $("#txtContraseña").val(),
        "Correo": $("#txtCorreo").val(),
    });

    try {
        const urlA = `${url}api/Usuarios/Insertar`;
        const respuesta = await fetch(urlA, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: dataJson,
        });

        const resultado = await respuesta.json();
        if (!resultado) {
            swal.fire('Proceso exitoso', 'Usuario guardado con éxito', 'success');
        }

    } catch (error) {
        console.log(error);
    }
}

