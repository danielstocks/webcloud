import { createComponentWithProxy } from "react-fela";

const quote = () => ({
  margin: "0",
  fontFamily: "serif",
  fontSize: "24px",
  fontWeight: "200",
  position: "relative",
  fontFamily: "'EB Garamond', serif",
  textRendering: "optimizeLegibility",
  fontSmoothing: "antialiased",
  "& p": {
    lineHeight: "28px"
  },
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-fon-smoothing": "grayscale",
  "& p:first-of-type:before": {
    content: "'“'",
    position: "absolute",
    left: "-.5em"
  },
  "& p:first-of-type:after": {
    content: "'”'"
  }
});

export const Quote = createComponentWithProxy(quote, "blockquote");
