import { v4 as uuidv4, validate } from "uuid";
import Area from "./Area";

describe("Area", () => {
    const title = "Test Area";

    let area: Area;

    beforeEach(() => {
        area = new Area(title);
    });

    it("creates an Area with the correct title", () => {
        expect(area.title).toBe(title);
    });

    it("assigns a valid UUID to the Area", () => {
        expect(validate(area.uuid)).toBe(true);
    });
});
