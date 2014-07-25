using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace YouTubeViewer.Controllers
{
    public class ExtJS5Controller : Controller
    {
        //
        // GET: /ExtJS5/
        //private YouTubeViewerDb db = new YouTubeViewerDb();

        public ActionResult Index()
        {

            return View();

            //return View("Index", "", GetSerializedCategoriesVms());
        }

        //public string GetSerializedCategoriesVms()
        //{

        //    var categories = from r in _db.Categories
        //                orderby r.CategoryName ascending
        //                select r;
        //    return JsonConvert.SerializeObject(categories);



        //    //var courses = new[]
        //    //{
        //    //    new CourseVm {Number = "1", Name = "Name 1", Instructor = "Ins1"},
        //    //    new CourseVm {Number = "1", Name = "Name 1", Instructor = "Ins1"},
        //    //    new CourseVm {Number = "1", Name = "Name 1", Instructor = "Ins1"}
        //    //};
        //    ////var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }
        //    //return JsonConvert.SerializeObject(courses);
        //}
    }

    public class CourseVm
    {
        public string Number { get; set; }
        public string Name { get; set; }
        public string Instructor { get; set; }
    }
}