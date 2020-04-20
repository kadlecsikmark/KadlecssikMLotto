import Lotto from "../Lotto";

describe("Lotto osztaly unik test", () => {
    const instance1: Lotto = new Lotto("10 11 17 55 89 1");
    const instance2: Lotto = new Lotto("1 40 46 84 85 2");

    it("Lottoosztálypéldányok ellenőrzése", async () => {
        expect(instance1).toBeInstanceOf(Lotto);
        expect(instance2).toBeInstanceOf(Lotto);
    });

    it("Első nyerőszámellenőrzése", async () => {
        expect(instance1.szam1).toBe(5);
        expect(instance2.szam1).toBe(33);
    });

    it("Második nyerőszám ellenőrzése", async () => {
        expect(instance1.szam2).toBe(17);
        expect(instance2.szam2).toBe(45);
    });
    it("Harmadik nyerőszám ellenőrzése", async () => {
        expect(instance1.szam3).toBe(22);
        expect(instance2.szam3).toBe(60);
    });
    it("Negyedik nyerőszám ellenőrzése", async () => {
        expect(instance1.szam4).toBe(69);
        expect(instance2.szam4).toBe(86);
    });

    it("Ötödik nyerőszám ellenőrzése", async () => {
        expect(instance1.szam5).toBe(90);
        expect(instance2.szam5).toBe(88);
    });

    it("Hétszáma ellenőrzés", async () => {
        expect(instance1.hetszama).toBe(5);
        expect(instance2.hetszama).toBe(3);
    });
});
