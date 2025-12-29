import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import './App.css'

function App() {

  const [code, setCode] = useState(` function sum() { return 1+1; } `)
  const [review, setReview] = useState(``);
  
  useEffect(()=>{
    prism.highlightAll();
  }, [])

  async function reviewCode() {
    console.log("Button clicked");

    const response = await axios.post(
      "http://localhost:3000/ai/get-review",
      { code }
    );

    console.log("Response:", response);
    setReview(response.data);
  } 


  return (
    <>
      <main>
        <div className="top">Code-Reviewer</div>
        <div className="bottom">
          <div className="left">
            <div className="code">
              <Editor
                  value={code}
                  onValueChange={setCode}
                  highlight={(code) =>
                    Prism.highlight(code, Prism.languages.javascript, "javascript")
                  }
                  padding={16}
                  textareaClassName="editor-textarea"
                  preClassName="editor-pre"
                  style={{
                    fontFamily: "monospace",
                    fontSize: 16,
                    height: "100%",
                    overflow: "auto" 
                  }}
                />
            </div>
            <div onClick={reviewCode} className="review-btn">Review</div>
          </div>
          <div className="right">{
            <Markdown
            
              rehypePlugins={[ rehypeHighlight ]}
            
            >{review}</Markdown>
          }</div>
        </div>
        
      </main>
    </>
  )
}

export default App
