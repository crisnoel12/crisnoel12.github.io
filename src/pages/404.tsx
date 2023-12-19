import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import MainContainer from "../components/MainContainer";
import Hero from "../components/Hero";

const NotFoundPage: React.FC<PageProps> = (props) => {
  return (
    <MainContainer
      title="Cris Noel | 404"
      href={`${process.env.DOMAIN}/404`}
      is404
    >
      <Hero is404 />
    </MainContainer>
  );
};

export default NotFoundPage;
