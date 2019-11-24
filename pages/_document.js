import Document, { Html, Head, Main, NextScript } from "next/document";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { renderToSheetList } from "fela-dom";
import { colors } from "../theme";
var UglifyJS = require("uglify-js");
import fs from "fs";

const clientSideJs = UglifyJS.minify(
  fs.readFileSync("client-js/index.js", "utf8")
).code

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

    renderer.renderStatic(
      {
        "--colors-bg": colors.light.bg,
        "--colors-fg": colors.light.fg,
        "--colors-primary": colors.light.primary,
        "--colors-primary-light": colors.light.primaryLight
      },
      ":root"
    );

    renderer.renderStatic(
      {
        margin: "0",
        background: "var(--colors-bg)",
        color: "var(--colors-fg)",
        fontSize: "16px",
        transition: "color 0.2s ease-in, background 0.2s ease-in",
        lineHeight: 1,
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
      },
      "body"
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
              __html: `var COLORS = ${JSON.stringify(colors)}`
            }}
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
