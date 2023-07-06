import { drawExpandedTodo, drawMainItem } from "./elements";
import { getProject, getTodo } from "../data/monolith";
import { drawProjectAsMain } from "./views";

// function collapseTodo(Todo: Element) {}
// function clickOutsideExpanded(target: HTMLElement | null, expanded: Element) {}
// function editTitle(target: HTMLElement | null) {}
// function editNotes(target: HTMLElement | null) {}
// function editDueDate(target: HTMLElement | null) {}
// function editPriority(target: HTMLElement | null) {}
// function editStartDate(target: HTMLElement | null) {}
// function editParent(target: HTMLElement | null) {}
// function clickInsideExpanded(target: HTMLElement | null, expanded: Element) {}

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

    // Find previously expanded element and collapse it.
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

    // Code to expand the new item.
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
