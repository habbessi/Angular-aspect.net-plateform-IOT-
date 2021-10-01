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
    public class DeviceDetailsController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public DeviceDetailsController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/DeviceDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeviceDetails>>> GetDeviceDetails()
        {
            return await _context.DeviceDetails.ToListAsync();
        }

        // GET: api/DeviceDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeviceDetails>> GetDeviceDetails(int id)
        {
            var deviceDetails = await _context.DeviceDetails.FindAsync(id);

            if (deviceDetails == null)
            {
                return NotFound();
            }

            return deviceDetails;
        }

        // PUT: api/DeviceDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeviceDetails(int id, DeviceDetails deviceDetails)
        {
            if (id != deviceDetails.DeviceDetailsID)
            {
                return BadRequest();
            }

            _context.Entry(deviceDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeviceDetailsExists(id))
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

        // POST: api/DeviceDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DeviceDetails>> PostDeviceDetails(DeviceDetails deviceDetails)
        {
            _context.DeviceDetails.Add(deviceDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeviceDetails", new { id = deviceDetails.DeviceDetailsID }, deviceDetails);
        }

        // DELETE: api/DeviceDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeviceDetails(int id)
        {
            var deviceDetails = await _context.DeviceDetails.FindAsync(id);
            if (deviceDetails == null)
            {
                return NotFound();
            }

            _context.DeviceDetails.Remove(deviceDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeviceDetailsExists(int id)
        {
            return _context.DeviceDetails.Any(e => e.DeviceDetailsID == id);
        }
    }
}
