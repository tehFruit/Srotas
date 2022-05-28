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
            return await _context.Koloneles.Where(x => x.Parduotas == false).ToListAsync();
        }

        [HttpGet]
        [Route("GetSpecific/{skersmuo}")]
        public async Task<ActionResult<Koloneles>> GetSpecKoloneles([FromRoute] int skersmuo)
        {
            var koloneles = await _context.Koloneles.Where(x => x.Parduotas == false).Where(x => x.Skersmuo == skersmuo).OrderBy(x => x.Kaina).FirstOrDefaultAsync();
            if(koloneles == null)
            {
                return NotFound("Nėra tinkamų kolonėių");
            }
            return Ok(koloneles);
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
            var existingSpeaker = await _context.Koloneles.FirstOrDefaultAsync(x => x.Id == id);
            if (existingSpeaker != null)
            {
                existingSpeaker.Kaina = koloneles.Kaina;
                existingSpeaker.Pavadinimas = koloneles.Pavadinimas;
                existingSpeaker.Parduotas = koloneles.Parduotas;
                existingSpeaker.Gamintojas = koloneles.Gamintojas;
                existingSpeaker.Skersmuo = koloneles.Skersmuo;

                await _context.SaveChangesAsync();
                return Ok(existingSpeaker);
            }
            return NotFound("Speaker not found");
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
