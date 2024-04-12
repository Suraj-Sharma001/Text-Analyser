import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = ()=> {
    console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

  }

  const handleDwnClick = ()=> {
    console.log("Lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClrText = ()=> {
    let newText = '';
    setText(newText);
  }

  const FindEmail = ()=> {
    let mail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const Email = text.match(mail);
    if(Email) {
      setText(Email)
    } else {
      setText("E-Mail not found");
    }
  }

  const handleOnChange = (event)=> {
    setText(event.target.value)
  }

  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">
          </label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleDwnClick} >Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClrText} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={FindEmail} >Extract E-Mail</button>
      <div className="container my-3">
      </div>
        <h2>Yout text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
