import React, { useState } from 'react';
import axios from 'axios';
import "./HealthAI.css"

import { useAuth } from '../store/auth';

const HealthAI = () => {
  const { doctors } = useAuth();

  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:7000/api/form/healthai?question=${encodeURIComponent(question)}`
      );

      setResult(response.data.response);
      // Select a random doctor
      const randomIndex = Math.floor(Math.random() * doctors.length);
      setSelectedDoctor(doctors[randomIndex]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="medical-assistant-container">
      <h1>HealthPlusAI</h1>
      <h2>Your Personalized Medical Assistant</h2>
      <div className="input-section">
        <label htmlFor="questionInput">Ask for medical advice:</label>
        <textarea id="questionInput" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div className="button-section">
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Loading your advice...' : 'Ask'}
        </button>
      </div>
      <div className="result-section">
        <p className='suggest'>Follow what our AI friend says, but cautiously. It still can't replace professional doctors fully.</p>
        <h3 className='res'>{result}</h3>
        {selectedDoctor && (
          <div className='recom'>
            <h3 className='lab'>Recommended Doctor:</h3>
            <p className='dat'>Name: {selectedDoctor.name}</p>
            <p className='dat'>Specialization: {selectedDoctor.specialization}</p>
            <p className='dat'>Contact: {selectedDoctor.mobile}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthAI;
