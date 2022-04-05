using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RataiController : Controller
    {
        private readonly AppDbContext dbContext;

        public RataiController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //GET all WHEELS
        // api/Ratai
        [HttpGet]
        public async Task<IActionResult> GetAllWheels()
        {
            var wheels = await dbContext.Ratai.ToListAsync();
            return Ok(wheels);
        }

        //Get one WHEELS by id
        // api/Cars/5
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetWheels([FromRoute] int id)
        {
            var car = await dbContext.Ratai.FirstOrDefaultAsync(x => x.Id == id);
            if (car == null)
            {
                return NotFound("Wheel not found");
            }

            return Ok(car);
        }

        //Add WHEELS to db
        [HttpPost]
        public async Task<IActionResult> AddWheel([FromBody] Ratai wheels)
        {
            wheels.Parduotas = false;
            dbContext.Ratai.Add(wheels);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetWheels), new { id = wheels.Id }, wheels);
        }

        //Update WHEELS
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateWheels([FromRoute] int id, [FromBody] Ratai wheels)
        {
            var existingWheels = await dbContext.Ratai.FirstOrDefaultAsync(x => x.Id == id);
            if (existingWheels != null)
            {
                existingWheels.Kaina = wheels.Kaina;
                existingWheels.Pavadinimas = wheels.Pavadinimas;
                existingWheels.Parduotas = wheels.Parduotas;
                existingWheels.Dydis = wheels.Dydis;
                existingWheels.Plotis = wheels.Plotis;
                existingWheels.Gamintojas = wheels.Gamintojas;

                await dbContext.SaveChangesAsync();
                return Ok(existingWheels);
            }
            return NotFound("Wheels not found");
        }

        //Delete WHEELS
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteWheels([FromRoute] int id)
        {
            var existingWheels = await dbContext.Ratai.FirstOrDefaultAsync(x => x.Id == id);
            if (existingWheels != null)
            {
                dbContext.Ratai.Remove(existingWheels);
                await dbContext.SaveChangesAsync();
                return Ok(existingWheels);
            }
            return NotFound("Wheels not found");
        }
    }
}
