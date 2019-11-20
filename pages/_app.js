import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ArticleWrap } from "../components/article-wrap";
import { Title } from "../components/title";
import { Paragraph } from "../components/paragraph";
import { Link } from "../components/link";
import { Code } from "../components/code";
import { InlineCode } from "../components/inline-code";

const components = {
  wrapper: ArticleWrap,
  h1: Title,
  p: Paragraph,
  a: Link,
  code: Code,
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
