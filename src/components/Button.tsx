import React from "react";
import { Link } from "gatsby";

interface Props {
  href?: string;
  target?: string;
  styles?: string;
  children: string;
}

export default function Button(props: Props) {
  const { href, target, styles } = props;
  const buttonStyles = `block bg-red-700 hover:bg-red-800 transition ease-in-out text-white rounded p-2 text-center ${
    styles && styles
  }`;

  if (href) {
    if (target && target === "_blank") {
      return (
        <a href={href} target={target} className={buttonStyles}>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link to={href} target={target} className={buttonStyles}>
          {props.children}
        </Link>
      );
    }
  }
  return <button className={buttonStyles}>{props.children}</button>;
}
