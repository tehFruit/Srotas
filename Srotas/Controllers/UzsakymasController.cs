using Microsoft.AspNetCore.Mvc;
using Srotas.Data;
using Srotas.Models;

namespace Srotas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UzsakymasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UzsakymasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("NewOrder")]
        public async Task<IActionResult> PostOrder([FromBody] Uzsakymas uzs)
        {
            _context.Uzsakymas.Add(uzs);
            await _context.SaveChangesAsync();

            return Ok(uzs);
        }
    }
}
