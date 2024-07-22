import React from 'react';
import DateSec from '../DateSec';
import Image from '../Image';
import Contact from '../Contact';

function Home() {
  return (
    <>
      <div className="polygon"><p>International Conference on Quantum
      Materials, Devices and Systems</p></div>
      <div className="polygon_1"><p>International Conference on Quantum
      Materials, Devices and Systems</p></div>
      <DateSec />
      <div className="writeup">
        <div className="text">
        The inaugural edition of the International Conference on Quantum Materials, Devices, and
Systems (Q-MDS-2024) is a significant milestone in the advancement of quantum technologies.
Organized into three tracks—Quantum Materials, Quantum Devices, and Quantum Systems—the
conference provides a comprehensive exploration of the latest developments in the field. In the
Quantum Materials track, researchers delve into novel materials with unique quantum properties,
including topological insulators, superconductors, and quantum dots. The Quantum Devices track
focuses on the design, fabrication, and optimization of quantum devices for practical applications,
spanning spintronic devices, quantum photonics, emerging quantum devices, and single electron
devices. Meanwhile, the Quantum Systems track explores the intricate realm of quantum
phenomena and its implications for system-level applications, encompassing quantum heat
engineering, sensors, quantum communication, and information theory. Key insights highlight
opportunities and challenges in advancing quantum technologies, underscoring the importance of
interdisciplinary collaboration, robust materials design, and scalable device architectures. Future
research directions include the exploration of new quantum materials, refinement of device
fabrication techniques, and development of quantum algorithms for real-world applications. The
conference sets a solid foundation for further advancements in quantum science and technology
        </div>
        <div className="im"></div>
        <div className="im_1"></div>
      </div>
      <div className="sponsor">
        <div className="blueLine"></div>
        <div className="textS"><p>SPONSORS</p></div>
        <div className="blueLine"></div>
      </div>
      <div className="sponsT">
        <img src="https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg"  />
        <img src="https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg"  />
        <img src="https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg"  />
        <img src="https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg"  />
        <img src="https://as1.ftcdn.net/v2/jpg/01/89/10/46/1000_F_189104677_lUhlb8eqFFO7CCI3iKaMmqedS8sJXKr9.jpg"  />
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
  );
}

export default Home;
