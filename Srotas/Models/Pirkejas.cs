using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class Pirkejas : Naudotojas
    {
        public double Balansas { get; set; }

        public ICollection<Uzsakymas> Uzsakymai { get; set; }
    }
}
