import {
    createElementWithClass,
    makeOrClearMainArea,
    drawMainItem,
    drawCreateTodoBtn,
} from "./elements";

import { getTodos, getTodosAndProjects, Area, Project } from "../data/monolith";

import { isToday, startOfDay, isPast } from "date-fns";

function drawInbox() {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = "Inbox";

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    const filteredItems = getTodos().filter((todo) => {
        return !todo.isDone && todo.inInbox;
    });

    filteredItems.forEach((todo) => {
        drawMainItem(todo, mainArea);
    });

    drawCreateTodoBtn(mainArea, "inbox");
}

function drawToday() {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = "Today";

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    const filteredItems = getTodosAndProjects().filter((item) => {
        return (
            !item.isDone &&
            item.startDate &&
            (isToday(startOfDay(item.startDate)) || isPast(item.startDate))
        );
    });

    filteredItems.forEach((item) => {
        drawMainItem(item, mainArea);
    });

    drawCreateTodoBtn(mainArea, "today");
}

function drawScheduled() {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = "Scheduled";

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    const filteredItems = getTodosAndProjects().filter((item) => {
        return !item.isDone && item.startDate;
    });

    filteredItems.forEach((item) => {
        drawMainItem(item, mainArea);
    });
}

function drawUnscheduled() {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = "Unscheduled";

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    const filteredItems = getTodosAndProjects().filter((item) => {
        return (
            !item.isDone &&
            !item.startDate &&
            "inInbox" in item &&
            !item.inInbox
        );
    });

    filteredItems.forEach((item) => {
        drawMainItem(item, mainArea);
    });
}

function drawLogbook() {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = "Logbook";

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    const filteredItems = getTodosAndProjects().filter((item) => {
        return item.isDone;
    });

    filteredItems.forEach((item) => {
        drawMainItem(item, mainArea);
    });
}

function drawAreaAsMain(area: Area) {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = area.title;

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    (mainArea as HTMLElement).dataset.uuid = area.uuid;

    const filteredItems = getTodosAndProjects().filter((item) => {
        return !item.isDone && item.parentUuid === area.uuid;
    });

    filteredItems.forEach((item) => {
        drawMainItem(item, mainArea);
    });

    drawCreateTodoBtn(mainArea, "parent");
}

function drawProjectAsMain(project: Project) {
    const mainArea: Element = makeOrClearMainArea();

    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );
    mainAreaHeadingText.textContent = project.title;

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    (mainArea as HTMLElement).dataset.uuid = project.uuid;

    const filteredItems = getTodosAndProjects().filter((item) => {
        return !item.isDone && item.parentUuid === project.uuid;
    });

    filteredItems.forEach((item) => {
        drawMainItem(item, mainArea);
    });

    drawCreateTodoBtn(mainArea, "parent");
}

type ViewFunction = () => void;

type ViewId = "inbox" | "today" | "scheduled" | "unscheduled" | "logbook";

const viewFuncMap: Record<ViewId, ViewFunction> = {
    inbox: drawInbox,
    today: drawToday,
    scheduled: drawScheduled,
    unscheduled: drawUnscheduled,
    logbook: drawLogbook,
};

export {
    drawInbox,
    drawToday,
    drawScheduled,
    drawUnscheduled,
    drawLogbook,
    drawAreaAsMain,
    drawProjectAsMain,
    viewFuncMap,
    ViewId,
};
