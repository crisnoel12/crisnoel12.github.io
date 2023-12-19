import React from "react";

interface Props {
  excerpt: string;
}

const Excerpt: React.FC<Props> = ({ excerpt }) => {
  return (
    <p className="mt-3 mb-5 text-left">
      {excerpt.length > 230 ? `${excerpt.slice(0, 230)}...` : excerpt}
    </p>
  );
};

export default Excerpt;
