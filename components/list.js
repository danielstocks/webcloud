import { createComponentWithProxy } from "react-fela";

const list = () => ({
  color: "#333"
});

export const List  = createComponentWithProxy(list, "ul");
