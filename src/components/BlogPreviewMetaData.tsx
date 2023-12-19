import React from "react";
import { FaBookmark, FaClock } from "react-icons/fa6";
import { estimatedReadTime } from "../Utils";

interface Props {
  date: any;
  content: any;
}

const BlogPreviewMetaData: React.FC<Props> = ({ date, content }) => {
  return (
    <div className="flex">
      <div className={"flex items-center mr-3"}>
        <FaBookmark color="orange" className={"h-4 w-4 mr-1"} />
        <p className={"text-xs"}>{date}</p>
      </div>
      <div className={"flex items-center"}>
        <FaClock color="yellowgreen" className={"h-4 w-4 mr-1"} />
        <p className={"text-xs"}>{estimatedReadTime(content).text}</p>
      </div>
    </div>
  );
};

export default BlogPreviewMetaData;
