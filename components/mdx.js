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
    </>
  ),
  h2: ({ ...props }) => (
    <>
      <Spacer size={5} />
      <Title as="h2" variant="orange" {...props} />
      <Spacer size={3} />
    </>
  ),
  h3: ({ ...props }) => (
    <>
      <Spacer size={5} />
      <Title as="h3" variant="apple" {...props} />
      <Spacer size={3} />
    </>
  ),
  Intro: ({ ...props }) => (
    <>
      <Title variant="kiwi" {...props} />
      <Spacer size={6} />
    </>
  ),
  PubDate: ({ ...props }) => (
    <>
      <Spacer size={2} />
      <Paragraph extend={{ fontSize: "12px", color: "var(--colors-fg-alt)" }} {...props} />
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
  hr: function thematicBreak() {
    return <Spacer size={4} />;
  },
  code: Code,
  blockquote: Quote,
  inlineCode: InlineCode,
  Spacer
};
