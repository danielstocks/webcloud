import { createComponentWithProxy } from "react-fela";

const listItem = () => ({
  lineHeight: "24px",
  margin: "0 0 4px",
});

export const ListItem = createComponentWithProxy(listItem, "li");
