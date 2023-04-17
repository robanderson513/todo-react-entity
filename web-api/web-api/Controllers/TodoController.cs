using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoService _service;

        public TodoController(TodoService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Todo> Get() => _service.GetTodos();          

        [HttpGet("{id}")]
        public Todo? Get(int id) => _service.GetTodoById(id);

        [HttpPost]
        public void Post([FromBody] Todo todo) => _service.SaveTodo(todo);

        [HttpDelete("{id}")]
        public IResult Delete(int id) => _service.DeleteTodo(id);
    }
}