import { createComponentWithProxy } from "react-fela";

const intro = () => ({
	fontSize: "24px",
	fontWeight: 300,
	margin: "0"
});

export const Intro = createComponentWithProxy(intro, "p");
