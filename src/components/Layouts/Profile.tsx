import {
  makeStyles,
  Grid,
  Avatar,
  Typography,
  IconButton,
  Paper,
  Divider,
  Button,
  useTheme,
  Hidden,
  Link
} from "@material-ui/core";
import React from "react";
import AvatarPicture from "../../images/profile_picture.jpg";
import Logo from "../../images/cn-logo.png";
import LogoBlack from "../../images/cn-logo-black.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import ThemeSwitch from "../ThemeSwitch";

const useStyles = makeStyles((theme) => ({
  profileSection: {
    textAlign: "center",
    height: "100vh",
    padding: '1rem',
    [theme.breakpoints.up("md")]: {
      padding: 0,
      position: "fixed",
      borderRight: `3px solid black`,
    },
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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  about: {
    marginTop: theme.spacing(2),
  },
  cardRoot: {
    height: '100%',
    padding: theme.spacing(0.2)
  },
  logoContainer: {
    textAlign: 'left', 
    display: 'flex', 
    alignItems: 'center'
  },
  themeSwitchContainer: {
    textAlign: 'right'
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`
  },
  resume: {
    marginTop: theme.spacing(2)
  }
}));

export default function Profile({ themeMode, changeMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper square={true} elevation={0}>
      <Grid item xs={12} md={5} lg={3} className={classes.profileSection}>
        <Paper square={true} elevation={0} classes={{ root: classes.profileSectionPaper}}>
          <Grid container>
            <Grid item xs={6} className={classes.logoContainer}>
              <Link href={"/"}>
                <img src={theme.palette.type === "light" ? LogoBlack : Logo} />
              </Link>
            </Grid>
            <Grid item xs={6} className={classes.themeSwitchContainer}>
              <Hidden mdUp>
                <ThemeSwitch themeMode={themeMode} handleChangeMode={changeMode} />
              </Hidden>
            </Grid>
          </Grid>
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
          <Divider className={classes.divider} />
          <Typography className={classes.about}>
            What's up, I'm Cris and I'm a Software Engineer currently based in Los
            Angeles, CA. I have a passion for building websites and learning more
            about new frameworks and languages that I haven't mastered yet. I'm well
            versed in both front-end and back-end development. I'm currently
            accepting freelance work, if you're in need of a website, I'm your guy,
            feel free to Contact me.
          </Typography>
          <Link
            target="_blank"
            rel="noopener"
            href={process.env.RESUME}
          >
            <Button
              color={"secondary"}
              variant={"contained"}
              fullWidth
              className={classes.resume}
            >
              View Resume
            </Button>
          </Link>
          <Divider className={classes.divider} />
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
    </Paper>
  );
}
