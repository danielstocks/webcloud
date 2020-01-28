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
  Object.keys(theme).forEach(function(key) {
    root.setProperty("--" + key, theme[key]);
  })
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
