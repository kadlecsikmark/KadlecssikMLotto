import fs from "fs";
import Lotto from "./Lotto";
//import { isNumber } from "util";

export default class Megoldas {
    Lottok: Lotto[] = [];
    darab: number = 0;
    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                let aktSor = i.trim();
                aktSor += " " + this.darab;
                if (aktSor.length > 0) this.Lottok.push(new Lotto(aktSor));
                this.darab++;
            });
    }
    public get hanyadik(): Lotto[] {
        return this.Lottok;
    }

    public get nemvoltszam(): string {
        let tarol = "";
        let j = 1;
        for (const i of this.Lottok) {
            if (i.szam1 == j || i.szam2 == j || i.szam3 == j || i.szam4 == j || i.szam1 == j) {
                tarol = "Nincs";
                j++;
            } else if (!(i.szam1 == j || i.szam2 == j || i.szam3 == j || i.szam4 == j || i.szam1 == j) && i.hetszama == 51) {
                return "Van";
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
    public heteskiir(állomány: string): void {
        // szam52het: string[]
        const ki: string[] = [];
        this.Lottok.forEach(js => {
            ki.push([js.szam1, js.szam2, js.szam3, js.szam4, js.szam5].join(" "));
        });
        //ki.push([szam52het[0], szam52het[1], szam52het[2], szam52het[3], szam52het[4]].join(" "));
        fs.writeFileSync(állomány, ki.join("\r\n"));
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
