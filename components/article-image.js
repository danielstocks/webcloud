import { createComponentWithProxy } from "react-fela";

export const ArticleImage = createComponentWithProxy(
  {
    maxWidth: "100%",
    display: "block"
  },
  "img"
);
