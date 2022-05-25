using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class Pardavejas : Naudotojas
    {
        public double Reitingas { get; set; }

        public ICollection<AutomobilioSkelbimas> Automobiliai { get; set; }
        public ICollection<Ratai> Ratai { get; set; }
        public ICollection<Variklis> Varikiai { get; set; }
        public ICollection<Koloneles> Koloneles { get; set; }
        public ICollection<Kapotas> Kapotai { get; set; }
        public ICollection<Durys> Durys { get; set; }
        public ICollection<PavaruDeze> PavaruDezes { get; set; }
        public ICollection<Nuolaida> Nuolaidos { get; set; }
    }
}
