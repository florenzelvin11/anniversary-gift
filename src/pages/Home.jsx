import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';  // Import the CSS file for animations

const Home = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedMessage, setTypedMessage] = useState('');
  const [charIndex, setCharIndex] = useState(0); // Track character index
  const [isTyping, setIsTyping] = useState(false); // Track if typing is happening
  const messages = ['Hi Mahal Ko', 'Happy Anniversary', 'I love you', '<3'];
  const navigate = useNavigate();

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setTypedMessage((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex(prev => prev + 1); // Move to the next character
      }, 100); // Typing speed (300ms)
      return () => clearTimeout(timeout); // Clean up timeout on unmount
    } else {
      // Finish typing current message and pause before moving to the next
      setIsTyping(false);
      const pauseBeforeNextMessage = setTimeout(() => {
        setTypedMessage(''); // Reset typed message for the next one
        setCharIndex(0); // Reset char index for the new message
        setMessageIndex((prevIndex) => {
          if (prevIndex + 1 === messages.length) {
            // If the last message has been typed, navigate to the next page
            setTimeout(() => navigate('/open-me'), 500);
            return prevIndex;
          }
          return prevIndex + 1; // Move to the next message
        });
      }, 1000); // Wait 1 second after finishing the message

      return () => clearTimeout(pauseBeforeNextMessage);
    }
  }, [charIndex, messageIndex, navigate, messages]);

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#F7E7CE' }}>
      <div className="text-black text-4xl md:text-8xl lg:text-9xl typing-animation" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {typedMessage}
        {isTyping && <span className="cursor">|</span>} {/* Blinking cursor */}
      </div>
    </div>
  );
};

export default Home;
