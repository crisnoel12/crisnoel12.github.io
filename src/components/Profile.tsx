import {
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Card,
  IconButton,
  Paper,
  Divider,
  Button
} from "@material-ui/core";
import React from "react";
import AvatarPicture from "../images/profile_picture.jpg";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  profileSection: {
    textAlign: "center",
    height: "100vh",
    position: "fixed",
    borderRight: `3px solid black`,
  },
  profileSectionPaper: {
    padding: theme.spacing(4),
    height: "100%",
  },
  avatarContainer: {
    justifyContent: "center",
    display: "flex",
  },
  avatarPicture: {
    marginTop: theme.spacing(10),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  about: {
    marginTop: theme.spacing(2),
  },
  cardRoot: {
    height: '100%',
    padding: theme.spacing(0.2)
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3} className={classes.profileSection}>
      <Paper square={true} classes={{ root: classes.profileSectionPaper}}>
        <div className={classes.avatarContainer}>
          <Avatar
            alt="Cris Cancino"
            src={AvatarPicture}
            className={classes.avatarPicture}
          />
        </div>
        <Typography variant="h4" gutterBottom>
          Cris N. Cancino
        </Typography>
        <Divider />
        <Typography className={classes.about}>
          What's up, I'm Cris and I'm a Software Engineer currently based in Los
          Angeles, CA. I have a passion for building websites and learning more
          about new frameworks and languages that I haven't mastered yet. I'm well
          versed in both front-end and back-end development. I'm currently
          accepting freelance work, if you're in need of a website, I'm your guy,
          feel free to Contact me.
        </Typography>
        <Button
          color={"secondary"}
          variant={"contained"}
          fullWidth
          style={{ marginTop: '8px', marginBottom: '8px' }}
        >
          Download Resume (.PDF)
        </Button>
        <Divider />
        <IconButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/crisncancino/", "_blank")
          }
        >
          <LinkedInIcon color="primary"  />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://github.com/crisnoel12", "_blank")}
        >
          <GitHubIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => window.open("mailto:crisncancino@gmail.com", "_blank")}
        >
          <EmailIcon color="primary" />
        </IconButton>
      </Paper>
    </Grid>
  );
}
