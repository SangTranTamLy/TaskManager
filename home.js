let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const value = taskInput.value.trim();

    if (value === "") {
        alert("Vui long nhap cong viec");
        return;
    }

    tasks.push({
        text: value,
        completed: false
    });

    taskInput.value = "";
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span onclick="toggleTask(${index})" style="cursor:pointer;">
                ${task.completed ? "[x]" : "[ ]"}
            </span>
            <span style="margin-left:10px; ${task.completed ? "text-decoration: line-through; color: gray;" : ""}">
                ${task.text}
            </span>
            <button class="remove-btn" onclick="removeTask(${index})" style="margin-left:10px;">Xoa</button>
        `;
        list.appendChild(li);
    });
}
