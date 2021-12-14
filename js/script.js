//////////////////////
// ELEMENTS
//////////////////////

// toggles
const eveningModeToggle = document.querySelector(".evening-toggle__svg");
const morningModeToggle = document.querySelector(".morning-toggle__svg");

// phone container
const imgPhoneTop = document.querySelector(".phone-container__img--top");
const imgPhoneBottom = document.querySelector(".phone-container__img--bottom");
const phonesContainerAll = document.querySelectorAll(".phone-container");

// elements
const body = document.body;

// form elements
const form = document.querySelector(".form");
const submitBtn = document.querySelector("#submit-btn");

//////////////////////
// BODY COLOR CHANGE
//////////////////////

// Saving to local storage
let lastMode = localStorage.getItem("lastMode");

// Updating local storage
const updateMode = function () {
  // Saving current state to Local Storage
  if (eveningModeToggle.classList.contains("hidden")) {
    localStorage.setItem("lastMode", "evening");
  }

  if (!eveningModeToggle.classList.contains("hidden")) {
    localStorage.setItem("lastMode", "morning");
  }
};

// Retrieving current mode from local storage and update the UI
const updatingUiEvening = function () {
  if (lastMode === "evening") {
    modeChanger();
    eveningColors();
    phoneChanger();
  }

  // No Morning implementation because by default it is set to morning
};

// Chaning the colours to the evening  version
const eveningColors = function () {
  body.classList.toggle("evening-colors");
};

// Chaning the toggle buttons
const modeChanger = function () {
  eveningModeToggle.classList.toggle("hidden");
  morningModeToggle.classList.toggle("hidden");
  updateMode();
};

// Changing the phone images
const phoneChanger = function () {
  phonesContainerAll.forEach((phone) => phone.classList.toggle("phone-hidden"));

  // Saving current state to Local Storage
};

// EVENTLISTENERS

// if

eveningModeToggle.addEventListener("click", function (e) {
  lastMode = localStorage.getItem("lastMode");

  eveningColors();
  modeChanger();
  phoneChanger();
});

morningModeToggle.addEventListener("click", function (e) {
  lastMode = localStorage.getItem("lastMode");

  eveningColors();
  modeChanger();
  phoneChanger();
});

// Calling the updatingUI whenever the page reloads
updatingUiEvening();

//////////////////////
// FORM VALIDATION
//////////////////////

// 1) If form filled password and form filled user are not  valid set disable to false to the submitbutton
// 2) If the they are set disabled to true

// const isValidForm = form.checkValidity();

form.addEventListener("keyup", function (e) {
  const isValidForm = form.checkValidity();

  if (isValidForm === true) {
    submitBtn.disabled = false;
  } else submitBtn.disabled = true;
});
