import { createComponentWithProxy } from "react-fela";

export const ArticleImage = createComponentWithProxy(
  {
    display: "block",
    width: "calc(100% + 32px)",
    position: "relative",
    left: "-16px",
    boxShadow: "var(--shadow)"
  },
  "img"
);
