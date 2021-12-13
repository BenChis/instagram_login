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

const eveningColors = function () {
  body.classList.toggle("evening-colors");
};

const modeChanger = function () {
  eveningModeToggle.classList.toggle("hidden");
  morningModeToggle.classList.toggle("hidden");
};

const phoneChanger = function () {
  phonesContainerAll.forEach((phone) => phone.classList.toggle("phone-hidden"));
};

// EVENTLISTENERS

eveningModeToggle.addEventListener("click", function (e) {
  console.log(e);
  eveningColors();
  modeChanger();
  phoneChanger();
});

morningModeToggle.addEventListener("click", function (e) {
  console.log(e);
  eveningColors();
  modeChanger();
  phoneChanger();
});

//////////////////////
// FORM VALIDATION
//////////////////////

// 1) If form filled password and form filled user are not  valid set disable to false the button if they are set disabled to true

// const isValidForm = form.checkValidity();

form.addEventListener("keyup", function (e) {
  const isValidForm = form.checkValidity();
  console.log(isValidForm);

  console.log(submitBtn);
  if (isValidForm === true) {
    submitBtn.disabled = false;
  } else submitBtn.disabled = true;
});
