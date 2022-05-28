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
    public class DurysController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DurysController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Durys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Durys>>> GetDurys()
        {
            return await _context.Durys.Where(x => x.Parduotas == false ).ToListAsync();
        }

        [HttpGet]
        [Route("GetSpecific/{gamintojas}/{modelis}/{metai}/{spalva}")]
        public async Task<ActionResult<Durys>> GetSpecDurys([FromRoute] string gamintojas, [FromRoute] string modelis, [FromRoute] int metai, [FromRoute] string spalva)
        {
            var doors = await _context.Durys.Where(x => x.Gamintojas == gamintojas).Where(x => x.Parduotas == false)
                                      .Where(x => x.Modelis == modelis)
                                      .Where(x => x.PagaminimoMetai == metai)
                                      .Where(x => x.Spalva == spalva).FirstOrDefaultAsync();
            if(doors == null)
            {
                return NotFound("Nėra tinkamų durų");
            }
            return Ok(doors);
        }

        // GET: api/Durys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Durys>> GetDurys(int id)
        {
            var durys = await _context.Durys.FindAsync(id);

            if (durys == null)
            {
                return NotFound();
            }

            return durys;
        }

        // PUT: api/Durys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDurys(int id, Durys durys)
        {
            var existingDurys = await _context.Durys.FirstOrDefaultAsync(x => x.Id == id);
            if (existingDurys != null)
            {
                existingDurys.Kaina = durys.Kaina;
                existingDurys.Pavadinimas = durys.Pavadinimas;
                existingDurys.Parduotas = durys.Parduotas;
                existingDurys.Gamintojas = durys.Gamintojas;
                existingDurys.Modelis = durys.Modelis;
                existingDurys.PagaminimoMetai = durys.PagaminimoMetai;
                existingDurys.Spalva = durys.Spalva;

                await _context.SaveChangesAsync();
                return Ok(existingDurys);
            }
            return NotFound("Door not found");
        }

        // POST: api/Durys
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Durys>> PostDurys(Durys durys)
        {
            _context.Durys.Add(durys);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDurys", new { id = durys.Id }, durys);
        }

        // DELETE: api/Durys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDurys(int id)
        {
            var durys = await _context.Durys.FindAsync(id);
            if (durys == null)
            {
                return NotFound();
            }

            _context.Durys.Remove(durys);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DurysExists(int id)
        {
            return _context.Durys.Any(e => e.Id == id);
        }
    }
}
