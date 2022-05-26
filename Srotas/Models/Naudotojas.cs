using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class Naudotojas
    {
        [Key]
        public int Id { get; set; }
        public string Slapyvardis { get; set; }
        public string Slaptazodis { get; set; }
        public string elPastas { get; set; }
    }
}
