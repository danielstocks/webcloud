var userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

var currentTheme =
  window.localStorage.getItem("current-theme") || userPreference;

var root = document.documentElement.style;

if (currentTheme) {
  setColors(currentTheme);
}

function setColors(theme) {
  var colors = COLORS[theme];
  root.setProperty("--colors-bg", colors.bg);
  root.setProperty("--colors-fg", colors.fg);
  root.setProperty("--colors-primary", colors.primary);
  root.setProperty("--colors-primary-light", colors.primaryLight);
}

var button = document.createElement("button")

button.innerHTML = currentTheme === "light" ? "go dark" : "go light";

button.addEventListener("click", function(e) {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  e.currentTarget.innerHTML =
    currentTheme === "light" ? "go dark" : "go light";
  window.localStorage.setItem("current-theme", currentTheme);
  setColors(currentTheme);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#wrap").prepend(button);
});
