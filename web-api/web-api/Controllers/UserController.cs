using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _service;
        public UserController(UserService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<User> Get() => _service.GetUsers();

        [HttpGet("{id}")]
        public User? Get(int id) => _service.GetUserById(id);

        [HttpPost]
        public void Post([FromBody] User user) => _service.SaveUser(user);

        [HttpDelete("{id}")]
        public IResult Delete(int id) => _service.DeleteUser(id);
    }
}
