﻿using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class User
    {
        public int? Id { get; set; }

        [Required]
        public string? Name { get; set; }
        public string? Email { get; set; }
    }
}
