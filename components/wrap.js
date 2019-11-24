import { createComponentWithProxy } from "react-fela";

const wrap = () => ({
  padding: "0 16px",
  margin: "0 auto",
  maxWidth: "640px",
  display: "flex",
  flexDirection: "column"
});

export const InnerWrap = createComponentWithProxy(wrap, "div");

export const Wrap = ({ children }) => (
  <InnerWrap id="wrap">
    {children}
  </InnerWrap>
);
