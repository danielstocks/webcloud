import { createComponentWithProxy } from "react-fela";

const primary = "rgb(0, 128, 86)";
const primaryLight = "rgba(0, 128, 86, 0.2)";

const link = {
  textDecoration: "none",
  color: primary,
  position: "relative",
  backgroundImage: `linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 2px,
    ${primaryLight} 2px,
    ${primaryLight} 3px,
    rgba(0, 0, 0, 0) 3px
  )`,
  "&:hover": {
    color: "#222",
    backgroundImage: `linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 2px,
      ${primary} 2px,
      ${primary} 3px,
      rgba(0, 0, 0, 0) 3px
    )`
  }
};

export const Link = createComponentWithProxy(link, "a");
