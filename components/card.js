import { createComponent } from "react-fela";

export const Card = createComponent(
  {
    padding: "16px",
    flexDirection: "column",
    display: "flex",
    background: "var(--color-bg-alt)",
    boxShadow: "var(--shadow)"
  },
  "div"
);
