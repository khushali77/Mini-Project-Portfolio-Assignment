import "./css/App.css";
import React from "react";
import Header from "./components/header";
import { BrowserRouter,Route } from "react-router-dom";
import {Home} from "./Pages/home";
import {About} from "./Pages/about";
import {Contact} from "./Pages/contact";

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
