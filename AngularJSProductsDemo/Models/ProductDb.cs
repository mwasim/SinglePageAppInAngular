using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSProductsDemo.Models
{
    public class ProductDb : DbContext
    {
        public ProductDb() : base("DefaultConnection")
        {

        }
        public DbSet<Product> Products { get; set; }

    }
}
