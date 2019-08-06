import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SnoozeIcon from '@material-ui/icons/Snooze';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: 'none',
        background: 'transparent'
    },
    appBarColorDefault: {
        color: "cyan",
    },
    iconSection: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function HeaderBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar classes={{
                colorDefault: classes.appBarColorDefault
            }} className={classes.appBar} position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        ArXman
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.iconSection}>
                        <IconButton aria-label="bookmark" color="inherit">
                            <BookmarkIcon />
                        </IconButton>
                        <IconButton aria-label="snooze" color="inherit">
                            <SnoozeIcon />
                        </IconButton>
                        <IconButton aria-label="dashboard" color="inherit">
                            <DashboardIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
