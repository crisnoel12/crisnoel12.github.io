import * as React from "react";
import { Paper, Typography, Link, Grid, Button, makeStyles } from "@material-ui/core";
import MainContainer from "../components/Layouts/MainContainer";


const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 201px)'
  }
}));
// markup
const NotFoundPage = () => {
  return (
    <MainContainer>
      <Grid container justify={"center"} style={{ height: 'calc(100vh - 201px)'}}>
        <div style={{ textAlign: 'center' }}>
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
