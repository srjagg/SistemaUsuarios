using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Reflection;
using Servicios.Common;
namespace Services.Data
{
    public partial class DBUsuariosDataContext
    {
        #region Usuarios

        [FunctionAttribute(Name = "dbo.usp_usuariosBuscar")]
        public ISingleResult<usuarios> usp_usuariosBuscar([ParameterAttribute(DbType = "Int")] System.Nullable<int> idUsuario)
        {

            IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idUsuario);
            return ((ISingleResult<usuarios>)(result.ReturnValue));
        }

        [FunctionAttribute(Name = "dbo.usp_usuariosConsultarCorreo")]
        public ISingleResult<usuarios> usp_usuariosConsultarCorreo([ParameterAttribute(Name = "Correo", DbType = "VarChar(250)")] string correo)
        {
            IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), correo);
            return ((ISingleResult<usuarios>)(result.ReturnValue));
        }
        #endregion

        [FunctionAttribute(Name = "dbo.usp_usuariosInsertar")]
        public int usp_usuariosInsertar([global::System.Data.Linq.Mapping.ParameterAttribute(DbType = "Int")] System.Nullable<int> idUsuario, 
            [ParameterAttribute(Name = "Nombre", DbType = "VarChar(50)")] string nombre, 
            [ParameterAttribute(Name = "Password", DbType = "VarChar(250)")] string password,
            [ParameterAttribute(Name = "Correo", DbType = "VarChar(250)")] string correo)
        {
            IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), idUsuario, nombre, password, correo);
            return ((int)(result.ReturnValue));
        }
    }
}

