import { createComponentWithProxy } from "react-fela";

const primary = "rgb(0, 128, 86)";
const primaryLight = "rgba(0, 128, 86, 0.2)";

const link = {
  textDecoration: "none",
  color: primary,
  whiteSpace: "nowrap",
  position: "relative",
  transition: "color 1s ease-in-out",
  position: "relative",
  background: `linear-gradient(to top, ${primaryLight} 0%, rgba(0, 0, 0, 0) 1px)`,
  "&:hover": {
    color: "#333",
  },
  "&:after": {
    background: "none repeat scroll 0 0 transparent",
    bottom: 0,
    content: "' '",
    display: "block",
    height: "1px",
    left: "50%",
    position: "absolute",
    background: primary,
    transition: "width 0.2s ease 0s, left 0.2s ease 0s",
    width: 0
  },
  "&:hover:after": {
    width: "100%",
    left: "0"
  }
};

export const Link = createComponentWithProxy(link, "a");
