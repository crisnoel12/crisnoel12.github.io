import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string
  href: string
}
export default function PageHelmet({ title, href } : Props) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={href} />
    </Helmet>
  )
}
