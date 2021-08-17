import React from 'react';
import Helmet from 'react-helmet';

export default function PageHelmet({ title, href }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={href} />
    </Helmet>
  )
}
