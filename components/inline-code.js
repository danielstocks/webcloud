import { createComponentWithProxy } from "react-fela";

const inlineCode = {
  margin: "0 4px",
  fontSize: "14px",
  background: "var(--colors-bg-alt)",
  boxShadow: "var(--colors-shadow)",
  verticalAlign: "bottom"
};

export const InlineCode = createComponentWithProxy(inlineCode, "code");
