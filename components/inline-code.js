import { createComponentWithProxy } from "react-fela";

const inlineCode = {
  margin: "0 4px",
  background: "--var(colors-bg)",
  boxShadow: "0px 0px 16px rgba(100,100,100,0.2)",
  verticalAlign: "bottom"
};

export const InlineCode = createComponentWithProxy(inlineCode, "code");
