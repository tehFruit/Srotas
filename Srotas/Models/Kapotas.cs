﻿namespace Srotas.Models
{
    public class Kapotas : AutomobilioDaliesSkelbimas
    {
        public string Gamintojas { get; set; }
        public string Modelis { get; set; }
        public int PagaminimoMetai { get; set; }    
        public string Spalva { get; set; }  
    }
}
