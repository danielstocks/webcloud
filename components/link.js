import { createComponentWithProxy } from "react-fela";

const link = {
  textDecoration: "none",
  color: "var(--color-primary)",
  lineHeight: "24px",
  borderBottom: "1px solid var(--color-border)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: "var(--color-fg)",
    borderBottom: "1px solid var(--color-primary)"
  }
};

const iconLink = {
  opacity: 0.8,
  transition: "opacity 0.2s ease-in-out",
  "&:hover": {
    opacity: 1
  }
};

export const Link = createComponentWithProxy(link, "a");
export const IconLink = createComponentWithProxy(iconLink, "a");
