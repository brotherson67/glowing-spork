import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Nav from './components/Nav';
import Footer from './components/footer';
import MountainBike from './components/mountain-bike';
import Hero from './components/Hero';

function App() {
  const [isOpen, setIsOpen ] = useState(false)
  const toggle = () => {
      //set state to go from false to true
      setIsOpen(!isOpen)
      console.log(isOpen);

  }

  return (
    <div>
    <main>
      <Router>
      <Nav toggle={toggle}  />
      {isOpen ? < Sidebar toggle={toggle} /> : ''}
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/ski" element={<Ski/>} /> */}
        <Route path="/mountain-bike" element={<MountainBike/>} />
        {/* <Route path="/trail-running" element={<TrailRunning/>} />  */}
       </Routes>
      </Router>
      <Hero />
      <Footer /> 

    </main>
  </div>
  );
}

export default App;
