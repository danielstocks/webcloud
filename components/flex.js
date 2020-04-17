import { createComponentWithProxy } from "react-fela";

export const Flex = createComponentWithProxy(
  {
    flexDirection: "column",
    display: "flex",
    "@media print": {
      display: "block"
    }
  },
  "div"
);
