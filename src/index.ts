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

const today = createElementWithClass("div", "today");
const next = createElementWithClass("div", "next");
const scheduled = createElementWithClass("div", "scheduled");
const someday = createElementWithClass("div", "someday");

const areasProjectsArea = createElementWithClass("div", "areas-projects-area");

const archive = createElementWithClass("div", "archive");
const deleted = createElementWithClass("div", "deleted");
