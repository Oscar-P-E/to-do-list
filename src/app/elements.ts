import {
    getProject,
    getAreas,
    getProjects,
    getTodos,
    getAreasAndProjects,
    Todo,
    Project,
    createTodo,
    createArea,
    createProject,
    deleteTodo,
    deleteProject,
    deleteArea,
} from "../data/monolith";

import { startOfDay, isPast } from "date-fns";

import formatDistanceCustom from "./utils";
import { drawInbox, drawProjectAsMain, drawAreaAsMain } from "./views";

function createElementWithClass(type: string, className: string) {
    const element = document.createElement(type);
    element.className = className;
    return element;
}

const container = createElementWithClass("div", "container");
document.body.appendChild(container);


let currentExpandedComboBtn: HTMLElement | null = null;
let currentExpandedComboBtnOptions: HTMLElement | null = null;

function drawComboBtn(
    itemElement: HTMLElement,
    itemUuid: string,
    itemText: HTMLElement
) {
    const item = getAreasAndProjects().find((item) => item.uuid === itemUuid);

    if (!item) return;

    const type = item.type;

    const comboBtn = createElementWithClass("button", "combo-btn");
    comboBtn.textContent = "...";

    const comboBtnOptions = createElementWithClass("div", "combo-btn-options");
    comboBtnOptions.style.display = "none";

    const comboComplete = createElementWithClass("span", "combo-complete");
    comboComplete.textContent = "Mark Done";

    comboComplete.addEventListener("click", () => {
        if (type !== "project") return;

        const confirm = window.confirm(
            "Mark project and all subtasks as done?"
        );
        if (confirm) {
            const project = getProject(itemUuid);
            if (project) {
                project.isDone = true;

                const subtasks = getTodos().filter(
                    (todo) => todo.parentUuid === project.uuid
                );

                subtasks.forEach((subtask) => {
                    subtask.isDone = true;
                });
            }

            localStorage.setItem("projects", JSON.stringify(getProjects()));
            localStorage.setItem("todos", JSON.stringify(getTodos()));

            drawAreasProjectsArea();

            const mainArea = document.querySelector(
                ".main-area"
            ) as HTMLElement;

            if (mainArea.dataset.uuid === item.uuid) {
                drawInbox();
            }
        }
    });

    const comboRename = createElementWithClass("span", "combo-rename");
    comboRename.textContent = "Rename";
    comboRename.addEventListener("click", () => {
        itemText.contentEditable = "true";

        itemText.addEventListener("focus", handleFocus);
        itemText.addEventListener("blur", handleBlur);
        itemText.addEventListener("keydown", handleKeydown);

        itemText.focus();

        function handleFocus() {
            itemText.classList.add("editable");

            const range = document.createRange();
            range.selectNodeContents(itemText);

            const sel = window.getSelection();
            if (sel) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }

        function handleBlur() {
            if (item && itemText.textContent) {
                item.title = itemText.textContent;

                type === "area" &&
                    localStorage.setItem("areas", JSON.stringify(getAreas()));

                type === "project" &&
                    localStorage.setItem(
                        "projects",
                        JSON.stringify(getProjects())
                    );

                drawAreasProjectsArea();

                const mainArea = document.querySelector(
                    ".main-area"
                ) as HTMLElement;
                if (mainArea.dataset.uuid === item.uuid) {
                    type === "area" && drawAreaAsMain(item);
                    type === "project" && drawProjectAsMain(item);
                }
            } else if (item && !itemText.textContent) {
                itemText.textContent = item.title;
            }

            itemText.classList.remove("editable");
            itemText.contentEditable = "false";
        }

        function handleKeydown(e: KeyboardEvent) {
            if (e.key === "Enter" && !e.shiftKey) {
                itemText.blur();
                e.preventDefault(); // Prevent unwanted newline
            }
        }
    });

    const comboDelete = createElementWithClass("span", "combo-delete");
    comboDelete.textContent = "Delete";
    comboDelete.addEventListener("click", () => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this item? All sub-items will also be deleted. This cannot be undone"
        );
        if (confirmation) {
            const mainArea = document.querySelector(
                ".main-area"
            ) as HTMLElement;

            if (type === "area") {
                itemElement.remove();
                deleteArea(itemUuid);
                drawAreasProjectsArea();
            } else if (type === "project") {
                itemElement.remove();
                deleteProject(itemUuid);
                drawAreasProjectsArea();
            } else {
                console.error("Unknown type");
            }

            if (itemUuid === mainArea.dataset.uuid) {
                drawInbox();
            }
        }
    });

    type === "project" && comboBtnOptions.appendChild(comboComplete);
    comboBtnOptions.appendChild(comboRename);
    comboBtnOptions.appendChild(comboDelete);

    comboBtn.appendChild(comboBtnOptions);

    comboBtn.addEventListener("click", (event) => {
        if (
            currentExpandedComboBtn &&
            currentExpandedComboBtnOptions &&
            comboBtn !== currentExpandedComboBtn
        ) {
            currentExpandedComboBtnOptions.style.display = "none";
        }

        if (comboBtnOptions.style.display === "none") {
            comboBtnOptions.style.display = "block";
            currentExpandedComboBtn = comboBtn;
            currentExpandedComboBtnOptions = comboBtnOptions;
        } else {
            comboBtnOptions.style.display = "none";
            if (comboBtn === currentExpandedComboBtn) {
                currentExpandedComboBtn = null;
                currentExpandedComboBtnOptions = null;
            }
        }
        event.stopPropagation(); // Or else click will bubble up and menu will immediately close
    });

    document.addEventListener("click", (event) => {
        if (!comboBtn.contains(event.target as Node)) {
            comboBtnOptions.style.display = "none";
        }
    });

    itemElement.appendChild(comboBtn);
}

