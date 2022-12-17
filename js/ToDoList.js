export default class ToDoList {
    constructor() {
        this.toDoArray = [];
    }

    addToDo = (todoObj) => {
        this.toDoArray.push(todoObj);
    }

    removeToDo = (index) => {
        this.toDoArray.splice(index, 1);
    }

    renderToDo = () => {
        let content = "";
        // updateStatusTask will be window.updateStatusTask() in main.js 
        //  this updateStatusTask is global function handle button
        content = this.toDoArray.reduce(
            (taskContent, task, index) => {
                taskContent += `
                    <li>
                        <span>${task.content}</span>
                        <div class="buttons">
                            <button class="remove" data-task-id="${index}"  data-task-status="${task.status}" onclick="deleteTask(event)">
                                <i class="fa fa-trash-alt"></i>
                                </button>
                            <button class="complete" data-task-id="${index}"  data-task-status="${task.status}" onclick="updateStatusTask(event)" >
                                <i class="far fa-check-circle"></i>
                                <i class="fas fa-check-circle"></i>
                                </button>
                        </div>
                    </li>`;
                return taskContent;
            }, "" // intial value with empty string
        );
        return content;
    }

    updateToDo(obj) {
        console.log(obj)
    }

    sortToDoList = (isDES) => {

    }
}