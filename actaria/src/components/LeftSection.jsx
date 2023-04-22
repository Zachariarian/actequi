import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MonitizationOn from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { withRouter } from 'react-router-dom';

const styles = theme => createStyles({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        padding: 20,
        height: "100vh",
        borderRadius: 1,
        textAlign: "center"
    },
    appName: {
        fontFamily: "Baloo",
        color: "inherit"
    },
    whyUs: {
        fontFamily: "Baloo",
        color: "inherit",
    },
    icon: {
        verticalAlign: "-10%",
        fontSize: 30
    },
    nav: {
        padding: 7,
    },
    navLink: {
        color: "inherit",
        borderColor: theme.palette.primary.main,
        borderRadius: "30px",
        borderWidth: 2,
        width: 150,
        '&:hover' : {
            color: theme.palette.primary.main,
            backgroundColor: "white"
        }
    },
    navActive: {
        borderColor: "white"
    },
    divider: {
        backgroundColor: "whitesmoke",
        opacity: .4
    }
});

const navs = [
    {
        name: "Predictor",
        link: "predict"
    },
    {
        name: "Apply",
        link: "apply"
    },
    {
        name: "My Overdraft",
        link: "overdraft"
    },
    {
        name: "Signup/Login",
        link: "signup"
    }
];

const whyUs = [
    "With a higher demand for overdraft facilities among a huge Kenyan population, we aim to come up with an Equity Overdraft facility to offer instant overdraft to our clients. The product will be available to all Equity customers with active bank accounts.",
    "The product will be open to individuals and SMEs.",
];

const LeftSection = (props) => {
    const {classes} = props;
    let path = props.location.pathname.substr(1);
    if(path === "")
        props.history.push("predict");

    return (
        <Paper className={classes.root}>
            <Typography component="h3" variant="h3" className={classes.appName}>
                E<MonitizationOn className={classes.icon}/>quidraft
            </Typography>
            {
                navs.map((nav, index) => {
                    return (
                        <div className={classes.nav} key={index}>
                            <Button variant="outlined" color="primary" className={classes.navLink + " " + (path === nav.link ? classes.navActive : "")} onClick={() => props.history.push(nav.link)}>
                                {nav.name}
                            </Button>
                        </div>
                    );
                })
            }

            <br/>
            <Divider className={classes.divider}/>
            <br/>
            <Typography component="h5" variant="h5" className={classes.whyUs}>
                Why choose Equidraft?
            </Typography>
            <br/>
            {
                whyUs.map((data, index) => {
                    return (
                        <div key={index}>
                            <Typography component="h6" variant="h6" color={"inherit"}>
                                { data }
                            </Typography>
                            <br/>
                        </div>
                    );
                })
            }
        </Paper>
    );
};

export default withRouter(withStyles(styles)(LeftSection));