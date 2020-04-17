import React from "react";
import { createComponentWithProxy } from "react-fela";

const wrap = () => ({
  padding: "0 16px",
  margin: "0 auto",
  maxWidth: "640px",
  display: "flex",
  flexDirection: "column",
  "@media print": {
    display: "block"
  }
});

export const InnerWrap = createComponentWithProxy(wrap, "div");

export const Wrap = ({ children, ...props }) => (
  <InnerWrap {...props}>{children}</InnerWrap>
);
