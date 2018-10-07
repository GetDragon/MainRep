using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CoreAppNet.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class SmartFlowController : ControllerBase
    {
        public SmartFlowController()
        {
        }

        /// <summary>
        /// Obtiene todas las tareas disponibles.
        /// </summary>
        [HttpGet]
        public List<string> GetAllTasks()
        {
            return new List<string>();
        }

        [HttpGet("{id}")]
        public string GetDetailTask(string id)
        {
            return string.Empty;
        }

        [HttpPost]
        public List<string> GetAllTasksFilter(string filtro)
        {
            return new List<string>();
        }
    }
}
