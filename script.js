const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";

        taskItem.appendChild(deleteButton);

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("done");
        });

        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});
