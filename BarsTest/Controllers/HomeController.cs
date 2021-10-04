using BarsTest.Models;
using BarsTest.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace BarsTest.Controllers
{
    public class JsonNetResult : JsonResult
    {
        public Encoding ContentEncoding { get; set; }
        public string ContentType { get; set; }
        public object Data { get; set; }

        public JsonSerializerSettings SerializerSettings { get; set; }
        public Formatting Formatting { get; set; }

        public JsonNetResult()
        {
            SerializerSettings = new JsonSerializerSettings();
        }

        public override void ExecuteResult(ControllerContext context)
        {
            HttpResponseBase response = context.HttpContext.Response;

            response.ContentType = !string.IsNullOrEmpty(ContentType)
              ? ContentType
              : "application/json";

            if (ContentEncoding != null)
                response.ContentEncoding = ContentEncoding;

            if (Data != null)
            {
                JsonTextWriter writer = new JsonTextWriter(response.Output) { Formatting = Formatting };

                JsonSerializer serializer = JsonSerializer.Create(SerializerSettings);
                serializer.Serialize(writer, Data);

                writer.Flush();
            }
        }
    }

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult load(Person person = null)
        {
            try
            {
                PersonRepository PersonRepo = new PersonRepository();
                List<Person> PersonsFromDB = PersonRepo.GetAllPersons(person);
                var result = new
                {
                    success = true,
                    persons = PersonsFromDB,
                };

                return Json(result, new JsonSerializerSettings { DateFormatString = "yyyy-MM-dd" });

            }
            catch (Exception ex)
            {

                var result = new
                {
                    success = false,
                    exept = ex
                };

                return Json(result);

            }
        }

        public ActionResult Json(Object obj, JsonSerializerSettings serializerSettings, JsonRequestBehavior requestBehavior = JsonRequestBehavior.AllowGet)
        {
            JsonNetResult jsonNetResult = new JsonNetResult();

            jsonNetResult.Formatting = Newtonsoft.Json.Formatting.None;
            jsonNetResult.Data = obj;
            jsonNetResult.SerializerSettings = serializerSettings;
            jsonNetResult.JsonRequestBehavior = requestBehavior;

            return jsonNetResult;
        }

        //public ActionResult search(Person person)
        //{
        //    PersonRepository PersonRepo = new PersonRepository();
        //    List<Person> PersonsFromDB = PersonRepo.GetPerson(person);
        //    var result = new
        //    {
        //        success = true,
        //        persons = PersonsFromDB,
        //    };

        //    return Json(result, new JsonSerializerSettings { DateFormatString = "yyyy-MM-dd" });
        //}

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
                    success = true,
                    message = "Create method called successfully"
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