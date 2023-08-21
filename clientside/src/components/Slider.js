import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(timer);
  }, [content]);

  return (
    <div className="slider-container">
      {content.map((item, index) => (
        <div
          key={index}
          className={`slider-item ${
            index === currentIndex ? 'active' : ''
          }`}
        >
          <img src={item.image} alt={`Slide ${index}`} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;
