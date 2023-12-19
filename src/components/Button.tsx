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
  const buttonStyles = `block bg-red-700 text-white rounded p-2 text-center ${
    styles && styles
  }`;
  return href ? (
    <Link to={href} target={target} className={buttonStyles}>
      {props.children}
    </Link>
  ) : (
    <button className={buttonStyles}>{props.children}</button>
  );
}
