import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import HeaderBar from "./appBar";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: theme.spacing(103),
        background: "black",
        height: "-webkit-fill-available"
    },
    rootSecond: {
        border: 0,
        height: theme.spacing(80),
        backgroundImage: "url(https://i.ibb.co/5c80qbr/header-1-0-5x.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 65%",
    },
    main: {
        color: "aliceblue",
        margin: "64px 0px 64px 0px",
        height: theme.spacing(30),
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rootSecond}>
          <header>
              <HeaderBar/>
          </header>
          <main className={classes.main}>
              <Typography variant="h4" align="center" gutterBottom>
                  Ariman's home page for Experiment Creations
              </Typography>
              <Typography variant="subtitle2" align="center" gutterBottom>
                  There is nothing more than some experimental tools, don't be seriously, they are just toys
              </Typography>
          </main>
        <div>{children}</div>
        <footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
