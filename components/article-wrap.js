import { Wrap } from "./wrap";
import { Link } from "./link";
import { Spacer } from "./spacer";
import { BackToBase } from "./back-to-base";

export const ArticleWrap = ({ children }) => (
  <Wrap>
    <BackToBase />
    {children}
  </Wrap>
);
