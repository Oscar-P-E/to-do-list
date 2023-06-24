import { v4 as uuidv4 } from "uuid";

export default class Todo {
    uuid: string;

    title: string;

    description: string;

    priority: number;

    dueDateTime: number;

    shownDateTime: number;

    isDone: boolean;

    constructor(
        title: string,
        description = "",
        priority = 3,
        dueDateTime = 0,
        shownDateTime = 0,
        isDone = false
    ) {
        this.uuid = uuidv4();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDateTime = dueDateTime;
        this.shownDateTime = shownDateTime;
        this.isDone = isDone;
    }
}
