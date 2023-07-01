import { getArea, getProject } from "../data/monolith";
import { drawAreaAsMain, drawProjectAsMain } from "./views";
import { ViewId, viewFuncMap } from "./views";

function handleSideAreaViewsClick(sideAreaViews: NodeListOf<Element>) {
    sideAreaViews.forEach((e) => {
        e.addEventListener("click", (e) => {
            const target = e.currentTarget as HTMLElement;
            const id = target.id as ViewId;
            const viewFunc = viewFuncMap[id];
            if (viewFunc) {
                viewFunc();
            }
        });
    });
}

function handleAreasProjectsAreaClick(areasProjectsArea: Element) {
    areasProjectsArea.addEventListener("click", (e) => {
        let target = e.target as HTMLElement | null;

        // Traverse up the DOM until find element with uuid dataset
        while (target && !target.dataset.uuid) {
            target = target.parentElement;
        }

        if (!target) return;

        const uuid = target.dataset.uuid;
        const type = target.classList[0];

        if (uuid && type) {
            if (type === "area") {
                const area = getArea(uuid);
                if (area) {
                    drawAreaAsMain(area);
                }
            } else if (type === "project") {
                const project = getProject(uuid);
                if (project) {
                    drawProjectAsMain(project);
                }
            }
        }
    });
}

export { handleSideAreaViewsClick, handleAreasProjectsAreaClick };
