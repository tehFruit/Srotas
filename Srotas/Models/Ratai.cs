﻿namespace Srotas.Models
{
    public class Ratai : AutomobilioDaliesSkelbimas
    {
        public string Dydis { get; set; }
        public int Plotis { get; set; }
        public string Gamintojas { get; set; }

        public int? UzsakymasId { get; set; }
        public Uzsakymas Uzsakymas { get; set; }

        public int PardavejasId { get; set; }
        public Pardavejas Pardavejas { get; set; }
    }
}
