using BarsTest.Models;
using BarsTest.Repository;
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

        public JsonResult load()
        {
            PersonRepository PersonRepo = new PersonRepository();
            List<Person> PersonsFromDB = PersonRepo.GetAllPersons();

            return Json((new
            {
                success = true,
                persons = PersonsFromDB
            }), JsonRequestBehavior.AllowGet);

        }

       
        //не может прочитать, то что создал в create (проблема с )
        [HttpPost]
        public JsonResult create(Person person)
        {

            //insert Create code
            try
            {
                if (ModelState.IsValid)
                {
                    PersonRepository PersonRepo = new PersonRepository();
                    PersonRepo.AddPerson(person);

                    ViewBag.Message = "Records added successfully.";

                }

                return Json(new
                {
                    //data = new Person(1, "95746325", "smith@me.com", 1999),
                    success = true,
                    message = "Create method called successfully"
                });
            }
            catch
            {
                return Json(new
                {
                    //data = new Person(1, "95746325", "smith@me.com", 1999),
                    success = true,
                    message = "Error"
                });
            }           
           
        }

        [HttpPost]
        public JsonResult update(Person data)
        {
            try
            {
                PersonRepository PersonRepo = new PersonRepository();

                PersonRepo.UpdatePerson(data);
               
                return Json(new
                {
                    success = true,
                    message = "Update method called successfully"
                });
            }
            catch
            {                
                return Json(new
                {
                    success = true,
                    message = "Error"
                });
            }
            
        }

        [HttpPost]
        public JsonResult delete(int id)
        {
            //insert Delete code
            try
            {
                PersonRepository PersonRepo = new PersonRepository();
                if (PersonRepo.DeletePerson(id))
                {
                    ViewBag.AlertMsg = "Employee details deleted successfully";

                }
                return Json(new
                {
                    success = true,
                    message = "Delete method called successfully"
                });
            }
            catch
            {
                return Json(new
                {
                    success = true,
                    message = "Error"
                });
            }
            
        }

    }
}