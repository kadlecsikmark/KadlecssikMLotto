export default class Lotto {
    private _szam1: number;
    private _szam2: number;
    private _szam3: number;
    private _szam4: number;
    private _szam5: number;


    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._szam1 = parseInt(m[0]);
        this._szam2 = parseInt(m[1]);
        this._szam3 = parseInt(m[2]);
        this._szam4 = parseInt(m[3]);
        this._szam5 = parseInt(m[4]);

    }
    public get szam1(): number {
        return this._szam1;
    }
    public get szam2(): number {
        return this._szam2;
    }
    public get szam3(): number {
        return this._szam3;
    }
    public get szam4(): number {
        return this._szam4;
    }
    public get szam5(): number {
        return this._szam5;
    }

}
