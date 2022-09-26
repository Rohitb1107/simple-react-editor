import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const Home = () => {
  const [code, setCode] = useState(
    `import React from "react";
import ReactDOM from "react-dom";
    
function App() {
    return (
        <h1>Hello world</h1>
        <div>Hi</div>
    );
}
    
ReactDOM.render(<App />, document.getElementById("root"));`
  );

  function copyText() {
    navigator.clipboard.writeText(code);
    alert("Text copied!");
  }

  return (
    <div className="main-div">
      <h1>React Simple Code Editor</h1>
      <div className="desc">
        A simple no-frills code editor with syntax highlighting.
      </div>
      <a
        className="button"
        target="_blank"
        href="https://github.com/Rohitb1107/simple-react-editor"
      >
        <button>See Code on GitHub</button>
      </a>
      <div className="editor-div">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={15}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
      </div>
      <button onClick={copyText}>Copy above code</button>
    </div>
  );
};

export default Home;
