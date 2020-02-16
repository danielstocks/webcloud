import { createComponentWithProxy } from "react-fela";

const inlineCode = {
  margin: "0 4px",
  fontSize: "14px",
  background: "var(--color-bg-alt)",
  color: "var(--color-fg)",
  boxShadow: "var(--shadow)",
  verticalAlign: "bottom"
};

export const InlineCode = createComponentWithProxy(inlineCode, "code");
