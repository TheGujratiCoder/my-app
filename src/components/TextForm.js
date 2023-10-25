import React,{ useState } from 'react'

export default function TexthtmlForm(props){
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        console.log("Lowercase Was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const clearText=()=>{
        console.log("Clear Was Clicked");
        setText("");
        props.showAlert("Text Erased Successfully","success");
    }

    const copyText=()=>{
        console.log("You Clicked Copy Button");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to ClipBoard Successfully","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Erased Successfully","success");
    }

    const [text,setText]=useState('Enter Text Here');

    return (
        <>
        <div className='container' style={{color:props.mode=='dark'?'white':'black'}}>
            <h2>{props.heading} - {text}</h2>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">"Example text Area"</label> */}
            <textarea className="form-control" style={{backgroundColor:props.mode=='dark'?'black':'white',color:props.mode=='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Delete Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter The Text To Preview I"}</p>
        </div>
        </>
    )
}
