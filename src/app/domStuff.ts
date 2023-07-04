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
} from "./sideEvents";

import handleMainAreaClick from "./mainEvents";

function buildDOM() {
    drawSideArea();
    drawInbox();

    // Event listeners

    document.addEventListener("DOMContentLoaded", () => {
        const sideAreaViews = document.querySelectorAll(".side-area .view");
        if (sideAreaViews) {
            handleSideAreaViewsClick(sideAreaViews);
        }

        const areasProjectsArea = document.querySelector(
            ".areas-projects-area"
        );
        if (areasProjectsArea) {
            handleAreasProjectsAreaClick(areasProjectsArea);
        }

        const mainArea = document.querySelector(".main-area");
        if (mainArea) {
            handleMainAreaClick(mainArea);
        }
    });

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
