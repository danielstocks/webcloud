import { createComponentWithProxy } from "react-fela";

const p = () => ({
  lineHeight: "24px",
  color: "var(--color-fg)",
  fontWeight: "var(--font-weight-normal)"
});

export const Paragraph = createComponentWithProxy(p, "p");
