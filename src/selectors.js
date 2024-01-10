"use strict";

/* SELECTORS */
const aside = document.querySelector(".aside");
const main = document.querySelector(".main");
const title = document.querySelector("h1");
const clearTrashButton = document.querySelector(".clear-trash");

const inboxButton = document.querySelector(".aside__inbox");
const importantButton = document.querySelector(".aside__important");
const spamButton = document.querySelector(".aside__spam");
const trashButton = document.querySelector(".aside__trash");
const addTaskButton = document.querySelector(".aside__add-task");

const mainSection = document.querySelector(".main__messages");

const form = document.querySelector(".form");
const formSubmit = document.querySelector(".form__submit");
const closeFormButton = document.querySelector(".form__close-form");
const formTaskName = document.querySelector(".form__task-name");
const formDueDate = document.querySelector(".form__due-date");
const formPriority = document.querySelector(".form__priority");
const formLocation = document.querySelector(".form__location");

export {
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
};
