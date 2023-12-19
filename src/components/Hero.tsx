import React from "react";
import HeroImg from "../images/hero.jpg";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "gatsby";

const heroStyles = {
  background: `url(${HeroImg}) center no-repeat`,
  position: "relative",
  height: "100vh",
  backgroundSize: "cover",
  backgroundBlendMode: "overlay",
  backgroundColor: "rgba(80, 73, 48, 0.9)",
};

const heroArrow = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -80%)",
};

interface Props {
  is404?: boolean;
}

const Hero: React.FC<Props> = ({ is404 = false }) => {
  return (
    <div style={heroStyles}>
      <div
        id="hero-mid"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${
          is404 && `w-full p-8 bg-black/[0.6]`
        }`}
      >
        <h1
          id="hero-headline"
          className="permanentMarker text-6xl text-white tracking-wider mb-3"
        >
          {is404 ? "Page Not Found" : "Cris Noel"}
        </h1>
        {is404 ? (
          <Link to={`${process.env.DOMAIN}`} className={"text-red-700"}>
            Go Home
          </Link>
        ) : (
          <p id="hero-subheading" className="text-white mt-5">
            Web Developer / Cavite, Philippines
          </p>
        )}
      </div>
      {!is404 && (
        <Link style={heroArrow} href="#about">
          <FaChevronDown
            className={
              "text-white bg-black/[0.8] w-7 h-7 my-0 mx-auto mt-3 rounded-full p-2"
            }
          />
        </Link>
      )}
    </div>
  );
};

export default Hero;
