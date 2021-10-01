using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class ZoneDetails
    {
        [Key]
        public int ZoneDetailsID { get; set; }


        [Column(TypeName = "nvarchar(50)")]
        public string Designation { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Description { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string TypeAgri { get; set; }
        public int SiteID { get; set; }
        public SiteDetails  Site { get; set; }
        public ICollection<DeviceDetails> Device { get; set; }
    }
}
