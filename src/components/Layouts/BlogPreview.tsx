import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import Link from '@material-ui/core/Link';
import Excerpt from '../Utils/Excerpt';
import BlogPostPreviewMisc from '../Utils/BlogPostPreviewMisc';
import { POST } from '../../Types';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: `Montserrat, 'sans-serif'`, 
    fontWeight: 'bold'
  }
}));

interface Props {
  data: POST
}

export default function BlogPreview({ data }: Props) {
  const { title, date, content, slug } = data;
  let excerpt = JSON.parse(content.raw).content.find(obj => obj.nodeType === "paragraph").content[0].value;
  const classes = useStyles();
  return (
    <React.Fragment>
      <img src={`https://${data.image.file.url}`} width="100%" height="200px" alt={`${data.title} Main Image`}/>
      <Typography variant={"h5"} className={classes.heading}>{title}</Typography>
      <BlogPostPreviewMisc date={date} content={content.raw} />
      <Excerpt excerpt={excerpt} />
      <Typography variant={"body2"}>
        <Link href={`/blog/${slug}`}>
          Read More →
        </Link>
      </Typography>
    </React.Fragment>
  )
}
