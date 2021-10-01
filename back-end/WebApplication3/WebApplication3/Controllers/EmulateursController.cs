using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmulateursController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public EmulateursController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/Emulateurs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Emulateur>>> GetEmulateur()
        {
            return await _context.Emulateur.ToListAsync();
        }

        // GET: api/Emulateurs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Emulateur>> GetEmulateur(int id)
        {
            var emulateur = await _context.Emulateur.FindAsync(id);

            if (emulateur == null)
            {
                return NotFound();
            }

            return emulateur;
        }


        // POST: api/Emulateurs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Emulateur>> PostEmulateur(Emulateur emulateur)
        {
            _context.Emulateur.Add(emulateur);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmulateur", new { id = emulateur.DeviceID }, emulateur);
        }


    }
}
