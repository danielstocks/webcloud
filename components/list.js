import { createComponentWithProxy } from "react-fela";

const list = () => ({
  margin: 0,
  paddingLeft: "24px",
  color: "var(--color-fg-alt)",
  fontWeight: "var(--font-weight-normal)",
});

export const List  = createComponentWithProxy(list, "ul");
