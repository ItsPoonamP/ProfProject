import React, { useState } from 'react';
import './App.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="menu-toggle" onClick={handleToggle}>
        <i className="fa-solid fa-bars"></i> 
      </div>
      
      <ul className="navbar">
         <a href="#">Speakers</a> 
         <a href="#">Committee</a> 
         <a href="#">Programme</a> 
         <a href="#">Theme</a> 
         <a href="#">Registration</a> 
         <a href="#">Contact</a> 
      </ul>
      <ul className={`dropdown ${showMenu ? 'open' : ''}`}>
         <a href="#">Speakers</a> 
         <a href="#">Committee</a> 
         <a href="#">Programme</a> 
         <a href="#">Theme</a> 
         <a href="#">Registration</a> 
         <a href="#">Contact</a> 
      </ul>
    </>
  );
}
