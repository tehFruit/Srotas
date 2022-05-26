using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class Uzsakymas
    {
        [Key]
        public int Id { get; set; }
        public string Kodas { get; set; }
        public DateTime PristatymoData { get; set; } 
        public double Suma { get; set; }
        public int? Ivertinimas { get; set; }

        public int PirkejasId { get; set; }
    }
}
