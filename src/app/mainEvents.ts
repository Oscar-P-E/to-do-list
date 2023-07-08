import { drawExpandedTodo, drawMainItem } from "./elements";
import { getProject, getTodo } from "../data/monolith";
import { drawProjectAsMain } from "./views";


function clickOutsideExpanded(
    target: HTMLElement | null,
    expanded: HTMLElement,
    mainArea: Element
) {
    if (!mainArea || !target) return;

    while (expanded.firstChild) {
        expanded.firstChild.remove();
    }

    const uuid = expanded.dataset.uuid;

    if (!uuid) {
        return;
    }

    expanded.className = "todo";

    const todo = getTodo(uuid);
    if (!todo) return;


    drawMainItem(todo, mainArea);
}

function clickWhileExpanded(
    mainArea: Element,
    target: HTMLElement | null,
    expanded: HTMLElement
) {
    if (target?.closest(".expanded")) {
        console.log("Clicked inside expanded");
        return;
    }

    if (!target?.classList.contains("expanded")) {
        if (target !== expanded) {
            clickOutsideExpanded(target, expanded, mainArea);
        }
    }
}

function clickWhileNoExpanded(mainArea: Element, target: HTMLElement | null) {
    if (!mainArea) return;

    const prevExpanded = mainArea.querySelector(".expanded") as HTMLElement;
    if (prevExpanded) {
        prevExpanded.className = "todo";
        while (prevExpanded.firstChild) {
            prevExpanded.firstChild.remove();
        }
        if (!prevExpanded.dataset.uuid) return;
        const prevTodo = getTodo(prevExpanded.dataset.uuid);
        if (prevTodo) {
            drawMainItem(prevTodo, mainArea);
        }
    }

    while (target && !target.dataset.uuid) {
        target = target.parentElement;
    }
    if (!target) return;

    const uuid = target.dataset.uuid;
    const type = target.classList[0];

    if (!uuid || !type) {
        return;
    }

    if (type === "todo" && !target.classList.contains("expanded")) {
        const todo = getTodo(uuid);
        if (todo) {
            drawExpandedTodo(todo, mainArea);
        }
    } else if (type === "project") {
        const project = getProject(uuid);
        if (project) {
            drawProjectAsMain(project);
        }
    }
}

function handleMainAreaClick(mainArea: Element) {
    mainArea.addEventListener("click", (e) => {
        const target = e.target as HTMLElement | null;

        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            return;
        }

        const expanded = mainArea.querySelector(".expanded") as HTMLElement;

        if (!expanded) {
            clickWhileNoExpanded(mainArea, target);
        } else if (expanded) {
            clickWhileExpanded(mainArea, target, expanded);
        } else {
            console.error("Uh oh");
        }
    });
}

export default handleMainAreaClick;
