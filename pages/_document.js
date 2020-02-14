import React from "react";
import Document, { Main, Head } from "next/document";
import { createRenderer } from "fela";
import { RendererProvider, renderToNodeList } from "react-fela";
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

export default class extends Document {
  static async getInitialProps(ctx) {
    const renderer = createRenderer();

    const theme = themes["light"];
    const cssVariables = {};
    Object.keys(theme).forEach(key => {
      cssVariables["--" + key] = theme[key];
    });

    renderer.renderStatic(cssVariables, ":root");

    renderer.renderStatic(
      {
        background: "var(--color-bg)",
        color: "var(--color-fg)",
        fontSize: "16px",
        transition: "all 0.2s ease-in",
        lineHeight: 1,
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
      },
      "body"
    );

    renderer.renderStatic(
      {
        margin: "0",
        padding: "0"
      },
      "*"
    );

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
          <Main />
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
