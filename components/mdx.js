import React from "react";
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

const Span = createComponentWithProxy({}, "span");
const Strong = createComponentWithProxy(
  {
    fontWeight: "var(--font-weight-bold)",
    color: "var(--color-fg)"
  },
  "strong"
);
const Intro = ({ ...props }) => (
  <>
    <Title variant="kiwi" {...props} />
    <Spacer size={6} />
  </>
);
const p = ({ ...props }) => (
  <>
    <Paragraph extend={{ color: "var(--color-fg-alt)" }} {...props} />
    <Spacer size={2} />
  </>
);

export const components = {
  h2: function H2({ ...props }) {
    return (
      <>
        <Spacer size={5} />
        <Title as="h2" variant="orange" {...props} />
        <Spacer size={3} />
      </>
    );
  },
  h3: function H3({ ...props }) {
    return (
      <>
        <Spacer size={5} />
        <Title as="h3" variant="apple" {...props} />
        <Spacer size={3} />
      </>
    );
  },
  Intro,
  p,
  a: Link,
  img: ArticleImage,
  Link,
  li: ListItem,
  ul: function ul({ ...props }) {
    return (
      <>
        <List {...props} />
        <Spacer size={2} />
      </>
    );
  },
  ol: function ol({ ...props }) {
    return (
      <>
        <List as="ol" {...props} />
        <Spacer size={2} />
      </>
    );
  },
  hr: function thematicBreak() {
    return <Spacer size={8} />;
  },
  code: Code,
  strong: Strong,
  blockquote: Quote,
  inlineCode: InlineCode,
  Spacer,
  SponsoredParagraph: function SponsoredParagraph({ ...props }) {
    return (
      <>
        <Paragraph extend={{ color: "var(--color-fg-alt)" }} {...props} />
        <Spacer size={2} />
      </>
    );
  },
  SponsoredLink: function SponsoredLink({ children, ...props }) {
    return (
      <>
        <Link {...props}>{children}</Link>
        <Span
          title="Disclaimer: I get paid if you click on this link and buy something."
          extend={{
            cursor: "help",
            fontSize: "10px",
            letterSpacing: "0.03em",
            padding: "2px 4px",
            position: "relative",
            top: "-2px",
            background: "var(--color-primary-alt)",
            marginLeft: "8px",
            color: "var(--color-fg)"
          }}
        >
          sponsored link
        </Span>
      </>
    );
  }
};
