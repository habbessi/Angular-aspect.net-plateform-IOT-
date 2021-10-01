using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class Emulateur
    {
        [Key]
        public int DeviceID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Temperature { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Humudite { get; set; }
        public DateTime Date { get; set; }
    }
}
