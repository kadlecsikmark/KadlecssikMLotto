import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Lotto</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        const megold: Megoldas = new Megoldas("lottosz.txt");

        //1. Kérje be a felhasználótól az 52. hét megadott lottószámait!
        res.write("1. feladat:\t");
        const params = url.parse(req.url as string, true).query;
        const szamok = params.szamok as string;
        res.write("<p>\tAdd meg a Lottószámokat szóközzel válaszd el.!: <input type='string' name='szamok'  style='width:3em;' onChange='this.form.submit();'></p>");
        const m: string[] = szamok.split(" ");
        const szam52het: number[] = [];
        szam52het.push(parseInt(m[0]));
        szam52het.push(parseInt(m[1]));
        szam52het.push(parseInt(m[2]));
        szam52het.push(parseInt(m[3]));
        szam52het.push(parseInt(m[4]));
        szam52het.sort();
        //2. A program rendezze a bekért lottószámokat emelkedő sorrendbe! A rendezett számokat
        //írja ki a képernyőre!
        res.write("2. feladat:\t");
        res.write(`<p>\t52.Hét nyerőszámai: ${szam52het}</p>`);
        //3. Kérjen be a felhasználótól egy egész számot 1-51 között! A bekért adatot nem kell ellenőrizni!
        res.write("3. feladat:\t");
        const paramss = url.parse(req.url as string, true).query;
        res.write("<p>\tAdd meg hányadik heti nyerőszámra vagy kiváncsi!: <input type='number' name='het'  style='width:3em;' onChange='this.form.submit();'></p>");
        const het = parseInt(paramss.szamok as string);
        //4. Írja ki a képernyőre a bekért számnak megfelelő sorszámú hét lottószámait, a lottosz.dat állományban lévő adatok alapján!
        res.write("4. feladat:\t");
        const negyes = megold.hanyadik[het - 1];
        res.write(`<p>${negyes}\t<p>`);
        //5. A lottosz.dat állományból beolvasott adatok alapján döntse el, hogy volt-e olyan szám, amit egyszer sem húztak ki az 51 hét alatt! A döntés eredményét (Van/Nincs) írja ki a képernyőre!
        res.write("5. feladat:\t");
        res.write(`<p>${megold.nemvoltszam}\t<p>`);
        //6. A lottosz.dat állományban lévő adatok alapján állapítsa meg, hogy hányszor volt páratlan szám a kihúzott lottószámok között! Az eredményt a képernyőre írja ki!
        res.write("6. feladat:\t");
        res.write(`<p>${megold.paratlan}\t<p>`);
        //7. Fűzze hozzá a lottosz.dat állományból beolvasott lottószámok után a felhasználótólbekért, és rendezett 52. hét lottószámait, majd írja ki az összes lottószámot a lotto52.kiszöveges fájlba! A fájlban egy sorba egy hét lottószámai kerüljenek, szóközzel elválasztva egymástól!
        res.write("7. feladat:\t");
        const utolsohet = params.szamok as string;
        //8. Határozza meg a lotto52.ki állomány adatai alapján, hogy az egyes számokat hányszor húzták ki 2003-ban. Az eredményt írja ki a képernyőre a következő formában: az első sor első eleme az a szám legyen ahányszor az egyest kihúzták! Az első sor második eleme az az érték legyen, ahányszor a kettes számot kihúzták stb.! (Annyit biztosan tudunk az értékekről, hogy mindegyikük egyjegyű.)
        res.write("8. feladat:\t");
        res.write(`<p>${megold.nyolcas}\t<p>`);
        //9. Adja meg, hogy az 1-90 közötti prímszámokból melyiket nem húzták ki egyszer sem az elmúlt évben. A feladat megoldása során az itt megadott prímszámokat felhasználhatja  vagy előállíthatja! (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89.)
        res.write("9. feladat:\t");
        res.write(`<p>${megold.primszamok}\t<p>`);
        res.write("</pre></form></body></html>");
        res.end();
    }
}
