import { createComponentWithProxy } from "react-fela";

const link = {
  textDecoration: "none",
  color: "var(--colors-primary)",
  whiteSpace: "nowrap",
  lineHeight: "24px",
  position: "relative",
  transition: "color 0.2s ease-in-out",
  position: "relative",
  background: `linear-gradient(to top, var(--colors-primary-light) 0%, rgba(0, 0, 0, 0) 1px)`,
  "&:hover": {
    color: "var(--colors-fg)"
  },
  "&:after": {
    background: "none repeat scroll 0 0 transparent",
    bottom: 0,
    content: "' '",
    display: "block",
    height: "1px",
    left: "50%",
    position: "absolute",
    background: "var(--colors-primary)",
    transition: "width 0.2s ease 0s, left 0.2s ease 0s",
    width: 0
  },
  "&:hover:after": {
    width: "100%",
    left: "0"
  }
};

const iconLink = {
  opacity: 1,
  "&:hover": {
    opacity: 0.8
  },
};

export const Link = createComponentWithProxy(link, "a");
export const IconLink = createComponentWithProxy(iconLink, "a");




