import { createComponentWithProxy } from "react-fela";

const code = () => ({
	background: "#f0f0f0",
	overflowX: "scroll",
	padding: "8px"
});

export const Code = createComponentWithProxy(code, "pre");
