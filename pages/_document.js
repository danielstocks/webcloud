import Document, { Html, Head, Main, NextScript } from "next/document";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { renderToSheetList } from "fela-dom";
import { themes } from "../theme";
import fs from "fs";
var UglifyJS = require("uglify-js");

const clientSideJs = UglifyJS.minify(
  fs.readFileSync("client-js/index.js", "utf8")
).code;

function StyleTags({ renderer }) {
  const sheetList = renderToSheetList(renderer);
  return sheetList.map(({ type, media, rehydration, support, css }) => (
    <style
      key={type + media}
      media={media}
      data-fela-rehydration={rehydration}
      data-fela-type={type}
      data-fela-support={support}
      dangerouslySetInnerHTML={{ __html: css }}
    />
  ));
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = createRenderer();

    const theme = themes["light"];

    renderer.renderStatic(
      {
        "--colors-bg": theme.colors.bg,
        "--colors-bg-alt": theme.colors.bgAlt,
        "--colors-fg": theme.colors.fg,
        "--colors-fg-alt": theme.colors.fgAlt,
        "--colors-border": theme.colors.border,
        "--colors-primary": theme.colors.primary,
        "--colors-primary-light": theme.colors.primaryLight,
        "--colors-shadow": theme.shadow,
        "--font-weights-light": theme.fontWeights.light,
        "--font-weights-normal": theme.fontWeights.normal,
        "--font-weights-bold": theme.fontWeights.bold
      },
      ":root"
    );

    renderer.renderStatic(
      {
        background: "var(--colors-bg)",
        color: "var(--colors-fg)",
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
      <Html>
        <head>
          <StyleTags renderer={this.props.renderer} />
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
        </head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
