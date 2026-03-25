let tasks = []; // Mảng lưu trữ các công việc

// Hàm thêm công việc mới
function addTask() {
    const taskInput = document.getElementById('taskInput'); 
    const value = taskInput.value.trim(); // Lấy giá trị từ input và loại bỏ khoảng trắng
    if (value === "") {
        alert('Vui lòng nhập sự kiện')
        return;
    }; // Nếu giá trị rỗng, không thêm công việc
    tasks.push({
        text: value,
        completed: false
    }); // Thêm công việc mới vào mảng
    taskInput.value = ""; // Xóa nội dung trong input sau khi thêm công việc
    renderTasks(); // Cập nhật giao diện hiển thị công việc
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Đảo ngược trạng thái hoàn thành của công việc
    renderTasks(); // Cập nhật giao diện hiển thị công việc
}
function removeTask(index) {
    tasks.splice(index, 1); // Xóa công việc khỏi mảng
    renderTasks(); // Cập nhật giao diện hiển thị công việc
}
function renderTasks() {
    const list = document.getElementById('taskList'); // Lấy phần tử ul để hiển thị danh sách công việc
    list.innerHTML = ""; // Xóa nội dung hiện tại của danh sách
    tasks.forEach((task, index) => {// Duyệt qua mảng công việc và tạo phần tử li cho mỗi công việc
        const li = document.createElement('li'); // Tạo phần tử li
        li.innerHTML = `
            <span onclick="toggleTask(${index})" style="cursor:pointer;">
                ${task.completed ? "☑️" : "⬜"}
            </span>
            <span style="margin-left:10px; ${task.completed ? "text-decoration: line-through; color: gray;" : ""}">
                ${task.text}
            </span>
            <button class="remove-btn" onclick="removeTask(${index})" style="margin-left:10px;">Xóa</button>`;
            list.appendChild(li); // Thêm phần tử li vào danh sách
    });
}