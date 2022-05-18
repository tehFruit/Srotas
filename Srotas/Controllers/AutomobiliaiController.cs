using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AutomobiliaiController : Controller
    {
        private readonly AppDbContext dbContext;

        public AutomobiliaiController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var cars = await dbContext.AutomobilioSkelbimas.ToListAsync();
            return Ok(cars);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetCar([FromRoute] int id)
        {
            var car = await dbContext.AutomobilioSkelbimas.FirstOrDefaultAsync(x => x.Id == id);
            if (car == null)
            {
                return NotFound("Car not found");
            }

            return Ok(car);
        }

        [HttpPost]
        public async Task<IActionResult> AddCar([FromBody] AutomobilioSkelbimas car)
        {
            car.Parduotas = false;
            dbContext.AutomobilioSkelbimas.Add(car);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCar), new { id = car.Id }, car);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateCar([FromRoute] int id, [FromBody] AutomobilioSkelbimas car)
        {
            var existingCar = await dbContext.AutomobilioSkelbimas.FirstOrDefaultAsync(x => x.Id == id);
            if (existingCar != null)
            {
                existingCar.Gamintojas = car.Gamintojas;
                existingCar.Modelis = car.Modelis;
                existingCar.Rida = car.Rida;
                existingCar.PagaminimoMetai = car.PagaminimoMetai;
                existingCar.PavaruDezesTipas = car.PavaruDezesTipas;
                existingCar.KuroTipas = car.KuroTipas;
                existingCar.Spalva = car.Spalva;
                existingCar.Kaina = car.Kaina;
                existingCar.TuriRatus = car.TuriRatus;
                existingCar.RatuDydis = car.RatuDydis;
                existingCar.RatuPlotis = car.RatuPlotis;
                existingCar.TuriVarikli = car.TuriVarikli;
                existingCar.VariklioTuris = car.VariklioTuris;
                existingCar.TuriPavaruDeze = car.TuriPavaruDeze;
                existingCar.TuriKoloneles = car.TuriKoloneles;
                existingCar.KoloneliuSkersmuo = car.KoloneliuSkersmuo;
                existingCar.TuriKapota = car.TuriKapota;
                existingCar.TuriDuris = car.TuriDuris;
                existingCar.Parduotas = car.Parduotas;

                await dbContext.SaveChangesAsync();
                return Ok(existingCar);
            }
            return NotFound("Car not found");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCar([FromRoute] int id)
        {
            var existingCar = await dbContext.AutomobilioSkelbimas.FirstOrDefaultAsync(x => x.Id == id);
            if (existingCar != null)
            {
                dbContext.AutomobilioSkelbimas.Remove(existingCar);
                await dbContext.SaveChangesAsync();
                return Ok(existingCar);
            }
            return NotFound("Car not found");
        }
    }
}
