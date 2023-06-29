import {
    // Todo,
    Project,
    Area,
    // TodoOrProject,
    TodoOrProjectOrArea,
    // createTodo,
    // createProject,
    // createArea,
    getToday,
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
                return item.startDate && item.startDate <= getToday();
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

    function putItemOnMain(item: TodoOrProjectOrArea, mainArea: Element) {
        let itemElement: HTMLElement | undefined;

        if (item.type === "todo") {
            itemElement = createElementWithClass("div", "todo");
        } else if (item.type === "project") {
            itemElement = createElementWithClass("div", "project");
        }

        if (itemElement) {
            mainArea.appendChild(itemElement);
            putStuffOnItem(item, itemElement);
        }
    }

    function putStuffOnItem(item: TodoOrProjectOrArea, itemElement: Element) {
        if (item.type === "todo") {
            const itemText = createElementWithClass("span", "todo-text");
            itemText.textContent = item.title;
            itemElement.appendChild(itemText);
        } else if (item.type === "project") {
            const itemText = createElementWithClass("span", "project-text");
            itemText.textContent = item.title;
            itemElement.appendChild(itemText);
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

        const filteredItems = getTodos().filter((todo) => todo.inInbox);

        filteredItems.forEach((todo) => {
            putItemOnMain(todo, mainArea);
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
            return item.startDate && item.startDate <= getToday();
        });

        filteredItems.forEach((item) => {
            putItemOnMain(item, mainArea);
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
            return item.startDate;
        });

        filteredItems.forEach((item) => {
            putItemOnMain(item, mainArea);
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
            return !item.startDate && "inInbox" in item && !item.inInbox;
        });

        filteredItems.forEach((item) => {
            putItemOnMain(item, mainArea);
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
            putItemOnMain(item, mainArea);
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
            return item.parentUuid === area.uuid;
        });

        filteredItems.forEach((item) => {
            putItemOnMain(item, mainArea);
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
            return item.parentUuid === project.uuid;
        });

        filteredItems.forEach((item) => {
            putItemOnMain(item, mainArea);
        });
    }

    drawSideArea();
    drawInbox();
    drawToday(); // for testing

    // document.addEventListener("DOMContentLoaded", () => {
    //     //
    // });

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
