using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Unitrack.Server.Models
{
    [Table("Course")]
    public class Course
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public required string Name { get; set; }

        [Required]
        public int Num { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Description { get; set; }

        [Required]
        public int Credits { get; set; }

        [Required]
        [StringLength(4, MinimumLength = 4, ErrorMessage = "Code must be exactly 4 characters.")]

        public required string Department { get; set; }
    }
}