export class Order {
    id: number;
    kodas: string;
    pristatymoData: string;
    suma: number;
    ivertinimas: number | undefined | null;
    pirkejasId: number;
}