import React, { useState, useEffect } from 'react';
import './ErrorMessage.css'; // Create a CSS file for styling

const ErrorMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`error-message ${isVisible ? 'visible' : 'hidden'}`}>
      {message}
    </div>
  );
};

export default ErrorMessage;
