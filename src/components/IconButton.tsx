import React from "react";
import { Link } from "gatsby";

interface Props {
  href: string;
  target: string;
  icon: any;
}

export default function IconButton(props: Props) {
  const { href, target, icon } = props;
  const iconButtonStyles = `p-2 rounded-full hover:bg-gray-200`;
  if (target === "_blank") {
    return (
      <a href={href} target={target} className={iconButtonStyles}>
        {icon}
      </a>
    );
  }
  return (
    <Link to={href} className={iconButtonStyles}>
      {icon}
    </Link>
  );
}
