import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    linkStyle: {
        textDecoration: "none",
        color: "white"
    }
}));

export default function LargeNavbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Andrew Cabrera
                    </Typography>
                    <Link to="/" className={classes.linkStyle}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/Technologies" className={classes.linkStyle}>
                        <Button color="inherit">Technologies</Button>
                    </Link>
                    <Link to="/Resume" className={classes.linkStyle}>
                        <Button color="inherit">Resume</Button>
                    </Link>
                    <Link to="/Projects" className={classes.linkStyle}>
                        <Button color="inherit">Projects</Button>
                    </Link>
                    <Link to="/Contact" className={classes.linkStyle}>
                        <Button color="inherit">Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}