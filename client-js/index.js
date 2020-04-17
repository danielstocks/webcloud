(function(window, document) {
  // Note: Use ES5 compatible JS here
  var root = document.documentElement.style;
  var matcher = window.matchMedia("(prefers-color-scheme: dark)");
  var light = "light";
  var dark = "dark";
  var userPreference = matcher.matches ? dark : light;
  var button;
  var currentTheme;

  try {
    currentTheme =
      window.localStorage.getItem("current-theme") || userPreference;
  } catch (e) {
    console.warn("could not read theme from local storage");
  }

  if (currentTheme) {
    setTheme(currentTheme);
  }

  /* Open all <details> elements for print/PDF export */
  window.addEventListener("beforeprint", function() {
    var details = document.querySelectorAll("details");
    details.forEach(function(detail) { detail.open = true })
  });

  document.addEventListener("DOMContentLoaded", function() {
    button = document.querySelector("#toggle-theme");
    setButtonLabel();
    button.style.display = "block";
    button.addEventListener("click", buttonClick);
  });

  matcher.addListener(function() {
    setTheme(matcher.matches ? dark : light);
    setButtonLabel();
  });

  function setTheme(themeName) {
    // eslint-disable-next-line
    var theme = THEMES[themeName];
    try {
      window.localStorage.setItem("current-theme", themeName);
    } catch (e) {
      console.warn("could not persist theme choice");
    }
    currentTheme = themeName;
    Object.keys(theme).forEach(function(key) {
      root.setProperty("--" + key, theme[key]);
    });
  }

  function setButtonLabel() {
    button.innerHTML = currentTheme === dark ? light : dark;
  }

  function buttonClick() {
    var theme = currentTheme === light ? dark : light;
    setTheme(theme);
    setButtonLabel(theme);
  }
})(window, document);
