const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function savaToDos(){
    localStorage.setItem("todos", toDos);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const HIDDEN_CLASSNAME = "hidden";
    span.innerText = newTodo;
    const button = document.createElement("button",deleteToDo);
    button.innerText ="✔";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    toDoList.classList.remove(HIDDEN_CLASSNAME)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    savaToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)