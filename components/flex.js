import { createComponentWithProxy } from "react-fela";

export const Flex = createComponentWithProxy(
  {
    flexDirection: "column",
    display: "flex"
  },
  "div"
);