function drawAreasProjectsArea() {
    let areasProjectsArea = document.querySelector(
        ".areas-projects-area"
    ) as HTMLElement | null;

    if (!areasProjectsArea) {
        areasProjectsArea = createElementWithClass(
            "div",
            "areas-projects-area"
        ) as HTMLElement;
    }

    if (areasProjectsArea.children.length > 0) {
        while (areasProjectsArea.firstChild) {
            areasProjectsArea.removeChild(areasProjectsArea.firstChild);
        }
    }

    getAreas().forEach((area) => {
        const areaAndChildContainer = createElementWithClass(
            "div",
            "area-and-child-container"
        );
        const areaElement = createElementWithClass("div", "area");
        areaElement.dataset.uuid = area.uuid;

        const areaText = createElementWithClass("span", "area-text");
        areaText.textContent = area.title;

        areasProjectsArea?.appendChild(areaAndChildContainer);
        areaAndChildContainer.appendChild(areaElement);
        areaElement.appendChild(areaText);

        drawComboBtn(areaElement, area.uuid, areaText);

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

                drawComboBtn(projectElement, project.uuid, projectText);
            }
        });
    });

    getProjects().forEach((project) => {
        if (!project.parentUuid) {
            const projectElement = createElementWithClass("div", "project");
            const projectText = createElementWithClass("span", "project-text");
            projectElement.dataset.uuid = project.uuid;
            projectText.textContent = project.title;
            areasProjectsArea?.appendChild(projectElement);
            projectElement.appendChild(projectText);

            drawComboBtn(projectElement, project.uuid, projectText);
        }
    });
}

function drawCreateAreaProjectBtn(sideArea: HTMLElement) {
    const createAreaProjectBtn = createElementWithClass(
        "button",
        "create-area-project-btn"
    );

    createAreaProjectBtn.textContent = "+";

    sideArea.appendChild(createAreaProjectBtn);

    const createOptions = createElementWithClass("div", "create-options");
    createOptions.style.display = "none";

    const optionArea = createElementWithClass("button", "option-area");
    optionArea.textContent = "New Area";
    optionArea.addEventListener("click", () => {
        createArea("New Area");
        drawAreasProjectsArea();
    });

    const optionProject = createElementWithClass("button", "option-project");
    optionProject.textContent = "New Project";
    optionProject.addEventListener("click", () => {
        createProject("New Project");
        drawAreasProjectsArea();
    });

    createAreaProjectBtn.addEventListener("click", (event) => {
        if (createOptions.style.display === "none") {
            createOptions.style.display = "flex";
        } else {
            createOptions.style.display = "none";
        }

        event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (!createAreaProjectBtn.contains(event.target as Node)) {
            createOptions.style.display = "none";
        }
    });

    createOptions.appendChild(optionArea);
    createOptions.appendChild(optionProject);

    createAreaProjectBtn.appendChild(createOptions);
}

