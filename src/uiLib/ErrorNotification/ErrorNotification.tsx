import React from "react";
import Alert from "react-bootstrap/cjs/Alert";

import { useErrorDescription } from "../../charSheets/root/services/storageAdapter";

interface ErrorNotificationProps {}

export function ErrorNotification(
  props: ErrorNotificationProps,
): JSX.Element | null {
  const { errorDescription, setErrorDescription } = useErrorDescription();

  if (errorDescription === null) {
    return null;
  }

  return (
    <Alert
      className="ErrorNotification tw-w-96 tw-fixed tw-top-8 tw-right-8 tw-shadow-lg tw-shadow-black"
      variant="danger"
      style={{ zIndex: 2000 }}
      onClose={() => setErrorDescription(null)}
      dismissible
    >
      <Alert.Heading>{errorDescription.title}</Alert.Heading>
      <p>{errorDescription.text}</p>
    </Alert>
  );
}
