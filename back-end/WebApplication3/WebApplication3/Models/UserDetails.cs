using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class UserDetails
    {
        [Key]
        public int UserDetailsID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }
        [Column(TypeName = "nvarchar(8)")]
        public string PhoneNum { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Birthday { get; set; }
        [Column(TypeName = "nvarchar(8)")]
        public string CIN { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; }
       
    }
}
