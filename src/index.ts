import "./styles.css";
// import Project from "./Project";
// import Todo from "./Todo";

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
const next = createElementWithClass("div", "next");
const scheduled = createElementWithClass("div", "scheduled");
const someday = createElementWithClass("div", "someday");

const areasProjectsArea = createElementWithClass("div", "areas-projects-area");

const archiveDeletedArea = createElementWithClass(
    "div",
    "archive-deleted-area"
);
const archive = createElementWithClass("div", "archive");
const deleted = createElementWithClass("div", "deleted");

document.body.appendChild(container);
container.appendChild(sideArea);
container.appendChild(mainArea);

sideArea.appendChild(viewsArea);
sideArea.appendChild(areasProjectsArea);
sideArea.appendChild(archiveDeletedArea);

viewsArea.appendChild(today);
viewsArea.appendChild(next);
viewsArea.appendChild(scheduled);
viewsArea.appendChild(someday);

areasProjectsArea.appendChild(getAreas());

const areas = document.getElementsByClassName("area");

// Later in your code, when elements are added or removed:
for (let i = 0; i < areas.length; i += 1) {
    areas[i].appendChild(getProjects());
}

archiveDeletedArea.appendChild(archive);
archiveDeletedArea.appendChild(deleted);
