import React from "react";

interface Props {
  children: string;
  variant?: string;
  align?: string;
}

export default function HeaderText(props: Props) {
  const { variant, align } = props;
  const renderVariant = () => {
    switch (variant) {
      case "h2":
        return (
          <h2 className="permanentMarker mt-20 text-4xl capitalize">
            {props.children}
          </h2>
        );
      case "h3":
        return (
          <h3 className="permanentMarker mt-20 text-3xl capitalize">
            {props.children}
          </h3>
        );
      case "h4":
        return (
          <h4 className="permanentMarker mt-20 text-2xl capitalize">
            {props.children}
          </h4>
        );
      case "h5":
        return (
          <h5 className="permanentMarker mt-20 text-xl capitalize">
            {props.children}
          </h5>
        );
      case "h6":
        return (
          <h6 className="permanentMarker mt-20 text-xl capitalize">
            {props.children}
          </h6>
        );
      default:
        return (
          <h1 className="permanentMarker mt-20 text-5xl capitalize">
            {props.children}
          </h1>
        );
    }
  };
  const textAlign = () => {
    switch (align) {
      case "left":
        return ["text-left", "mr-auto"];
      case "right":
        return ["text-right", "ml-auto"];
      default:
        return ["text-center", "mx-auto"];
    }
  };
  return (
    <div className={`${textAlign()[0]}`}>
      {renderVariant()}
      <span
        className={`block h-[5px] w-[55px] mt-0 ${
          textAlign()[1]
        } lg:mt-3 mb-20 bg-red-700`}
      ></span>
    </div>
  );
}
