﻿namespace Srotas.Models
{
    public class Koloneles : AutomobilioDaliesSkelbimas
    {
        public string Gamintojas { get; set; }
        public int Skersmuo { get; set; }

        public int? UzsakymasId { get; set; }
        public Uzsakymas Uzsakymas { get; set; }

        public int PardavejasId { get; set; }
        public Pardavejas Pardavejas { get; set; }
    }
}
