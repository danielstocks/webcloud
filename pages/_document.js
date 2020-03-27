import React from "react";
import Document, { Main, Head } from "next/document";
import { RendererProvider, renderToNodeList } from "react-fela";
import { getRenderer } from "../fela.config.js";
import { themes } from "../theme";
import fs from "fs";
var UglifyJS = require("uglify-js");

const clientSideJs = UglifyJS.minify(
  fs.readFileSync("client-js/index.js", "utf8")
).code;

class MyHead extends Head {
  render() {
    let { head } = this.context._documentProps;
    let children = this.props.children;
    return (
      <head {...this.props}>
        {children}
        {head}
      </head>
    );
  }
}

export class MyMain extends Main {
  render() {
    const { html } = this.context._documentProps;
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

export default class extends Document {
  static async getInitialProps(ctx) {
    const renderer = getRenderer();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <RendererProvider renderer={renderer}>
            <App {...props} />
          </RendererProvider>
        )
      });
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, renderer };
  }

  render() {
    return (
      <html lang="en">
        <MyHead>
          {renderToNodeList(this.props.renderer)}
          <script
            dangerouslySetInnerHTML={{
              __html: `var THEMES = ${JSON.stringify(themes)}`
            }}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script dangerouslySetInnerHTML={{ __html: clientSideJs }} />
        </MyHead>
        <body>
          <MyMain />
          <script async defer src="https://sa.webcloud.se/app.js" />
          <noscript>
            <img src="https://sa.webcloud.se/image.gif" alt="" />
          </noscript>
          <script src="/instant.js" type="module" defer />
        </body>
      </html>
    );
  }
}
