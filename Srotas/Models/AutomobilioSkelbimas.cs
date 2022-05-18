using System.ComponentModel.DataAnnotations;

namespace Srotas.Models
{
    public class AutomobilioSkelbimas
    {
        [Key]
        public int Id { get; set; }
        public string Gamintojas { get; set; }
        public string Modelis { get; set; }
        public int Rida { get; set; }
        public int PagaminimoMetai { get; set; }
        public string PavaruDezesTipas { get; set; }
        public string KuroTipas { get; set; }
        public string Spalva { get; set; }
        public double Kaina { get; set; }
        public bool TuriRatus { get; set; }
        public string RatuDydis { get; set; }
        public int RatuPlotis { get; set; }
        public bool TuriVarikli { get; set; }
        public double VariklioTuris { get; set; }
        public bool TuriPavaruDeze { get; set; }
        public bool TuriKoloneles { get; set; }
        public int KoloneliuSkersmuo { get; set; }
        public bool TuriKapota { get; set; }
        public bool TuriDuris { get; set; }
        public bool Parduotas { get; set; }
    }
}
