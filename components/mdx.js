import { createComponentWithProxy } from "react-fela";
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

export const Span = createComponentWithProxy({}, "span");

export const Strong = createComponentWithProxy(
  {
    fontWeight: "500",
    color: "var(--color-fg)"
  },
  "strong"
);

export const components = {
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
  p: ({ ...props }) => (
    <>
      <Paragraph extend={{ color: "var(--color-fg-alt)" }} {...props} />
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
    return <Spacer size={8} />;
  },
  code: Code,
  strong: Strong,
  blockquote: Quote,
  inlineCode: InlineCode,
  Spacer,
  SponsoredParagraph: ({ ...props }) => (
    <>
      <Paragraph extend={{ color: "var(--color-fg-alt)" }} {...props} />
      <Spacer size={2} />
    </>
  ),
  SponsoredLink: ({ children, ...props }) => (
    <>
      <Link {...props}>{children}</Link>
      <Span
        title="Disclaimer: I get paid if you click on this link and buy something."
        extend={{
          cursor: "help",
          fontSize: "8px",
          padding: "4px",
          position: "relative",
          top: "-2px",
          background: "var(--color-primary-alt)",
          marginLeft: "8px",
          color: "var(--color-fg)"
        }}
      >
        Sponsored Link
      </Span>
    </>
  )
};
