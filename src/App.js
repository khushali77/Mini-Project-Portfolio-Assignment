import "./css/App.css";
import React from "react";
import Header from "./components/header";
import { BrowserRouter,Route } from "react-router-dom";
import {Home,About,Contact} from "./Pages";
import Profile from "./components/profile";

function App() {
  return (
      <>
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/Home' component = {Home}/>
        <Route exact path='/About' component = {About}/>
        <Route exact path='/Contact' component = {Contact}/>
      </BrowserRouter>
      </>
  );
}

export default App;
