import { createComponentWithProxy } from "react-fela";

const wrap = () => ({
  padding: "16px",
  margin: "0 auto",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column"
});

export const Wrap = createComponentWithProxy(wrap, "div");
