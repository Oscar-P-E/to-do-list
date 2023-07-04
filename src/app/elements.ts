import {
    getAreas,
    getProjects,
    getTodos,
    TodoOrProject,
    getTodosAndProjects,
    Todo,
} from "../data/monolith";

import { isToday, startOfDay, isPast } from "date-fns";

import formatDistanceCustom from "./utils";

function createElementWithClass(type: string, className: string) {
    const element = document.createElement(type);
    element.className = className;
    return element;
}

const container = createElementWithClass("div", "container");
document.body.appendChild(container);

function drawSideArea() {
    const sideArea = createElementWithClass("div", "side-area");

    container.appendChild(sideArea);

    const inboxArea = createElementWithClass("div", "inbox-area");
    const inbox = createElementWithClass("div", "inbox");
    const inboxText = createElementWithClass("span", "inbox-text");
    const inboxCount = createElementWithClass("span", "inbox-count");

    sideArea.appendChild(inboxArea);

    const viewsArea = createElementWithClass("div", "views-area");

    sideArea.appendChild(viewsArea);

    const today = createElementWithClass("div", "today");
    const todayText = createElementWithClass("span", "today-text");
    const todayCount = createElementWithClass("span", "today-count");
    const scheduled = createElementWithClass("div", "scheduled");
    const scheduledText = createElementWithClass("span", "scheduled-text");
    const scheduledCount = createElementWithClass("span", "scheduled-count");
    const unscheduled = createElementWithClass("div", "unscheduled");
    const unscheduledText = createElementWithClass("span", "unscheduled-text");
    const unscheduledCount = createElementWithClass(
        "span",
        "unscheduled-count"
    );

    const logbookArea = createElementWithClass("div", "logbook-area");
    const logbook = createElementWithClass("div", "logbook");
    const logbookText = createElementWithClass("span", "logbook-text");

    sideArea.appendChild(logbookArea);

    const areasProjectsArea = createElementWithClass(
        "div",
        "areas-projects-area"
    );

    sideArea.appendChild(areasProjectsArea);

    // add some more classes and ids
    [inbox, today, scheduled, unscheduled, logbook].forEach((element) => {
        element.classList.add("view");
        element.id = element.classList[0];
    });

    [inboxCount, todayCount, scheduledCount, unscheduledCount].forEach(
        (element) => {
            element.classList.add("counter");
        }
    );

    // Populate side area

    inboxText.textContent = "Inbox";
    inboxCount.textContent = getTodos()
        .filter((todo) => !todo.isDone && todo.inInbox)
        .length.toString();

    todayText.textContent = "Today";
    todayCount.textContent = getTodosAndProjects()
        .filter((item) => {
            return (
                !item.isDone &&
                item.startDate &&
                (isToday(startOfDay(item.startDate)) || isPast(item.startDate))
            );
        })
        .length.toString();
    scheduledText.textContent = "Scheduled";
    unscheduledText.textContent = "Unscheduled";
    logbookText.textContent = "Logbook";

    getAreas().forEach((area) => {
        const areaAndChildContainer = createElementWithClass(
            "div",
            "area-and-child-container"
        );
        const areaElement = createElementWithClass("div", "area");
        const areaText = createElementWithClass("span", "area-text");
        areaElement.dataset.uuid = area.uuid;
        areaText.textContent = area.title;
        areasProjectsArea.appendChild(areaAndChildContainer);
        areaAndChildContainer.appendChild(areaElement);
        areaElement.appendChild(areaText);
        getProjects().forEach((project) => {
            if (project.parentUuid === area.uuid) {
                const projectElement = createElementWithClass("div", "project");
                const projectText = createElementWithClass(
                    "span",
                    "project-text"
                );
                projectElement.dataset.uuid = project.uuid;
                projectText.textContent = project.title;
                areaAndChildContainer.appendChild(projectElement);
                projectElement.appendChild(projectText);
            }
        });
    });

    getProjects().forEach((project) => {
        if (!project.parentUuid) {
            const projectElement = createElementWithClass("div", "project");
            const projectText = createElementWithClass("span", "project-text");
            projectElement.dataset.uuid = project.uuid;
            projectText.textContent = project.title;
            areasProjectsArea.appendChild(projectElement);
            projectElement.appendChild(projectText);
        }
    });

    inboxArea.appendChild(inbox);
    inbox.appendChild(inboxText);
    inbox.appendChild(inboxCount);
    viewsArea.appendChild(today);
    today.appendChild(todayText);
    today.appendChild(todayCount);
    viewsArea.appendChild(scheduled);
    scheduled.appendChild(scheduledText);
    scheduled.appendChild(scheduledCount);
    viewsArea.appendChild(unscheduled);
    unscheduled.appendChild(unscheduledText);
    unscheduled.appendChild(unscheduledCount);
    logbookArea.appendChild(logbook);
    logbook.appendChild(logbookText);
}

// Main Area

function makeOrClearMainArea() {
    const mainArea = document.querySelector(".main-area");
    if (mainArea) {
        mainArea.innerHTML = "";
        return mainArea;
    } else {
        const mainArea = createElementWithClass("div", "main-area");
        container.appendChild(mainArea);
        return mainArea;
    }
}

function drawMainItem(item: TodoOrProject, mainArea: Element) {
    const itemElement = createElementWithClass("div", item.type);

    if (itemElement) {
        itemElement.dataset.uuid = item.uuid;

        mainArea.appendChild(itemElement);

        putCheckboxOnMainItemEle(item, itemElement);
        putTitleOnMainItemEle(item, itemElement);
        putPriorityOnMainItemEle(item, itemElement);
        putParentOnMainItemEle(item, itemElement);
        putDueOnMainItemEle(item, itemElement);
        putNoteIndicatorOnMainItemEle(item, itemElement);
    }
}

