import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MembersDetails from './components/MembersDetails/MembersDetails';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';
import PackagesDetails from './components/PackagesDetails/PackagesDetails';
import UpdatePackages from './components/UpdatePackages/UpdatePackages';
import TrainersDetails from "./components/TrainersDetails/TrainersDetails"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />  

      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Members' element={<MembersDetails />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Packages' element={<PackagesDetails />}/>
      <Route path='/Update' element={<Update />}/>
      <Route path='/UpdatePackages' element={<UpdatePackages />}/>
      <Route path='/Delete' element={<Delete />}/>
      <Route path='/Trainers' element={<TrainersDetails />}/>
      </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
