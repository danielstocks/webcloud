import {createComponentWithProxy} from 'react-fela';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const codeBlock = {
  padding: '16px',
  background: '#eee',
  width: "100%",
  overflowX: "auto",
  position: "relative",
  marginLeft: "-16px",
};
const CodeBlock = createComponentWithProxy(codeBlock, 'div');

export const Code = ({children, className}) => {
  const language = className.replace(/language-/, '');
  const code = children.replace(/\n$/g, ''); // Remove newline from end of code

  return (
    <Highlight {...defaultProps} code={code} theme={theme} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <CodeBlock>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  );
};
