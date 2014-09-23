using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EMSPEED2.Controllers
{
    public class AlertsController : ApiController
    {


        Alerts[] items = new Alerts[] 
        { 
            new Alerts { fa = "comment", text = "New Web API Comment", time = "4 minutes ago" }, 
            new Alerts { fa = "twitter", text = "3 New Followers", time = "12 minutes ago" }, 
            new Alerts { fa = "envelope", text = "Message Sent", time = "12 minutes ago" },
            new Alerts { fa = "tasks", text = "3 New Followers", time = "27 minutes ago" },
            new Alerts { fa = "upload", text = "New Task", time = "43 minutes ago" },
            new Alerts { fa = "bolt", text = "Server Rebooted", time = "11:32 AM" },
            new Alerts { fa = "warning", text = "Server Not Responding", time = "10:57 AM" },
            new Alerts { fa = "shopping-cart", text = "New Order Placed", time = "9:49 AM" },
            new Alerts { fa = "money", text = "Payment Received", time = "Yesterday" },
        };

        public IEnumerable<Alerts> GetAllItems()
        {
            return items;
        } 


        // GET: api/Alerts/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Alerts
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Alerts/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Alerts/5
        public void Delete(int id)
        {
        }
    }

    public class Alerts
    {
        public string fa { get; set; }
        public string text { get; set; }
        public string time { get; set; }
    }
}
