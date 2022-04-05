using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class AutomobilioDaliesSkelbimas
    {   
        [Key]
        public int Id { get; set; }
        public double Kaina { get; set; }
        public string Pavadinimas { get; set; }
        public bool Parduotas { get; set; }
    }
}
