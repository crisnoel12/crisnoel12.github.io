import React from "react";
import { POST } from "../../Types";
import MainContainer from "../../components/MainContainer";
import HeaderText from "../../components/HeaderText";
import RichTextDocument from "../../components/RichTextDocument";
import { graphql } from "gatsby";

export default function Post({ data }: any) {
  const { id, slug, title, date, image, content } = data.contentfulPost as POST;
  return (
    <MainContainer
      title={`Cris Noel | ${title}`}
      href={`${process.env.DOMAIN}/blog/${slug}`}
    >
      <div className="mt-16"></div>
      <div className="grid mx-auto md:max-w-3xl lg:max-w-7xl lg:min-w-7xl px-6 lg:px-8">
        <HeaderText align={"left"}>{title}</HeaderText>
        <p className={"italic"}>{date}</p>
        <img className={"w-full mt-3 mb-5"} src={`https://${image.file.url}`} />
        <RichTextDocument
          richTextDocument={JSON.parse(content.raw)}
          references={content.references}
        />
      </div>
    </MainContainer>
  );
}

export const postQuery = graphql`
  query ($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      slug
      title
      date(formatString: "MMMM Do, YYYY")
      image {
        file {
          url
        }
      }
      content {
        raw
        references {
          contentful_id
          id
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;
