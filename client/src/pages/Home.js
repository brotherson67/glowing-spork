import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';
import Ski from '../components/Ski';
import Bike from '../components/Bike';
import Run from '../components/Run';
import Footer from '../components/footer';
import SocialFeed from '../components/SocialFeed';
// import ChatScreen from "../components/Chat/ChatBody";
import Chat from '../components/Chat';
import Hero from '../components/Hero';
import Contact from './Contact';
import Profile from './Profile';
import OnePost from '../components/OnePost';
import Login from '../components/Login';


function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    //set state to go from false to true
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <main>
          <Nav toggle={toggle} />
          {isOpen ? < Sidebar toggle={toggle} /> : ''}
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/ski" element={<Ski />} />
            <Route path="/mountain-bike" element={<Bike />} />
            <Route path="/trail-run" element={<Run />} />
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path=":username" element={<Profile />} />
            <Route path=":thoughts" element={<OnePost />} />
          </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default Home;
