import { Wrap } from "./wrap";
import { Link } from "./link";
import { Card } from "./card";
import { Spacer } from "./spacer";
import { BackToBase } from "./back-to-base";

export const ArticleWrap = ({ children }) => (
  <Wrap>
    <BackToBase />
    {children}
    <Spacer size={8} />
  </Wrap>
);
