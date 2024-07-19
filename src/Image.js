import React, { useRef } from 'react';

const images = [
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image4.jpg', alt: 'Image 4' },
  { src: 'image5.jpg', alt: 'Image 5' },
  { src: 'image6.jpg', alt: 'Image 6' },
  { src: 'image8.jpg', alt: 'Image 7' },
  { src: 'image9.jpg', alt: 'Image 8' },
  { src: 'image10.jpg', alt: 'Image 9' },
  { src: 'image11.jpg', alt: 'Image 10' },
  { src: 'image12.jpg', alt: 'Image 11' },
  { src: 'image13.jpg', alt: 'Image 12' }
];

export default function Image() {
  const containerRef = useRef();

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 500;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 500;
  };

  return (
    <div className="main-slider-container">
      <button className="slider-icon" onClick={handleScrollLeft}>
        <i className="fa-solid fa-angle-left" ></i>
      </button>
      <div className="slider" ref={containerRef}>
        {images.map((image, index) => (
          <div className="slider-card" key={index}>
            <div className="imgpart"><img src={image.src} alt={image.alt} /></div>
            <p>Name</p>
          </div>
          
        ))}
      </div>
      <button className="slider-icon" onClick={handleScrollRight}>
        <i className="fa-solid fa-angle-right" ></i>
      </button>
    </div>
  );
}
