// Note: Use ES5 compatible JS here

var userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

var currentTheme =
  window.localStorage.getItem("current-theme") || userPreference;

var root = document.documentElement.style;

var light = "light";
var dark = "dark";

if (currentTheme) {
  setColors(currentTheme);
}

function setColors(theme) {
  var colors = COLORS[theme];
  root.setProperty("--colors-bg", colors.bg);
  root.setProperty("--colors-bg-alt", colors.bgAlt);
  root.setProperty("--colors-fg", colors.fg);
  root.setProperty("--colors-fg-alt", colors.fgAlt);
  root.setProperty("--colors-border", colors.border);
  root.setProperty("--colors-primary", colors.primary);
  root.setProperty("--colors-primary-light", colors.primaryLight);
  root.setProperty("--colors-shadow", colors.shadow);
}

function buttonClick(e) {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  e.currentTarget.innerHTML = currentTheme === "light" ? dark : light;
  window.localStorage.setItem("current-theme", currentTheme);
  setColors(currentTheme);
}

document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("#toggle-theme");
  button.innerHTML = currentTheme === "light" ? dark : light;
  button.style.display = "block";
  button.addEventListener("click", buttonClick);
});
