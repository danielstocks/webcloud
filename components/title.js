import { createComponentWithProxy } from "react-fela";

const title = ({ variant = "banana" }) => ({
  ...(variant === "banana" && {
    fontSize: "64px",
    fontWeight: 500,
    lineHeight: "64px",
    margin: "0 0 64px",
    "& + p": {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "200",
      margin: "0 0 64px"
    }
  }),
  ...(variant === "pear" && {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "32px",
    paddingTop: '32px',
    margin: "0 0 32px"
  })
});

export const Title = createComponentWithProxy(title, "h1");
