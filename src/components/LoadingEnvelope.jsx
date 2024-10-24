import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/LoadingPage.css'; // Import the CSS file for animations

const LoadingEnvelope = () => {

  const [showButton, setShowButton] = useState(false); // State to track button visibility
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle clicking the envelope
  const handleEnvelopeClick = () => {
    setShowButton(true); // Show the button when envelope is clicked
  };

  // Handle button click to navigate to the letter page
  const handleButtonClick = () => {
    navigate('/my-letter-to-you'); // Navigate to the letter page
  };

  return (
    <div className="envelope-container">
      <div className="wrapper" onClick={handleEnvelopeClick} style={{ cursor: 'pointer' }}>
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
          <p>To my love</p>
        </div>
      </div>
      {showButton && ( // Conditionally render the button when the state is true
        <button className="letter-button" onClick={handleButtonClick}>
          Read Me?
        </button>
      )}
    </div>
  );
};

export default LoadingEnvelope;
