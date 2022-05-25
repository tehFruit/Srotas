using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class Uzsakymas
    {
        [Key]
        public int Id { get; set; }
        public string Kodas { get; set; }
        public DateTime pristatymoData { get; set; } 
        public double Suma { get; set; }
        public int? Ivertinimas { get; set; }

        public int PirkejasId { get; set; }
        public Pirkejas Pirkejas { get; set; }

        public ICollection<AutomobilioSkelbimas> Automobiliai { get; set; }
        public ICollection<Ratai> Ratai { get; set; }
        public ICollection<Variklis> Varikiai { get; set; }
        public ICollection<Koloneles> Koloneles { get; set; }
        public ICollection<Kapotas> Kapotai { get; set; }
        public ICollection<Durys> Durys { get; set; }
        public ICollection<PavaruDeze> PavaruDezes { get; set; }
    }
}
