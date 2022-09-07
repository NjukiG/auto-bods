import React from 'react';
import './App.css';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Header />  

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='About' element={<About />}/>  
      </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
