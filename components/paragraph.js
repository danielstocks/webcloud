import { createComponentWithProxy } from "react-fela";

const p = () => ({
  lineHeight: "24px",
  color: "var(--color-fg)"
});

export const Paragraph = createComponentWithProxy(p, "p");
