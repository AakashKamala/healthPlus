// const Med = ({ medData }) => {
//     return (
//       <div>
//         <h1>Doctors</h1>
//         <ul>
//           {medData.map((doctor) => (
//             <li key={doctor._id}>
//               <img src={doctor.image} width="300px" height="300px" />
//               <strong>Name:</strong> {doctor.name}<br />
//               <strong>Specialization:</strong> {doctor.specialization}<br />
//               <strong>Degree:</strong> {doctor.degree}<br />
//               <strong>Mobile Number:</strong> {doctor.mobileNumber}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default Med;



import React, { useState } from 'react';

import "./Med.css"

const Med = ({ medData }) => {
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleBookAppointment = () => {
    setAppointmentBooked(true);
    alert('Your appointment has been booked!');
  };

  return (
    <div className="med-component">
      <h1 className="med-title">Doctors</h1>
      <ul className="med-list">
        {medData.map((doctor, index) => (
          <li key={index} className="med-item">
            <img src={doctor.image} alt={doctor.name} className="med-image" />
            <strong className="med-name">Name:</strong> {doctor.name}<br />
            <strong className="med-specialization">Specialization:</strong> {doctor.specialization}<br />
            <strong className="med-degree">Degree:</strong> {doctor.degree}<br />
            <strong className="med-mobile">Mobile Number:</strong> {doctor.mobileNumber}<br />
            <button onClick={handleBookAppointment} className="med-appointment-button">Book Appointment</button>
          </li>
        ))}
      </ul>
      {appointmentBooked && <p className="med-appointment-confirmation">Your appointment has been booked!</p>}
    </div>
  );
};

export default Med;

  