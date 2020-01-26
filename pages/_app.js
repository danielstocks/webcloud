import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/mdx";
import { ToggleTheme } from "../components/toggle-theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <ToggleTheme id="toggle-theme" />
        <Component {...pageProps} />
      </MDXProvider>
    );
  }
}

export default MyApp;
