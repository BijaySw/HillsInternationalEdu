// src/Services.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AppnadmiGuide from './Pictures/AppnAdmiGuid.png';
import CollegeUnivSel from './Pictures/CollegeUnivSel.png';
import Documentation from './Pictures/Documentation.png';
import EducationCounseling from './Pictures/EducationCounseling.png';
import JapaneseLangClassf from './Pictures/JapaneseLangClass.png';
import PostarrivalSupport from './Pictures/PostarrivalSupport.PNG';
import PredepartureBriefings from './Pictures/PredepartureBriefings.PNG';
import TravelNAccommodation from './Pictures/TravelNAccommodation.png';
import VisaProcessGuide from './Pictures/VisaProcessGuide.png';
import { useInView } from 'react-intersection-observer';
import OurServiceImg from './Pictures/OurServices.jpeg';
import OurServicesMobile from './Pictures/OurServicesMobile.jpeg';
import OurServicesMp4 from './Pictures/OurServices.mp4';
import Footer from './Footer';



const servicesData = [
    {
        title: "Educational Counseling",
        description: (
            <>
            We offer personalized guidance to students, helping them understand various study options in Japan.
            Our expert counselors provide insights into academic programs, career prospects, and cultural adaptation,
            ensuring students make informed decisions about their education.  

            </>),
        imgSrc: EducationCounseling, // Replace with your image
    },
    {
      title: "College/University Selection ",
      description: (
          <>
            Choosing the right institution is crucial for academic success. 
            We assist students in selecting suitable colleges or universities 
            in Japan based on their academic background, field of interest, career goals, and budget.

          </>),
        imgSrc: CollegeUnivSel, // Replace with your image
    },
    {
      title: "Application & Admission Guidance",
      description: (
          <>
            We provide step-by-step assistance throughout the admission process,
              including application form submission, document verification, and 
              communication with educational institutions to secure student placements.
          </>),
        imgSrc: AppnadmiGuide, // Replace with your image
    },
    {
      title: "Japanese Language Preparation",
      description: (
          <>
        We offer structured Japanese language courses—both in-person and online—for all levels, from beginner to advanced, 
        with a focus on reading, writing, listening, and speaking. We prepare students for exams such as the JLPT, NAT-Test, 
        JCERT, and JLCT while also emphasizing real-life communication and cultural understanding. Students have the opportunity 
        to practice with native Japanese speakers 2–3 times a week, enhancing their fluency, pronunciation, and confidence. Our 
        goal is to build a strong language foundation for a smooth academic and social transition to life in Japan.
        </>),
        imgSrc: JapaneseLangClassf, // Replace with your image
    },
    {
      title: "Documentation and Interview Preparation",
      description: (
          <>
         We provide step-by-step support to help students prepare accurate documents for admissions and visa applications, reducing delays and errors. 
         Our Interview Preparation Program includes mock interviews, training on common questions, and focused language support to improve Japanese communication skills.
         We also help build confidence, polish body language, and enhance clarity to ensure a successful interview experience.
         </>),
        imgSrc: Documentation, // Replace with your image
    },
    {
        title: "VISA Documentation Guidance",
        description: (
            <>
            The visa application process can be complex, requiring meticulous documentation.
            Our team assists students in preparing and submitting all necessary documents, 
            including financial statements, sponsorship details, and application forms, 
            to ensure a smooth visa approval process.

            </>),
        imgSrc: VisaProcessGuide, // Replace with your image
    },
    
    {
        title: "Travel and Accommodation Assistance",
        description: (
            <>
             We help students arrange their travel to Japan, including flight bookings, 
             airport pickup services, and guidance on necessary travel documents. 
             Our team ensures students have a smooth and hassle-free journey.
             Finding suitable housing in Japan can be challenging. 
             We assist students in securing safe, affordable, and 
             convenient accommodation, whether it be student dormitories, 
             shared apartments, or homestays.
            </>),
        imgSrc: TravelNAccommodation, // Replace with your image
    },
    {
        title: "Pre-Departure Briefings",
        description: (
            <>
             Adjusting to a new country can be overwhelming. Our pre-departure briefings cover essential 
             topics such as Japanese culture, daily life, transportation, legal regulations, and student responsibilities. 
             This ensures that students are well-prepared before they arrive in Japan.
            </>),
        imgSrc: PredepartureBriefings, // Replace with your image
    },
    {
        title: "Post-Arrival Support",
        description: (
            <>
             Adjusting to life in Japan can be challenging for international students, so we ensure support 
             from the moment students arrive. Our team arranges transportation from the airport to accommodation, 
             assists with resident registration and opening a bank account, and helps navigate Japan’s public 
             transportation system. We also provide guidance for finding legal part-time jobs and offer emergency 
             support for health, legal, or other urgent matters—ensuring students feel secure and confident in their 
             new environment.
            </>),
        imgSrc: PostarrivalSupport, // Replace with your image
    },

];

const OurServices = () => {

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
           <video
          className="video-header"
          src={OurServicesMp4} // Path to your video file
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
           
          <div className="container mt-5">
              {servicesData.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
              ))}
          </div>
        </div>
    );
};

const ServiceCard = ({ service, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const animation = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(-50px)',
        opacity: inView ? 1 : 0,
        config: { tension: 280, friction: 60 },
    });

    const isEven = index % 2 === 0;
    const backgroundColor = isEven ? '#f8f9fa' : 'white'; // Grey for even, white for odd

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
        <animated.div ref={ref} style={animation} className="mb-4">
        <div
          className="card"
          style={{
            borderRadius: '15px',
            backgroundColor,
            border: 'none',
            boxShadow: 'none',
            height: 'auto', // Remove fixed height
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="row no-gutters" style={{ height: 'auto' }}>
            {!isMobile ? (
              <>
                {isEven ? (
                  <>
                    <div className="col-md-6" style={{ height: 'auto' }}>
                      <img
                        src={service.imgSrc}
                        alt={service.title}
                        className="img-fluid rounded-left"
                        style={{
                          borderRadius: '15px 0 0 15px',
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center" style={{ height: 'auto' }}>
                      <div className="card-body" style={{ flex: 1 }}>
                        <h3 className="card-title">{service.title}</h3>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6 d-flex align-items-center" style={{ height: 'auto' }}>
                      <div className="card-body" style={{ flex: 1 }}>
                        <h3 className="card-title">{service.title}</h3>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                    <div className="col-md-6" style={{ height: 'auto' }}>
                      <img
                        src={service.imgSrc}
                        alt={service.title}
                        className="img-fluid rounded-right"
                        style={{
                          borderRadius: '0 15px 15px 0',
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {/* Image Section */}
                <div className="col-12" style={{ height: 'auto' }}>
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="img-fluid rounded-left"
                    style={{
                      borderRadius: '15px 15px 0 0',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </div>
  
                {/* Text Section */}
                <div className="col-12 d-flex align-items-center" style={{ height: 'auto' }}>
                  <div className="card-body" style={{ flex: 1 }}>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </animated.div>

    );
};

export default OurServices;




