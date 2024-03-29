import React from "react";
import { POST } from "../Types";
import Excerpt from "./Excerpt";
import BlogPreviewMetaData from "./BlogPreviewMetaData";
import { Link } from "gatsby";
import { Block } from "@contentful/rich-text-types";

interface Props {
  data: POST;
}

const BlogPreview: React.FC<Props> = ({ data }: Props) => {
  const { title, date, content, slug } = data;
  let excerpt = JSON.parse(content.raw).content.find(
    (obj: Block) => obj.nodeType === "paragraph"
  ).content[0].value;
  return (
    <div className="flex flex-col">
      <img
        src={`https://${data.image.file.url}`}
        width="100%"
        height="200px"
        alt={`${data.title} Main Image`}
      />
      <h5 className={"text-xl mt-3 mb-3"}>{title}</h5>
      <BlogPreviewMetaData date={date} content={content.raw} />
      <Excerpt excerpt={excerpt} />
      <Link
        to={`/blog/${slug}`}
        className={
          "mt-3 text-sm text-left text-primary hover:text-primary-800 transition ease-in-out"
        }
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogPreview;
