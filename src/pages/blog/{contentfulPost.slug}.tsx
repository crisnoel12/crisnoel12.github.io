import React from 'react';
import { graphql } from 'gatsby';
import MainContainer from '../../components/Layouts/MainContainer';
import { Grid, Typography } from '@material-ui/core';
import HeaderLine from '../../components/Utils/HeaderLine';
import RichTextDocument from '../../components/Layouts/RichTextDocument';
import Helmet from 'react-helmet';

export default function Post({ data }) {
  const { id, slug, title, date, image, content } = data.contentfulPost;
  return (
    <MainContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Cris Noel | ${title}`}</title>
        <link rel="canonical" href={`${process.env.DOMAIN}/blog/${slug}`} />
      </Helmet>
      <Grid container style={{ padding: '0px 80px'}}>
        <Typography variant={"h1"} gutterBottom style={{ fontSize: '3rem', width: '100%'}}>{title}</Typography>
        <Grid item xs={12}><HeaderLine /></Grid>
        <Typography variant={"body2"} style={{ marginBottom: '16px', fontStyle: 'italic' }}>{date}</Typography>
        <img width="100%" src={`https://${image.file.url}`} style={{ marginBottom: '16px' }} />
        <RichTextDocument richTextDocument={JSON.parse(content.raw)} references={content.references} />
      </Grid>
    </MainContainer>
  )
}

export const postQuery = graphql`
  query post($id: String!){
    contentfulPost(id: { eq: $id }){
      id
      slug
      title
      date(formatString: "MMMM Do, YYYY")
      image {
        file {
          url
        }
      }
      content{
        raw
        references {
          contentful_id
          id
          fluid {
            src
          }
        }
      }
    }
  }
`
