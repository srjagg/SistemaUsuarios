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

    <form id="form1" runat="server">
        <input type="hidden" id="hfIDCliente" value="-1" />
        <div>
            <div class="container mt-8 mb-5" style="padding-top:50px">
                
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-10">
                        <input type="text"  class="form-control" id="txtNombre" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="txtContraseña" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text"  class="form-control" id="txtCorreo" />
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3" onclick="CrearUsuario()">Guardar</button>
                </div>
            </div>

        </div>
    </form>
    <script src="../js/busy_indicator.js"></script>
    <script src="../js/jquery-3.3.1.slim.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <!--script src="./js/index.min.js"></script-->
    <script src="<%= ResolveClientUrl("~/scripts/usuarios.js") %>"></script>
</body>
</html>
