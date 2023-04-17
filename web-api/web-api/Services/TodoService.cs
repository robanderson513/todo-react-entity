using Microsoft.EntityFrameworkCore;
using WebApi.DAL;
using WebApi.Models;

namespace WebApi.Services
{
    public class TodoService
    {       
        private readonly TodoContext _dataBase;
        public TodoService(TodoContext context)
        {
            _dataBase = context;
        }

        public IEnumerable<Todo> GetTodos() =>
            _dataBase.Todos.ToListAsync().Result;

        public Todo? GetTodoById(int id) =>
             _dataBase.Todos.Find(id);

        public Todo SaveTodo(Todo todo)
        {
            var todoSave = todo.Id is null ? _dataBase.Todos.Add(todo).Entity : UpdateTodoData(todo);
            _dataBase.SaveChangesAsync();

            return todoSave;
        }

        private Todo UpdateTodoData(Todo todo)
        {
            if (_dataBase.Todos.Find(todo.Id) is Todo dbTodo)
            {
                dbTodo.Title = todo.Title;
                dbTodo.Description = todo.Description;
            }

            return todo;
        }

        public IResult DeleteTodo(int id)
        {
            if (_dataBase.Todos.Find(id) is Todo dbTodo)
            {
                _dataBase.Todos.Remove(dbTodo);
                _dataBase.SaveChangesAsync();
                return Results.Ok(dbTodo);
            }

            return Results.NotFound();
        }
    }
}

