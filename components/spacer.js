import { createComponentWithProxy } from "react-fela";

const spacer = ({ size = 1 }) => ({
  flexBasis: size * 8 + "px",
  flexShrink: 0
});

export const Spacer = createComponentWithProxy(spacer, "div");
