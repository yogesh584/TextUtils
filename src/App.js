import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

function App() {

  const [mode,setMode] =  useState("light");

  function toggleMode (){
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0b0b0b";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <TextForm heading="Enter Your Text Here to analize" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
