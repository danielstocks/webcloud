import { createRenderer } from "fela";
import { themes } from "./theme";

export function getRenderer() {
  const renderer = createRenderer();

  const theme = themes["light"];
  const cssVariables = {};
  Object.keys(theme).forEach(key => {
    cssVariables["--" + key] = theme[key];
  });

  renderer.renderStatic(cssVariables, ":root");

  renderer.renderStatic(
    {
      background: "var(--color-bg)",
      color: "var(--color-fg)",
      fontSize: "16px",
      transition: "all 0.2s ease-in",
      lineHeight: 1,
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
    },
    "body"
  );

  renderer.renderStatic(
    {
      margin: "0",
      padding: "0"
    },
    "*"
  );

  return renderer;
}
