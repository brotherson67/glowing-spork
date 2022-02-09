import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Ski from './components/Ski';
import Bike from './components/Bike';
import Run from './components/Run';
import Footer from './components/footer';
import SocialFeed from './components/SocialFeed';
// import Hero from './components/Hero';
// import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <main>
        <Router>
          {/* <Nav toggle={toggle} /> */}
          {/* {isOpen ? < Sidebar toggle={toggle} /> : ''} */}
          
          <Routes>
            
            <Route path="/ski" element={<Ski />} />
            <Route path="/mountain-bike" element={<Bike />} />
            <Route path="/trail-run" element={<Run />} />
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/" element={<Home />} />
          </Routes>
          
        </Router>
      </main>
    </div>
  );
}

export default App;
