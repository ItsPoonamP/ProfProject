import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SpeakerList from './speakers/speakerList';

import DateSec from './DateSec';
import Image from './Image';
import Contact from './Contact';
import './App.css';
import Programme from './Pages/Programme';
import Registration from './Pages/Registration';
import Home from './Pages/Home';
import Theme from './Themes/theme';
import Committee from './Pages/Committee';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <BrowserRouter>
      <header>
        <div className="menu-toggle" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SpeakerList">Speakers</Link></li>
          <li><Link to="/Committee">Committee</Link></li>
          <li><Link to="/Programme">Programme</Link></li>
          <li><Link to="/Theme">Theme</Link></li>
          <li><Link to="/Registration">Registration</Link></li>
        </ul>
        
        <ul className={`dropdown ${showMenu ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SpeakerList">Speakers</Link></li>
          <li><Link to="/Committee">Committee</Link></li>
          <li><Link to="/Programme">Programme</Link></li>
          <li><Link to="/Theme">Theme</Link></li>
          <li><Link to="/Registration">Registration</Link></li>
        </ul>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SpeakerList" element={<SpeakerList />} />
        <Route path="/Programme" element={<Programme />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path = "/Theme" element={<Theme />}/>
        <Route path = "/Committee" element={<Committee />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
