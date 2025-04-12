import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutusDeskImg from './Pictures/AboutUsDeskImg.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <img
        className="image-header"
        src={AboutusDeskImg}  // Replace with your image path
        alt="Header Image"  // Optional: Add an alt text for the image
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
        <div className="about-us">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hills International Education Pvt. Ltd.</h1>
          <p>Your trusted partner in shaping a brighter future in Japan</p>
        </div>
      </div>

      <section className="content">
        <div className="section">
          <h2>Our Story</h2>
          <p>
            Hills International Education Pvt. Ltd. is a dedicated education consultancy specializing in helping students pursue higher education in Japan. As a newly established firm, we are driven by a strong vision—to provide students with the best academic and career opportunities while ensuring a smooth transition into Japanese education and culture.
          </p>
          <p>
            We understand that studying abroad is a life-changing decision. The process of applying to universities, securing a student visa, and preparing for a new cultural experience can be overwhelming. That’s why our team is committed to offering expert guidance, personalized support, and professional assistance at every stage of your journey.
          </p>
        </div>

        <div className="section">
          <h2>Our Values</h2>
          <div className="values">
            <div className="value">
              <h3>Transparency & Trust</h3>
              <p>Honest and clear guidance to help you make informed decisions.</p>
            </div>
            <div className="value">
              <h3>Student-Centered Approach</h3>
              <p>Tailored solutions to meet individual academic and career goals.</p>
            </div>
            <div className="value">
              <h3>End-to-End Support</h3>
              <p>From application and visa processing to pre-departure orientation, we’ve got you covered.</p>
            </div>
          </div>
        </div>

        <div className="footerAbout">
          <p>With a team of experienced professionals passionate about student success, we strive to be more than just a consultancy—we aim to be your trusted partner in shaping a brighter future. Our mission is to empower students by providing them with the knowledge, resources, and opportunities they need to thrive in Japan.</p>
          <div className="cta">
             Your success is our priority! Let’s build your future in Japan with confidence and excellence.
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;