function createTodoList() {
    var text = document.getElementById("todoInput").value;
    var newItem = document.createElement("li");
    newItem.innerHTML = text;
    document.getElementById("todoList").appendChild(newItem);
}

document.getElementById("createTodoItemButton").addEventListener("click", createTodoList);