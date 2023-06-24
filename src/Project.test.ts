import { v4 as uuidv4, validate } from "uuid";
import Project from "./Project";

describe("Project class", () => {
    it("should create a new Project object", () => {
        const title = "Test Project";
        const dueDateTime = Date.now();
        const isDone = false;

        const project = new Project(title, dueDateTime, isDone);

        // Verify that the project object was created correctly.
        expect(project.title).toBe(title);
        expect(project.dueDateTime).toBe(dueDateTime);
        expect(project.isDone).toBe(isDone);

        // We cannot know the exact UUID, but we can check if it's a valid one.
        expect(validate(project.uuid)).toBe(true);
    });
});
