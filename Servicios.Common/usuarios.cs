using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Servicios.Common
{
    public class usuarios
    {
        private int _id;

        private string _Nombre;

        private string _Contraseña;

        private string _Correo;

        
        [global::System.Data.Linq.Mapping.ColumnAttribute(Storage = "_id", DbType = "Int NOT NULL")]
        public int id
        {
            get
            {
                return this._id;
            }
            set
            {
                if ((this._id != value))
                {
                    this._id = value;
                }
            }
        }

        [global::System.Data.Linq.Mapping.ColumnAttribute(Storage = "_Nombre", DbType = "VarChar(50)")]
        public string Nombre
        {
            get
            {
                return this._Nombre;
            }
            set
            {
                if ((this._Nombre != value))
                {
                    this._Nombre = value;
                }
            }
        }

        [global::System.Data.Linq.Mapping.ColumnAttribute(Storage = "_Contraseña", DbType = "VarChar(250)")]
        public string Contraseña
        {
            get
            {
                return this._Contraseña;
            }
            set
            {
                if ((this._Contraseña != value))
                {
                    this._Contraseña = value;
                }
            }
        }

        [global::System.Data.Linq.Mapping.ColumnAttribute(Storage = "_Correo", DbType = "VarChar(250)")]
        public string Correo
        {
            get
            {
                return this._Correo;
            }
            set
            {
                if ((this._Correo != value))
                {
                    this._Correo = value;
                }
            }
        }

        public usuarios()
        {
        }

    }
}
