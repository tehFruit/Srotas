export class Door {
  id: number;
  kaina: number;
  pavadinimas: string;
  parduotas: boolean;
  gamintojas: string;
  modelis: string;
  pagaminimoMetai: number;
  spalva: string;

  pardavejasId: number;
  uzsakymasId: number | undefined;
}
