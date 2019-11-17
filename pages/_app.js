import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Wrap } from "../components/wrap";
import { Title } from "../components/title";
import { Code } from "../components/code";

const components = {
	wrapper: Wrap,
	h1: Title,
	code: Code
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
