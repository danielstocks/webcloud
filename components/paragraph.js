import { createComponentWithProxy } from "react-fela";

const p = () => ({
  margin: "0",
  lineHeight: "24px",
  color: "var(--color-fg)"
});

export const Paragraph = createComponentWithProxy(p, "p");
