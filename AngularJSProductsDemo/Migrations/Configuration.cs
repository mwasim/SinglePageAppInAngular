using AngularJSProductsDemo.Models;

namespace AngularJSProductsDemo.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularJSProductsDemo.Models.ProductDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(AngularJSProductsDemo.Models.ProductDb context)
        {
            //  This method will be called after migrating to the latest version.

            context.Products.AddOrUpdate(m => m.Name,
                new Product
                {
                    Name = "IPhone",
                    Description = "IPhone description goes here.",
                    Price = 800,
                },
                new Product
                {
                    Name = "Laptop",
                    Description = "Laptop description goes here.",
                    Price = 895,
                },
                new Product
                {
                    Name = "Printer",
                    Description = "Printer description goes here.",
                    Price = 350,
                },
                new Product
                {
                    Name = "Scanner",
                    Description = "Scanner description goes here.",
                    Price = 475,
                });
        }
    }
}
