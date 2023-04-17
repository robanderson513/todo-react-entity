using Microsoft.AspNetCore.Mvc;
using web_api.Services;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoService _service;

        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public TodoController(TodoService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Todo> Get() =>
            Enumerable.Range(1, 5).Select(index => new Todo
            {
                Id = index,
                DateCreated = DateTime.Now.AddDays(index),
                Title = "Mock Todo",
                Description = Summaries[Random.Shared.Next(Summaries.Length)],
                Status = 1
            })
            .ToArray();


        [HttpGet("{id}")]
        public Todo? Get(int id) => _service.GetTodoById(id);

        [HttpPost]
        public void Post([FromBody] Todo todo) => _service.SaveTodo(todo);

        [HttpDelete("{id}")]
        public IResult Delete(int id) => _service.DeleteTodo(id);
    }
}