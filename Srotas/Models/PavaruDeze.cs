namespace Srotas.Models
{
    public class PavaruDeze : AutomobilioDaliesSkelbimas
    {
        public string Gamintojas { get; set; }

        public string Tipas { get; set; }

        public int? UzsakymasId { get; set; }

        public int PardavejasId { get; set; }

    }
}
