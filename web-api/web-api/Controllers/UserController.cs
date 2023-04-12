using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
