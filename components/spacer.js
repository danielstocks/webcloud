import { createComponentWithProxy } from "react-fela";

const spacer = ({ size = 1 }) => ({
  flexBasis: size * 8 + "px",
  flexShrink: 0,
  "@media print": {
    height: size * 8 + "px"
  }
});

export const Spacer = createComponentWithProxy(spacer, "div");