function drawSideArea() {
    const sideArea = createElementWithClass("div", "side-area");

    container.appendChild(sideArea);

    const inboxArea = createElementWithClass("div", "inbox-area");
    const inbox = createElementWithClass("div", "inbox");
    const inboxText = createElementWithClass("span", "inbox-text");

    sideArea.appendChild(inboxArea);

    const viewsArea = createElementWithClass("div", "views-area");

    sideArea.appendChild(viewsArea);

    const today = createElementWithClass("div", "today");
    const todayText = createElementWithClass("span", "today-text");
    const scheduled = createElementWithClass("div", "scheduled");
    const scheduledText = createElementWithClass("span", "scheduled-text");
    const unscheduled = createElementWithClass("div", "unscheduled");
    const unscheduledText = createElementWithClass("span", "unscheduled-text");

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


    // Populate side area

    inboxText.textContent = "Inbox";

    todayText.textContent = "Today";

    scheduledText.textContent = "Scheduled";
    unscheduledText.textContent = "Unscheduled";
    logbookText.textContent = "Logbook";

    drawAreasProjectsArea();

    inboxArea.appendChild(inbox);
    inbox.appendChild(inboxText);
    viewsArea.appendChild(today);
    today.appendChild(todayText);
    viewsArea.appendChild(scheduled);
    scheduled.appendChild(scheduledText);
    viewsArea.appendChild(unscheduled);
    unscheduled.appendChild(unscheduledText);
    logbookArea.appendChild(logbook);
    logbook.appendChild(logbookText);

    drawCreateAreaProjectBtn(sideArea);
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

function putDeleteOnMainItemEle(item: Todo, itemElement: Element) {
    const deleteButton = createElementWithClass(
        "button",
        "delete-button"
    ) as HTMLButtonElement;
    deleteButton.textContent = "🗑️";

    itemElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (confirmation) {
            if (item.type === "todo") {
                itemElement.remove();
                deleteTodo(item.uuid);
            } else {
                console.error("Should be type todo but we ended up here...");
            }
        }
    });
}

function drawCreateTodoBtn(
    mainArea: Element,
    context?: "inbox" | "today" | "parent"
) {
    const createTodoBtn = createElementWithClass(
        "button",
        "create-todo-button"
    );

    createTodoBtn.textContent = "+";

    mainArea.appendChild(createTodoBtn);

    createTodoBtn.addEventListener("click", () => {
        let inInbox = undefined;
        let startDate = undefined;
        let parentUuid = undefined;

        if (context === "inbox") {
            inInbox = true;
        } else if (context === "today") {
            startDate = startOfDay(new Date());
        } else if (context === "parent") {
            parentUuid = (mainArea as HTMLElement).dataset.uuid;
        } else {
            console.error("Where's muh context?");
        }

        const newTodo = createTodo(
            "New To-Do",
            "",
            false,
            undefined,
            startDate,
            false,
            parentUuid,
            inInbox
        );

        drawMainItem(newTodo, mainArea);
    });
}

function drawMainItem(item: Todo, mainArea: Element) {
    let itemElement = mainArea.querySelector(
        `[data-uuid="${item.uuid}"]`
    ) as HTMLElement;

    if (!itemElement) {
        itemElement = createElementWithClass("div", "todo");

        itemElement.dataset.uuid = item.uuid;

        const newTodoBtn = document.querySelector(".create-todo-button");

        if (newTodoBtn) {
            mainArea.insertBefore(itemElement, newTodoBtn);
        } else {
            mainArea.appendChild(itemElement);
        }
    }

    putCheckboxOnMainItemEle(item, itemElement);
    putTitleOnMainItemEle(item, itemElement);
    putPriorityOnMainItemEle(item, itemElement);
    putNoteIndicatorOnMainItemEle(item, itemElement);

    const splitter = createElementWithClass("span", "splitter-span");
    itemElement.appendChild(splitter);

    putParentOnMainItemEle(item, itemElement);
    putDueOnMainItemEle(item, itemElement);
    putDeleteOnMainItemEle(item, itemElement);
}

