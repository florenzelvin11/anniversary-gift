import React from 'react';
import '../styles/Letter.css'; // Import the notebook-style CSS

const LetterPage = ({ content, buttonOption, extraOptions }) => {
  return (
    <div className="notebook-container">
      <div className="notebook-paper">
        <p className="letter-content">
          {content}
        </p>

        {/* Extra Stuff */}
        {extraOptions}

        {/* Buttons for navigation */}
        {buttonOption}
      </div>
    </div>
  );
};

export default LetterPage;
