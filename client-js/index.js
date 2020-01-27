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
  setTheme(currentTheme);
}

function setTheme(theme) {
  var theme = THEMES[theme];
  root.setProperty("--colors-bg", theme.colors.bg);
  root.setProperty("--colors-bg-alt", theme.colors.bgAlt);
  root.setProperty("--colors-fg", theme.colors.fg);
  root.setProperty("--colors-fg-alt", theme.colors.fgAlt);
  root.setProperty("--colors-border", theme.colors.border);
  root.setProperty("--colors-primary", theme.colors.primary);
  root.setProperty("--colors-primary-light", theme.colors.primaryLight);
  root.setProperty("--shadow", theme.shadow);
  root.setProperty("--font-weights-light", theme.fontWeights.light);
  root.setProperty("--font-weights-normal", theme.fontWeights.normal);
  root.setProperty("--font-weights-bold", theme.fontWeights.bold);
}

function buttonClick(e) {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  e.currentTarget.innerHTML = currentTheme === "light" ? dark : light;
  window.localStorage.setItem("current-theme", currentTheme);
  setTheme(currentTheme);
}

document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("#toggle-theme");
  button.innerHTML = currentTheme === "light" ? dark : light;
  button.style.display = "block";
  button.addEventListener("click", buttonClick);
});
