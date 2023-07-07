import { v4 as uuidv4 } from "uuid";
import {
    startOfDay,
    // isPast,
    isToday,
    addDays,
    setHours,
} from "date-fns";

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

const todos: Todo[] = [];
const projects: Project[] = [];
const areas: Area[] = [];

// Create:

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

// function getToday() {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return today.getTime();
// }

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

// Update:
function modifyTodo(
    uuid: string,
    newTitle?: string,
    newNotes?: string,
    newHasPriority?: boolean,
    newDueDate?: Date | null,
    newStartDate?: Date | null,
    newIsDone?: boolean,
    newParentUuid?: string,
    newInInbox?: boolean
): Todo | undefined {
    const todo = getTodo(uuid);
    if (todo) {
        if (newTitle !== undefined) {
            todo.title = newTitle;
        }
        if (newNotes !== undefined) {
            todo.notes = newNotes;
        }
        if (newHasPriority !== undefined) {
            todo.hasPriority = newHasPriority;
        }
        if (newDueDate !== undefined) {
            todo.dueDate = newDueDate !== null ? newDueDate : undefined;
        }
        if (newStartDate !== undefined) {
            todo.startDate = newStartDate !== null ? newStartDate : undefined;
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

        [todo.dueDate, todo.startDate] = StartIfDue(
            todo.dueDate,
            todo.startDate
        );

        if ((todo.startDate || todo.parentUuid) && todo.inInbox) {
            todo.inInbox = false;
        }

        return todo;
    }
    return undefined;
}

function modifyProject(
    uuid: string,
    newTitle?: string,
    newNotes?: string,
    newDueDate?: Date | null,
    newstartDate?: Date | null,
    newIsDone?: boolean,
    newParentUuid?: string
): Project | undefined {
    const project = getProject(uuid);
    if (project) {
        if (newTitle !== undefined) {
            project.title = newTitle;
        }
        if (newNotes !== undefined) {
            project.notes = newNotes;
        }
        if (newDueDate !== undefined) {
            project.dueDate = newDueDate !== null ? newDueDate : undefined;
        }
        if (newstartDate !== undefined) {
            project.startDate =
                newstartDate !== null ? newstartDate : undefined;
        }
        if (newIsDone !== undefined) {
            project.isDone = newIsDone;
        }
        if (newParentUuid !== undefined) {
            project.parentUuid = newParentUuid;
        }

        [project.dueDate, project.startDate] = StartIfDue(
            project.dueDate,
            project.startDate
        );

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
// 10 days in the past
const datePast = addDays(new Date(), -10);

// 10 days in the future
const dateFuture = addDays(new Date(), 10);

// Start of today (equivalent to 0:00 hours)
const todayMorning = startOfDay(new Date());

// 12:00 hours of today
const todayAfternoon = setHours(startOfDay(new Date()), 12);

// Areas
const homeArea = createArea("Home");
const workArea = createArea("Work");

// Projects
const homeProject = createProject(
    "Home Project",
    "This is a home project",
    todayAfternoon,
    todayMorning,
    false,
    homeArea.uuid
);
const workProject = createProject(
    "Work Project",
    "This is a work project",
    dateFuture,
    todayAfternoon,
    true,
    workArea.uuid
);
const generalProject = createProject(
    "General Project",
    "This is a general project",
    undefined,
    datePast,
    false
);
const futureProject = createProject(
    "Future Project",
    "This is a future project",
    dateFuture,
    dateFuture,
    false,
    homeArea.uuid
);
const pastProject = createProject(
    "Past Project",
    "This is a past project",
    datePast,
    datePast,
    true
);

// Todos
createTodo(
    "Home Todo",
    "This is a home todo",
    false,
    todayAfternoon,
    todayMorning,
    false,
    homeProject.uuid,
    false
);
createTodo(
    "Work Todo",
    "This is a work todo",
    true,
    dateFuture,
    todayAfternoon,
    true,
    workProject.uuid,
    false
);
createTodo(
    "General Todo",
    "",
    false,
    undefined,
    datePast,
    false,
    generalProject.uuid,
    true
);
createTodo(
    "Inbox Todo",
    "This is a todo in the inbox",
    true,
    undefined,
    undefined,
    false,
    "",
    true
);
createTodo(
    "Future Todo",
    "This is a future todo",
    false,
    dateFuture,
    dateFuture,
    false,
    futureProject.uuid,
    false
);
createTodo(
    "Past Todo",
    "",
    true,
    datePast,
    datePast,
    true,
    pastProject.uuid,
    false
);
createTodo(
    "Area Todo",
    "This is a todo in an area",
    false,
    todayAfternoon,
    todayMorning,
    false,
    homeArea.uuid,
    false
);
createTodo(
    "Unassigned Todo",
    "",
    false,
    dateFuture,
    todayAfternoon,
    true,
    "",
    false
);
createTodo(
    "Overdue Todo",
    "This is an overdue todo",
    false,
    datePast,
    datePast,
    false,
    generalProject.uuid,
    true
);
createTodo(
    "Due Today Todo",
    "This is a due today todo",
    true,
    todayAfternoon,
    todayMorning,
    false,
    workProject.uuid,
    false
);
createTodo(
    "Work Todo with no start date",
    "",
    true,
    dateFuture,
    undefined,
    true,
    workProject.uuid,
    false
);
createTodo(
    "A to-do due in 3 weeks",
    "This is a to-do due in 3 weeks",
    true,
    addDays(new Date(), 21),
    undefined,
    false,
    "",
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
// 12 todos:
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
// "A to-do due in 3 weeks" no project, due in 3 weeks, has priority
