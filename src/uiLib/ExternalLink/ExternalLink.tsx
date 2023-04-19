import React, { PropsWithChildren } from "react";

import "./ExternalLink.css";

interface ExternalLinkProps {
  href: string;
}

export function ExternalLink(
  props: PropsWithChildren<ExternalLinkProps>
): JSX.Element {
  const { href, children } = props;

  return (
    <a className="ExternalLink" href={href}>
      {children}
    </a>
  );
}
