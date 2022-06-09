const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

const toDos = [];
//할일목록을 배열로 담음

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    //JSON.stringify => 자바스크립트 객체, 배열 어떤코드건 문자화시킴
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    //이벤트가 발생한 그 부모를 찍는다
    //밑에도 li가 있지만 지역변수라 ㄱㅊ

}


function paintToDo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "x"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo)
    paintToDo(newTodo)
    //이벤트안에서 새로운 이벤트 발생
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log('this is turn of', item)
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos)
    parsedToDos.forEach(sayHello);
}