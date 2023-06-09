namespace WebApi.Models
{
    public class Todo
    {

        public int? Id { get; set; }
        public DateTime DateCreated { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int Status { get; set; }
        public Guid? UserId { get; set; }
    }
}