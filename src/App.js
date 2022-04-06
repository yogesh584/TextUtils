import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setMode] =  useState("light");
  const [alert,setAlert] =  useState({
    msg:"",
    type:"",
    color:"green-500"
  });

  function ShowAlert (givenmsg,giventype,givencolor,givenIsShow){
    setAlert({
      msg:givenmsg,
      type:giventype,
      color:givencolor
    });
    showNotification();
    setTimeout(() => {
      removeNotification();
    }, 3000);
  }

  function showNotification(){
    let Alert = document.querySelector("#Alert");
    Alert.classList.remove("animate-hidealert");
    Alert.classList.add("animate-showalert");
  }

  function removeNotification(){
    let Alert = document.querySelector("#Alert");
    Alert.classList.remove("animate-showalert");
    Alert.classList.add("animate-hidealert");
  }

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
      <Router>
      <Alert alert={alert} removeNotification = {removeNotification}/>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>

      {/* This is the Older Syntex of React Router Dom */}
      {/* <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <TextForm heading="Enter Your Text Here to analize" mode={mode} ShowAlert = {ShowAlert} />
        </Route>
      </Switch> */}


        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter Your Text Here to analize" mode={mode} ShowAlert = {ShowAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
