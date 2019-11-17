import Document, { Html, Head, Main, NextScript } from "next/document";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { renderToSheetList } from "fela-dom";

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
				margin: "0",
				fontSize: "16px",
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
				</head>
				<body>
					<Main />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
