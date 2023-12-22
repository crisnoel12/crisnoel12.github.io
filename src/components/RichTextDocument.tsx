import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Document,
  Text,
  Node,
  BLOCKS,
  MARKS,
  Mark,
} from "@contentful/rich-text-types";

interface Props {
  richTextDocument: Document;
  references: any;
}

export default function RichTextDocument({
  richTextDocument,
  references,
}: Props) {
  const Bold = ({ children }: any) => (
    <span className={"font-medium"}>{children}</span>
  );

  const H1 = ({ children }: any) => (
    <h1 className={"font-medium text-lg lg:text-5xl mt-8 mb-8"}>{children}</h1>
  );
  const H2 = ({ children }: any) => (
    <h2
      className={`${"font-medium text-lg lg:text-4xl mt-8 mb-8"} ${"subtitle"}`}
    >
      {children}
    </h2>
  );
  const H3 = ({ children }: any) => (
    <h3 className={"font-medium text-lg lg:text-3xl mt-8"}>{children}</h3>
  );
  const H4 = ({ children }: any) => (
    <h4 className={"font-medium text-lg lg:text-2xl mt-8 mb-8"}>{children}</h4>
  );
  const H5 = ({ children }: any) => (
    <h5 className={"font-medium text-lg lg:text-xl mt-8 mb-8"}>{children}</h5>
  );
  const H6 = ({ children }: any) => (
    <h6 className={"font-medium text-lg lg:text-lg mt-8 mb-8"}>{children}</h6>
  );

  const options: any = {
    renderMark: {
      [MARKS.BOLD]: (text: Text) => <Bold>{text}</Bold>,
      [MARKS.CODE]: (text: any) => (
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
      [BLOCKS.HEADING_1]: (node: Text, children: any) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node: Text, children: any) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node: Text, children: any) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node: Text, children: any) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node: Text, children: any) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node: Text, children: any) => <H6>{children}</H6>,
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x: Mark) => x.type === "code")
        ) {
          return (
            <div className={"overflow-auto w-full max-w-[100%] mt-3 mb-5"}>
              {children}
            </div>
          );
        }
        return <p className={"lg:text-lg tracking-wider"}>{children}</p>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: Node, children: any) => {
        const contentfulId = node.data.target.sys.id;
        const imageData = references.find(
          (r: any) => r.contentful_id === contentfulId
        );
        const image: IGatsbyImageData =
          imageData && getImage(imageData.gatsbyImageData);
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
