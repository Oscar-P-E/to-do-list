import { v4 as uuidv4 } from "uuid";

// Data:
type Todo = {
    uuid: string;
    type: "todo";
    title: string;
    description?: string;
    hasPriority?: boolean;
    dueDateTime?: number;
    startDateTime?: number;
    isDone?: boolean;
    parentUuid?: string;
    inInbox?: boolean;
};

type Project = {
    uuid: string;
    type: "project";
    title: string;
    description?: string;
    dueDateTime?: number;
    startDateTime?: number;
    isDone?: boolean;
    parentUuid?: string;
};

type Area = {
    uuid: string;
    type: "area";
    title: string;
};

type TodoOrProjectOrArea = Todo | Project | Area;

const todos: Todo[] = [];
const projects: Project[] = [];
const areas: Area[] = [];

// Create:
function createTodo(
    title: string,
    description = "",
    hasPriority = false,
    dueDateTime = 0,
    startDateTime = 0,
    isDone = false,
    parentUuid = "",
    inInbox = true
): Todo {
    inInbox = startDateTime !== 0 ? false : inInbox;

    const todo: Todo = {
        uuid: uuidv4(),
        type: "todo",
        title: title,
        description: description,
        hasPriority: hasPriority,
        dueDateTime: dueDateTime,
        startDateTime: startDateTime,
        isDone: isDone,
        parentUuid: parentUuid,
        inInbox: inInbox,
    };
    todos.push(todo);
    return todo;
}

function createProject(
    title: string,
    description = "",
    dueDateTime = 0,
    startDateTime = 0,
    isDone = false,
    parentUuid = ""
): Project {
    const project: Project = {
        uuid: uuidv4(),
        type: "project",
        title: title,
        description: description,
        dueDateTime: dueDateTime,
        startDateTime: startDateTime,
        isDone: isDone,
        parentUuid: parentUuid,
    };
    projects.push(project);
    return project;
}

function createArea(title: string): Area {
    const area: Area = {
        uuid: uuidv4(),
        type: "area",
        title: title,
    };
    areas.push(area);
    return area;
}

// Read:
function getTodo(uuid: string): Todo | undefined {
    return todos.find((todo) => todo.uuid === uuid);
}

function getProject(uuid: string): Project | undefined {
    return projects.find((project) => project.uuid === uuid);
}

function getArea(uuid: string): Area | undefined {
    return areas.find((area) => area.uuid === uuid);
}

function getTodos(): Todo[] {
    return todos;
}

function getProjects(): Project[] {
    return projects;
}

function getAreas(): Area[] {
    return areas;
}

function getTodosAndProjects(): TodoOrProjectOrArea[] {
    return [...todos, ...projects];
}

function getAllItems(): TodoOrProjectOrArea[] {
    return [...todos, ...projects, ...areas];
}

// Update:
function modifyTodo(
    uuid: string,
    newTitle?: string,
    newDescription?: string,
    newHasPriority?: boolean,
    newDueDateTime?: number,
    newStartDateTime?: number,
    newIsDone?: boolean,
    newParentUuid?: string,
    newInInbox?: boolean
): Todo | undefined {
    const todo = getTodo(uuid);
    if (todo) {
        if (newTitle !== undefined) {
            todo.title = newTitle;
        }
        if (newDescription !== undefined) {
            todo.description = newDescription;
        }
        if (newHasPriority !== undefined) {
            todo.hasPriority = newHasPriority;
        }
        if (newDueDateTime !== undefined) {
            todo.dueDateTime = newDueDateTime;
        }
        if (newStartDateTime !== undefined) {
            todo.startDateTime = newStartDateTime;
        }
        if (newIsDone !== undefined) {
            todo.isDone = newIsDone;
        }
        if (newParentUuid !== undefined) {
            todo.parentUuid = newParentUuid;
        }
        if (newInInbox !== undefined) {
            todo.inInbox = newInInbox;
        }
        return todo;
    }
    return undefined;
}

function modifyProject(
    uuid: string,
    newTitle?: string,
    newDescription?: string,
    newDueDateTime?: number,
    newStartDateTime?: number,
    newIsDone?: boolean,
    newParentUuid?: string
): Project | undefined {
    const project = getProject(uuid);
    if (project) {
        if (newTitle !== undefined) {
            project.title = newTitle;
        }
        if (newDescription !== undefined) {
            project.description = newDescription;
        }
        if (newDueDateTime !== undefined) {
            project.dueDateTime = newDueDateTime;
        }
        if (newStartDateTime !== undefined) {
            project.startDateTime = newStartDateTime;
        }
        if (newIsDone !== undefined) {
            project.isDone = newIsDone;
        }
        if (newParentUuid !== undefined) {
            project.parentUuid = newParentUuid;
        }
        return project;
    }
    return undefined;
}

function modifyArea(uuid: string, newTitle?: string): Area | undefined {
    const area = getArea(uuid);
    if (area) {
        if (newTitle !== undefined) {
            area.title = newTitle;
        }
        return area;
    }
    return undefined;
}

// Delete:
function deleteTodo(uuid: string): Todo | undefined {
    const todo = getTodo(uuid);
    if (todo) {
        todos.splice(todos.indexOf(todo), 1);
        return todo;
    }
    return undefined;
}
function deleteProject(
    uuid: string,
    deleteChildren = true
): Project | undefined {
    const project = getProject(uuid);
    if (project) {
        if (deleteChildren) {
            todos
                .filter((todo) => todo.parentUuid === uuid)
                .forEach((todo) => deleteTodo(todo.uuid));
            projects
                .filter((project) => project.parentUuid === uuid)
                .forEach((project) => deleteProject(project.uuid, true));
        }
        projects.splice(projects.indexOf(project), 1);
        return project;
    }
    return undefined;
}

function deleteArea(uuid: string, deleteChildren = true): Area | undefined {
    const area = getArea(uuid);
    if (area) {
        if (deleteChildren) {
            todos
                .filter((todo) => todo.parentUuid === uuid)
                .forEach((todo) => deleteTodo(todo.uuid));
            projects
                .filter((project) => project.parentUuid === uuid)
                .forEach((project) => deleteProject(project.uuid, true));
        }
        areas.splice(areas.indexOf(area), 1);
        return area;
    }
    return undefined;
}

export {
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
};

// Test:
const testHome = createArea("Home");
const testWork = createArea("Work");
const testProj = createProject("Test Project", "This is a test project.");
createProject(
    "Test Project 2",
    "This is another test project.",
    0,
    0,
    false,
    testHome.uuid
);
createTodo(
    "Test Todo",
    "This is a test todo.",
    false,
    0,
    0,
    false,
    testProj.uuid,
    true
);
createTodo(
    "Test Todo 2",
    "This is a test todo.",
    false,
    0,
    0,
    false,
    testProj.uuid,
    false
);
createProject(
    "Test Project 3",
    "This is another test project.",
    0,
    0,
    false,
    testWork.uuid
);
const today = new Date();
today.setHours(0, 0, 0, 0);

createTodo(
    "Test Todo 3",
    "This is a test todo.",
    false,
    0,
    today.getTime(),
    false,
    testWork.uuid,
    false
);
