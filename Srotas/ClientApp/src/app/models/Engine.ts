export class Engine {
  id: number;
  kaina: number;
  pavadinimas: string;
  parduotas: boolean;
  gamintojas: string;
  turis: number;
  kuroTipas: string;

  pardavejasId: number;
  uzsakymasId: number | undefined;
}
