import { createComponentWithProxy } from "react-fela";

const spacer = ({ size }) => ({
  flexBasis: size * 8 + "px",
});

export const Spacer = createComponentWithProxy(spacer, "div");
