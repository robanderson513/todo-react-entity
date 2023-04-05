using WebApi.DAL;
using WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Services
{
    public class UserService
    {
        private readonly TodoContext _dataBase;
        public UserService(TodoContext context)
        {
            _dataBase = context;
        }

        public IEnumerable<User> GetUsers() =>
            _dataBase.Users.ToListAsync().Result;

        public User? GetUserById(int id) =>
             _dataBase.Users.Find(id);

        public User SaveUser(User user)
        {
            var userSave = user.Id is null ? _dataBase.Users.Add(user).Entity : UpdateUserData(user);
            _dataBase.SaveChangesAsync();

            return userSave;
        }

        private User UpdateUserData(User user)
        {
            if (_dataBase.Users.Find(user.Id) is User dbUser)
            {
                dbUser.Name = user.Name;
                dbUser.Email = user.Email;
            }

            return user;
        }

        public IResult DeleteUser(int id)
        {
            if (_dataBase.Users.Find(id) is User dbUser)
            {
                _dataBase.Users.Remove(dbUser);
                _dataBase.SaveChangesAsync();
                return Results.Ok(dbUser);
            }

            return Results.NotFound();
        }
    }
}
