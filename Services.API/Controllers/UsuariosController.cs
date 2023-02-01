using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Servicios.Business;
using Servicios.Common;

namespace Services.API.Controllers
{
    public class UsuariosController : ApiController
    {
        string connection = "Data Source=LAPTOP-AFSKQ5EE;Initial Catalog=dbUsuarios;Integrated Security=True";

        [HttpGet]
        [Route("api/Usuarios/Obtener")]
        public List<usuarios> Obtener(int ID)
        {
           List<usuarios> infoResultado = new List<usuarios>();
            BSUsuarios provider = null;
            try
            {
                provider = new BSUsuarios(connection);
                infoResultado = provider.Obtener(ID);
            }
            catch (Exception ex)
            {
               Console.WriteLine(ex.Message);
            }
            finally
            {
                provider = null;
            }

            return infoResultado;
        }
        [HttpPost]
        [Route("api/Usuarios/Insertar")]
        public int Insertar([FromBody] usuarios user)
        {
           int infoResultado;
           
            BSUsuarios provider = null;
            try
            {
                provider = new BSUsuarios(connection);
                infoResultado = provider.Insertar(user);
                return infoResultado;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return 0;
            }
            finally
            {
                provider = null;
            }

        }
    }
}
