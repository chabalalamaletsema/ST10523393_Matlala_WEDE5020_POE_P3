// validation.js - O.T Kitchen enquiry form

const form = document.getElementById("enquiryForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

function showError(element, message) {
  element.textContent = message;
}

function clearError(element) {
  element.textContent = "";
}

form.addEventListener("submit", function (event) {
  let isValid = true;

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  // Name: required, at least 3 characters
  if (name === "") {
    showError(nameError, "Please enter your full name");
    isValid = false;
  } else if (name.length < 3) {
    showError(nameError, "Name must have at least 3 characters");
    isValid = false;
  } else {
    clearError(nameError);
  }

  // Phone: required, digits/spaces/+ only, at least 10 digits
  const digitsOnly = phone.replace(/\D/g, "");
  if (phone === "") {
    showError(phoneError, "Please enter a phone number");
    isValid = false;
  } else if (digitsOnly.length < 10) {
    showError(phoneError, "Enter a valid phone number (at least 10 digits)");
    isValid = false;
  } else {
    clearError(phoneError);
  }

  // Message: required
  if (message === "") {
    showError(messageError, "Please tell us what you need");
    isValid = false;
  } else {
    clearError(messageError);
  }

  if (!isValid) {
    event.preventDefault();
  }
});

// Live feedback: clear an error as soon as the field becomes valid
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim().length >= 3) {
    clearError(nameError);
  }
});

phoneInput.addEventListener("input", function () {
  const digits = phoneInput.value.replace(/\D/g, "");
  if (digits.length >= 10) {
    clearError(phoneError);
  }
});

messageInput.addEventListener("input", function () {
  if (messageInput.value.trim() !== "") {
    clearError(messageError);
  }
});