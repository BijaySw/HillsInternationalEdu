import React from 'react';
import NavigationBar from './NavigationBar';
import CarouselComponent from './CarouselComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Home.css'
import HomeImg01 from './Pictures/HomeImg01.jpeg';
import WhyUs from './Pictures/whyUsImg.png';

const Home = () => {

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px 0',
  };

  const headingStyle = {
    color: '#343a40',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#6c757d',
    fontSize: '1.1rem',
    lineHeight: '1.7',
  };

  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <div className="home-page">
      {/* Welcome Section with Simple Text */}
      {/* <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to Hills International Education Pvt. Ltd.</h1>
          <p>Your Trusted Partner for Studying in Japan!</p>
        </div>
      </section> */}

      {/* Intro Section with Image and Text on Right */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>Are you dreaming of pursuing higher education in Japan?</h2>
            <p>
              At Hills International Education Pvt. Ltd., we are committed to turning your dream into reality. With expert
              guidance, personalized support, and a student-focused approach, we ensure a smooth and successful journey to Japan’s
              top universities and language institutions.
            </p>
            <p>
              Studying in Japan opens doors to world-class education, cultural diversity, and career growth. However, the application
              process, visa formalities, and adapting to a new environment can be overwhelming. That’s where we come in! From selecting
              the right institution to ensuring all necessary paperwork is in place, our dedicated team is committed to providing
              hassle-free services tailored to your needs.
            </p>
            <p>
              With transparency, professionalism, and a passion for student success, Hills International Education promises to guide
              you every step of the way. We help students not only enroll in Japanese language schools but also explore diverse
              educational and career paths after graduation, ensuring they make informed decisions for a bright future.
            </p>
            <p><strong>“Let’s take the first step toward your future in Japan—together!”</strong></p>
          </div>
          <div className="intro-image">
            <img src={HomeImg01} alt="Studying in Japan" />
          </div>
        </div>
      </section>

      {/* Why Us Section with Image and Text on Left */}
      <section className="why-us-section">
        <div className="why-us-container">
          <div className="why-us-image">
            <img src={WhyUs} alt="Why Us" />
          </div>
          <div className="why-us-text">
            <h2>Why Us?</h2>
            <p>At Hills International Education Pvt. Ltd., we are more than just an education consultancy—we are your dedicated partner in making your dream of studying in Japan a reality. Here’s why you should choose us:</p>
            <div className="why-us-cards">
              <div className="why-us-card">
                <p>✅ Personalized Guidance</p>
                <p>We take the time to understand your individual goals and aspirations, offering tailored solutions to help you achieve academic success and career growth in Japan.</p>
              </div>
              <div className="why-us-card">
                <p>✅ Unique Language Training</p>
                <p>Our exclusive language training program gives you the chance to engage with native Japanese speakers and residents, allowing you to explore real-life scenarios, understand Japanese culture, and build confidence in your language skills.</p>
              </div>
              <div className="why-us-card">
                <p>✅ Comprehensive Support</p>
                <p>From selecting the right Japanese language school to assisting with visa processing and pre-departure guidance, we provide end-to-end support to ensure a seamless transition to Japan.</p>
              </div>
              <div className="why-us-card">
                <p>✅ Transparent & Professional Service</p>
                <p>We believe in honesty and integrity. Our team ensures clear communication, accurate documentation, and no hidden fees, providing you with the best possible experience in your journey to Japan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;