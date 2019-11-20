import { Wrap } from "./wrap";
import { Link } from "./link";
import { Spacer } from "./spacer";

export const ArticleWrap = ({ children }) => (
  <Wrap>
    <Spacer size={4} />
    <div>
      <Link href="/">↖ Back to base</Link>
    </div>
    <Spacer size={8} />
    {children}
  </Wrap>
);
