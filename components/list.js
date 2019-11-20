import { createComponentWithProxy } from "react-fela";

const list = () => ({
  margin: "0 0 32px",
  color: "#333"
});

export const List  = createComponentWithProxy(list, "ul");
