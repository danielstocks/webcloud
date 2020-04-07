// Note: Use ES5 compatible JS here
var root = document.documentElement.style;
var matcher = window.matchMedia("(prefers-color-scheme: dark)");
var userPreference = matcher.matches ? "dark" : "light";
var light = "light";
var dark = "dark";
var currentTheme =
  window.localStorage.getItem("current-theme") || userPreference;
var button;

if (currentTheme) {
  setTheme(currentTheme);
}

document.addEventListener("DOMContentLoaded", function() {
  button = document.querySelector("#toggle-theme");
  setButtonLabel();
  button.style.display = "block";
  button.addEventListener("click", buttonClick);
});

matcher.addListener(function() {
  setTheme(matcher.matches ? dark : light);
  setButtonLabel();
})

function setTheme(themeName) {
  // eslint-disable-next-line
  var theme = THEMES[themeName];
  currentTheme = themeName;
  Object.keys(theme).forEach(function(key) {
    root.setProperty("--" + key, theme[key]);
  });
}

function setButtonLabel() {
  button.innerHTML = currentTheme === dark ? light : dark
}

function buttonClick() {
  var theme = currentTheme === light ? dark : light;
  window.localStorage.setItem("current-theme", theme);
  setButtonLabel(theme);
  setTheme(theme);
}


