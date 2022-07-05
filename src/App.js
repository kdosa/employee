import React from 'react';
//import './App.css';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import {Route, Routes} from "react-router-dom";
import AddEmployee from './pages/AddEmployee';


function App() {

  return (
    <>
    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/AddEmployee' element={<AddEmployee/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
