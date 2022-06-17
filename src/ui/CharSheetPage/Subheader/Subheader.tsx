import React, { PropsWithChildren } from 'react';
import './Subheader.css';

interface SubheaderProps {
}

export function Subheader(props: PropsWithChildren<SubheaderProps>) {
  // const { t } = props;
  const { children } = props;

  return (
    <h2 className="Subheader">
      {children}
    </h2>
  );
}



