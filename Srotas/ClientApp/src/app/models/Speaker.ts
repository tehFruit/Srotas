export class Speaker {
  id: number;
  kaina: number;
  pavadinimas: string;
  parduotas: boolean;
  gamintojas: string;
  skersmuo: number;

  pardavejasId: number;
  uzsakymasId: number | undefined;
}
