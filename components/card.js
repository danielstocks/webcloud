import { createComponent } from "react-fela";

export const Card = createComponent(
  {
    padding: "32px",
    flexDirection: "column",
    display: "flex",
    background: "var(--colors-bg-alt)",
    boxShadow: "var(--colors-shadow)"
  },
  "div"
);
