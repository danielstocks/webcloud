import { createComponentWithProxy } from "react-fela";

const list = () => ({
  margin: 0,
  color: "var(--color-fg)"
});

export const List  = createComponentWithProxy(list, "ul");
