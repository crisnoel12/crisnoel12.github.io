import React from "react";

import GatsbyLogo from "../images/Gatsby_Logo.png";
import TailwindLogo from "../images/tailwindcss-logotype.svg";
import Divider from "./Divider";

const Footer: React.FC = () => {
  const d = new Date();
  const year = d.getFullYear();

  const Copy = () => <span>&copy;</span>;
  const GatsbyLink = () => (
    <a href={"https://www.gatsbyjs.com/"}>
      <span>
        <img
          src={GatsbyLogo}
          alt={"Gatsby.js Logo"}
          className={"inline-block h-6 w-24"}
        />
      </span>
    </a>
  );

  const TailwindLink = () => (
    <a href={"https://tailwindcss.com/"}>
      <span>
        <img
          src={TailwindLogo}
          alt={"Tailwindcss.com Logo"}
          className={"inline-block h-12 w-32"}
        />
      </span>
    </a>
  );

  return (
    <>
      <Divider />
      <div className="text-center p-4 w-full">
        <p className={"font-bold"}>
          {year} <Copy /> CRIS N. CANCINO | Built with: <TailwindLink /> &{" "}
          <GatsbyLink />.
        </p>
      </div>
    </>
  );
};

export default Footer;
