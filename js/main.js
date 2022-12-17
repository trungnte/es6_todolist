import ToDo from "./ToDo.js";
import ToDoList from "./ToDoList.js";

const todoList = new ToDoList();
const completedList = new ToDoList();

// =========================================================
// Add new task to todolist
let g_idTodoList = 0;
let g_idCompletedList = 0;
const addTask = () => {
    let txtTask = document.querySelector("#newTask").value;
    console.log(txtTask);

    // add task to list
    let task = new ToDo(g_idTodoList, txtTask, 0);
    todoList.addToDo(task);
    g_idTodoList += 1;

    console.log(todoList.toDoArray);
    displayTaskList();
}

document.querySelector("#addItem").onclick = addTask;


window.updateStatusTask = (obj) => {
    let idStr = obj.currentTarget.getAttribute("data-task-id");
    let statusStr = obj.currentTarget.getAttribute("data-task-status");

    let id = parseInt(idStr);
    let status = parseInt(statusStr);
    
    if (status == 0 ) {
        let task = todoList.toDoArray.slice(id, id + 1);
        // console.log(task);
        todoList.removeToDo(id);
        
        task.status = 1;
        task.id = g_idCompletedList;
        g_idCompletedList += 1;
        completedList.addToDo(task);

    } else if (status == 1 ) {
    }
    // let updateTask = new ToDo(id, status);
    console.log("task: ", id, status);
    displayTaskList();
}

window.deleteTask = (obj) => {

}

const displayTaskList = () => {
    document.querySelector("#todo").innerHTML = todoList.renderToDo();
    document.querySelector("#completed").innerHTML = completedList.renderToDo();
}


displayTaskList();
