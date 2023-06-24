import { v4 as uuidv4 } from "uuid";

export default class Area {
    uuid: string;

    title: string;

    constructor(title: string) {
        this.uuid = uuidv4();
        this.title = title;
    }
}
