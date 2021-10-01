using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class SiteDetails
    {
        [Key]
        public int SiteDetailsID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Country { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string City { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Latitude { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Longitude { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Description { get; set; }
        public ICollection<ZoneDetails> Zone { get; set; }
    }
}
