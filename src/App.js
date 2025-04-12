import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';  // assuming NavigationBar is in another file
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Example Home component
import AboutUs from './components/AboutUs'; // Example About component
import OurServices from './components/OurServices';
import EnrollmentPage from './components/EnrollmentAndDocuments';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router> {/* Wrap your entire app in Router */}
      <NavigationBar /> {/* Navigation bar with NavLink */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Our Service" element={<OurServices/>} />
        <Route path="/Admission Process" element={<EnrollmentPage/>}/>
        <Route path="/Required Documents" element={<EnrollmentPage/>}/>
        <Route path='/Contact Us' element={<ContactUs></ContactUs>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
