using BarsTest.Models;
using Newtonsoft.Json;
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

        public JsonResult load()//(int? start, int? limit)
        {            
            return Json(new
            {
                success = true,
                persons = new List<Person> { new Person(3, "95746325", "smith@me.com", 1999), new Person(4, "95746325", "smith@me.com", 1999) }
            }, JsonRequestBehavior.AllowGet);            
        }

       

        [HttpPost]
        public JsonResult create(Person data)
        {
            //insert Create code
            return Json(new
            {
                data = new Person(1, "95746325", "smith@me.com", 1999),
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
        public JsonResult delete(int? data)
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