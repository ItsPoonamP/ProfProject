import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SpeakerList from './speakers/speakerList';
import './App.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [speaker,setSpeaker] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleSpeaker=()=>{
    setSpeaker(!speaker);
  }

  return (
    <BrowserRouter>
    
      <div className="menu-toggle" onClick={handleToggle}>
        <i className="fa-solid fa-bars"></i>
      </div>
      
      <ul className="navbar">
        <li onClick={handleSpeaker}><Link to="/SpeakerList">Speakers</Link></li>
        <li><a href="#">Committee</a></li>
        <li><a href="#">Programme</a></li>
        <li><a href="#">Theme</a></li>
        <li><a href="#">Registration</a></li>
      </ul>
      
      <ul className={`dropdown ${showMenu ? 'open' : ''}`}>
        <li><Link to="/SpeakerList">Speakers</Link></li>
        <li><a href="#">Committee</a></li>
        <li><a href="#">Programme</a></li>
        <li><a href="#">Theme</a></li>
        <li><a href="#">Registration</a></li>
      </ul>
      
      <Routes>
        <Route path="/SpeakerList" element={<SpeakerList />} />
      </Routes>
    </BrowserRouter>
  );
}
