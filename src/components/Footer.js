import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa'; // Import TikTok Icon
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          
          {/* Contact Us Section */}
          <div className="footer-section contact-section">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <FaPhone className="icon" />
              <div>
                <p>+014547298</p>
                <p>+9779709121292</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:hillsinternationaleducation@gmail.com">
                hillsinternationaleducation@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FaGlobe className="icon" />
              <a
                href="https://www.hillsintledu.com.np"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.hillsintledu.com.np
              </a>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="footer-section company-section">
            <h4>Hills International Education Pvt. Ltd.</h4>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>Edvisors St, Dillibazar-30, Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section social-section">
            <h4>Get Connected with Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/share/16QXibpdP9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} className='facebook-icon'/>
              </a>
              <a href="https://wa.me/9779709121292" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={40} className='whatsapp-icon'/>
              </a>
              <a href="https://www.instagram.com/hills.international.education?igsh=cnNxNWtmMGZwcnAx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} className='instagram-icon'/>
              </a>
              <a href="https://www.tiktok.com/@hillsinternationaledu?_t=ZS-8vTiw0QP02p&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={40} className="tiktok-icon" /> {/* TikTok icon */}
              </a>
            </div>
          </div>

        </div>
      </footer>

      <div className="footer-bottom">
        <a
          href="https://www.hillsintledu.com.np"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2025 Hills International Education — www.hillsintledu.com.np
        </a>
      </div>
    </>
  );
};

export default Footer;
