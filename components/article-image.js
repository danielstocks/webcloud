import React from "react";
import { createComponentWithProxy } from "react-fela";

export const Div = createComponentWithProxy({}, "div");

export const Image = createComponentWithProxy(
  {
    display: "block",
    width: "calc(100% + 32px)",
    position: "relative",
    left: "-16px",
    boxShadow: "var(--shadow)"
  },
  "img"
);

export const ArticleImage = ({ ...props }) => (
  <Div
    extend={{
      margin: "24px 0",
      ":after": {
        top: "4px",
        position: "relative",
        content: "attr(data-title)",
        fontSize: "12px",
        color: "var(--color-fg-alt)",
        fontStyle: "italic"
      }
    }}
    data-title={props.title}
  >
    <Image loading="lazy" {...props} />
  </Div>
);
