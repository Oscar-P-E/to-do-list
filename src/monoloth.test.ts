import {
    createTodo,
    createProject,
    createArea,
    getTodo,
    getProject,
    getArea,
    getTodos,
    getProjects,
    getAreas,
    getTodosAndProjects,
    getAllItems,
    modifyTodo,
    modifyProject,
    modifyArea,
    deleteTodo,
    deleteProject,
    deleteArea,
} from "./monolith";

describe("Todo tests", () => {
    let todoUuid: string;

    test("createTodo creates a todo", () => {
        const todo = createTodo("Test todo");
        todoUuid = todo.uuid;
        expect(todo.title).toBe("Test todo");
    });

    test("getTodo retrieves a todo", () => {
        const todo = getTodo(todoUuid);
        expect(todo).toBeDefined();
        expect(todo?.title).toBe("Test todo");
    });

    test("modifyTodo modifies a todo", () => {
        const modifiedTodo = modifyTodo(todoUuid, "Modified todo");
        expect(modifiedTodo).toBeDefined();
        expect(modifiedTodo?.title).toBe("Modified todo");
    });

    test("deleteTodo deletes a todo", () => {
        const deletedTodo = deleteTodo(todoUuid);
        expect(deletedTodo).toBeDefined();
        expect(deletedTodo?.title).toBe("Modified todo");
        const todo = getTodo(todoUuid);
        expect(todo).toBeUndefined();
    });
});

describe("Project tests", () => {
    let projectUuid: string;

    test("createProject creates a project", () => {
        const project = createProject("Test project");
        projectUuid = project.uuid;
        expect(project.title).toBe("Test project");
    });

    test("getProject retrieves a project", () => {
        const project = getProject(projectUuid);
        expect(project).toBeDefined();
        expect(project?.title).toBe("Test project");
    });

    test("modifyProject modifies a project", () => {
        const modifiedProject = modifyProject(projectUuid, "Modified project");
        expect(modifiedProject).toBeDefined();
        expect(modifiedProject?.title).toBe("Modified project");
    });

    test("deleteProject deletes a project", () => {
        const deletedProject = deleteProject(projectUuid);
        expect(deletedProject).toBeDefined();
        expect(deletedProject?.title).toBe("Modified project");
        const project = getProject(projectUuid);
        expect(project).toBeUndefined();
    });
});

describe("Area tests", () => {
    let areaUuid: string;

    test("createArea creates an area", () => {
        const area = createArea("Test area");
        areaUuid = area.uuid;
        expect(area.title).toBe("Test area");
    });

    test("getArea retrieves an area", () => {
        const area = getArea(areaUuid);
        expect(area).toBeDefined();
        expect(area?.title).toBe("Test area");
    });

    test("modifyArea modifies an area", () => {
        const modifiedArea = modifyArea(areaUuid, "Modified area");
        expect(modifiedArea).toBeDefined();
        expect(modifiedArea?.title).toBe("Modified area");
    });

    test("deleteArea deletes an area", () => {
        const deletedArea = deleteArea(areaUuid);
        expect(deletedArea).toBeDefined();
        expect(deletedArea?.title).toBe("Modified area");
        const area = getArea(areaUuid);
        expect(area).toBeUndefined();
    });
    describe("Get all items tests", () => {
        test("getTodos returns all todos", () => {
            const todos = getTodos();
            expect(todos).toBeInstanceOf(Array);
            // Add more assertions based on your expected todos
        });

        test("getProjects returns all projects", () => {
            const projects = getProjects();
            expect(projects).toBeInstanceOf(Array);
            // Add more assertions based on your expected projects
        });

        test("getAreas returns all areas", () => {
            const areas = getAreas();
            expect(areas).toBeInstanceOf(Array);
            // Add more assertions based on your expected areas
        });

        test("getTodosAndProjects returns all todos and projects", () => {
            const todosAndProjects = getTodosAndProjects();
            expect(todosAndProjects).toBeInstanceOf(Array);
            // Add more assertions based on your expected todos and projects
        });

        test("getAllItems returns all items", () => {
            const allItems = getAllItems();
            expect(allItems).toBeInstanceOf(Array);
            // Add more assertions based on your expected all items
        });
    });
});
