// import React, { useState } from 'react';

// const defaultPatientFormData = {
//   name: '',
//     dob: '',
//     age: '',
//     sex: '',
//     email: '',
//     number: '',
//     address: '',
//     emergencyContact: {
//       name: '',
//       relationship: '',
//       phone: ''
//     },
//     medications: [],
//     allergies: [],
//     medicalHistory: ''
// };

// const PatientForm = () => {
//   const [formData, setFormData] = useState(defaultPatientFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // const handleEmergencyContactChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     emergencyContact: {
//   //       ...formData.emergencyContact,
//   //       [name]: value
//   //     }
//   //   });
//   // };

//   const handleMedicationsChange = (e, index) => {
//     const newMedications = [...formData.medications];
//     newMedications[index] = e.target.value;
//     setFormData({
//       ...formData,
//       medications: newMedications
//     });
//   };

//   const handleAllergiesChange = (e, index) => {
//     const newAllergies = [...formData.allergies];
//     newAllergies[index] = e.target.value;
//     setFormData({
//       ...formData,
//       allergies: newAllergies
//     });
//   };

//   const handleSubmit = async (e) => {
//     debugger;
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await fetch("http://localhost:7000/api/form/patientform", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setFormData(defaultPatientFormData);
//         const data = await response.json();
//         alert("Message sent successfully");
//       }
//     } catch (error) {
//       alert("Message not sent");
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Date of Birth:
//         <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Age:
//         <input type="number" name="age" value={formData.age} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Sex:
//         <select name="sex" value={formData.sex} onChange={handleChange}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input type="tel" name="number" value={formData.number} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Address:
//         <input type="text" name="address" value={formData.address} onChange={handleChange} />
//       </label>
//       <br />
//       {/* <h3>Emergency Contact Information</h3>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.emergencyContact.name} onChange={handleEmergencyContactChange} />
//       </label>
//       <br />
//       <label>
//         Relationship:
//         <input type="text" name="relationship" value={formData.emergencyContact.relationship} onChange={handleEmergencyContactChange} />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input type="tel" name="phone" value={formData.emergencyContact.phone} onChange={handleEmergencyContactChange} />
//       </label>
//       <br /> */}
//       <h3>Medication List</h3>
//       {formData.medications.map((medication, index) => (
//         <div key={index}>
//           <input type="text" value={medication} onChange={(e) => handleMedicationsChange(e, index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => setFormData({...formData, medications: [...formData.medications, '']})}>Add Medication</button>
//       <br />
//       <h3>Allergies</h3>
//       {formData.allergies.map((allergy, index) => (
//         <div key={index}>
//           <input type="text" value={allergy} onChange={(e) => handleAllergiesChange(e, index)} />
//         </div>
//       ))}
//       <button type="button" onClick={() => setFormData({...formData, allergies: [...formData.allergies, '']})}>Add Allergy</button>
//       <br />
//       <label>
//         Medical History:
//         <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PatientForm;


import React, { useState } from 'react';

import "./patientForm.css"

const defaultPatientFormData={
  name: '',
  dob: '',
  age: '',
  sex: '',
  email: '',
  number: '',
  address: '',
  emergencyContact: {
    name: '',
    relationship: '',
    phone: ''
  },
  medications: [],
  allergies: [],
  medicalHistory: ''
};

const PatientForm = () => {
  const [formData, setFormData] = useState(defaultPatientFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      emergencyContact: {
        ...formData.emergencyContact,
        [name]: value
      }
    });
  };

  const handleMedicationsChange = (e, index) => {
    const newMedications = [...formData.medications];
    newMedications[index] = e.target.value;
    setFormData({
      ...formData,
      medications: newMedications
    });
  };

  const handleAllergiesChange = (e, index) => {
    const newAllergies = [...formData.allergies];
    newAllergies[index] = e.target.value;
    setFormData({
      ...formData,
      allergies: newAllergies
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/form/patientform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData(defaultPatientFormData);
        const data = await response.json();
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Message not sent");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input required type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input required type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input required type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Sex:
        <select required name="sex" value={formData.sex} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Email:
        <input required type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input required type="tel" name="number" value={formData.number} onChange={handleChange} />
      </label>
      <br />
      <label>
        Address:
        <input required type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <br />
      <h3>Emergency Contact Information</h3>
      <label>
        Name:
        <input required type="text" name="name" value={formData.emergencyContact.name} onChange={handleEmergencyContactChange} />
      </label>
      <br />
      <label>
        Relationship:
        <input required type="text" name="relationship" value={formData.emergencyContact.relationship} onChange={handleEmergencyContactChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input required type="tel" name="phone" value={formData.emergencyContact.phone} onChange={handleEmergencyContactChange} />
      </label>
      <br />
      <h3>Medication List</h3>
      {formData.medications.map((medication, index) => (
        <div key={index}>
          <input required type="text" value={medication} onChange={(e) => handleMedicationsChange(e, index)} />
        </div>
      ))}
      <button type="button" onClick={() => setFormData({...formData, medications: [...formData.medications, '']})}>Add Medication</button>
      <br />
      <h3>Allergies</h3>
      {formData.allergies.map((allergy, index) => (
        <div key={index}>
          <input required type="text" value={allergy} onChange={(e) => handleAllergiesChange(e, index)} />
        </div>
      ))}
      <button type="button" onClick={() => setFormData({...formData, allergies: [...formData.allergies, '']})}>Add Allergy</button>
      <br />
      <label>
        Medical History:
        <textarea required name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;

