import { ArticleWrap } from "../components/article-wrap";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Link } from "../components/link";
import { Code } from "../components/code";
import { InlineCode } from "../components/inline-code";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Quote } from "../components/quote";

export const components = {
  wrapper: ArticleWrap,
  h1: Title,
  h2: ({ ...props }) => <Title variant="pear" {...props} />,
  h3: ({ ...props }) => <Title variant="orange" {...props} />,
  p: Paragraph,
  a: Link,
  li: ListItem,
  ul: List,
  ol: ({ ...props }) => <List as="ol" {...props} />,
  code: Code,
  blockquote: Quote,
  inlineCode: InlineCode
};
