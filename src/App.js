import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SpeakerList from './speakers/speakerList';
import DateSec from './DateSec';
import Image from './Image';
import Contact from './Contact';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [home,setHome]= useState(false);
  const handleHome=()=>
  {
    setHome(!home);
  }

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleSpeaker = () => {
    setSpeaker(!speaker);
  };

  return (
    <BrowserRouter>
      <header>
        <div className="menu-toggle" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        
        <ul className="navbar">
          <li><Link to ="" onClick={handleHome}> Home</Link></li>
          <li onClick={handleSpeaker}><Link to="/SpeakerList">Speakers</Link></li>
          <li><a href="#">Committee</a></li>
          <li><a href="#">Programme</a></li>
          <li><a href="#">Theme</a></li>
          <li><a href="#">Registration</a></li>
        </ul>
        
        <ul className={`dropdown ${showMenu ? 'open' : ''}`}>
          <li><Link to="/SpeakerList" onClick={handleSpeaker}>Speakers</Link></li>
          <li><a href="#">Committee</a></li>
          <li><a href="#">Programme</a></li>
          <li><a href="#">Theme</a></li>
          <li><a href="#">Registration</a></li>
        </ul>
      </header>
      
      <Routes>
        <Route path="/SpeakerList" element={<SpeakerList />} />
      </Routes>

      {speaker ? (
        <SpeakerList />
      ) : (
        <>
          <div className="polygon"></div>
          <div className="polygon_1"></div>
          <DateSec />
          <div className="writeup">
            <div className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
            </div>
            <div className="im"></div>
            <div className="im_1"></div>
          </div>
          <div className="sponsor">
            <div className="blueLine"></div>
            <div className="textS"><p>SPONSORS</p></div>
            <div className="blueLine"></div>
          </div>
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="speaker">
            <div className="blueLine"></div>
            <div className="textSP"><p>SPEAKER</p></div>
            <div className="blueLine"></div>
          </div>
          <Image />
          <Contact />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
