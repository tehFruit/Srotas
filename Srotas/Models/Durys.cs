namespace Srotas.Models
{
    public class Durys : AutomobilioDaliesSkelbimas
    {
        public string Gamintojas { get; set; }
        public string Modelis { get; set; }
        public int PagaminimoMetai { get; set; }
        public string Spalva { get; set; }

        public int? UzsakymasId { get; set; }

        public int PardavejasId { get; set; }
    }
}
