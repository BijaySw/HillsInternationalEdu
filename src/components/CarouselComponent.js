import React, { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';
import HomepageImg03 from './Pictures/homepage03.png';
import HomepageImg01 from './Pictures/homepage01.png';
import HomepageImg02 from './Pictures/homepage02.png';
import HomepageMbImg02 from './Pictures/homepageMb02.png';
import HomepageMbImg01 from './Pictures/homepageMb01.png';
import HomepageMbImg03 from './Pictures/homepageMb03.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Styled Carousel Container
const CarouselContainer = styled(Box)({
  marginBottom: '40px',
});

// Carousel Settings with Automatic Timer


const CarouselComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkDeviceType = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); // Mobile
    } else {
      setIsMobile(false); // Desktop
    }
  };

  // Set up the resize event listener when the component mounts
  useEffect(() => {
    checkDeviceType(); // Check initial screen size
    window.addEventListener('resize', checkDeviceType); // Add resize event listener

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);


  return (
    <div>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{ height: 400 }}>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
        {isMobile ? (
          <img src={HomepageMbImg01} style={{ height: 450 }} class="d-block w-100" alt="..." />
        ) : (
          <img src={HomepageImg01} style={{ height: 450 }} class="d-block w-100" alt="..." />
        )}
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        {isMobile ? (
          <img src={HomepageMbImg02} style={{ height: 450 }} class="d-block w-100" alt="..." />
        ) : (
          <img src={HomepageImg02} style={{ height: 450 }} class="d-block w-100" alt="..." />
        )}
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        {isMobile ? (
          <img src={HomepageMbImg03} style={{ height: 450 }} class="d-block w-100" alt="..." />
        ) : (
          <img src={HomepageImg03} style={{ height: 450 }} class="d-block w-100" alt="..." />
        )}
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  );
};

export default CarouselComponent;
