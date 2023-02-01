<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Usuarios.aspx.cs" Inherits="Services.API.Views.Usuarios" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <input type="text" id="txtNombre" />
        </div>
    </form>
    <script src="<%= ResolveClientUrl("~/scripts/usuarios.js") %>"></script>
</body>
</html>
