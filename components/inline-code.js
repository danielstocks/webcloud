import { createComponentWithProxy } from "react-fela";

const inlineCode = {
  margin: "0 4px",
  background: "#f9f9f9",
  border: "1px solid #fff",
  boxShadow: "0px 0px 16px rgba(100,100,100,0.2)"
};

export const InlineCode = createComponentWithProxy(inlineCode, "code");
