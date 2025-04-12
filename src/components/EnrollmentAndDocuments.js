import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './EnrollmentAndDocuments.css';
import EnrollmentDeskMp4 from './Pictures/EnrollmentDeskImg.mp4';

const Card = ({ title, content, isDocumentCard, onChange, index }) => {
  return (
    <div className={`card ${isDocumentCard ? 'document-card' : 'enrollment-card'}`}>
      {title && <h3>{title}</h3>}
      {isDocumentCard && (
        <div className="checkbox-container">
          <input 
            type="checkbox" 
            id={`document-${index}`} 
            onChange={(e) => onChange(e, index)} 
          />
        </div>
      )}
      <p>{content}</p>
    </div>
  );
};

const EnrollmentPage = () => {
  const location = useLocation();

  const [checkedDocuments, setCheckedDocuments] = useState(
    new Array(10).fill(false)
  );

  const handleCheckboxChange = (event, index) => {
    const newCheckedDocuments = [...checkedDocuments];
    newCheckedDocuments[index] = event.target.checked;
    setCheckedDocuments(newCheckedDocuments);
  };

  const admissionProcessContent = [
    "Students must first complete the N5 level of Japanese language in Nepal and pass the NAT exam before applying for further studies in Japan.",
    "After fulfilling this requirement, they can enroll in a one- to two-year Japanese language course in Japan, based on their proficiency level.",
    "This structured pathway ensures students acquire the necessary language skills before progressing to higher education or employment."
  ];

  const requiredDocumentsContent = [
    "Copy of a valid passport.",
    "Academic transcripts and certificates from all educational levels.",
    "Proof of completion of N5 level Japanese language training and NAT exam results or Certificate for minimum 6 months (160 hours) of Japanese Language training.",
    "Bank statement showing financial stability with a minimum six-month transaction history.",
    "Income Certificates, Tax clearance and financial proof of the sponsor.",
    "Sponsor relationship certificate (e.g., proof of relation to parent/guardian supporting the student).",
    "Police clearance certificate proving no criminal record.",
    "Employment verification letter (if applicable).",
    "Medical fitness certificate from a registered doctor.",
    "18 passport-size photographs of Candidate."
  ];

  // 🔥 Scroll to section if triggered via NavigationBar
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Slight delay to ensure component is mounted
      }
    }
  }, [location]);

  return (
    <>
      <video
        className="video-header"
        src={EnrollmentDeskMp4}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      
      <div className="enrollment-container">
        {/* Enrollment Process Section */}
        <div id="admission-sec" className="enrollment-section">
          <h2>Admission Process</h2>
          {admissionProcessContent.map((content, index) => (
            <Card key={index} title={`Step ${index + 1}`} content={content} />
          ))}
        </div>

        {/* Required Documents Section */}
        <div id="document-sec" className="document-section">
          <h2>Required Documents</h2>
          <div className="documents-grid">
            {requiredDocumentsContent.map((doc, index) => (
              <Card
                key={index}
                content={doc}
                isDocumentCard={true}
                onChange={handleCheckboxChange}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentPage;
