import React from 'react';

export const BackendErrorMessages = ({ backendErrors }) => {
  const errorMessages = Object.keys(backendErrors).map((name) => {
    const message = backendErrors[name].join(' ');
    return `${name} ${message}`;
  });

  return (
    <ul className="error-messages">
      {errorMessages.map((errorMessage) => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  );
};
