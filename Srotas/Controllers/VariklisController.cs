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
    public class VariklisController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VariklisController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Variklis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Variklis>>> GetVariklis()
        {
            return await _context.Variklis.ToListAsync();
        }

        // GET: api/Variklis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Variklis>> GetVariklis(int id)
        {
            var variklis = await _context.Variklis.FindAsync(id);

            if (variklis == null)
            {
                return NotFound("Engine not found");
            }

            return variklis;
        }

        // PUT: api/Variklis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVariklis(int id, [FromBody] Variklis variklis)
        {
            var existingEngine = await _context.Variklis.FirstOrDefaultAsync(x => x.Id == id);
            if (existingEngine != null)
            {
                existingEngine.Kaina = variklis.Kaina;
                existingEngine.Pavadinimas = variklis.Pavadinimas;
                existingEngine.Parduotas = variklis.Parduotas;
                existingEngine.Gamintojas = variklis.Gamintojas;
                existingEngine.Turis = variklis.Turis;
                existingEngine.KuroTipas = variklis.KuroTipas;

                await _context.SaveChangesAsync();
                return Ok(existingEngine);
            }
            return NotFound("Wheels not found");
        }

        // POST: api/Variklis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Variklis>> PostVariklis(Variklis variklis)
        {
            _context.Variklis.Add(variklis);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVariklis", new { id = variklis.Id }, variklis);
        }

        // DELETE: api/Variklis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVariklis(int id)
        {
            var variklis = await _context.Variklis.FindAsync(id);
            if (variklis == null)
            {
                return NotFound();
            }

            _context.Variklis.Remove(variklis);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VariklisExists(int id)
        {
            return _context.Variklis.Any(e => e.Id == id);
        }
    }
}
