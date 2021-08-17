import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import { POST } from '../../Types';
import HeaderLine from '../../components/Utils/HeaderLine';
import MainContainer from '../../components/Layouts/MainContainer';
import PageHelmet from '../../components/Utils/PageHelmet';
import RichTextDocument from '../../components/Layouts/RichTextDocument';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing(10)}px`
  },
  title: {
    fontSize: '3rem',
    width: '100%'
  },
  date: {
    marginBottom: theme.spacing(2),
    fontStyle: 'italic'
  },
  heroImg: {
    marginBottom: theme.spacing(2)
  }
}));

export default function Post({ data }) {
  const { id, slug, title, date, image, content } = data.contentfulPost as POST;
  const classes = useStyles();
  return (
    <MainContainer>
      <PageHelmet 
        title={`Cris Noel | ${title}`}
        href={`${process.env.DOMAIN}/blog/${slug}`}
      />
      <Grid container className={classes.root}>
        <Typography variant={"h1"} gutterBottom className={classes.title}>{title}</Typography>
        <Grid item xs={12}><HeaderLine /></Grid>
        <Typography variant={"body2"} className={classes.date}>{date}</Typography>
        <img width="100%" src={`https://${image.file.url}`} className={classes.heroImg} />
        <RichTextDocument richTextDocument={JSON.parse(content.raw)} references={content.references} />
      </Grid>
    </MainContainer>
  )
}

export const postQuery = graphql`
  query($id: String!){
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
