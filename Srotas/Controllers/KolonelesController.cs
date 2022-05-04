#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KolonelesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public KolonelesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Koloneles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Koloneles>>> GetKoloneles()
        {
            return await _context.Koloneles.ToListAsync();
        }

        // GET: api/Koloneles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Koloneles>> GetKoloneles(int id)
        {
            var koloneles = await _context.Koloneles.FindAsync(id);

            if (koloneles == null)
            {
                return NotFound();
            }

            return koloneles;
        }

        // PUT: api/Koloneles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKoloneles(int id, Koloneles koloneles)
        {
            if (id != koloneles.Id)
            {
                return BadRequest();
            }

            _context.Entry(koloneles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KolonelesExists(id))
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

        // POST: api/Koloneles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Koloneles>> PostKoloneles(Koloneles koloneles)
        {
            _context.Koloneles.Add(koloneles);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKoloneles", new { id = koloneles.Id }, koloneles);
        }

        // DELETE: api/Koloneles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKoloneles(int id)
        {
            var koloneles = await _context.Koloneles.FindAsync(id);
            if (koloneles == null)
            {
                return NotFound();
            }

            _context.Koloneles.Remove(koloneles);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KolonelesExists(int id)
        {
            return _context.Koloneles.Any(e => e.Id == id);
        }
    }
}
