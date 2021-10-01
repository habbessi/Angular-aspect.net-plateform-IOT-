using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class DeviceDetails
    {
        [Key]
        public int DeviceDetailsID { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Type { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Description { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Unite { get; set; }
        public int ZoneID { get; set; }
        public ZoneDetails Zone { get; set; }

    }
}