function putCheckboxOnMainItemEle(item: Todo, itemElement: Element) {
    const itemCheckbox = createElementWithClass(
        "input",
        "item-checkbox"
    ) as HTMLInputElement;
    itemCheckbox.type = "checkbox";
    itemElement.appendChild(itemCheckbox);

    if (item.isDone) {
        itemCheckbox.checked = true;
        itemElement.classList.add("done");
    }

    itemCheckbox.addEventListener("change", () => {
        if (itemCheckbox.checked) {
            itemElement.classList.add("done");
            item.isDone = true;
            itemElement.remove();
        } else {
            itemElement.classList.remove("done");
            item.isDone = false;
        }

        localStorage.setItem("todos", JSON.stringify(getTodos()));
    });
}

function putTitleOnMainItemEle(item: Todo, itemElement: Element) {
    const itemText = createElementWithClass("span", "item-text");
    itemText.textContent = item.title;
    itemElement.appendChild(itemText);
}

function putDueOnMainItemEle(item: Todo, itemElement: Element) {
    if (item.dueDate) {
        const itemDue = createElementWithClass("span", "item-due");
        const date = new Date(item.dueDate);

        const distance = formatDistanceCustom(date, itemDue);

        itemDue.textContent = `⚑ ${distance}`;

        itemElement.appendChild(itemDue);
    }
}

function putPriorityOnMainItemEle(item: Todo, itemElement: Element) {
    if (item.type === "todo" && item.hasPriority) {
        const itemPriority = createElementWithClass("span", "item-priority");

        itemPriority.textContent = "★";
        itemElement.appendChild(itemPriority);
    }
}

function putParentOnMainItemEle(item: Todo, itemElement: Element) {
    if (item.parentUuid) {
        const itemParent = createElementWithClass("span", "item-parent");
        const parent = getProject(item.parentUuid);
        if (parent) {
            itemParent.textContent = `⤷ ${parent.title}`;
            itemElement.appendChild(itemParent);
        }
    }
}

function putNoteIndicatorOnMainItemEle(item: Todo, itemElement: Element) {
    if (item.notes && item.notes !== "") {
        const itemNote = createElementWithClass("span", "item-note");
        itemNote.textContent = "›";
        itemElement.appendChild(itemNote);
    }
}

// Expanded todo view

function putTitleOnExpanded(item: Todo, itemElement: Element) {
    const itemText = createElementWithClass("span", "item-text");
    itemText.textContent = item.title;
    itemElement.appendChild(itemText);

    itemText.contentEditable = "true";

    itemText.addEventListener("focus", handleFocus);
    itemText.addEventListener("blur", handleBlur);
    itemText.addEventListener("keydown", handleKeydown);

    function handleFocus() {
        itemText.classList.add("editable");

        const range = document.createRange();
        range.selectNodeContents(itemText);

        const sel = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    function handleBlur() {
        if (itemText.textContent) {
            item.title = itemText.textContent;

            localStorage.setItem("todos", JSON.stringify(getTodos()));
        } else {
            itemText.textContent = item.title;
        }
        itemText.classList.remove("editable");
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            itemText.blur();
            e.preventDefault(); // Prevent unwanted newline
        }
    }
}

function putNotesOnExpanded(item: Todo, itemElement: Element) {
    const itemNotes = createElementWithClass("div", "item-notes");
    itemNotes.contentEditable = "true";

    itemNotes.addEventListener("focus", handleFocus);
    itemNotes.addEventListener("blur", handleBlur); // click away.
    itemNotes.addEventListener("keydown", handleKeydown);

    function handleFocus() {
        itemNotes.classList.add("editable");

        const range = document.createRange();
        range.selectNodeContents(itemNotes);

        const sel = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    function handleBlur() {
        if (itemNotes.textContent === "Notes") {
            itemNotes.textContent = "";
        }

        item.notes = itemNotes.textContent || "";
        itemNotes.classList.remove("editable");

        localStorage.setItem("todos", JSON.stringify(getTodos()));
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Enter" && !event.shiftKey) {
            itemNotes.blur();
            event.preventDefault(); // Prevent unwanted newlines.
        }
    }

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
    const label = createElementWithClass(
        "label",
        "date-label"
    ) as HTMLLabelElement;
    label.textContent = "Start";

    label.htmlFor = "start-date";

    const itemStartDate = createElementWithClass(
        "input",
        "item-exp-start-date"
    ) as HTMLInputElement;

    itemStartDate.type = "date";
    itemStartDate.id = "start-date";
    itemStartDate.name = "start-date";


    if (item.startDate && isPast(startOfDay(item.startDate))) {
        itemStartDate.valueAsDate = startOfDay(new Date());
    }

    itemStartDate.addEventListener("change", () => {
        item.startDate = itemStartDate.valueAsDate || undefined;

        if (item.startDate && isPast(startOfDay(item.startDate))) {
            itemStartDate.valueAsDate = startOfDay(new Date());
        }
    });

    itemElement.appendChild(label);
    itemElement.appendChild(itemStartDate);
}

