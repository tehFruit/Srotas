export class Wheels {
    id: number;
    kaina: number;
    pavadinimas: string;
    parduotas: boolean;
    dydis: string;
    plotis: number;
    gamintojas: string;

    pardavejasId: number;
    uzsakymasId: number | undefined;
}