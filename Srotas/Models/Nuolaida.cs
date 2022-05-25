using System.ComponentModel.DataAnnotations;
namespace Srotas.Models
{
    public class Nuolaida
    {
        [Key]
        public int Id { get; set; }

        public double Procentai { get; set; }
        public string Kodas { get; set; }
        public bool ArPanaudota { get; set; }

        public int PardavejasId { get; set; }
        public Pardavejas Pardavejas { get; set; }
    }
}
