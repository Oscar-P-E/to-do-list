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

    const container = createElementWithClass("div", "container");
    const sideArea = createElementWithClass("div", "side-area");
    const mainArea = createElementWithClass("div", "main-area");

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

    const areasProjectsArea = createElementWithClass(
        "div",
        "areas-projects-area"
    );

    const archiveDeletedArea = createElementWithClass(
        "div",
        "archive-deleted-area"
    );

    const archive = createElementWithClass("div", "archive");
    const archiveText = createElementWithClass("span", "archive-text");
    const deleted = createElementWithClass("div", "deleted");
    const deletedText = createElementWithClass("span", "deleted-text");

    document.body.appendChild(container);
    container.appendChild(sideArea);
    container.appendChild(mainArea);

    sideArea.appendChild(viewsArea);
    sideArea.appendChild(archiveDeletedArea);
    sideArea.appendChild(areasProjectsArea);

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
