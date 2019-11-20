import { createComponentWithProxy } from "react-fela";

const title = () => ({
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
});

export const Title = createComponentWithProxy(title, "h1");
