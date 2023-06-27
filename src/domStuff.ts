import {
    // createTodo,
    // createProject,
    // createArea,
    // getTodo,
    // getProject,
    // getArea,
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

        const archiveDeletedArea = createElementWithClass(
            "div",
            "archive-deleted-area"
        );
        const archive = createElementWithClass("div", "archive");
        const archiveText = createElementWithClass("span", "archive-text");
        const deleted = createElementWithClass("div", "deleted");
        const deletedText = createElementWithClass("span", "deleted-text");

        sideArea.appendChild(archiveDeletedArea);

        const areasProjectsArea = createElementWithClass(
            "div",
            "areas-projects-area"
        );

        sideArea.appendChild(areasProjectsArea);

        // add some more classes
        [inbox, today, scheduled, unscheduled, archive, deleted].forEach(
            (element) => {
                element.classList.add("view");
            }
        );

        [inboxCount, todayCount, scheduledCount, unscheduledCount].forEach(
            (element) => {
                element.classList.add("counter");
            }
        );

        // Populate everything:

        inboxText.textContent = "Inbox";
        inboxCount.textContent = getTodos().length.toString(); // todo: make this inbox items
        todayText.textContent = "Today";
        todayCount.textContent = getTodos().length.toString(); // todo: make this today items
        scheduledText.textContent = "Scheduled";
        scheduledCount.textContent = getTodos().length.toString(); // todo: make this items with a due date
        unscheduledText.textContent = "Unscheduled";
        unscheduledCount.textContent = getTodos().length.toString(); // todo: make this items without a due date && not in inbox
        archiveText.textContent = "Archive";
        deletedText.textContent = "Deleted";

        getAreas().forEach((area) => {
            const areaElement = createElementWithClass("div", "area");
            const areaText = createElementWithClass("span", "area-text");
            areaText.textContent = area.title;
            areasProjectsArea.appendChild(areaElement);
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
                    projectText.textContent = project.title;
                    areasProjectsArea.appendChild(projectElement);
                    projectElement.appendChild(projectText);
                }
            });
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
        archiveDeletedArea.appendChild(archive);
        archive.appendChild(archiveText);
        archiveDeletedArea.appendChild(deleted);
        deleted.appendChild(deletedText);
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

        getTodos().forEach((todo) => {
            if (todo.inInbox === true) {
                const todoElement = createElementWithClass("div", "todo");
                const todoText = createElementWithClass("span", "todo-text");
                todoText.textContent = todo.title;
                mainArea.appendChild(todoElement);
                todoElement.appendChild(todoText);
            }
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

        getTodosAndProjects().forEach((item) => {
            if (item.startDateTime <= today) {
                //todo: make this work
                const projectElement = createElementWithClass("div", "project");
                const projectText = createElementWithClass(
                    "span",
                    "project-text"
                );
                projectText.textContent = project.title;
                mainArea.appendChild(projectElement);
                projectElement.appendChild(projectText);
            }
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

        // getTodos().forEach((todo) => {});
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

        // getTodos().forEach((todo) => {});
    }

    function drawArchive() {
        const mainArea: Element = makeOrClearMainArea();

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
        const mainAreaHeadingText = createElementWithClass(
            "h1",
            "main-area-heading-text"
        );
        mainAreaHeadingText.textContent = "Archive";

        mainArea.appendChild(mainAreaHeading);
        mainAreaHeading.appendChild(mainAreaHeadingText);

        // getTodos().forEach((todo) => {});
    }

    function drawDeleted() {
        const mainArea: Element = makeOrClearMainArea();

        const mainAreaHeading = createElementWithClass(
            "div",
            "main-area-heading"
        );
        const mainAreaHeadingText = createElementWithClass(
            "h1",
            "main-area-heading-text"
        );
        mainAreaHeadingText.textContent = "Deleted";

        mainArea.appendChild(mainAreaHeading);
        mainAreaHeading.appendChild(mainAreaHeadingText);

        // getTodos().forEach((todo) => {});
    }

    drawSideArea();
    drawInbox();

    // test
    // console.log("Areas:");
    // console.log(getAreas());
    // console.log("\nProjects:");
    // console.log(getProjects());
    // console.log("\nTodos:");
    // console.log(getTodos());

    return {
        drawInbox,
        drawToday,
        drawScheduled,
        drawUnscheduled,
        drawArchive,
        drawDeleted,
        // drawAreaAsMain,
        // drawProjectAsMain,
    };
}

export default buildDOM;
