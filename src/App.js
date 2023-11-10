import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portefeuille from './components/Portefeuille/Portefeuille';
import Contact from './components/Contact/Contact';
import Apropos from './components/Apropos/Apropos'; 
import './App.css';



function App() {
  return (
    <div className="App">
       
      <Router>
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/portefeuille" element={<Portefeuille />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
 </div>
  );
}

export default App;




