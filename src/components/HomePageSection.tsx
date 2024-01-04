import * as React from "react";
import HeaderText from "./HeaderText";
import Divider from "./Divider";

interface Props {
  title: string;
  noDivider?: boolean;
  children: any;
}
const HomePageSection: React.FC<Props> = (props) => {
  const { title, noDivider } = props;
  return (
    <>
      <section
        id={title}
        className={`mx-auto max-w-xs md:max-w-3xl lg:max-w-7xl lg:min-w-7xl px-2 sm:px-12${
          noDivider ? " pb-20" : ""
        }`}
      >
        <HeaderText variant={"h2"}>{title}</HeaderText>
        {props.children}
      </section>
      {!noDivider && <Divider mt={20} />}
    </>
  );
};

export default HomePageSection;
