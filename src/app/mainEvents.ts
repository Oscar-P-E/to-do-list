import { drawExpandedTodo } from "./elements";
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

function clickWhileExpanded(
    mainArea: Element,
    target: HTMLElement | null,
    expanded: Element
) {
    if (target?.classList.contains("expanded")) {
        // clickOutsideExpanded(target, expanded);
    }
}

function clickWhileNoExpanded(mainArea: Element, target: HTMLElement | null) {
    if (!mainArea) return;

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

        const expanded = mainArea.querySelector(".expanded");

        if (expanded) {
            clickWhileExpanded(mainArea, target, expanded);
        } else if (!expanded) {
            clickWhileNoExpanded(mainArea, target);
        }
    });
}

export default handleMainAreaClick;
