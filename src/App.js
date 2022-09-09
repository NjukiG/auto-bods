import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MembersDetails from './components/MembersDetails/MembersDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />  

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Members' element={<MembersDetails />}/>
      <Route path='Contact' element={<Contact />}/> 
      </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
