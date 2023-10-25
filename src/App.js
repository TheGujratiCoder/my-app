// import logo from './logo.svg';
import React,{ useState } from "react";
import"./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  const [mode,setMode]=useState('light'); // whether dark mode is enabled or not

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      // document.body.style.color='white';
      showAlert("Dark Mode has been Enabled","success");
      document.title="Text Utilities - Dark Mode";
      // setInterval(()=>{
      //   document.title="Text Utilities is an amazing Application";
      // },2000);
      // setInterval(()=>{
      //   document.title="Install Text Utilities Now";
      // },1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='black';
      showAlert("Light Mode has been Enabled","success");
      document.title="Text Utilities - Light Mode";
    }
  }

  return(
    <>
    <BrowserRouter>
    <Navbar title="Text Utilities" toggleMode={toggleMode} aboutText="About Us" mode={mode}/>
    <Alert alert={alert}/>
    <div className="container my-4" mode={mode}>
      <Routes>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text To Analyse" mode={mode}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;