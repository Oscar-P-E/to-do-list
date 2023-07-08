import { v4 as uuidv4 } from "uuid";
import { startOfDay, isToday } from "date-fns";

// Data:
type Todo = {
    uuid: string;
    type: "todo";
    title: string;
    notes?: string;
    hasPriority?: boolean;
    dueDate?: Date;
    startDate?: Date;
    isDone?: boolean;
    parentUuid?: string;
    inInbox?: boolean;
};

type Project = {
    uuid: string;
    type: "project";
    title: string;
    notes?: string;
    dueDate?: Date;
    startDate?: Date;
    isDone?: boolean;
    parentUuid?: string;
};

type Area = {
    uuid: string;
    type: "area";
    title: string;
};

type TodoOrProject = Todo | Project;
type TodoOrProjectOrArea = Todo | Project | Area;
type AreaOrProject = Area | Project;

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
const projects: Project[] = JSON.parse(
    localStorage.getItem("projects") || "[]"
);
const areas: Area[] = JSON.parse(localStorage.getItem("areas") || "[]");

function StartIfDue(
    dueDate: Date | undefined,
    startDate: Date | undefined
): [Date | undefined, Date | undefined] {
    if (dueDate) {
        dueDate = startOfDay(dueDate);

        if (!startDate && isToday(dueDate)) {
            startDate = dueDate;
        }
    }

    if (startDate) {
        startDate = startOfDay(startDate);
    }

    return [dueDate, startDate];
}

// Create:

function createTodo(
    title: string,
    notes = "",
    hasPriority = false,
    dueDate?: Date,
    startDate?: Date,
    isDone = false,
    parentUuid = "",
    inInbox = true
): Todo {
    [dueDate, startDate] = StartIfDue(dueDate, startDate);

    if ((startDate || parentUuid) && inInbox) {
        inInbox = false;
    }

    const todo: Todo = {
        uuid: uuidv4(),
        type: "todo",
        title: title,
        notes: notes,
        hasPriority: hasPriority,
        dueDate: dueDate,
        startDate: startDate,
        isDone: isDone,
        parentUuid: parentUuid,
        inInbox: inInbox,
    };
    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    return todo;
}

function createProject(
    title: string,
    notes = "",
    dueDate?: Date,
    startDate?: Date,
    isDone = false,
    parentUuid = ""
): Project {
    [dueDate, startDate] = StartIfDue(dueDate, startDate);

    const project: Project = {
        uuid: uuidv4(),
        type: "project",
        title: title,
        notes: notes,
        dueDate: dueDate,
        startDate: startDate,
        isDone: isDone,
        parentUuid: parentUuid,
    };
    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    return project;
}

function createArea(title: string): Area {
    const area: Area = {
        uuid: uuidv4(),
        type: "area",
        title: title,
    };
    areas.push(area);

    localStorage.setItem("areas", JSON.stringify(areas));

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

function getItem(uuid: string): TodoOrProjectOrArea | undefined {
    return getAllItems().find((item) => item.uuid === uuid);
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

function getTodosAndProjects(): TodoOrProject[] {
    return [...todos, ...projects];
}

function getAreasAndProjects(): AreaOrProject[] {
    return [...areas, ...projects];
}

function getAllItems(): TodoOrProjectOrArea[] {
    return [...todos, ...projects, ...areas];
}

// Delete:
function deleteTodo(uuid: string): Todo | undefined {
    const todo = getTodo(uuid);
    if (todo) {
        todos.splice(todos.indexOf(todo), 1);

        localStorage.setItem("todos", JSON.stringify(todos));

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

        localStorage.setItem("projects", JSON.stringify(projects));

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

        localStorage.setItem("areas", JSON.stringify(areas));

        return area;
    }
    return undefined;
}

export {
    Todo,
    Project,
    Area,
    TodoOrProject,
    TodoOrProjectOrArea,
    createTodo,
    createProject,
    createArea,
    // getToday,
    getTodo,
    getProject,
    getArea,
    getItem,
    getTodos,
    getProjects,
    getAreas,
    getTodosAndProjects,
    getAreasAndProjects,
    getAllItems,
    // modifyTodo,
    // modifyProject,
    // modifyArea,
    deleteTodo,
    deleteProject,
    deleteArea,
};
