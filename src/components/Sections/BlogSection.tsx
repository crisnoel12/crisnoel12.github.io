import { Grid, Button, makeStyles, Link } from '@material-ui/core'
import React from 'react'
import BlogPreview from '../BlogPreview'
import HomePageSection from '../Layouts/HomePageSection'

const useStyles = makeStyles((theme) => ({
  viewAllBtn: {
    margin: `${theme.spacing(4)}px 0 0`
  }
}));

export default function BlogSection({ posts }) {
  const classes = useStyles();
  return (
    <HomePageSection title={"Blog"}>
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid item xs={12} md={6} lg={4}>
            <BlogPreview data={post} />
          </Grid>
        ))}
      </Grid>
      <Link href={"/blog"}>
        <Button className={classes.viewAllBtn} color={"primary"} variant={"contained"} fullWidth>View All</Button>
      </Link>
    </HomePageSection>
  )
}
