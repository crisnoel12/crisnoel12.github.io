import React from "react";
import HomePageSection from "../HomePageSection";
import Button from "../Button";
import ProfilePicture from "../../images/profile_picture.jpg";
import { FaCodepen, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IconButton from "../IconButton";
import Divider from "../Divider";

const About: React.FC = () => {
  return (
    <HomePageSection title={"about"}>
      <div className="flex flex-col lg:flex-row lg:items-start">
        <img
          src={ProfilePicture}
          className={"rounded h-36 w-36 mx-auto mb-5 lg:mr-8 lg:h-80 lg:w-80"}
        />
        <div>
          <p className={"md:text-xl mb-5"}>
            What's up, I'm Cris and I'm a Web Developer currently based in the
            Philippines. I have a passion for building websites and learning
            more about new frameworks and languages that I haven't mastered yet.
            I'm well versed in both front-end and back-end development. I'm
            currently accepting freelance work, if you're in need of a website,
            I'm your guy, feel free to contact me.
          </p>
          <Button href={process.env.RESUME} target={"_blank"}>
            View Resume
          </Button>
          <Divider mb={2} />
          <div className="flex justify-evenly md:inline-flex">
            <IconButton
              href="https://www.linkedin.com/in/crisncancino/"
              target="_blank"
              icon={<FaLinkedin className={"h-5 w-5"} />}
            />
            <IconButton
              href="https://github.com/crisnoel12"
              target="_blank"
              icon={<FaGithub className={"h-5 w-5"} />}
            />
            <IconButton
              href="https://codepen.io/crisnoel12"
              target="_blank"
              icon={<FaCodepen className={"h-5 w-5"} />}
            />
            <IconButton
              href="mailto:crisncancino@gmail.com"
              target="_blank"
              icon={<MdEmail className={"h-5 w-5"} />}
            />
          </div>
        </div>
      </div>
    </HomePageSection>
  );
};

export default About;
