marked.setOptions({
  breaks: true,
});

const A = () => {
  const { useState, useEffect } = React;
  const [markdown, setMarkdown] = useState(placeholder);
  const changeHandler = (e) => {
    setMarkdown((prev) => e.target.value);
  };
  return (
    <div className="container">
      <div className="field">
        <Toolbar name="editor" c="" />
        <Editor markdown={markdown} change={changeHandler} c="" />
      </div>
      <div className="field">
        <Toolbar name="Previewer" c="" />
        <Previewer markdown={markdown} c="" />
      </div>
    </div>
  );
};

const Editor = ({ markdown, c, change }) => {
  return <textarea onChange={change} value={markdown} />;
};

const Previewer = ({ markdown, c }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown),
      }}
    />
  );
};

const Toolbar = ({ name, c }) => (
  <div className="title">
    <i className="fa fa-free-code-camp" title="no-stack-dub-sack" />
    <h2>{name}</h2>
  </div>
);

const placeholder = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80)
  `;

ReactDOM.render(<A />, document.querySelector("#app"));
