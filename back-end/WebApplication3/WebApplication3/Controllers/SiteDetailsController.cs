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
    public class SiteDetailsController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public SiteDetailsController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/SiteDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SiteDetails>>> GetSiteDetails()
        {
            return await _context.SiteDetails.ToListAsync();
        }

        // GET: api/SiteDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SiteDetails>> GetSiteDetails(int id)
        {
            var siteDetails = await _context.SiteDetails.FindAsync(id);

            if (siteDetails == null)
            {
                return NotFound();
            }

            return siteDetails;
        }

        // PUT: api/SiteDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSiteDetails(int id, SiteDetails siteDetails)
        {
            if (id != siteDetails.SiteDetailsID)
            {
                return BadRequest();
            }

            _context.Entry(siteDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SiteDetailsExists(id))
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

        // POST: api/SiteDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SiteDetails>> PostSiteDetails(SiteDetails siteDetails)
        {
            _context.SiteDetails.Add(siteDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSiteDetails", new { id = siteDetails.SiteDetailsID }, siteDetails);
        }

        // DELETE: api/SiteDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSiteDetails(int id)
        {
            var siteDetails = await _context.SiteDetails.FindAsync(id);
            if (siteDetails == null)
            {
                return NotFound();
            }

            _context.SiteDetails.Remove(siteDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SiteDetailsExists(int id)
        {
            return _context.SiteDetails.Any(e => e.SiteDetailsID == id);
        }
    }
}
