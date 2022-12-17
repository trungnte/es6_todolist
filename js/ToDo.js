export default class ToDo {
    constructor (content, status) {
        this.content = content;
        this.status = status;
    }

    getTaskContent = () => {
        return this.content;
    }
}