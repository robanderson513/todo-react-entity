using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.DAL
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }

    }
}