function putCheckboxOnMainItemEle(item: TodoOrProject, itemElement: Element) {
    const itemCheckbox = createElementWithClass(
        "input",
        "item-checkbox"
    ) as HTMLInputElement;
    itemCheckbox.type = "checkbox";
    itemElement.appendChild(itemCheckbox);
}

function putTitleOnMainItemEle(item: TodoOrProject, itemElement: Element) {
    const itemText = createElementWithClass("span", "item-text");
    itemText.textContent = item.title;
    itemElement.appendChild(itemText);
}

function putDueOnMainItemEle(item: TodoOrProject, itemElement: Element) {
    if (item.dueDate) {
        const itemDue = createElementWithClass("span", "item-due");
        const date = new Date(item.dueDate);

        const distance = formatDistanceCustom(date, itemDue);

        itemDue.textContent = `⚑ ${distance}`;

        itemElement.appendChild(itemDue);
    }
}

function putPriorityOnMainItemEle(item: TodoOrProject, itemElement: Element) {
    if (item.type === "todo" && item.hasPriority) {
        const itemPriority = createElementWithClass("span", "item-priority");

        itemPriority.textContent = "★";
        itemElement.appendChild(itemPriority);
    }
}

function putParentOnMainItemEle(item: TodoOrProject, itemElement: Element) {
    if (item.parentUuid) {
        const itemParent = createElementWithClass("span", "item-parent");
        const parent = getProjects().find(
            (project) => project.uuid === item.parentUuid
        );
        if (parent) {
            itemParent.textContent = `⤷ ${parent.title}`;
            itemElement.appendChild(itemParent);
        }
    }
}

function putNoteIndicatorOnMainItemEle(
    item: TodoOrProject,
    itemElement: Element
) {
    if (item.notes && item.notes !== "") {
        const itemNote = createElementWithClass("span", "item-note");
        itemNote.textContent = "⎘";
        itemElement.appendChild(itemNote);
    }
}

// Expanded todo view

function putNotesOnExpanded(item: Todo, itemElement: Element) {
    const itemNotes = createElementWithClass("div", "item-notes");

    if (!item.notes) {
        itemNotes.textContent = "Notes";
        itemNotes.classList.add("empty-notes");
    } else {
        itemNotes.textContent = item.notes;
    }

    itemElement.appendChild(itemNotes);
}

function putPriorityOnExpanded(item: Todo, itemElement: Element) {
    const itemPriority = createElementWithClass("span", "item-exp-priority");

    const updatePriorityText = () => {
        if (item.hasPriority) {
            itemPriority.textContent = "★ Priority";
            itemPriority.classList.add("exp-priority-highlight");
        } else {
            itemPriority.textContent = "☆ Priority";
            itemPriority.classList.remove("exp-priority-highlight");
        }
    };

    const togglePriority = () => {
        item.hasPriority = !item.hasPriority;
        updatePriorityText();
    };

    updatePriorityText();

    itemPriority.removeEventListener("click", togglePriority); // probably unnecessary
    itemPriority.addEventListener("click", togglePriority);

    itemElement.appendChild(itemPriority);
}

function putStartDateOnExpanded(item: Todo, itemElement: Element) {
    const itemStartDate = createElementWithClass(
        "input",
        "item-exp-start-date"
    ) as HTMLInputElement;

    itemStartDate.type = "date";

    // const today = startOfDay(new Date());

    if (item.startDate && isPast(startOfDay(item.startDate))) {
        itemStartDate.valueAsDate = startOfDay(new Date());
    }

    itemStartDate.addEventListener("change", () => {
        item.startDate = itemStartDate.valueAsDate || undefined;

        if (item.startDate && isPast(startOfDay(item.startDate))) {
            itemStartDate.valueAsDate = startOfDay(new Date());
        }
    });

    itemElement.appendChild(itemStartDate);
}

function drawExpandedTodo(item: Todo, mainArea: Element) {
    const itemElement = mainArea.querySelector(`[data-uuid="${item.uuid}"]`);

    if (!itemElement) return;

    if (!(itemElement instanceof HTMLElement)) {
        console.error("Expected HTMLElement but got a different type.");
        return;
    }

    while (itemElement.firstChild) {
        itemElement.firstChild.remove();
    }

    itemElement.className = "expanded";

    const row1 = createElementWithClass("div", "row1");
    const row2 = createElementWithClass("div", "row2");
    const row3 = createElementWithClass("div", "row3");
    const row4 = createElementWithClass("div", "row4");

    if (!row1 || !row2 || !row3 || !row4) return;

    itemElement.appendChild(row1);
    itemElement.appendChild(row2);
    itemElement.appendChild(row3);
    itemElement.appendChild(row4);

    putCheckboxOnMainItemEle(item, row1);
    // putPriorityOnMainItemEle(item, itemElement);
    putTitleOnMainItemEle(item, row1);
    // putParentOnMainItemEle(item, itemElement);
    // putDueOnMainItemEle(item, itemElement);
    // putNoteIndicatorOnMainItemEle(item, itemElement);

    putNotesOnExpanded(item, row2);
    putStartDateOnExpanded(item, row3);
    putPriorityOnExpanded(item, row4);
    // putDueDateBtnOnExpanded(item, itemElement);
    // putParentBtnOnExpanded(item, itemElement);
}

export {
    makeOrClearMainArea,
    drawMainItem,
    drawExpandedTodo,
    createElementWithClass,
    drawSideArea,
};
