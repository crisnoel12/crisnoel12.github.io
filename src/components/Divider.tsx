import React from "react";

interface IProps {
  mt?: number;
  mb?: number;
}
export default function Divider(props: IProps) {
  const { mt, mb } = props;
  const marginTop = mt ? `mt-${mt}` : "mt-4";
  const marginBottom = mb ? `mb-${mb}` : null;
  const classList = `${marginTop} ${marginBottom} dark:border-neutral-800`;
  return <hr className={classList} />;
}
