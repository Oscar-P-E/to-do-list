// import {
// Todo,
// Project,
// Area,
// TodoOrProject,
// TodoOrProjectOrArea,
// createTodo,
// createProject,
// createArea,
// getToday,
// getTodo,
// getProject,
// getArea,
// getTodos,
// getProjects,
// getAreas,
// getTodosAndProjects,
// modifyTodo,
// modifyProject,
// modifyArea,
// deleteTodo,
// deleteProject,
// deleteArea,
// } from "../data/monolith";

import {
    drawInbox,
    drawToday,
    drawScheduled,
    drawUnscheduled,
    drawLogbook,
    drawAreaAsMain,
    drawProjectAsMain,
} from "./views";

import { drawSideArea } from "./elements";

import {
    handleSideAreaViewsClick,
    handleAreasProjectsAreaClick,
} from "./events";

function buildDOM() {
    drawSideArea();
    drawInbox();
    drawToday(); // for testing. TODO: delete this line

    // Event listeners for side area
    const sideAreaViews = document.querySelectorAll(".side-area .view");

    handleSideAreaViewsClick(sideAreaViews);

    const areasProjectsArea = document.querySelector(".areas-projects-area");

    areasProjectsArea && handleAreasProjectsAreaClick(areasProjectsArea);

    // Event listeners for main area

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
