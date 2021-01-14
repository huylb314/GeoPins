import React, { useContext } from "react";
import { GoogleLogout } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";

import Context from '../../context';

const Signout = ({ classes }) => {
  const { dispatch } = useContext(Context)

  const onSignout = () => {
    dispatch({ type: "SIGNOUT_USER" })
    console.log("Signed out user")
  }

  const onFailure = () => {
    console.error("Signed fail")
  }
 
  return (
    <GoogleLogout 
      clientId="997299897498-bl5k6cvk34ejltr23oakfj0dp4g25i24.apps.googleusercontent.com"
      onLogoutSuccess={onSignout}
      onFailure={onFailure}
      render={({ onClick }) => (
        <span className={classes.root} onClick={onClick}>
          <Typography
            variant="body1"
            className={classes.buttonText}
          >
            Signout
          </Typography>
          <ExitToAppIcon className={classes.buttonIcon}/>
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "orange"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "orange"
  }
};

export default withStyles(styles)(Signout);