import { v4 as uuidv4 } from "uuid";

export default class Project {
    static allProjects: Project[] = [];

    uuid: string;

    title: string;

    dueDateTime: number;

    isDone: boolean;

    constructor(title: string, dueDateTime = 0, isDone = false) {
        this.uuid = uuidv4();
        this.title = title;
        this.dueDateTime = dueDateTime;
        this.isDone = isDone;

        Project.allProjects.push(this);
    }

    static getProjects() {
        return Project.allProjects;
    }
}
