import React from "react";
import { createComponentWithProxy } from "react-fela";
import Highlight, { defaultProps } from "prism-react-renderer";

const codeBlock = {
  padding: "16px",
  background: "var(--color-bg-alt)",
  color: "var(--color-fg-alt)",
  boxShadow: "var(--shadow)",
  fontSize: "14px",
  lineHeight: "16px",
  width: "100%",
  overflowX: "auto",
  position: "relative",
  marginLeft: "-16px",
  marginTop: "16px",
  marginBottom: "32px"
};
const CodeBlock = createComponentWithProxy(codeBlock, "div");

const Token = createComponentWithProxy({}, "span");

const tokenColor = tokens => {
  if (tokens.includes("punctuation")) return "var(--color-code-punctuation)";
  if (tokens.includes("comment")) return "var(--color-code-comment)";
  if (tokens.includes("keyword")) return "var(--color-primary)";
  if (tokens.includes("method")) return "var(--color-code-method)";
  if (tokens.includes("string")) return "var(--color-code-string)";
  if (tokens.includes("function")) return "var(--color-code-function)";
  if (tokens.includes("dom")) return "var(--color-code-dom)";
  if (tokens.includes("property-access"))
    return "var(--color-code-property-access)";
  if (tokens.includes("class-name")) return "var(--color-code-class-name)";
  if (tokens.includes("operator")) return "var(--color-code-operator)";
  if (tokens.includes("selector")) return "var(--color-primary)";
  if (tokens.includes("property")) return "var(--color-code-method)";
};

export const Code = ({ children, className }) => {
  const language = className.replace(/language-/, "");
  // Remove newline from end of code
  const code = children.replace(/\n$/g, "");

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={code}
      language={language}
    >
      {({ tokens, getTokenProps }) => (
        <CodeBlock>
          {tokens.map((line, i) => (
            <div key={i}>
              {line.map((token, key) => {
                const props = getTokenProps({ token, key });
                return (
                  <Token
                    key={key}
                    extend={{
                      color: tokenColor(props.className.split(" ").slice(1))
                    }}
                  >
                    {props.children}
                  </Token>
                );
              })}
            </div>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  );
};
