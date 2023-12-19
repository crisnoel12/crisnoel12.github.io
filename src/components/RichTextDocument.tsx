import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export default function RichTextDocument({ richTextDocument, references }) {
  const Bold = ({ children }) => (
    <span className={"font-medium"}>{children}</span>
  );

  const H1 = ({ children }) => (
    <h1 className={"font-medium text-lg lg:text-5xl mt-8 mb-8"}>{children}</h1>
  );
  const H2 = ({ children }) => (
    <h2
      className={`${"font-medium text-lg lg:text-4xl mt-8 mb-8"} ${"subtitle"}`}
    >
      {children}
    </h2>
  );
  const H3 = ({ children }) => (
    <h3 className={"font-medium text-lg lg:text-3xl mt-8"}>{children}</h3>
  );
  const H4 = ({ children }) => (
    <h4 className={"font-medium text-lg lg:text-2xl mt-8 mb-8"}>{children}</h4>
  );
  const H5 = ({ children }) => (
    <h5 className={"font-medium text-lg lg:text-xl mt-8 mb-8"}>{children}</h5>
  );
  const H6 = ({ children }) => (
    <h6 className={"font-medium text-lg lg:text-lg mt-8 mb-8"}>{children}</h6>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [MARKS.CODE]: (text) => (
        <SyntaxHighlighter
          style={monokai}
          showLineNumbers
          customStyle={{
            fontFamily: `Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace`,
          }}
        >
          {text}
        </SyntaxHighlighter>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x) => x.type === "code")
        ) {
          return (
            <div className={"overflow-auto w-full max-w-[100%] mt-3 mb-5"}>
              {children}
            </div>
          );
        }
        return <p className={"lg:text-lg tracking-wider"}>{children}</p>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const contentfulId = node.data.target.sys.id;
        const imageData = references.find(
          (r) => r.contentful_id === contentfulId
        );
        const image: IGatsbyImageData = getImage(imageData.gatsbyImageData);
        return (
          <GatsbyImage image={image} className={"mt-8 mb-8"} alt={"any"} />
        );
      },
    },
  };
  return (
    <React.Fragment>
      {documentToReactComponents(richTextDocument, options)}
    </React.Fragment>
  );
}
