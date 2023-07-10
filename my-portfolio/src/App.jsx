import React from 'react'
import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {

  return (
      <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      
     
      </div>
  )
}

export default App;
