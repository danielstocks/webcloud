import { createComponentWithProxy } from "react-fela";

const p = () => ({
  margin: "0 0 32px",
  lineHeight: "24px",
  color: "#333"
});

export const Paragraph = createComponentWithProxy(p, "p");
