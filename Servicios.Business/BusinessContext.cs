using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Business
{
    public class BusinessContext
    {
        #region Variables
        private string _connectionString;
        private int _numDecimales = 2;
        private string _database;
        #endregion

        #region Propiedades
        public string ConnectionString
        {
            get { return _connectionString; }
            set { _connectionString = value; }
        }
        public BusinessContext(string ConnectionString)
        {
            this.ConnectionString = ConnectionString;
        }
        #endregion
    }
}
