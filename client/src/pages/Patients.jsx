import React from "react";
import { useAuth } from "../store/auth";
import "./patients.css"

const Patient = () => {
  const { patients } = useAuth();

  return (
    <div className="portfolio">
      {patients.map((userData, index) => (
        <div className="portfolio-details" key={index}>
          {userData.name && <h1 className="portfolio-title">{userData.name}'s Portfolio</h1>}
          {userData.email && <p className="portfolio-email">Email: {userData.email}</p>}
          {userData.number && <p className="portfolio-mobile">Mobile: {userData.number}</p>}
          {userData.dob && <p className="portfolio-dob">Date of Birth: {userData.dob}</p>}
          {userData.age && <p className="portfolio-age">Age: {userData.age}</p>}
          {userData.sex && <p className="portfolio-sex">Sex: {userData.sex}</p>}
          {userData.address && <p className="portfolio-address">Address: {userData.address}</p>}
          {userData.emergencyContact && (
            <p className="portfolio-emergency-contact">Emergency Contact: {userData.emergencyContact.name} ({userData.emergencyContact.relationship}) - {userData.emergencyContact.phone}</p>
          )}
          {userData.medications && (
            <p className="portfolio-medications">Medications: {userData.medications.join(', ')}</p>
          )}
          {userData.allergies && (
            <p className="portfolio-allergies">Allergies: {userData.allergies.join(', ')}</p>
          )}
          {userData.medicalHistory && (
            <p className="portfolio-medical-history">Medical History: {userData.medicalHistory}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Patient;

