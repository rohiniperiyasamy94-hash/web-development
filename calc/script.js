// script.js

// Get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

// Append button values to display
buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.getAttribute("data-value");
  });
});

// Clear display
clear.addEventListener("click", () => {
  display.value = "";
});

// Evaluate expression
equals.addEventListener("click", () => {
  try {
    display.value = eval(display.value); // ⚠ eval is fine here for learning, but not safe in real apps
  } catch {
    display.value = "Error";
  }
});