import { ArticleWrap } from "../components/article-wrap";
import { ArticleImage } from "../components/article-image";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Link } from "../components/link";
import { Spacer } from "../components/spacer";
import { Code } from "../components/code";
import { InlineCode } from "../components/inline-code";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Quote } from "../components/quote";

export const components = {
  wrapper: ArticleWrap,
  h1: ({ children, props }) => (
    <>
      <Title {...props}>{children}</Title>
      <Spacer size={5} />
    </>
  ),
  h2: ({ ...props }) => (
    <>
      <Spacer size={5} />
      <Title variant="orange" {...props} />
      <Spacer size={3} />
    </>
  ),
  h3: ({ ...props }) => <Title variant="apple" {...props} />,
  Intro: ({ ...props }) => (
    <>
      <Title variant="kiwi" {...props} />
      <Spacer size={6} />
    </>
  ),
  PubDate: ({ ...props }) => (
    <>
      <Paragraph extend={{ fontStyle: "italic", color: "var(--colors-fg-alt)" }} {...props} />
      <Spacer size={2} />
    </>
  ),
  p: ({ ...props }) => (
    <>
      <Paragraph {...props} />
      <Spacer size={2} />
    </>
  ),
  a: Link,
  img: ({ ...props }) => (
    <ArticleImage extend={{ margin: "24px 0" }} {...props} />
  ),
  Link,
  li: ListItem,
  ul: ({ ...props }) => (
    <>
      <List {...props} />
      <Spacer size={2} />
    </>
  ),
  ol: ({ ...props }) => (
    <>
      <List as="ol" {...props} />
      <Spacer size={2} />
    </>
  ),
  code: Code,
  blockquote: Quote,
  inlineCode: InlineCode,
  Spacer
};
