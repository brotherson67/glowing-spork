import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Ski from './components/Ski';

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
        <Route path="/ski" element={<Ski/>} />
        {/* <Route path="/hike" element={<hike/>} />
        <Route path="/mountain-bike" element={<Mountain-Bike/>} />
        <Route path="/trail-running" element={<Trail-running/>} /> */}
      </Routes>
      </Router>
      {/* <Footer></Footer>  */}

    </main>
  </div>
  );
}

export default App;
