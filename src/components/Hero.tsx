import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "gatsby";

interface Props {
  is404?: boolean;
}

const Hero: React.FC<Props> = ({ is404 = false }) => {
  return (
    <div
      className={`relative bg-[url('../images/hero.jpg')] bg-cover bg-center bg-no-repeat h-screen bg-blend-overlay bg-black/[0.4]`}
    >
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
        <Link
          to="#about"
          className={`absolute top-[90%] left-[50%] -translate-x-[50%] -translate-y-[90%]`}
        >
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
