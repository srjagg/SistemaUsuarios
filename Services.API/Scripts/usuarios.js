var objTabla;

//Servicios
var array = [];
var url = "https://localhost:44343/";
fetch('https://localhost:44343/api/Usuarios/Obtener?ID=-1')
    .then(response => response.json())
    .then(data => array.push(data));

function servicioCrear(dataUser,response) {
    $.ajax({
        url:"https://localhost:44343/api/Usuarios/Insertar",
    
        data: dataUser,
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            response(data);
        },
        error: function (httpReq, status, exception) {
            alert(status + " " + exception);
        }
    });
}


function CrearUsuario() {
    
    var dataJson = JSON.stringify({
        
        "id": $("#hfIDCliente").val(),
        "Nombre": $("#txtNombre").val(),
        "Contraseña": $("#txtContraseña").val(),
        "Correo": $("#txtCorreo").val(),
    });
    servicioCrear(dataJson, function (data) {
        swal.fire('Proceso exitoso', 'Usuario guardado con éxito', 'success');
       
        return data;
    });
   


}

