import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ArticleWrap } from "../components/article-wrap";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Link } from "../components/link";
import { Code } from "../components/code";
import { InlineCode } from "../components/inline-code";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Quote } from "../components/quote";

const components = {
  wrapper: ArticleWrap,
  h1: Title,
  h2: ({ ...props }) => <Title variant="pear" {...props} />,
  p: Paragraph,
  a: Link,
  li: ListItem,
  ul: List,
  ol: ({ ...props }) => <List as="ol" {...props} />,
  code: Code,
  blockquote: Quote,
  inlineCode: InlineCode
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    );
  }
}

export default MyApp;
