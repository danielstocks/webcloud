import { createComponentWithProxy } from "react-fela";

const title = ({ variant = "banana" }) => ({
  margin: 0,
  padding: 0,
  ...(variant === "banana" && {
    fontSize: "64px",
    fontWeight: 500,
    lineHeight: "64px"
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
  ...(variant === "kiwi" && {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "200",
  })
});

export const Title = createComponentWithProxy(title, "h1");
