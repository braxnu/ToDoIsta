function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChiled(text)
    document.getElementById("todoList").appendChiled(newItem)
}