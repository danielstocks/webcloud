import { createComponentWithProxy } from "react-fela";

const wrap = () => ({
	padding: "64px 16px",
	margin: "0 auto",
	maxWidth: "720px",
	display: "flex",
	flexDirection: "column"
});

export const Wrap = createComponentWithProxy(wrap, "div");
