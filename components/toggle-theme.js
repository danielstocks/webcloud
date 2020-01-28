import { createComponentWithProxy } from "react-fela";

const toggleTheme = () => ({
  padding: "8px 12px",
  border: "none",
  display: "none",
  cursor: "pointer",
  position: "absolute",
  fontSize: "12px",
  lineHeight: "1",
  fontWeight: "400",
  letterSpacing: "0.04em",
  fontFamily: "monospace",
  transition: "all 200ms ease-in",
  top: "32px",
  right: "32px",
  background: "var(--color-bg-alt)",
  color: "var(--color-fg-alt)",
  boxShadow: "4px 4px 0px var(--color-primary-alt)",
  ":hover": {
    color: "var(--color-fg)",
    boxShadow: "4px 4px 0px var(--color-primary)"
  },
  "@media print": {
    display: "none"
  }
});

export const ToggleTheme = createComponentWithProxy(toggleTheme, "button");
