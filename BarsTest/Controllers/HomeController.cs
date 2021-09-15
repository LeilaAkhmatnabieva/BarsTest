using BarsTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BarsTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult load(int? start, int? limit)
        {
            var person = new List<Person> { };
            if (start.HasValue && start.Value == 0)
            {
                person = new List<Person> {
                    new Person(1,"95746325","smith@me.com", "1999")
                    ,new Person(2,"95746325","smith@me.com", "1999")
                };
            }
            else if (start.HasValue && start.Value == 2)
            {
                person = new List<Person> {
                    new Person(3,"95746325","smith@me.com", "1999")
                    ,new Person(4,"95746325","smith@me.com", "1999")
                };
            }

            return Json(new
            {
                total = 4,
                data = person,
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult create(Person data)
        {
            //insert Create code
            return Json(new
            {
                data = new Person(1, "95746325", "smith@me.com", "1999"),
                success = true,
                message = "Create method called successfully"
            });
        }

        [HttpPost]
        public JsonResult update(Person data)
        {
            Console.WriteLine(data.birthday);
            //insert Update code
            return Json(new
            {
                success = true,
                message = "Update method called successfully"
            });
        }

        [HttpPost]
        public JsonResult delete(int data)
        {
            //insert Delete code
            return Json(new
            {
                success = true,
                message = "Delete method called successfully"
            });
        }

    }
}