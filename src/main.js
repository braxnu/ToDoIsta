function createTodoList() {
    var item = document.getElementById("todoInput").value;
    newItem.appendChiild(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("createTodoItemButton").addEventListener("click", createTodoList);
}
