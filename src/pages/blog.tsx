import React from "react";
import MainContainer from "../components/MainContainer";
import HeaderText from "../components/HeaderText";
import { graphql } from "gatsby";
import { POST } from "../Types";
import BlogPreviewMetaData from "../components/BlogPreviewMetaData";
import Excerpt from "../components/Excerpt";
import Button from "../components/Button";

const Blog: React.FC = ({ data }: any) => {
  const posts: POST[] = data.allContentfulPost.nodes;
  return (
    <MainContainer
      title={"Cris Noel | Blog"}
      href={`${process.env.DOMAIN}/blog`}
    >
      <div className="mt-16"></div>
      <HeaderText>Blog</HeaderText>
      <div className="grid mx-auto mb-16 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl px-2 sm:px-6 lg:px-8">
        {posts.map((post) => {
          const { title, date, image, content, slug } = post;
          const excerpt = JSON.parse(post.content.raw).content.find(
            (obj: any) => obj.nodeType === "paragraph"
          ).content[0].value;
          return (
            <div className={"flex flex-col"} key={post.id}>
              <img
                src={`https://${image.file.url}`}
                width="100%"
                height="200px"
              />
              <h5 className={"text-xl mt-3 mb-3"}>{title}</h5>
              <BlogPreviewMetaData date={date} content={content.raw} />
              <Excerpt excerpt={excerpt} />
              <Button href={`/blog/${slug}`} styles={"mt-auto"}>
                Read More
              </Button>
              <hr className={"mt-3 mb-3 md:hidden"} />
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
};

export default Blog;

export const query = graphql`
  query allBlogData {
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        id
        contentful_id
        date(formatString: "MMMM Do, YYYY")
        title
        slug
        image {
          file {
            url
          }
        }
        content {
          raw
        }
      }
    }
  }
`;
