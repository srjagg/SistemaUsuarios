//Variables globales
var _url = 'https://spiserviciosfe.azurewebsites.net/';
var Token = 'Bearer IAUNhScYSTASLyb5xKL/SNb4YQ3SVZMgk06KkTDe2yDvgw1n1Jv0ja0ylhKdH/Am6CmJbBmWmeBWmnLOr5YhYVwCjEzoSJV9RlRrQsLl/N84VvrRRgtGHeQo5yqzB7821kE0xXbFDnur3TeBJSOeO2Opu5wJBvGiv4VgrkszgSE='
var dataTicket;
//Servicios
function ordenesEntregaActualizar(data, response) {
    _url = _url + "api/Tickets/Actualizar";

    $.ajax({
        type: "POST",
        url: _url,
        headers: {
            "db": "CRMSPI",
            "Authorization": Token
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            response(data);
        },
        error: function (httpReq, status, exception) {
            alert(status + " " + exception);
        }
    });

}
//Validar campos obligatorios
function validarObligatorios() {

    var _resultado = true;
    var observaciones = $("#txtObservaciones").val();
    var correo = $("#txtCorreo").val();
    var celular = $("#txtCelular").val();
    var usuario = $("#txtUsuario").val();
    var modulo = $("#cboModulo").val();
    var tipo = $("#cboTipo").val();
    var categoria = $("#cboCategoria").val();

    ///Validación de correo
    var emailField = document.getElementById('txtCorreo');
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (modulo == null || modulo == "-1") {
        swal.fire('Validar Campos Obligatorios', 'El campo modulo es obligatorio.', 'error');
        _resultado = false;
        return _resultado;
    }

    if (tipo == null || tipo == "-1") {
        swal.fire('Validar Campos Obligatorios', 'El campo tipo es obligatorio.', 'error');
        _resultado = false;
        return _resultado;
    }

    if (categoria == null || categoria == "-1") {
        swal.fire('Validar Campos Obligatorios', 'El campo categoría es obligatorio.', 'error');
        _resultado = false;
        return _resultado;
    }

    if (observaciones == null || observaciones == "" || observaciones == undefined) {
        swal.fire('Validar Campos Obligatorios', 'El campo de descripción es obligatorio.', 'error');
        _resultado = false;
        return _resultado;
    }

    if (!validEmail.test(emailField.value)) {
        swal.fire('Validar Campos Obligatorios', 'El campo Correo no es valido', 'error');
        _resultado = false;
        return _resultado;
    }
    if (usuario == null || usuario == "" || usuario == undefined) {
        swal.fire('Validar Campos Obligatorios', 'El campo de usuario es obligatorio.', 'error');
        _resultado = false;
        return _resultado;
    }

    if (celular == null || celular == "" || celular == undefined) {
        swal.fire('Validar Campos Obligatorios', 'El campo celular es obligatorio.', 'error');
        _resultado = false;
        return _resultado;
    }

    return _resultado;
}
//Creación de ticket de soporte
function btnEnviar() {
    //llamamos la función encargada de validar campos obligatorios
   
    if (validarObligatorios()) {
        var obs= $("#txtObservaciones").val();
        var contacto=$("#txtCelular").val();
        var email=$("#txtCorreo").val();
        var obsTicket=obs+"\nCelular:    "+contacto+"\nCorreo:    "+email
        dataTicket = {
            "ID": 0,
            "IDResponsable": 33,
            "IDCliente": 1181,
            "IDEstado": -1,
            "Observaciones":obsTicket,
            "UsuarioCreacion": "website",
            "Seguimientos": [{ "IDResponsable": 33 }],
            "IDTipoTicket": $("#cboTipo").val(),
            "IDCategoria": $("#cboCategoria").val(),
            "IDPrioridad": 1367,
            "IDModulo": $("#cboModulo").val(),
            "IDCanal": 1372,
            "ArchivoAdjunto": $("#fileMultiple").val(),
            "EmailNotificacion": email
        }
        //mandamo objeto generado al servicio de crecación de Ticket
        ordenesEntregaActualizar(dataTicket, function (data) {
            if (!data.Exitoso) {
                swal.fire('Creación', data.Error.MensajeUsuario, 'error');
                return;
            }
            var idTicket=data.Datos.ID;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Señor usuario su caso sera atendido bajo Ticket #'+idTicket,
                showConfirmButton: false,
                timer: 1500
            })
            window.location.reload();    
        });
    }

}
$(document).ready(function () {
    var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();

    if (dia < 10)
        dia = '0' + dia;
    if (mes < 10)
        mes = '0' + mes
    document.getElementById('txtFecha').textContent = ano + "-" + mes + "-" + dia;
});
