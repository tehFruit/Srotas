namespace Srotas.Models
{
    public class Variklis : AutomobilioDaliesSkelbimas
    {
        public string Gamintojas { get; set; }
        public double Turis { get; set; }
        public string KuroTipas { get; set; }

        public int? UzsakymasId { get; set; }

        public int PardavejasId { get; set; }
    }
}
