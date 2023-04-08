using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public TodoController() { }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Todo
            {
                DateCreated = DateTime.Now.AddDays(index),
                Title = "Mock Todo",
                Description = Summaries[Random.Shared.Next(Summaries.Length)],
                Status = 1
            })
            .ToArray();
        }
    }
}