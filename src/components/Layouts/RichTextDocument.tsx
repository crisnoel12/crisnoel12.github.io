import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeStyles, Typography } from '@material-ui/core';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    width: '100%',
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(1.5)}px`
  },
  h2: {
    fontSize: theme.spacing(4),
    paddingLeft: '10px',
    borderLeft: `5px solid ${theme.palette.primary.main}`
  },
  h3: {
    fontSize: theme.spacing(3),
    marginBottom: theme.spacing(0.5)
  },
  paragraph: {
    maxWidth: '100%',
    width: '100%',  
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    letterSpacing: '.05em'
  },
  bold: {
    fontWeight: 'bold',
    whiteSpace: 'pre-wrap'
  },
  code: {
    whiteSpace: 'pre-wrap',
  }
}));

export default function RichTextDocument({ richTextDocument, references }) {
  const classes = useStyles();
  const Bold = ({ children }) => <span className={classes.bold}>{children}</span>;

  const H1 = ({ children }) => <Typography variant={"h1"} className={classes.subtitle}>{children}</Typography>;
  const H2 = ({ children }) => <Typography variant={"h2"} className={`${classes.subtitle} ${classes.h2}`}>{children}</Typography>;
  const H3 = ({ children }) => <Typography variant={"h3"} className={`${classes.subtitle} ${classes.h3}`}>{children}</Typography>;
  const H4 = ({ children }) => <Typography variant={"h4"} className={classes.subtitle}>{children}</Typography>;
  const H5 = ({ children }) => <Typography variant={"h5"} className={classes.subtitle}>{children}</Typography>;
  const H6 = ({ children }) => <Typography variant={"h6"} className={classes.subtitle}>{children}</Typography>;

  const Text = ({ children }) => <Typography variant={"body1"} className={classes.paragraph}>{children}</Typography>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.CODE]: text => (
        <Text>
          <SyntaxHighlighter 
            style={monokai} 
            showLineNumbers
            customStyle={{
              fontFamily: `Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace`,
            }}
          >
            {text}
          </SyntaxHighlighter>
        </Text>
      )
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const contentfulId = node.data.target.sys.id;
        const imageURL = `https://${references.find(r => r.contentful_id === contentfulId).fluid.src}`
        return (
          <>
            <img width="100%" src={imageURL} />
          </>
        )
      },
    }
  };
  return (
    <React.Fragment>
      {documentToReactComponents(richTextDocument, options)}
    </React.Fragment>
  )
}
