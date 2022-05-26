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
    public class KapotasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public KapotasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Kapotas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kapotas>>> GetKapotas()
        {
            return await _context.Kapotas.ToListAsync();
        }

        [HttpGet]
        [Route("GetSpecific/{gamintojas}/{modelis}/{metai}/{spalva}")]
        public async Task<ActionResult<Kapotas>> GetSpecKapotas([FromRoute] string gamintojas, [FromRoute] string modelis, [FromRoute] int metai, [FromRoute] string spalva)
        {
            var kapotas = await _context.Kapotas.Where(x => x.Gamintojas == gamintojas)
                                                .Where(x => x.Modelis == modelis)
                                                .Where(x => x.PagaminimoMetai == metai)
                                                .Where(x => x.Spalva == spalva).FirstOrDefaultAsync();
            if(kapotas == null)
            {
                return NotFound("Nėra tinkamo kapoto");
            }
            return Ok(kapotas);
        }

        // GET: api/Kapotas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Kapotas>> GetKapotas(int id)
        {
            var kapotas = await _context.Kapotas.FindAsync(id);

            if (kapotas == null)
            {
                return NotFound();
            }

            return kapotas;
        }

        // PUT: api/Kapotas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKapotas(int id, Kapotas kapotas)
        {
            var existingKapotas = await _context.Kapotas.FirstOrDefaultAsync(x => x.Id == id);
            if (existingKapotas != null)
            {
                existingKapotas.Kaina = kapotas.Kaina;
                existingKapotas.Pavadinimas = kapotas.Pavadinimas;
                existingKapotas.Parduotas = kapotas.Parduotas;
                existingKapotas.Gamintojas = kapotas.Gamintojas;
                existingKapotas.Modelis = kapotas.Modelis;
                existingKapotas.PagaminimoMetai = kapotas.PagaminimoMetai;
                existingKapotas.Spalva = kapotas.Spalva;

                await _context.SaveChangesAsync();
                return Ok(existingKapotas);
            }
            return NotFound("Hood lid not found");
        }

        // POST: api/Kapotas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Kapotas>> PostKapotas(Kapotas kapotas)
        {
            _context.Kapotas.Add(kapotas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKapotas", new { id = kapotas.Id }, kapotas);
        }

        // DELETE: api/Kapotas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKapotas(int id)
        {
            var kapotas = await _context.Kapotas.FindAsync(id);
            if (kapotas == null)
            {
                return NotFound();
            }

            _context.Kapotas.Remove(kapotas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KapotasExists(int id)
        {
            return _context.Kapotas.Any(e => e.Id == id);
        }
    }
}
