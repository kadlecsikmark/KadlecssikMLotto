import fs from "fs";
import Lotto from "./Lotto";
//import { isNumber } from "util";

export default class Megoldas {
    Lottok: Lotto[] = [];
    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this.Lottok.push(new Lotto(aktSor));
            });
    }
    public get hanyadik(): Lotto[] {
        return this.Lottok;
    }

    public get nemvoltszam(): string {
        let j = 1;
        let tarol = "";
        for (const i of this.Lottok) {
            if (i.szam1 == j || i.szam2 == j || i.szam3 == j || i.szam4 == j || i.szam1 == j) {
                j++;
                return "Van";
            } else {
                j++;
                tarol = "Nincs";
            }
        }
        return tarol;
    }
    public get paratlan(): number {
        let db: number;
        db = 0;
        for (const i of this.Lottok) {
            if (i.szam1 % 2 != 0) {
                db++;
            } else if (i.szam2 % 2 != 0) {
                db++;
            } else if (i.szam3 % 2 != 0) {
                db++;
            } else if (i.szam4 % 2 != 0) {
                db++;
            } else if (i.szam5 % 2 != 0) {
                db++;
            }
        }
        return db;
    }
    public get nyolcas(): string {
        let db: number;
        db = 0;
        let tarol = "";
        for (let j = 1; j < 90; j++) {
            for (const i of this.Lottok) {
                if (i.szam1 == j) {
                    db++;
                }
                if (i.szam2 == j) {
                    db++;
                }
                if (i.szam3 == j) {
                    db++;
                }
                if (i.szam4 == j) {
                    db++;
                }
                if (i.szam5 == j) {
                    db++;
                }
            }
            if (j % 15 == 0) {
                tarol += db + "\n";
            } else {
                tarol += db + " ";
            }
            db = 0;
        }
        return tarol;
    }
    public get primszamok(): number {
        let j = 0;
        let prim: number = 0;
        const primek: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89];
        for (const i of this.Lottok) {
            if (i.szam1 == primek[j] || i.szam2 == primek[j] || i.szam3 == primek[j] || i.szam4 == primek[j] || i.szam1 == primek[j]) {
                j++;
            } else {
                j++;
                prim = primek[j];
            }
        }
        return prim;
    }
}
