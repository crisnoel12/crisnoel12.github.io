import * as React from "react";
import { Paper, Typography, Link, Grid, Button, makeStyles } from "@material-ui/core";
import MainContainer from "../components/Layouts/MainContainer";
import Helmet from "react-helmet";


const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 201px)'
  },
  center: {
    textAlign: 'center'
  }
}));
// markup
const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <MainContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cris Noel | 404</title>
        <link rel="canonical" href={`${process.env.DOMAIN}/404`} />
      </Helmet>
      <Grid container justify={"center"} className={classes.root}>
        <div className={classes.center}>
          <iframe 
            title={"404"} 
            src="https://giphy.com/embed/VwoJkTfZAUBSU" 
            width="332" 
            height="470" 
            frameBorder="0"
            allowFullScreen
          >
          </iframe>
          <Typography>
            <Link
              href="https://giphy.com/gifs/89a-eightninea-VwoJkTfZAUBSU"
            >
              via GIPHY
            </Link>
          </Typography>
          <Link href={"/"}>
            <Button variant={"outlined"} color={"primary"}>
              <Typography>Return Home</Typography>
            </Button>
          </Link>
        </div>
      </Grid>
    </MainContainer>
  )
}

export default NotFoundPage
