import { Link } from "./link";
import { Spacer } from "./spacer";
import { createComponentWithProxy } from "react-fela";

const HideOnPrint = createComponentWithProxy(
  {
    display: "flex",
    flexDirection: "column",
    "@media print": {
      display: "none"
    }
  },
  "div"
);

export const BackToBase = () => (
  <HideOnPrint>
    <Spacer size={4} />
    <div>
      <Link href="/">↖ Back to base</Link>
    </div>
    <Spacer size={8} />
  </HideOnPrint>
);
