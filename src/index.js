"use strict";

/* CSS FILE */
import "./index.css";

/* SELECTORS */
import {
  aside,
  main,
  title,
  inboxButton,
  importantButton,
  spamButton,
  trashButton,
  addTaskButton,
  mainSection,
  form,
  formSubmit,
  closeFormButton,
  formTaskName,
  formDueDate,
  formPriority,
  formLocation,
  clearTrashButton,
} from "./selectors.js";

/* STYLINGS */
import { stylingsObject } from "./stylings.js";

/* FOLDERS */
import {
  inboxFolder,
  importantFolder,
  spamFolder,
  trashFolder,
} from "./folders.js";

/* TASK-CONSTRUCTOR */
import { Task } from "./taskConstructor.js";

/* PROJECT FUNCTIONALITY */
// Function to display all tasks in the main section
function displayTasks(folder) {
  mainSection.innerHTML = ""; // Clear the main element

  folder.forEach(function (task) {
    // Create a task element for each task created
    const mainTask = document.createElement("section");
    mainTask.classList.add("main__task");

    // Create a taskbox-1 for each task created
    const mainTask1 = document.createElement("div");
    mainTask1.classList.add("main__task-1");

    // Create a taskbox-1 for each task created
    const mainTask2 = document.createElement("div");
    mainTask2.classList.add("main__task-2");

    // Create checkbox inside task element in main
    const mainTaskCheckbox = document.createElement("input");
    mainTaskCheckbox.classList.add("main__task-checkbox", "main__task-info");
    mainTaskCheckbox.type = "checkbox";

    // Create title inside task element in main
    const mainTaskTitle = document.createElement("span");
    mainTaskTitle.classList.add("main__task-title", "main__task-info");
    mainTaskTitle.textContent = task.name;

    // Create date inside task element in main
    const mainTaskDate = document.createElement("span");
    mainTaskDate.classList.add("main__task-date", "main__task-info");
    mainTaskDate.textContent = task.dueDate;

    // Create urgency inside task element in main
    const mainTaskUrgency = document.createElement("span");
    mainTaskUrgency.classList.add("main__task-urgency", "main__task-info");
    if (task.priority === "Low") {
      mainTaskUrgency.textContent = task.priority;
      mainTaskUrgency.classList.add("green-color");
    } else if (task.priority === "Medium") {
      mainTaskUrgency.textContent = task.priority;
      mainTaskUrgency.classList.add("yellow-color");
    } else if (task.priority === "High") {
      mainTaskUrgency.textContent = task.priority;
      mainTaskUrgency.classList.add("orange-color");
    } else if (task.priority === "Urgent") {
      mainTaskUrgency.textContent = task.priority;
      mainTaskUrgency.classList.add("red-color");
    }

    // Create bin image inside task element in main
    const mainTaskTrash = document.createElement("img");
    mainTaskTrash.classList.add("main__task-image", "main__task-info");
    mainTaskTrash.src = "bin1.png";

    // Create filter image inside task element in main
    const mainTaskSpam = document.createElement("img");
    mainTaskSpam.classList.add("main__task-image", "main__task-info");
    mainTaskSpam.src = "filter1.png";

    // Make mainTaskTrash button send task in trash folder
    mainTaskTrash.addEventListener("click", function () {
      // Find the index of the task to move
      const indexToMove = folder.indexOf(task);

      // Check if the index exists in the array (to handle potential issues)
      if (indexToMove !== -1) {
        // Remove the task from the current folder
        const movedTask = folder.splice(indexToMove, 1)[0];

        // Add the task to the Trash folder
        trashFolder.push(movedTask);

        // Re-display the tasks to reflect the move
        displayTasks(folder);
      }
    });

    // Make mainSpamTrash button send task in spam folder
    mainTaskSpam.addEventListener("click", function () {
      // Find the index of the task to move
      const indexToMove = folder.indexOf(task);

      // Check if the index exists in the array (to handle potential issues)
      if (indexToMove !== -1) {
        // Remove the task from the current folder
        const movedTask = folder.splice(indexToMove, 1)[0];

        // Add the task to the Spam folder
        spamFolder.push(movedTask);

        // Re-display the tasks to reflect the move
        displayTasks(folder);
      }
    });

    mainTask1.appendChild(mainTaskCheckbox);
    mainTask1.appendChild(mainTaskTitle);

    mainTask2.appendChild(mainTaskDate);
    mainTask2.appendChild(mainTaskUrgency);
    mainTask2.appendChild(mainTaskTrash);
    mainTask2.appendChild(mainTaskSpam);

    mainTask.appendChild(mainTask1);
    mainTask.appendChild(mainTask2);

    mainSection.appendChild(mainTask);

    // Append the task element to the main section
    main.appendChild(mainSection);
  });
}

function pushTasksInFolder(folder) {
  // Display all tasks in the library
  displayTasks(folder);

  // Resets form values
  formTaskName.value = "";
  formDueDate.value = "";

  // Hide the form
  stylingsObject.hideForm();
}

/* EVENTS LISTENERS */
// Add task-info to the main section in code and UI form
formSubmit.addEventListener("click", function () {
  const task = new Task(
    formTaskName.value,
    formDueDate.value,
    formPriority.value,
    formLocation.value
  );

  if (formTaskName.value === "" || formDueDate.value === "") {
    stylingsObject.showForm();
  } else if (task.location === "Inbox") {
    inboxFolder.push(task);
    title.textContent = "Inbox";
    stylingsObject.makeTextBold();
    pushTasksInFolder(inboxFolder);
  } else if (task.location === "Important") {
    importantFolder.push(task);
    title.textContent = "Important";
    stylingsObject.makeTextBold();
    pushTasksInFolder(importantFolder);
  }

  // Verify if clearTrashButton must be there or not
  stylingsObject.clearTrashButtonPresenceVerification();
});

inboxButton.addEventListener("click", function () {
  title.textContent = "Inbox";
  // Verify if clearTrashButton must be there or not
  stylingsObject.clearTrashButtonPresenceVerification();
  stylingsObject.makeTextBold();
  pushTasksInFolder(inboxFolder);
});

importantButton.addEventListener("click", function () {
  title.textContent = "Important";
  // Verify if clearTrashButton must be there or not
  stylingsObject.clearTrashButtonPresenceVerification();
  stylingsObject.makeTextBold();
  pushTasksInFolder(importantFolder);
});

spamButton.addEventListener("click", function () {
  title.textContent = "Spam";
  // Verify if clearTrashButton must be there or not
  stylingsObject.clearTrashButtonPresenceVerification();
  stylingsObject.makeTextBold();
  pushTasksInFolder(spamFolder);
});

trashButton.addEventListener("click", function () {
  title.textContent = "Trash";
  // Verify if clearTrashButton must be there or not
  stylingsObject.clearTrashButtonPresenceVerification();
  stylingsObject.makeTextBold();
  pushTasksInFolder(trashFolder);
});

addTaskButton.addEventListener("click", function () {
  stylingsObject.showForm();
});

closeFormButton.addEventListener("click", function () {
  stylingsObject.hideForm();
  // Resets form values when info not submitted
  formTaskName.value = "";
  formDueDate.value = "";
});

// Erase what's inside the trash folder, if clearTrashButton is clicked
clearTrashButton.addEventListener("click", function () {
  trashFolder.splice(0, trashFolder.length);
  displayTasks(trashFolder);
});
