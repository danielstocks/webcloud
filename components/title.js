import { createComponentWithProxy } from "react-fela";

const title = ({ variant = "banana" }) => ({
  ...(variant === "banana" && {
    fontSize: "56px",
    fontWeight: 500,
    lineHeight: "60px"
  }),
  ...(variant === "pear" && {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "32px"
  }),
  ...(variant === "orange" && {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "24px"
  }),
  ...(variant === "apple" && {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "18px"
  }),
  ...(variant === "kiwi" && {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "200",
  })
});

export const Title = createComponentWithProxy(title, "h1");
