import { createComponentWithProxy } from "react-fela";

const list = () => ({
  margin: 0,
  paddingLeft: "24px",
  color: "var(--color-fg-alt)"
});

export const List  = createComponentWithProxy(list, "ul");
