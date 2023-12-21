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
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -90%)",
};

interface Props {
  is404?: boolean;
}

const Hero: React.FC<Props> = ({ is404 = false }) => {
  return (
    <div style={heroStyles}>
      <div
        id="hero-mid"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full ${
          is404 && `p-8 bg-black/[0.6]`
        }`}
      >
        <h1
          id="hero-headline"
          className="permanentMarker font-semibold text-4xl w-full md:text-6xl text-white mb-3 tracking-wider"
        >
          {is404 ? "Page Not Found" : "CRIS NOEL"}
        </h1>
        {is404 ? (
          <Link to={`${process.env.DOMAIN}`} className={"text-red-700"}>
            Go Home
          </Link>
        ) : (
          <p
            id="hero-subheading"
            className="text-white text-xs md:text-base mt-5 font-medium tracking-wide"
          >
            WEB DEVELOPER - CAVITE, PHILIPPINES
          </p>
        )}
      </div>
      {!is404 && (
        <Link to="#about" style={heroArrow}>
          <FaChevronDown
            className={
              "text-white bg-black/[0.8] w-8 h-8 my-0 mx-auto mt-3 rounded-full p-2"
            }
          />
        </Link>
      )}
    </div>
  );
};

export default Hero;
