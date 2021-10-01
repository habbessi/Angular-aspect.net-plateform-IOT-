using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApplication3.Models
{
    public class UserDetailsContext : IdentityDbContext
    {
        public UserDetailsContext(DbContextOptions<UserDetailsContext> options) : base(options)
        {

        }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<SiteDetails> SiteDetails { get; set; }
        public DbSet<ZoneDetails> ZoneDetails { get; set; }
        public DbSet<DeviceDetails> DeviceDetails { get; set; }
        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<Emulateur> Emulateur { get; set; }


    }
}
