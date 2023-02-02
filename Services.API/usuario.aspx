<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="usuario.aspx.cs" Inherits="Services.API.usuario" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/busy_indicator.css" />

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css" />
</head>
<body>
    <div class="card border-secondary mb-3" style="max-width: 50rem; ">
        <div class="card-header">Usuarios</div>
        <div class="card-body text-secondary">
            <h5 class="card-title">Registro de Usuarios</h5>
            <form class="row g-3  needs-validation"  id="form1" name="form1" method="post" action="usuario.aspx" runat="server" novalidate="novalidate">
                <input type="hidden" id="hfIDCliente" value="-1" />
                <div>
                    <div class="container mt-8 mb-5" >

                        <div class="mb-3 row">
                            <label for="txtNombre" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="txtNombre" required ="required"/>
                                <div class="invalid-feedback">
                                    Por favor ingrese un nombre.
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="txtContraseña" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="txtContraseña" required ="required"/>
                                <div class="invalid-feedback">
                                    Por favor ingrese una contraseña.
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="txtCorreo" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="txtCorreo" required ="required" />
                                <div class="invalid-feedback">
                                    Por favor ingrese el correo.
                                </div>
                            </div>
                        </div>
                        <div class="col-auto"> 
                            <button type="submit" class="btn btn-primary mb-3" id="Guardar">Guardar</button>
                            <!--<button type="submit" id="btnGuardar" name="btnGuardar" class="btn btn-outline-primary">Guardar</button>-->
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>

<%--    <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        } 
                        form.classList.add('was-validated')
                    }, false)
                })
        })()--%>
    </script>

    <script src="../js/busy_indicator.js"></script>
    <script src="../js/jquery-3.3.1.slim.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <%--<script src="/Scripts/usuarios.js"></script>--%>
    <script src="<%= ResolveClientUrl("~/scripts/usuarios.js") %>"></script>
</body>
</html>
