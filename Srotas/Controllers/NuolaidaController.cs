using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NuolaidaController : Controller
    {
        private readonly AppDbContext dbContext;

        public NuolaidaController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //GET all Nuolaidos
        // api/Nuolaidos
        [HttpGet]
        public async Task<IActionResult> GetAllNuolaidos()
        {
            var nuolaidos = await dbContext.Nuolaida.ToListAsync();
            return Ok(nuolaidos);
        }

        //Get one Nuolaida by id
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetNuolaidos([FromRoute] int id)
        {
            var nuolaida = await dbContext.Nuolaida.FirstOrDefaultAsync(x => x.Id == id);
            if (nuolaida == null)
            {
                return NotFound("Nuolaida not found");
            }

            return Ok(nuolaida);
        }

        //Add Nuolaidos to db
        [HttpPost]
        public async Task<IActionResult> AddNuolaida([FromBody] Nuolaida nuolaida)
        {
            nuolaida.ArPanaudota = false;
            dbContext.Nuolaida.Add(nuolaida);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNuolaidos), new { id = nuolaida.Id }, nuolaida);
        }

        //Update Nuolaidos
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateNuolaida([FromRoute] int id, [FromBody] Nuolaida nuolaida)
        {
            var existingNuolaida = await dbContext.Nuolaida.FirstOrDefaultAsync(x => x.Id == id);
            if (existingNuolaida != null)
            {
                existingNuolaida.Procentai = nuolaida.Procentai;
                existingNuolaida.Kodas = nuolaida.Kodas;

                await dbContext.SaveChangesAsync();
                return Ok(existingNuolaida);
            }
            return NotFound("Nuolaida not found");
        }

        //Delete Nuolaida
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteNuolaida([FromRoute] int id)
        {
            var existingNuolaida = await dbContext.Nuolaida.FirstOrDefaultAsync(x => x.Id == id);
            if (existingNuolaida != null)
            {
                dbContext.Nuolaida.Remove(existingNuolaida);
                await dbContext.SaveChangesAsync();
                return Ok(existingNuolaida);
            }
            return NotFound("Nuolaida not found");
        }
    }
}
