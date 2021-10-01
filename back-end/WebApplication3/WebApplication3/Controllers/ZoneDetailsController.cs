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
    public class ZoneDetailsController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public ZoneDetailsController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/ZoneDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ZoneDetails>>> GetZoneDetails()
        {
            return await _context.ZoneDetails.ToListAsync();
        }

        // GET: api/ZoneDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ZoneDetails>> GetZoneDetails(int id)
        {
            var zoneDetails = await _context.ZoneDetails.FindAsync(id);

            if (zoneDetails == null)
            {
                return NotFound();
            }

            return zoneDetails;
        }

        // PUT: api/ZoneDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutZoneDetails(int id, ZoneDetails zoneDetails)
        {
            if (id != zoneDetails.ZoneDetailsID)
            {
                return BadRequest();
            }

            _context.Entry(zoneDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZoneDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ZoneDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ZoneDetails>> PostZoneDetails(ZoneDetails zoneDetails)
        {
            _context.ZoneDetails.Add(zoneDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetZoneDetails", new { id = zoneDetails.ZoneDetailsID }, zoneDetails);
        }

        // DELETE: api/ZoneDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteZoneDetails(int id)
        {
            var zoneDetails = await _context.ZoneDetails.FindAsync(id);
            if (zoneDetails == null)
            {
                return NotFound();
            }

            _context.ZoneDetails.Remove(zoneDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ZoneDetailsExists(int id)
        {
            return _context.ZoneDetails.Any(e => e.ZoneDetailsID == id);
        }
    }
}
