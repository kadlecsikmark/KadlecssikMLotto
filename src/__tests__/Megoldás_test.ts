import fs from "fs";
import Megoldás from "../Megoldas";

describe("Megoldas osztály unit tesztek", () => {
    const instance: Megoldás = new Megoldás("telkek.txt");

    it("Megoldás osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldás);
    });
});
