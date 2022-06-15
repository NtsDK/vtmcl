import React, { useState } from 'react';
import './ErrorNotification.css';

import Alert from 'react-bootstrap/Alert';
import { useErrorDescription } from '../../services/storageAdapter';

interface ErrorNotificationProps {
}

export function ErrorNotification(props: ErrorNotificationProps) {
  const { errorDescription, setErrorDescription } = useErrorDescription();

  if (errorDescription === null) {
    return null;
  }

  return (
    <Alert 
      className="ErrorNotification tw-w-96 tw-fixed tw-top-8 tw-right-8 tw-shadow-lg tw-shadow-black" 
      variant="danger" 
      style={{zIndex: 2000}}
      onClose={() => setErrorDescription(null)} 
      dismissible
    >
      <Alert.Heading>{errorDescription.title}</Alert.Heading>
      <p>
        {errorDescription.text}
      </p>
    </Alert>
  );
}
