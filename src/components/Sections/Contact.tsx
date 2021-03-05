import { Button, Grid, makeStyles, Snackbar, TextField } from '@material-ui/core'
import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import HomePageSection from '../Layouts/HomePageSection';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(1),
    borderBottom: 0
  },
  buttonGroup: {
    marginTop: theme.spacing(1),
    textAlign: 'right'
  },
  map: {
    width: '100%',
    height: '375px'
  },
  sendBtn: {
    marginRight: theme.spacing(1)
  },
  resetBtn: {
    borderColor: `${theme.palette.type === 'light' ? theme.palette.common.black: 'white'}`,
    color: `${theme.palette.type === 'light' ? theme.palette.common.black: 'white'}`,
    '&:hover': {
      borderColor: `${theme.palette.type === 'light' ? theme.palette.common.black: 'white'}`,
      backgroundColor: `${theme.palette.type === 'light' ? theme.palette.common.black: 'white'}`,
      background: theme.palette.secondary.main,
      color: `${theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.common.black}`
    }
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: null
  });
  const [showSnackBar, setShowSnackBar] = React.useState(false);

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) handleReset();
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/mleoygvo",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Message sent successfully!");
        setShowSnackBar(true);
      })
      .catch(r => {
        handleServerResponse(false, "There was an error trying to submit your request.");
        setShowSnackBar(true);
      });
  };

  const handleReset = () => {
    setInputs({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <HomePageSection title={"Contact"} divider={false}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={7}>
        <form onSubmit={handleOnSubmit} noValidate autoComplete="off">
          <TextField 
            id="name"
            name="name"
            label="NAME" 
            onChange={handleOnChange}
            value={inputs.name} 
            className={classes.textField}
            fullWidth 
            variant="filled" 
            required 
            InputProps={{
              // className: isDarkMode ? classes.inputDark : classes.input,
            }}
          />
          <TextField 
            id="email"
            name="email"
            type="email"
            label="E-MAIL"
            onChange={handleOnChange}
            value={inputs.email}
            className={classes.textField} 
            fullWidth 
            variant="filled" 
            required 
            InputProps={{
              // className: isDarkMode ? classes.inputDark : classes.input,
            }}
          />
          <TextField 
            id="message"
            name="message"
            label="MESSAGE"
            onChange={handleOnChange}
            value={inputs.message}
            className={classes.textField} 
            fullWidth 
            variant="filled" 
            multiline={true}
            rows={8}
            required
            InputProps={{
              // className: isDarkMode ? classes.inputDark : classes.input,
            }}
          />
          <div className={classes.buttonGroup}>
            <Button 
              startIcon={<SendIcon />} 
              color={"primary"} 
              variant={"contained"} 
              size={"large"}
              className={classes.sendBtn}
              type="submit"
              disabled={serverState.submitting}
            >
              {!serverState.submitting ? 'SEND' : <CircularProgress size={20} />}
            </Button>
            <Button 
              startIcon={<RotateLeftIcon />} 
              color={"secondary"} 
              variant={"outlined"} 
              size={"large"}
              className={classes.resetBtn}
              onClick={handleReset}
            >
              RESET
            </Button>
          </div>
        </form>
        </Grid>
        <Grid item  xs={12} lg={5}>
          <iframe 
            id="map"
            frameborder="0"
            className={classes.map}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDV2mJDjLBrrPdVGXSr0ajaV2WBSMwB_HI
              &q=Los+Angeles&maptype=satellite" allowfullscreen>
          </iframe>
        </Grid>
      </Grid>
      <Snackbar 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={showSnackBar} 
        autoHideDuration={3000} 
        onClose={() => setShowSnackBar(false)}
      >
        <Alert onClose={() => setShowSnackBar(false)} severity={showSnackBar && serverState.status.ok ? 'success' : 'error'}>
          {showSnackBar && serverState.status.msg}
        </Alert>
      </Snackbar>
    </HomePageSection>
  )
}
