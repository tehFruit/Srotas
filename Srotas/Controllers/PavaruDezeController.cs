using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PavaruDezeController : Controller
    {
        private readonly AppDbContext dbContext;

        public PavaruDezeController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //GET all WHEELS
        // api/Ratai
        [HttpGet]
        public async Task<IActionResult> GetAllPavaruDezes()
        {
            var pavaruDezes = await dbContext.PavaruDeze.ToListAsync();
            return Ok(pavaruDezes);
        }

        [HttpGet]
        [Route("GetSpecific/{gamintojas}/{tipas}")]
        public async Task<IActionResult> GetSpecGearbox([FromRoute] string gamintojas, [FromRoute] string tipas)
        {
            var gearbox = await dbContext.PavaruDeze.Where(x => x.Gamintojas == gamintojas).Where(x => x.Tipas == tipas).OrderBy(x => x.Kaina).FirstOrDefaultAsync();
            if (gearbox == null)
            {
                return NotFound("Nėra tinkamos pavarų dėžės");
            }
            return Ok(gearbox);
        }

        //Get one PavaruDezes by id
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetPavaruDezes([FromRoute] int id)
        {
            var pavaruDeze = await dbContext.PavaruDeze.FirstOrDefaultAsync(x => x.Id == id);
            if (pavaruDeze == null)
            {
                return NotFound("Pavaru deze not found");
            }

            return Ok(pavaruDeze);
        }

        //Add PavaruDeze to db
        [HttpPost]
        public async Task<IActionResult> AddPavaruDeze([FromBody] PavaruDeze pavaruDeze)
        {
            pavaruDeze.Parduotas = false;
            dbContext.PavaruDeze.Add(pavaruDeze);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPavaruDezes), new { id = pavaruDeze.Id }, pavaruDeze);
        }

        //Update PavaruDeze
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdatePavaruDeze([FromRoute] int id, [FromBody] PavaruDeze pavaruDeze)
        {
            var existingPavaruDeze = await dbContext.PavaruDeze.FirstOrDefaultAsync(x => x.Id == id);
            if (existingPavaruDeze != null)
            {
                existingPavaruDeze.Kaina = pavaruDeze.Kaina;
                existingPavaruDeze.Pavadinimas = pavaruDeze.Pavadinimas;
                existingPavaruDeze.Parduotas = pavaruDeze.Parduotas;
                existingPavaruDeze.Tipas = pavaruDeze.Tipas;
                existingPavaruDeze.Gamintojas = pavaruDeze.Gamintojas;

                await dbContext.SaveChangesAsync();
                return Ok(existingPavaruDeze);
            }
            return NotFound("Pavaru deze not found");
        }

        //Delete PavaruDeze
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeletePavaruDeze([FromRoute] int id)
        {
            var existingPavaruDeze = await dbContext.PavaruDeze.FirstOrDefaultAsync(x => x.Id == id);
            if (existingPavaruDeze != null)
            {
                dbContext.PavaruDeze.Remove(existingPavaruDeze);
                await dbContext.SaveChangesAsync();
                return Ok(existingPavaruDeze);
            }
            return NotFound("Wheels not found");
        }

    }
}
