import { createComponentWithProxy } from "react-fela";

const listItem = () => ({
  lineHeight: "24px",
  margin: "0",
});

export const ListItem = createComponentWithProxy(listItem, "li");
