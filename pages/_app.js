import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/mdx";

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
