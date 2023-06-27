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

    // Create everything
    const container = createElementWithClass("div", "container");
    const sideArea = createElementWithClass("div", "side-area");
    const mainArea = createElementWithClass("div", "main-area");

    // side area

    // inbox grouping in side area
    const inboxArea = createElementWithClass("div", "inbox-area");

    const inbox = createElementWithClass("div", "inbox");
    const inboxText = createElementWithClass("span", "inbox-text");
    const inboxCount = createElementWithClass("span", "inbox-count");

    // views grouping in side area
    const viewsArea = createElementWithClass("div", "views-area");

    const today = createElementWithClass("div", "today");
    const todayText = createElementWithClass("span", "today-text");
    const todayCount = createElementWithClass("span", "today-count");

    const next = createElementWithClass("div", "next");
    const nextText = createElementWithClass("span", "next-text");
    const nextCount = createElementWithClass("span", "next-count");

    const scheduled = createElementWithClass("div", "scheduled");
    const scheduledText = createElementWithClass("span", "scheduled-text");
    const scheduledCount = createElementWithClass("span", "scheduled-count");

    const someday = createElementWithClass("div", "someday");
    const somedayText = createElementWithClass("span", "someday-text");
    const somedayCount = createElementWithClass("span", "someday-count");

    // archive and deleted grouping in side area
    const archiveDeletedArea = createElementWithClass(
        "div",
        "archive-deleted-area"
    );

    // areas and projects grouping in side area
    const areasProjectsArea = createElementWithClass(
        "div",
        "areas-projects-area"
    );

    const archive = createElementWithClass("div", "archive");
    const archiveText = createElementWithClass("span", "archive-text");
    const deleted = createElementWithClass("div", "deleted");
    const deletedText = createElementWithClass("span", "deleted-text");

    // add some more classes
    [inbox, today, next, scheduled, someday, archive, deleted].forEach(
        (element) => {
            element.classList.add("view");
        }
    );

    [inboxCount, todayCount, nextCount, scheduledCount, somedayCount].forEach(
        (element) => {
            element.classList.add("counter");
        }
    );

    // main area
    const mainAreaHeading = createElementWithClass("div", "main-area-heading");
    const mainAreaHeadingText = createElementWithClass(
        "h1",
        "main-area-heading-text"
    );

    // Populate everything
    inboxText.textContent = "Inbox";
    inboxCount.textContent = getTodos().length.toString();
    todayText.textContent = "Today";
    todayCount.textContent = getTodos().length.toString();
    nextText.textContent = "Next";
    nextCount.textContent = getTodos().length.toString();
    scheduledText.textContent = "Scheduled";
    scheduledCount.textContent = getTodos().length.toString();
    somedayText.textContent = "Someday";
    somedayCount.textContent = getTodos().length.toString();
    archiveText.textContent = "Archive";
    deletedText.textContent = "Deleted";

    mainAreaHeadingText.textContent = "Lorem Ipsum";

    // mainArea.

    // Append everything
    document.body.appendChild(container);
    container.appendChild(sideArea);
    container.appendChild(mainArea);

    sideArea.appendChild(inboxArea);
    sideArea.appendChild(viewsArea);
    sideArea.appendChild(archiveDeletedArea);
    sideArea.appendChild(areasProjectsArea);

    inboxArea.appendChild(inbox);
    inbox.appendChild(inboxText);
    inbox.appendChild(inboxCount);
    viewsArea.appendChild(today);
    today.appendChild(todayText);
    today.appendChild(todayCount);
    viewsArea.appendChild(next);
    next.appendChild(nextText);
    next.appendChild(nextCount);
    viewsArea.appendChild(scheduled);
    scheduled.appendChild(scheduledText);
    scheduled.appendChild(scheduledCount);
    viewsArea.appendChild(someday);
    someday.appendChild(somedayText);
    someday.appendChild(somedayCount);

    archiveDeletedArea.appendChild(archive);
    archive.appendChild(archiveText);
    archiveDeletedArea.appendChild(deleted);
    deleted.appendChild(deletedText);

    mainArea.appendChild(mainAreaHeading);
    mainAreaHeading.appendChild(mainAreaHeadingText);

    // test
    console.log("Areas:");
    console.log(getAreas());
    console.log("\nProjects:");
    console.log(getProjects());
    console.log("\nTodos:");
    console.log(getTodos());

    return {
        container,
        sideArea,
        mainArea,
        viewsArea,
        today,
        next,
        scheduled,
        someday,
        areasProjectsArea,
        archiveDeletedArea,
        archive,
        deleted,
    };
}

export default buildDOM;
