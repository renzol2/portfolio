import Highlight, { defaultProps, Prism } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/palenight";

// Hack to *include* Rust language.
// https://github.com/FormidableLabs/prism-react-renderer/issues/53
// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");

const SyntaxHighlighter = ({ props }: { props: any }) => {
  const code = props.children;
  const language = props.className?.replace("language-", "").trim();

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
