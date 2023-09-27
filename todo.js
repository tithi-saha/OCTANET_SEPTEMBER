// Function to add a new task to the list
let a =0;
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        a+=1;
        li.innerHTML = `${a}  ${taskText} <button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
        
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(button) {
    a-=1;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
    
}
