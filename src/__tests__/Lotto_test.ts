import Lotto from "../Lotto";

describe("Lotto osztaly unik test", () => {
    const instance1: Lotto = new Lotto("10 11 17 55 89 1");
    const instance2: Lotto = new Lotto("1 40 46 84 85 2");

    it("Lottoosztálypéldányok ellenőrzése", async () => {
        expect(instance1).toBeInstanceOf(Lotto);
        expect(instance2).toBeInstanceOf(Lotto);
    });

    it("Első szám ellenőrzése", async () => {
        expect(instance1.szam1).toBe(5);
        expect(instance2.szam1).toBe(33);
    });

    it("Első szám ellenőrzése", async () => {
        expect(instance1.szam2).toBe(17);
        expect(instance2.szam2).toBe(45);
    });

    it("Első szám ellenőrzése", async () => {
        expect(instance1.szam5).toBe(90);
        expect(instance2.szam5).toBe(88);
    });

    it("Hétszáma ellenőrzés", async () => {
        expect(instance1.hetszama).toBe(5);
        expect(instance2.hetszama).toBe(3);
    });
});
