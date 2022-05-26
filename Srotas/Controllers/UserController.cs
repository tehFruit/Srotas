using Microsoft.AspNetCore.Mvc;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly AppDbContext dbContext;

        public UserController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        [Route("GetBuyer")]
        public async Task<IActionResult> GetBuyer()
        {
            var buyer = dbContext.Pirkejas.FirstOrDefault();
            return Ok(buyer);
        }

        [HttpGet]
        [Route("GetSeller")]
        public async Task<IActionResult> GetSeller()
        {
            var seller = dbContext.Pardavejas.FirstOrDefault();
            return Ok(seller);
        }

        [HttpPut]
        [Route("UpdateBuyer")]
        public async Task<IActionResult> UpdateBuyer([FromBody] int balance)
        {
            var buyer = dbContext.Pirkejas.FirstOrDefault();
            buyer.Balansas = balance;
            await dbContext.SaveChangesAsync();
            return Ok(buyer);
        }

        [HttpPut]
        [Route("UpdateSeller")]
        public async Task<IActionResult> UpdateSeller([FromBody] int rating)
        {
            var seller = dbContext.Pardavejas.FirstOrDefault();
            seller.Reitingas = rating;
            await dbContext.SaveChangesAsync();
            return Ok(seller);
        }
    }
}
