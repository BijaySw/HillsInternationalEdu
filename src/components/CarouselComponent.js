import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import HomepageImg01 from './Pictures/homepage01.png';
import HomepageImg02 from './Pictures/homepage02.png';
import HomepageImg03 from './Pictures/homepage03.png';
import HomepageMbImg01 from './Pictures/homepageMb01.png';
import HomepageMbImg02 from './Pictures/homepageMb02.png';
import HomepageMbImg03 from './Pictures/homepageMb03.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'bootstrap'; // Import Bootstrap JS carousel constructor

// Styled container (if needed later)
const CarouselContainer = styled(Box)({
  marginBottom: '40px',
});

const CarouselComponent = () => {
  const [isMobile, setIsMobile] = useState(null); // null to delay rendering

  const checkDeviceType = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Check device type on mount + resize
  useEffect(() => {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Initialize carousel after DOM updates
  useEffect(() => {
    if (isMobile !== null) {
      const carouselEl = document.querySelector('#carouselExampleInterval');
      if (carouselEl) {
        const carousel = new Carousel(carouselEl, {
          interval: 2000,
          ride: 'carousel',
        });

        return () => {
          carousel.dispose(); // Clean up
        };
      }
    }
  }, [isMobile]);

  if (isMobile === null) return null; // Skip render until check completes

  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: 400 }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src={isMobile ? HomepageMbImg01 : HomepageImg01}
              style={{ height: 450 }}
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={isMobile ? HomepageMbImg02 : HomepageImg02}
              style={{ height: 450 }}
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={isMobile ? HomepageMbImg03 : HomepageImg03}
              style={{ height: 450 }}
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
