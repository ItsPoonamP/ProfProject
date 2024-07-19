import React from 'react'
import './Programme.css'


export default function Programme() {

  
    const handleOpenPdf = () => {
      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/Programme.pdf`;
      link.target = '_blank'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
  return (
    <div>
         <div className='header'> 
        
        <h1>Preliminary Program Overview</h1>
    </div>
    <div className='content'>
    <div  className="link">Click the link below to download more details </div>
    <div className='info'>More information to come</div>
    <button  onClick={handleOpenPdf} className='button'>Program Overview</button>

    </div>

    <div className='about'>
      <h2>About Q-MDS</h2>
    </div>
    
    <div className='content'>
      <div>
      The inaugural edition of the International Conference on Quantum Materials, Devices, and 
Systems (Q-MDS-2024) is a significant milestone in the advancement of quantum technologies. 
Organized into three tracks—Quantum Materials, Quantum Devices, and Quantum Systems—the 
conference provides a comprehensive exploration of the latest developments in the field. 
The 
conference sets a solid foundation for further advancements in quantum science and technology
      </div>
      <div className="materials">
        <h3>Quantum Materials</h3>
        <p>In the 
Quantum Materials track, researchers delve into novel materials with unique quantum properties, 
including topological insulators, superconductors, and quantum dots.</p>

      </div>
      <div className="devices">
        <h3>Quantum Devices</h3>
        <p>The Quantum Devices track 
focuses on the design, fabrication, and optimization of quantum devices for practical applications, 
spanning spintronic devices, quantum photonics, emerging quantum devices, and single electron 
devices.</p>

      </div>
      <div className="systems">
        <h3>Quantum Systems</h3>
        <p>Meanwhile, the Quantum Systems track explores the intricate realm of quantum 
phenomena and its implications for system-level applications, encompassing quantum heat 
engineering, sensors, quantum communication, and information theory.</p>

      </div>

      



   
    </div>

   
      
    </div>
  )
}
