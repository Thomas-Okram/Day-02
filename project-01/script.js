// Global variables to hold task data
let tasks = []; // Array to hold all tasks
const taskList = document.getElementById("task-list");
const taskTitleInput = document.getElementById("task-title");
const taskDescInput = document.getElementById("task-desc");
const taskDeadlineInput = document.getElementById("task-deadline");
const taskPriorityInput = document.getElementById("task-priority"); // Dropdown for priority
const addTaskButton = document.getElementById("add-task");
const filterSelect = document.getElementById("filter-tasks");
const sortSelect = document.getElementById("sort-tasks");

// Load tasks from localStorage when the page loads
window.onload = () => {
  loadTasksFromLocalStorage();
};

// Event listener to add a task when the "Add Task" button is clicked
addTaskButton.addEventListener("click", () => {
  const taskTitle = taskTitleInput.value.trim();
  const taskDesc = taskDescInput.value.trim();
  const taskDeadline = taskDeadlineInput.value.trim();

  // Get the selected priority value from the dropdown
  const taskPriority = taskPriorityInput.value.trim();

  // Validate inputs
  if (taskTitle === "") {
    alert("Task title cannot be empty!");
    return;
  }

  // Ensure the priority is valid (fallback to 'low' if invalid)
  const validPriority = ["low", "medium", "high"].includes(taskPriority)
    ? taskPriority
    : "low";

  // Create new task object
  const newTask = {
    id: Date.now(), // Unique ID based on the current timestamp
    title: taskTitle,
    description: taskDesc,
    completed: false,
    deadline: taskDeadline,
    priority: validPriority,
    dateCreated: new Date().toLocaleString(),
  };

  // Add the task to the tasks array
  tasks.push(newTask);

  // Save tasks to localStorage
  saveTasksToLocalStorage();

  // Clear input fields
  taskTitleInput.value = "";
  taskDescInput.value = "";
  taskDeadlineInput.value = "";

  // Update the task list display
  displayTasks();
});

// Function to display all tasks
function displayTasks() {
  // Clear current task list
  taskList.innerHTML = "";

  // Get the selected filter value
  const filterValue = filterSelect.value;
  const sortValue = sortSelect.value;

  // Filter tasks based on the selected filter
  let filteredTasks = tasks.filter((task) => {
    if (filterValue === "all") {
      return true;
    } else if (filterValue === "completed") {
      return task.completed;
    } else if (filterValue === "pending") {
      return !task.completed;
    }
    return false;
  });

  // Sort tasks based on the selected sort option
  if (sortValue === "title") {
    filteredTasks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "date") {
    filteredTasks.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
    );
  }

  // Loop through the filtered tasks and display them
  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add(task.completed ? "completed" : "");

    // Ensure that task.priority has a valid value (fallback to 'low' if invalid)
    let priority = task.priority || "low"; // Default to 'low' if priority is undefined

    // Log the priority value to debug
    console.log(`Task: "${task.title}" | Priority: ${priority}`);

    // Validate priority to ensure it's one of 'low', 'medium', or 'high'
    if (["low", "medium", "high"].includes(priority)) {
      taskItem.classList.add(`${priority}-priority`);
    } else {
      // If priority is invalid, fallback to 'low'
      console.error(`Invalid priority: ${priority} for task "${task.title}"`);
      taskItem.classList.add("low-priority"); // Default to 'low-priority' if invalid
    }

    taskItem.innerHTML = `
      <strong>${task.title}</strong> - ${task.description}
      <p>Deadline: ${task.deadline}</p>
      <p>Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}</p>
      <button onclick="deleteTask(${task.id})">Delete</button>
      <button onclick="toggleTaskCompletion(${task.id})">
        Mark as ${task.completed ? "Pending" : "Completed"}
      </button>
    `;

    // Append the task item to the list
    taskList.appendChild(taskItem);
  });
}

// Function to delete a task
function deleteTask(taskId) {
  // Remove the task from the tasks array
  tasks = tasks.filter((task) => task.id !== taskId);

  // Save the updated tasks array to localStorage
  saveTasksToLocalStorage();

  // Update the task list display
  displayTasks();
}

// Function to toggle the completion status of a task
function toggleTaskCompletion(taskId) {
  // Find the task by ID and toggle its 'completed' status
  const task = tasks.find((task) => task.id === taskId);
  task.completed = !task.completed;

  // Save the updated tasks array to localStorage
  saveTasksToLocalStorage();

  // Update the task list display
  displayTasks();
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
  // Convert the tasks array to a JSON string and save it to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
  // Get the tasks array from localStorage and parse it as JSON
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);

    // Ensure that all tasks have a valid priority value
    tasks.forEach((task) => {
      // If the priority is missing or invalid, set it to 'low'
      if (!["low", "medium", "high"].includes(task.priority)) {
        console.error(
          `Invalid priority: ${task.priority} for task "${task.title}". Defaulting to 'low'`
        );
        task.priority = "low"; // Default to 'low' if the priority is invalid
      }
    });
  }

  // Display the tasks after loading from localStorage
  displayTasks();
}

// Event listener to filter tasks based on the selected option
filterSelect.addEventListener("change", displayTasks);

// Event listener to sort tasks based on the selected sort option
sortSelect.addEventListener("change", displayTasks);
