export class Order {
    id: number;
    kodas: string;
    pristatymoData: Date;
    suma: number;
    ivertinimas: number | undefined;
    pirkejasId: number;
}