"use strict";

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
export const stylingsObject = {
  // Transitions for smooth effect when showing form
  smoothFormTransition() {
    aside.style.transition = "all 300ms";
    main.style.transition = "all 300ms";
    title.style.transition = "all 300ms";
  },

  // Function to show the form and blur other content
  showForm() {
    form.classList.remove("hidden");
    aside.classList.add("blur");
    main.classList.add("blur");
    title.classList.add("blur");
    clearTrashButton.classList.add("blur");
    stylingsObject.smoothFormTransition();
  },

  // Function to hide the form and deblur other content
  hideForm() {
    form.classList.add("hidden");
    aside.classList.remove("blur");
    main.classList.remove("blur");
    title.classList.remove("blur");
    clearTrashButton.classList.remove("blur");
    stylingsObject.smoothFormTransition();
  },

  makeTextBold() {
    // Reset font-weight for all buttons
    inboxButton.classList.remove("bold-button");
    importantButton.classList.remove("bold-button");
    spamButton.classList.remove("bold-button");
    trashButton.classList.remove("bold-button");

    if (title.textContent === "Inbox") {
      inboxButton.classList.add("bold-button");
      importantButton.classList.remove("bold-button");
      spamButton.classList.remove("bold-button");
      trashButton.classList.remove("bold-button");
    } else if (title.textContent === "Important") {
      importantButton.classList.add("bold-button");
      inboxButton.classList.remove("bold-button");
      spamButton.classList.remove("bold-button");
      trashButton.classList.remove("bold-button");
    } else if (title.textContent === "Spam") {
      spamButton.classList.add("bold-button");
      importantButton.classList.remove("bold-button");
      inboxButton.classList.remove("bold-button");
      trashButton.classList.remove("bold-button");
    } else if (title.textContent === "Trash") {
      trashButton.classList.add("bold-button");
      importantButton.classList.remove("bold-button");
      spamButton.classList.remove("bold-button");
      inboxButton.classList.remove("bold-button");
    }
  },

  clearTrashButtonPresenceVerification() {
    if (title.textContent === "Inbox") {
      clearTrashButton.classList.add("none");
    } else if (title.textContent === "Important") {
      clearTrashButton.classList.add("none");
    } else if (title.textContent === "Spam") {
      clearTrashButton.classList.add("none");
    } else if (title.textContent === "Trash") {
      clearTrashButton.classList.remove("none");
    }
  },
};
