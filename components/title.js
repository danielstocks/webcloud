import { createComponentWithProxy } from "react-fela";

const title = ({ variant = "banana" }) => ({
  ...(variant === "banana" && {
    fontWeight: "var(--font-weight-bold)",
    fontSize: "40px",
    lineHeight: "44px",
    "@media (min-width: 480px)": {
      fontSize: "56px",
      lineHeight: "60px"
    }
  }),
  ...(variant === "pear" && {
    fontSize: "32px",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "32px"
  }),
  ...(variant === "orange" && {
    fontSize: "24px",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "24px"
  }),
  ...(variant === "apple" && {
    fontSize: "18px",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "18px"
  }),
  ...(variant === "kiwi" && {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "var(--font-weight-light)"
  })
});

export const Title = createComponentWithProxy(title, "h1");
