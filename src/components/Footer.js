import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';  // Importing icons from react-icons
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hills International Education Pvt. Ltd.</h3>
          <p style={{color:'#e65123'}}>Edvisors St, Dillibazar-30, Kathmandu, Nepal</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p style={{color:'#25d366'}}><strong>Phone Numbers:</strong></p>
          <ul>
            <li>+014547298</li>
            <li>+9779709121292</li>
          </ul>
          <p style={{color:'#25d366'}}><strong>Email:</strong> <a href="mailto:hillsinternationaleducation@gmail.com">hillsinternationaleducation@gmail.com</a></p>
          <p style={{color:'#25d366'}}><strong>Website:</strong> <a href="https://www.hillsintledu.com.np" target="_blank" rel="noopener noreferrer">www.hillsintledu.com.np</a></p>
        </div>
        <div className="footer-section">
          <h4>Get Connected with Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={50} color="#3b5998" /> {/* Facebook Icon with color */}
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={50} color="#25d366" /> {/* WhatsApp Icon with color */}
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} color="#e4405f" /> {/* Instagram Icon with color */}
            </a>
          </div>
        </div>
      </div>
      </footer>
      <div className="footer-bottom">
        <a href="https://www.hillsintledu.com.np" target="_blank" rel="noopener noreferrer"> © 2025 Copyright: WWW.hillsintledu.com.np</a>
      </div>
      </>

  );
};

export default Footer;
