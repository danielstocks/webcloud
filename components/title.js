import { createComponentWithProxy } from "react-fela";

const title = () => ({
	fontSize: "64px",
	fontWeight: 400,
	lineHeight: "64px",
	margin: "0 0 32px"
});

export const Title = createComponentWithProxy(title, "h1");
