using Microsoft.EntityFrameworkCore;
using Srotas.Models;

namespace Srotas.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Ratai> Ratai { get; set; }
        public DbSet<Variklis> Variklis { get; set; }
        public DbSet<Koloneles> Koloneles { get; set; }
        public DbSet<Nuolaida> Nuolaida { get; set; }
        public DbSet<PavaruDeze> PavaruDeze { get; set; }
        public DbSet<Kapotas> Kapotas { get; set; }
        public DbSet<Durys> Durys { get; set; }
        public DbSet<AutomobilioSkelbimas> AutomobilioSkelbimas { get; set; }
        public DbSet<Pirkejas> Pirkejas { get; set; }
        public DbSet<Pardavejas> Pardavejas { get; set; }
        public DbSet<Uzsakymas> Uzsakymas { get; set; }
    }
}
