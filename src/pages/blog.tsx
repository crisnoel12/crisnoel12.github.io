import { Button, Card, Grid, Typography, Link, makeStyles } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import MainContainer from '../components/Layouts/MainContainer'
import BlogPostPreviewMisc from '../components/Utils/BlogPostPreviewMisc'
import Excerpt from '../components/Utils/Excerpt'
import HeaderLine from '../components/Utils/HeaderLine'

const useStyles = makeStyles((theme) => ({
}));

const BlogPage = ({ data }) => {
  const classes = useStyles();
  const posts = data.allContentfulPost.nodes;
  return (
    <MainContainer>
      <Typography variant={"h3"} gutterBottom>Blog</Typography>
      <HeaderLine />
      <Grid container spacing={4}>
        {posts.map(post => {
          const { title, date, image, content, slug } = post;
          let excerpt = JSON.parse(post.content.raw).content.find(obj => obj.nodeType === "paragraph").content[0].value;
          return (
            <Grid item xs={6} lg={4}>
              <Card style={{ height: '100%', padding: '16px 16px 0', textAlign: "center"}}>
                <img width="100%" height="180px" src={`https://${image.file.url}`} />
                <Typography variant={"h5"}>{title}</Typography>
                <BlogPostPreviewMisc date={date} content={content.raw} />
                <Excerpt excerpt={excerpt} />
                <Link href={`/blog/${slug}`}>
                  <Button variant={"contained"} color={"primary"} >
                    <Typography>Read More</Typography>
                  </Button>
                </Link>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </MainContainer>
  )
}

export default BlogPage;

export const query = graphql`
  query allBlogData {
    allContentfulPost(sort: {fields: date, order: DESC}) {
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
`