function putDueDateOnExpanded(item: Todo, itemElement: Element) {
    const label = createElementWithClass(
        "label",
        "date-label"
    ) as HTMLLabelElement;

    label.textContent = "Due";

    label.htmlFor = "due-date";

    const itemDueDate = createElementWithClass(
        "input",
        "item-exp-due-date"
    ) as HTMLInputElement;

    itemDueDate.type = "date";
    itemDueDate.id = "due-date";
    itemDueDate.name = "due-date";

    if (item.dueDate) {
        itemDueDate.valueAsDate = item.dueDate;
    }

    itemDueDate.addEventListener("change", () => {
        item.dueDate = itemDueDate.valueAsDate || undefined;
    });

    itemElement.appendChild(label);
    itemElement.appendChild(itemDueDate);
}

function putParentOnExpanded(item: Todo, itemElement: Element) {
    const itemParent = createElementWithClass(
        "select",
        "item-exp-parent"
    ) as HTMLSelectElement;

    const noneOption = createElementWithClass(
        "option",
        "parent-option"
    ) as HTMLOptionElement;

    noneOption.value = "";
    noneOption.textContent = "🞪 No Parent";

    itemParent.appendChild(noneOption);

    getAreasAndProjects().forEach((projOrArea) => {
        const option = createElementWithClass(
            "option",
            "parent-option"
        ) as HTMLOptionElement;

        option.value = projOrArea.uuid;
        option.textContent = projOrArea.title;

        itemParent.appendChild(option);
    });

    if (item.parentUuid) {
        itemParent.value = item.parentUuid;
    }

    itemParent.addEventListener("change", () => {
        item.parentUuid = itemParent.value;
    });

    itemElement.appendChild(itemParent);
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

    putCheckboxOnMainItemEle(item, itemElement);
    putTitleOnExpanded(item, row1);

    putPriorityOnExpanded(item, row1);
    putDeleteOnMainItemEle(item, row1);

    putNotesOnExpanded(item, row2);
    putStartDateOnExpanded(item, row3);
    putDueDateOnExpanded(item, row4);
    putParentOnExpanded(item, row4);
}

function drawProjectParentSelector(project: Project, container: HTMLElement) {
    const parentSelector = createElementWithClass(
        "select",
        "parent-selector"
    ) as HTMLSelectElement;

    const noneOption = createElementWithClass(
        "option",
        "parent-option"
    ) as HTMLOptionElement;

    noneOption.value = "";
    noneOption.textContent = "🞪 No Area";

    parentSelector.appendChild(noneOption);

    getAreas().forEach((area) => {
        const option = createElementWithClass(
            "option",
            "parent-option"
        ) as HTMLOptionElement;

        option.value = area.uuid;
        option.textContent = area.title;

        parentSelector.appendChild(option);
    });

    if (project.parentUuid) {
        parentSelector.value = project.parentUuid;
    }

    parentSelector.addEventListener("change", () => {
        project.parentUuid = parentSelector.value;
        localStorage.setItem("projects", JSON.stringify(getProjects()));
        drawAreasProjectsArea();
        drawInbox();
    });

    container.appendChild(parentSelector);
}

export {
    makeOrClearMainArea,
    drawMainItem,
    drawExpandedTodo,
    createElementWithClass,
    drawSideArea,
    drawCreateTodoBtn,
    drawComboBtn,
    drawAreasProjectsArea,
    drawProjectParentSelector,
};
