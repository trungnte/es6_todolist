import ToDo from "./ToDo.js";
import ToDoList from "./ToDoList.js";

const todoList = new ToDoList();
const completedList = new ToDoList();

// =========================================================
// Add new task to todolist
const addTask = () => {
    let txtTask = document.querySelector("#newTask").value;
    console.log(txtTask);

    // add task to list
    let task = new ToDo(txtTask, 0);
    todoList.addToDo(task);
    displayTaskList();
    document.querySelector("#newTask").value = "";
}

document.querySelector("#addItem").onclick = addTask;

// Move task at index from source list to dest list
const moveTask = (destList, srcList, indexSrc, newTask) => {
    srcList.removeToDo(indexSrc);
    destList.addToDo(newTask);
}


window.updateStatusTask = (obj) => {
    let idxStr = obj.currentTarget.getAttribute("data-task-id");
    let statusStr = obj.currentTarget.getAttribute("data-task-status");

    let idx = parseInt(idxStr);
    let status = parseInt(statusStr);
    
    if (status == 0 ) {
        // copy task from idx to idx +1, only 1 element
        let taskList = todoList.toDoArray.slice(idx, idx + 1);

        //  create new task with new status
        let newTask = new ToDo(taskList[0].getTaskContent(), 1);

        moveTask(completedList, todoList, idx, newTask);

    } else {
        // copy task
        let taskList = completedList.toDoArray.slice(idx, idx + 1);
        //  create new task with new status
        let newTask = new ToDo(taskList[0].getTaskContent(), 0);

        moveTask(todoList, completedList, idx, newTask);
    }
    displayTaskList();
}

window.deleteTask = (obj) => {
    let idxStr = obj.currentTarget.getAttribute("data-task-id");
    let statusStr = obj.currentTarget.getAttribute("data-task-status");

    let idx = parseInt(idxStr);
    let status = parseInt(statusStr);

    if (status == 0 ) {
        todoList.removeToDo(idx);
    }
    else {
        completedList.removeToDo(idx);
    }
    displayTaskList();
}

const displayTaskList = () => {
    document.querySelector("#todo").innerHTML = todoList.renderToDo();
    document.querySelector("#completed").innerHTML = completedList.renderToDo();
}


displayTaskList();
