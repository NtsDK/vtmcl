import React, { PropsWithChildren } from 'react';

import './UnorderedList.css';

interface UnorderedListProps {
}

export function UnorderedList(props: PropsWithChildren<UnorderedListProps>) {
  const { children } = props;

  return (
    <ul className="UnorderedList">
      {children}
    </ul>
  );
}
