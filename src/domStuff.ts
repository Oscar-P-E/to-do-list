import {
    // Todo,
    Project,
    Area,
    TodoOrProject,
    // TodoOrProjectOrArea,
    // createTodo,
    // createProject,
    // createArea,
    // getToday,
    // getTodo,
    getProject,
    getArea,
    getTodos,
    getProjects,
    getAreas,
    getTodosAndProjects,
    // modifyTodo,
    // modifyProject,
    // modifyArea,
    // deleteTodo,
    // deleteProject,
    // deleteArea,
} from "./monolith";

import {
    isToday,
    isPast,
    startOfDay,
    differenceInDays,
    format,
    isThisYear,
} from "date-fns";

function buildDOM() {
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
        const scheduledCount = createElementWithClass(
            "span",
            "scheduled-count"
        );
        const unscheduled = createElementWithClass("div", "unscheduled");
        const unscheduledText = createElementWithClass(
            "span",
            "unscheduled-text"
        );
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

        // Populate everything:

        inboxText.textContent = "Inbox";
        inboxCount.textContent = getTodos()
            .filter((todo) => todo.inInbox)
            .length.toString();
        todayText.textContent = "Today";
        todayCount.textContent = getTodosAndProjects()
            .filter((item) => {
                return (
                    item.startDate &&
                    (isToday(startOfDay(item.startDate)) ||
                        isPast(item.startDate))
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
                    const projectElement = createElementWithClass(
                        "div",
                        "project"
                    );
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
                const projectText = createElementWithClass(
                    "span",
                    "project-text"
                );
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
        let itemElement: HTMLElement | undefined;

        if (item.type === "todo") {
            itemElement = createElementWithClass("div", "todo");
        } else if (item.type === "project") {
            itemElement = createElementWithClass("div", "project");
        }

        if (itemElement) {
            mainArea.appendChild(itemElement);
            putCheckboxOnMainItemEle(item, itemElement);
            putTitleOnMainItemEle(item, itemElement);
            putDueOnMainItemEle(item, itemElement);
        }
    }

    function putCheckboxOnMainItemEle(
        item: TodoOrProject,
        itemElement: Element
    ) {
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

    function formatDistanceCustom(date: Date, itemDue: Element): string {
        const now = new Date();
        const today = startOfDay(now);
        const diffInDays = Math.abs(differenceInDays(today, date));

        if (isToday(date) || isPast(date)) {
            itemDue.classList.add("overdue");
        }

        if (isToday(date)) {
            return "Today";
        } else if (diffInDays <= 14) {
            return `${diffInDays}${isPast(date) ? "d ago" : "d"}`;
        } else if (isThisYear(date)) {
            return format(date, "d/M");
        } else {
            return format(date, "yyyy");
        }
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

    function drawInbox() {
        const mainArea: Element = makeOrClearMainArea();

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
        const mainAreaHeadingText = createElementWithClass(
            "h1",
            "main-area-heading-text"
        );
        mainAreaHeadingText.textContent = "Inbox";

        mainArea.appendChild(mainAreaHeading);
        mainAreaHeading.appendChild(mainAreaHeadingText);

        const filteredItems = getTodos().filter((todo) => {
            !todo.isDone && todo.inInbox;
        });

        filteredItems.forEach((todo) => {
            drawMainItem(todo, mainArea);
        });
    }

    function drawToday() {
        const mainArea: Element = makeOrClearMainArea();

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
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
    }

    function drawScheduled() {
        const mainArea: Element = makeOrClearMainArea();

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
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

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
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

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
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

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
        const mainAreaHeadingText = createElementWithClass(
            "h1",
            "main-area-heading-text"
        );
        mainAreaHeadingText.textContent = area.title;

        mainArea.appendChild(mainAreaHeading);
        mainAreaHeading.appendChild(mainAreaHeadingText);

        const filteredItems = getTodosAndProjects().filter((item) => {
            return !item.isDone && item.parentUuid === area.uuid;
        });

        filteredItems.forEach((item) => {
            drawMainItem(item, mainArea);
        });
    }

    function drawProjectAsMain(project: Project) {
        const mainArea: Element = makeOrClearMainArea();

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
        const mainAreaHeadingText = createElementWithClass(
            "h1",
            "main-area-heading-text"
        );
        mainAreaHeadingText.textContent = project.title;

        mainArea.appendChild(mainAreaHeading);
        mainAreaHeading.appendChild(mainAreaHeadingText);

        const filteredItems = getTodosAndProjects().filter((item) => {
            return !item.isDone && item.parentUuid === project.uuid;
        });

        filteredItems.forEach((item) => {
            drawMainItem(item, mainArea);
        });
    }

    drawSideArea();
    drawInbox();
    drawToday(); // for testing

    // document.addEventListener("DOMContentLoaded", () => {
    //     //
    // });

    // Event listeners for side area

    const sideAreaViews = document.querySelectorAll(".side-area .view");

    type ViewFunction = () => void;
    type ViewId = "inbox" | "today" | "scheduled" | "unscheduled" | "logbook";

    const viewFuncMap: Record<ViewId, ViewFunction> = {
        inbox: drawInbox,
        today: drawToday,
        scheduled: drawScheduled,
        unscheduled: drawUnscheduled,
        logbook: drawLogbook,
    };

    sideAreaViews.forEach((e) => {
        e.addEventListener("click", (e) => {
            const target = e.currentTarget as HTMLElement;
            const id = target.id as ViewId;
            const viewFunc = viewFuncMap[id];
            if (viewFunc) {
                viewFunc();
            }
        });
    });

    const areasProjectsArea = document.querySelector(".areas-projects-area");

    if (areasProjectsArea) {
        areasProjectsArea.addEventListener("click", (e) => {
            let target = e.target as HTMLElement | null;

            // Traverse up the DOM until find element with uuid dataset
            while (target && !target.dataset.uuid) {
                target = target.parentElement;
            }

            if (!target) return;

            const uuid = target.dataset.uuid;
            const type = target.classList[0];

            if (uuid && type) {
                if (type === "area") {
                    const area = getArea(uuid);
                    if (area) {
                        drawAreaAsMain(area);
                    }
                } else if (type === "project") {
                    const project = getProject(uuid);
                    if (project) {
                        drawProjectAsMain(project);
                    }
                }
            }
        });
    }

    // Event listeners for main area

    // const mainArea = document.querySelector(".main-area");

    // if (mainArea) {
    //     mainArea.addEventListener("click", (e) => {
    //         // TODO
    //     });
    // }

    return {
        drawInbox,
        drawToday,
        drawScheduled,
        drawUnscheduled,
        drawLogbook,
        drawAreaAsMain,
        drawProjectAsMain,
    };
}

export default buildDOM;
