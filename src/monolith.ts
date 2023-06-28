import { v4 as uuidv4 } from "uuid";

// Data:
type Todo = {
    uuid: string;
    type: "todo";
    title: string;
    description?: string;
    hasPriority?: boolean;
    dueDateTime?: number;
    startDate?: number;
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
    startDate?: number;
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

const todos: Todo[] = [];
const projects: Project[] = [];
const areas: Area[] = [];

// Create:
function createTodo(
    title: string,
    description = "",
    hasPriority = false,
    dueDateTime = 0,
    startDate = 0,
    isDone = false,
    parentUuid = "",
    inInbox = true
): Todo {
    if (startDate && inInbox) {
        inInbox = false;
    }

    if (dueDateTime && !startDate) {
        const startOfThatDay = new Date(dueDateTime);
        const startOfThisDay = new Date();
        startOfThatDay.setHours(0, 0, 0, 0);
        startOfThisDay.setHours(0, 0, 0, 0);
        if (startOfThatDay.getTime() === startOfThisDay.getTime()) {
            startDate = startOfThisDay.getTime();
        }
    }

    const todo: Todo = {
        uuid: uuidv4(),
        type: "todo",
        title: title,
        description: description,
        hasPriority: hasPriority,
        dueDateTime: dueDateTime,
        startDate: startDate,
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
    startDate = 0,
    isDone = false,
    parentUuid = ""
): Project {
    if (dueDateTime && !startDate) {
        const startOfThatDay = new Date(dueDateTime);
        const startOfThisDay = new Date();
        startOfThatDay.setHours(0, 0, 0, 0);
        startOfThisDay.setHours(0, 0, 0, 0);
        if (startOfThatDay.getTime() === startOfThisDay.getTime()) {
            startDate = startOfThisDay.getTime();
        }
    }

    const project: Project = {
        uuid: uuidv4(),
        type: "project",
        title: title,
        description: description,
        dueDateTime: dueDateTime,
        startDate: startDate,
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

// function getTodosAndProjects(): TodoOrProjectOrArea[] {
function getTodosAndProjects(): TodoOrProject[] {
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
    newstartDate?: number,
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
        if (newstartDate !== undefined) {
            todo.startDate = newstartDate;
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
        if (todo.startDate && todo.inInbox) {
            todo.inInbox = false;
        }

        if (todo.dueDateTime && !todo.startDate) {
            const startOfThatDay = new Date(todo.dueDateTime);
            const startOfThisDay = new Date();
            startOfThatDay.setHours(0, 0, 0, 0);
            startOfThisDay.setHours(0, 0, 0, 0);
            if (startOfThatDay.getTime() === startOfThisDay.getTime()) {
                todo.startDate = startOfThisDay.getTime();
            }
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
    newstartDate?: number,
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
        if (newstartDate !== undefined) {
            project.startDate = newstartDate;
        }
        if (newIsDone !== undefined) {
            project.isDone = newIsDone;
        }
        if (newParentUuid !== undefined) {
            project.parentUuid = newParentUuid;
        }
        if (project.dueDateTime && !project.startDate) {
            const startOfThatDay = new Date(project.dueDateTime);
            const startOfThisDay = new Date();
            startOfThatDay.setHours(0, 0, 0, 0);
            startOfThisDay.setHours(0, 0, 0, 0);
            if (startOfThatDay.getTime() === startOfThisDay.getTime()) {
                project.startDate = startOfThisDay.getTime();
            }
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
    Todo,
    Project,
    Area,
    TodoOrProject,
    TodoOrProjectOrArea,
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

//
// Test Dummies:
//
const datePast = new Date();
datePast.setDate(datePast.getDate() - 10);

const dateFuture = new Date();
dateFuture.setDate(dateFuture.getDate() + 10);

const todayMorning = new Date();
todayMorning.setHours(0, 0, 0, 0);

const todayAfternoon = new Date();
todayAfternoon.setHours(12, 0, 0, 0);

// Areas
const homeArea = createArea("Home");
const workArea = createArea("Work");

// Projects
const homeProject = createProject(
    "Home Project",
    "This is a home project",
    todayAfternoon.getTime(),
    todayMorning.getTime(),
    false,
    homeArea.uuid
);
const workProject = createProject(
    "Work Project",
    "This is a work project",
    dateFuture.getTime(),
    todayAfternoon.getTime(),
    true,
    workArea.uuid
);
const generalProject = createProject(
    "General Project",
    "This is a general project",
    0,
    datePast.getTime(),
    false
);
const futureProject = createProject(
    "Future Project",
    "This is a future project",
    dateFuture.getTime(),
    dateFuture.getTime(),
    false,
    homeArea.uuid
);
const pastProject = createProject(
    "Past Project",
    "This is a past project",
    datePast.getTime(),
    datePast.getTime(),
    true
);

// Todos
createTodo(
    "Home Todo",
    "This is a home todo",
    false,
    todayAfternoon.getTime(),
    todayMorning.getTime(),
    false,
    homeProject.uuid,
    false
);
createTodo(
    "Work Todo",
    "This is a work todo",
    true,
    dateFuture.getTime(),
    todayAfternoon.getTime(),
    true,
    workProject.uuid,
    false
);
createTodo(
    "General Todo",
    "This is a general todo",
    false,
    0,
    datePast.getTime(),
    false,
    generalProject.uuid,
    true
);
createTodo(
    "Inbox Todo",
    "This is a todo in the inbox",
    true,
    0,
    0,
    false,
    "",
    true
);
createTodo(
    "Future Todo",
    "This is a future todo",
    false,
    dateFuture.getTime(),
    dateFuture.getTime(),
    false,
    futureProject.uuid,
    false
);
createTodo(
    "Past Todo",
    "This is a past todo",
    true,
    datePast.getTime(),
    datePast.getTime(),
    true,
    pastProject.uuid,
    false
);
createTodo(
    "Area Todo",
    "This is a todo in an area",
    false,
    todayAfternoon.getTime(),
    todayMorning.getTime(),
    false,
    homeArea.uuid,
    false
);
createTodo(
    "Unassigned Todo",
    "This is an unassigned todo",
    false,
    dateFuture.getTime(),
    todayAfternoon.getTime(),
    true,
    "",
    false
);
createTodo(
    "Overdue Todo",
    "This is an overdue todo",
    false,
    datePast.getTime(),
    datePast.getTime(),
    false,
    generalProject.uuid,
    true
);
createTodo(
    "Due Today Todo",
    "This is a due today todo",
    true,
    todayAfternoon.getTime(),
    todayMorning.getTime(),
    false,
    workProject.uuid,
    false
);
createTodo(
    "Work Todo with no start date",
    "This is a work todo",
    true,
    dateFuture.getTime(),
    0,
    true,
    workProject.uuid,
    false
);

// This creates:
// 2 areas: "Home" and "Work"
// 5 projects:
// "Home Project" which is part of "Home" area, due today in the afternoon
// "Work Project" which is part of "Work" area, due in the future, is done
// "General Project" with no parent, due date not specified, start date is in the past
// "Future Project" which is part of "Home" area, due and start date are in the future
// "Past Project" with no parent, due and start date are in the past, is done
// 11 todos:
// "Home Todo" which is part of "Home Project", due today in the afternoon
// "Work Todo" which is part of "Work Project", due in the future, has priority, start date is today, is done
// "General Todo" which is part of "General Project", due date not specified, start date is in the past, in the inbox
// "Inbox Todo" with no parent, in the inbox
// "Future Todo" which is part of "Future Project", due and start date are in the future
// "Past Todo" which is part of "Past Project", due and start date are in the past, has priority, is done
// "Area Todo" which is part of "Home" area, due today in the afternoon
// "Unassigned Todo" with no parent, due in the future, start date is today in the afternoon, is done
// "Overdue Todo" which is part of "General Project", due and start date are in the past, in the inbox
// "Due Today Todo" which is part of "Work Project", due today in the afternoon, has priority
// "Work Todo with no start date" which is part of "Work Project", due in the future, has priority, no start date, is done
