import React, { useState, useEffect, useRef } from 'react';
import './ContactUs.css';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactUsDeskMp4 from './Pictures/ContactUsDeskMp4.mp4';
import emailjs from '@emailjs/browser';

// Dummy DatePick component (You can replace this with your actual Date Picker component)
// const BannerMobile = styled(Box)({
//   position: 'relative',
//   height: '200px',
//   backgroundImage: `url(${AboutusDeskImg})`, // Replace with your image path
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: 'white',
//   opacity: 0.7,
//   width: '100%',
// });

// const BannerDesktop = styled(Box)({
//   position: 'relative',
//   height: '150px',
//   backgroundImage: `url(${AboutusDeskImg})`, // Replace with your image path
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: 'white',
//   opacity: 0.7,
//   width: '100%',
// });

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [appointmentmessage, setAppointmentMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8pma0wa', 'template_j20s862', form.current, {
        publicKey: 'RWDUQBry9AhE0JEzx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setAppointmentMessage('The appointment is confirmed! You will get a call back soon!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data to be sent
    const formData = {
      firstName,
      lastName,
      email,
      mobileNumber,
      message,
    };

    // For demonstration, just log the data
    console.log('Form Data: ', formData);
    setAppointmentMessage(
      'The appointment is confirmed! You will get a call back soon!'
    );
  };

  const checkDeviceType = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); // Mobile
    } else {
      setIsMobile(false); // Desktop
    }
  };

  const isSubmitDisabled = !firstName || !mobileNumber;

  useEffect(() => {
    checkDeviceType(); // Check initial screen size
    window.addEventListener('resize', checkDeviceType); // Add resize event listener

    return () => {
      window.removeEventListener('resize', checkDeviceType); // Clean up event listener
    };
  }, []);

  return (
        <div>
            <video
                className="video-header"
                src={ContactUsDeskMp4} // Path to your video file
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div className="contact-us-container">
                <Grid container spacing={3}>
                    {/* Left Section: Contact Details */}
                    <Grid item xs={12} md={6}>
                        <div className="contact-us-details">
                            {/* Visit Us Section */}
                            <div className="contact-us-section">
                                <h2>Visit Us</h2>
                                <p>Edvisors St, Dillibazar-30, Kathmandu, Nepal</p>
                            </div>

                            {/* Call Us Section */}
                            <div className="contact-us-section">
                                <h2>Call</h2>
                                <p>
                                    <a href="tel:+014547298">+014547298</a><br></br>
                                    <a href="tel:+97797091212928">+9779709121292</a>
                                </p>
                            </div>

                            {/* Email Us Section */}
                            <div className="contact-us-section">
                                <h2>Email</h2>
                                <p>
                                    <a href="mailto:hillsinternationaleducation@gmail.com">
                                        hillsinternationaleducation@gmail.com
                                    </a>
                                </p>
                            </div>

                            {/* Clinic Hours Section */}
                            <div className="contact-us-section">
                                <h2>Consultation Hours</h2>
                                <p>Sun - Fri: 8:00 AM - 5:00 PM</p>
                                <p>Sun: off day</p>
                            </div>
                        </div>
                    </Grid>

                    {/* Right Section: Appointment Form */}
                    <Grid item xs={12} md={6}>
                        <div id="specific-section" className="appointment-form-card">
                            <h2 className="appointment-form-header">Contact Us</h2>
                            <form
                                className="form-container"
                                ref={form}
                                onSubmit={sendEmail}
                            >
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="First Name (Required)"
                                        name="from_fname"
                                        style={{ width: '100%' }}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Last Name"
                                        name="from_lname"
                                        style={{ width: '100%' }}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <input
                                    className="form-control form-control-lg"
                                    type="email"
                                    placeholder="Email"
                                    name="from_email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="form-control form-control-lg"
                                    type="number"
                                    placeholder="Mobile Number (Required)"
                                    name="from_mobile"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="form-control form-control-lg"
                                    placeholder="Type your message here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-warning submit-btn"
                                    value="Send"
                                    disabled={isSubmitDisabled}
                                >
                                    Submit
                                </button>
                            </form>
                            {appointmentmessage && (
                                <p style={{ color: 'green', content:'centre' }}>{appointmentmessage}</p>
                            )}
                        </div>
                    </Grid>
                </Grid>

                {/* Google Map Section */}
                <div className="google-map" style={{ marginTop: 50 }}>
                    <h2>Find Us On Google Maps</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.369121188039!2d85.3233013!3d27.705887299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192cd72c67cf%3A0x4f9758f70c3cdf6f!2sHills%20International%20Education%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1743702056874!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
