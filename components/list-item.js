import { createComponentWithProxy } from "react-fela";

const listItem = () => ({
  lineHeight: "24px",
  margin: "0 0 8px",
  "& > ul": {
    margin: "8px 0 0",
  }
});

export const ListItem = createComponentWithProxy(listItem, "li");
