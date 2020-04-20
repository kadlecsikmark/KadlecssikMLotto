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
        //2. A program rendezze a bekért lottószámokat emelkedő sorrendbe! A rendezett számokat
        //írja ki a képernyőre! 
        res.write("1. feladat:\t");
        const params = url.parse(req.url as string, true).query;
        let szamok = params.szamok as string;
        res.write(`<p>\tAdd meg a Lottószámokat szóközzel válaszd el.!: <input type='number' name='szamok'  style='width:3em;' onChange='this.form.submit();'></p>`);
        const m: string[] = szamok.split(" ");
        let szam52het: number[] = [];
        szam52het.push(parseInt(m[0]));
        szam52het.push(parseInt(m[1]));
        szam52het.push(parseInt(m[2]));
        szam52het.push(parseInt(m[3]));
        szam52het.push(parseInt(m[4]));
        szam52het.sort();
        res.write("2. feladat:\t");
        res.write(`<p>\t52.Hét nyerőszámai: ${szam52het}</p>`);
        res.write("3. feladat:\t");
        const paramss = url.parse(req.url as string, true).query;
        let het = parseInt(paramss.szamok as string);
        res.write(`<p>\tAdd meg hányadik heti nyerőszámra vagy kiváncsi!: <input type='number' name='szamok'  style='width:3em;' onChange='this.form.submit();'></p>`);
        res.write("4. feladat:\t");
        let negyes = megold.hanyadik[het - 1];
        res.write(`<p>${negyes}\t<p>`);
        res.write("5. feladat:\t");
        res.write(`<p>${megold.nemvoltszam}\t<p>`);
        res.write("6. feladat:\t");
        res.write(`<p>${megold.paratlan}\t<p>`);

        res.write("7. feladat:\t");
        res.write("8. feladat:\t");
        res.write(`<p>${megold.nyolcas}\t<p>`);
        res.write("9. feladat:\t");
        res.write(`<p>${megold.primszamok}\t<p>`);


        res.write("</pre></form></body></html>");
        res.end();
    }
}
