import React from "react";
import App from "next/app";
import Head from "next/head";
import { format } from "date-fns";
import { Flex } from "../components/flex";
import { withRouter } from "next/router";
import { Spacer } from "../components/spacer";
import { Paragraph } from "../components/paragraph";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/mdx";
import { ArticleWrap } from "../components/article-wrap";
import { ToggleTheme } from "../components/toggle-theme";
import { Title } from "../components/title";
import blogPosts from "../blog-manifest.json";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const path = this.props.router.pathname;
    const type = path.split("/")[1];
    let post = false;
    if (type === "blog") {
      post = blogPosts.filter(post => post.path == path)[0];
    }

    return (
      <MDXProvider
        components={{
          ...components,
          wrapper: function MdxWrapper({ ...props }) {
            return <ArticleWrap title={post.title} {...props} />;
          },
          h1: function BlogTitle() {
            return (
              <Flex>
                <Title>{post.title}</Title>
                <Spacer size={5} />
                <Paragraph
                  extend={{ fontSize: "12px", color: "var(--color-fg-alt)" }}
                >
                  {format(new Date(post.date), "d MMMM Y")}
                </Paragraph>
              </Flex>
            );
          }
        }}
      >
        <Head>
          <title>webcloud</title>
        </Head>
        <ToggleTheme id="toggle-theme" />
        <Component {...pageProps} />
      </MDXProvider>
    );
  }
}

export default withRouter(MyApp);
