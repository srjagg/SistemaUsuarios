using Microsoft.Win32;
using System.Security.Cryptography;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Servicios.Common;
using Services.Data;

namespace Servicios.Business
{
    public class BSUsuarios :BusinessContext
    {

        public BSUsuarios(string ConnectionString) : base(ConnectionString)
        {
        }

        public List<usuarios> Obtener(int ID)
        {
            
            DBUsuariosDataContext objData = null;
            List<usuarios> infoResultado = new List<usuarios>();

            try
            {
                objData = new DBUsuariosDataContext(this.ConnectionString);
                infoResultado= objData.usp_usuariosBuscar(ID).ToList();
                
            }
            catch (Exception ex)
            {
                
            }
            finally
            {
                objData = null;
            }

            return infoResultado;
        }

        public usuarios ObtenerPorCorreo(string email)
        {

            DBUsuariosDataContext objData = null;
            usuarios infoResultado = new usuarios() ;

            try
            {
                objData = new DBUsuariosDataContext(this.ConnectionString);
                infoResultado = objData.usp_usuariosConsultarCorreo(email).FirstOrDefault();

            }
            catch (Exception ex)
            {

            }
            finally
            {
                objData = null;
            }

            return infoResultado;
        }

        public int Insertar(usuarios user)
        {

            DBUsuariosDataContext objData = null;
            int infoResultado=0;

            try
            {
                usuarios validarEmail = ObtenerPorCorreo(user.Correo);

                if (validarEmail != null)
                    Console.WriteLine("El correo ya se encuentra registrado");
                else
                {
                    string pass = encriptarPass(user.Contraseña);
                    objData = new DBUsuariosDataContext(this.ConnectionString);
                    infoResultado = objData.usp_usuariosInsertar(user.id, user.Nombre, pass, user.Correo);
                }
            }
            catch (Exception ex)
            {

            }
            finally
            {
                objData = null;
            }

            return infoResultado;
        }

        public string encriptarPass(string pass)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(pass));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }
    }
}

