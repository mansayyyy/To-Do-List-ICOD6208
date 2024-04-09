function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === '') {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';

    li.addEventListener("click", function() {
        li.classList.toggle("checked");
    });

    var doneBtn = document.createElement("button");
    doneBtn.className = "done-btn";
    li.insertBefore(doneBtn, li.firstChild);

    doneBtn.addEventListener("click", function() {
        doneBtn.classList.toggle("checked");
        li.classList.toggle("checked");
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
}
