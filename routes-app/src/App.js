import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Ski from './components/Ski';
import Hike from './components/Hike';
import Bike from './components/Bike';
import Run from './components/Run';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    //set state to go from false to true
    setIsOpen(!isOpen)
    console.log(isOpen);

  }

  return (
    <div>
      <main>
        <Router>
          <Nav toggle={toggle} />
          {isOpen ? < Sidebar toggle={toggle} /> : ''}
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/ski" element={<Ski />} />
            <Route path="/hike" element={<Hike />} />
            <Route path="/mountain-bike" element={<Bike />} />
            <Route path="/trail-run" element={<Run />} />
          </Routes>
        </Router>
        {/* <Footer></Footer>  */}

      </main>
    </div>
  );
}

export default App;
